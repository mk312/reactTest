const webpack = require('webpack');
const path = require('path');

console.log('--------------------Build was started for: ', process.env.NODE_ENV, '--------------------');
const isProd = process.env.NODE_ENV === 'production';

const BUILD_DIR = path.resolve(__dirname, (isProd ? './build' : './src/public_dev'));
const APP_DIR = path.resolve(__dirname, './src/client');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        main: APP_DIR + '/index.js'
    },
    devServer: isProd ? {} : {
        compress: true,
        port: 9000,
        contentBase: BUILD_DIR,
    },
    devtool: !isProd && 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /(\.css|.scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    options: {
                        esModule: true,
                    },
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: true,
                    },
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
                        presets: ['react', 'es2015'], // Transpiles JSX and ES6
                        plugins: [
                            [require('babel-plugin-transform-object-rest-spread')],
                        ]
                    }
                }]
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                   name: '[name].[ext]'
                }
            }
        ],

    }
};

module.exports = config;