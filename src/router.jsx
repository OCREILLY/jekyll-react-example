import React from 'react';
import * as StaticContainer from 'react-static-container';
import { ElementsRenderer, HttpError, createRender, makeRouteConfig, Route } from 'found';
import { createBasenameMiddleware } from 'farce';
import ExecutionEnvironment from 'exenv';
import axios from 'axios';

import Base from './_layouts/_base';
import Home from './_layouts/home';
import Page from './_layouts/page';
import Post from './_layouts/post';

const isServer = !ExecutionEnvironment.canUseDOM;
const isDevelopment = process.env['NODE_ENV'] !== 'production';

const mockJekyllData = () =>
  new Proxy(
    {
      page: new Proxy({}, { get: (_, name) => `{{ page.${name} }}` }),
      posts: Array(5)
        .fill(null)
        .map((_, idx) => {
          return new Proxy({}, { get: (_, name) => `{{ site.posts[${idx}].${name} }}` });
        }),
    },
    { get: (_, name) => (_[name] ? _[name] : `{{ ${name} }}`) }
  );

async function getData({ location }) {
  if (isServer) {
    return mockJekyllData();
  }

  try {
    const { data: doc } = await axios.get(location.pathname, { responseType: 'document' });
    const data = extractData(doc);
    if (!data) {
      throw new HttpError(404);
    }
    return data;
  } catch (err) {
    console.error(err.stack || err);
    throw new HttpError((err.response && err.response.status) || err.status || 404);
  }
}

function extractData(doc) {
  const node = doc.querySelector('script[id="jekyll-data"]');
  if (!node) {
    return false;
  }
  const data = JSON.parse(node.textContent);
  node.remove();
  return data;
}

export default {
  historyMiddlewares: [
    createBasenameMiddleware({
      basename: isDevelopment ? '' : '/jekyll-react-example',
    }),
  ],
  routeConfig: makeRouteConfig(
    <Route path="/" Component={Base}>
      <Route Component={Home} getData={getData} />
      <Route path="about/" Component={Page} getData={getData} />
      <Route path=":year/:month/:day/:title/" Component={Post} getData={getData} />
    </Route>
  ),
  render: createRender({
    renderError: ({ error }) => <div>{error.status === 404 ? 'Not found' : 'Error'}</div>,
    renderPending: () => (
      <div>
        <StaticContainer>{null}</StaticContainer>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'white',
            opacity: 0.75,
          }}
        />
      </div>
    ),
    renderReady: ({ elements }) => (
      <div>
        <StaticContainer shouldUpdate>
          <ElementsRenderer elements={elements} />
        </StaticContainer>
      </div>
    ),
  }),
};
