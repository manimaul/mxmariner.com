var PROD = JSON.parse(process.env.PROD_ENV || '0');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: {
        app: './App.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../site/gen'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "file-loader"
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })] : [],
    //externals: {
    //    //don't bundle the 'react' npm package with our bundle.js
    //    //but get it from a global 'React' variable
    //    'react': 'React'
    //},
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // }
};

module.exports = config;