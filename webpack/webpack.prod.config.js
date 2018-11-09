const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');
const base = require('./webpack.base.config.js');
const webpackMerge = require('webpack-merge');

const config = {
	devtool: 'hidden-source-map',
    mode: 'production',
	output: {
        path: paths.prodDist,
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
    },
	plugins: [
		new CleanWebpackPlugin([paths.prodDist], {
			allowExternal: true,
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
	],
};

module.exports = webpackMerge(base, config);
