const { resolve } = require('path');
const fs = require('fs');
const paths = require('./paths');

const useBabelLoader = {
    loader: 'babel-loader',
    options: JSON.parse(fs.readFileSync(paths.babelrc)),
};

module.exports = {
    useBabelLoader,
};
