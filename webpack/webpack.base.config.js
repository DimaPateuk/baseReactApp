const webpack = require('webpack');
const { useBabelLoader } = require('./utils');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const paths = require('./paths');

module.exports = {
    entry: [
        'whatwg-fetch',
        paths.entryIndex,
    ],
    devtool: 'source-map',
    output: {
        path: paths.dist,
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            src: paths.src,
            store: paths.store,
        },
    },
    resolveLoader: {
        modules: ['node_modules', paths.customLoaders],
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'eslint-loader',
                include: paths.entryIndex,
                enforce: 'pre',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [useBabelLoader],
            },
            {
                test: /\.async$/,
                use: [
                    useBabelLoader,
                    { loader: 'async-loader' },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new AsyncChunkNames(), // issue with index.js
    ]
};
