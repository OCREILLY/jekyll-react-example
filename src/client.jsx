import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createInitialBrowserRouter } from 'found';

import router from './router';
import WithStylesContext from './components/WithStylesContext';

// 開発時はプレレンダリングCSSを外す
const callbackForDevelopment = () => {
  const prerenderCSS = document.querySelector('style[data-ssr]');
  if (process.env['NODE_ENV'] !== 'production' && prerenderCSS) {
    prerenderCSS.remove();
  }
};

const render = router => {
  return createInitialBrowserRouter(router).then(BrowserRouter => {
    ReactDOM.hydrate(
      <AppContainer>
        <WithStylesContext onInsertCss={styles => styles._insertCss()}>
          <BrowserRouter />
        </WithStylesContext>
      </AppContainer>,
      document.getElementById('root'),
      callbackForDevelopment
    );
  });
};

render(router).catch(err => console.error(err.stack || err));

if (module.hot) {
  module.hot.accept('./router', () => {
    render(router).catch(err => console.error(err.stack || err));
  });
}
