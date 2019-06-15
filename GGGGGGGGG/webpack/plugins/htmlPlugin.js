const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  'calendar': 'Calendar',
  'google-maps': 'Farmer Location',
  'vector-maps': 'Crops',
  'buyingPage' : 'Buy',
  'farmers' : 'Farmers',
  'login' : 'Login',
  'shoppingCart' : 'Cart',
  'home':'Home',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: false,
      minifyJS: false,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
