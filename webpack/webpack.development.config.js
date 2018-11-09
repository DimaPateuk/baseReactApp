const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const paths = require('./paths');

const config = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: paths.HtmlWebpackPluginTemplate,
        }),
        new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
            analyzerPort: 7777,
            openAnalyzer: false,
            statsOptions: {
                source: false,
                showPublicPath: true,
            },
        }),
    ],
};

module.exports = webpackMerge(base, config);