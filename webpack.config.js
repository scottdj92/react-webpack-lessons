var webpack = require('webpack');
var path = require('path');
//bundle our CSS into one file
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//set up our file paths
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'dist/assets');

//create our configuration file

var config = {
    context: __dirname + '/src',
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    //determine our output
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
    //needed to reach out to node_modules folder for external code if needed
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.css', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            //load our code to be bundled
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loaders: ['babel']
            },
            //different for css, we pull them all into the ExtractTextPlugin
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
};

//export the config so webpack can use it
module.exports = config;
