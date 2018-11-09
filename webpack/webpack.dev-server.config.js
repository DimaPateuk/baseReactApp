const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const development = require('./webpack.development.config.js');
const paths = require('./paths');

const config = {
    devServer: {
        hot: true,
        inline: true,
        port: 9000,
        contentBase: paths.dist,
        publicPath: '/',
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = webpackMerge(development, config);
