require('dotenv').config();
const path = require('path');
const { whenProd, whenDev } = require('@craco/craco');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const routes = require('./src/routes');

module.exports = {
  babel: {
    plugins: [...whenDev(() => ['babel-plugin-styled-components'], [])],
  },
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
    plugins: [...whenProd(prerender, [])],
  },
};

function prerender() {
  if (process.env.PRERENDER !== 'true') return [];

  const routesToPrerender = routes
    .filter((route) => !~route.path.indexOf(':'))
    .map((route) => (route.path === '*' ? '/404' : route.path));

  return [
    new PrerenderSPAPlugin({
      routes: routesToPrerender,
      staticDir: path.join(__dirname, 'build'),
      renderer: new Renderer({
        injectProperty: '__PRERENDER__',
        inject: true,
      }),
    }),
  ];
}
