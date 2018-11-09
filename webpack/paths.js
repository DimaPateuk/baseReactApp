const { resolve, join } = require('path');
const paths = {};

paths.src = resolve(__dirname, '../src');
paths.store = join(__dirname, 'store.js');
paths.entryIndex = join(paths.src, 'index.js');
paths.dist = join(paths.src, 'dist');
paths.prodDist = join(paths.src, 'prodDist');
paths.customLoaders = resolve(__dirname, 'loaders');
paths.babelrc = resolve(__dirname, '../.babelrc');
paths.HtmlWebpackPluginTemplate = resolve(__dirname, 'HtmlWebpackPluginTemplate.html');


module.exports = paths;
