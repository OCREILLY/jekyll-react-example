import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getFarceResult } from 'found/lib/server';
import EJS from 'ejs';
import fs from 'fs-extra';
import path from 'path';
import WithStylesContext from './components/WithStylesContext';
import TemplateHTML from './template.ejs';
import router from './router';
const render = EJS.compile(TemplateHTML);

const routing = {
  '/': './jekyll/_layouts/home.html',
  '/about/': './jekyll/_layouts/page.html',
  '/:year/:month/:day/:title/': './jekyll/_layouts/post.html',
};

async function renderFromPath(routePath) {
  const { element } = await getFarceResult(Object.assign({ url: routePath }, router));

  const css = new Set();
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <WithStylesContext onInsertCss={styles => css.add(styles._getCss())}>{element}</WithStylesContext>
  );

  return render({
    markup,
    css: [...css].join(''),
  });
}

Promise.all(
  Object.keys(routing).map(async routePath => {
    const filePath = path.resolve(process.cwd(), routing[routePath]);
    if (!await fs.pathExists(path.dirname(filePath))) {
      await fs.mkdirp(path.dirname(filePath));
    }
    await fs.writeFile(filePath, await renderFromPath(routePath), { encoding: 'utf8' });
    console.log(`Written to ${path.relative(process.cwd(), filePath)}`);
  })
).catch(err => {
  console.error(err.stack || err);
  process.exit(255);
});
