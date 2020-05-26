const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src/client');

console.log('--------------------Build was started for: ', process.env.NODE_ENV, '--------------------');
const isProd = process.env.NODE_ENV === 'production';

const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        main: APP_DIR + '/index.js'
    },
    devServer: isProd ? {} : {
        compress: true,
        port: 9000
    },
    devtool: !isProd && 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    module: {
        rules: [
            {
                test: /(\.css|.scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015'] // Transpiles JSX and ES6
                    }
                }]
            }
        ],

    }
};

module.exports = config;