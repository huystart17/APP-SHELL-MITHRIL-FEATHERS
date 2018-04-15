let path = require("path");
const webpack = require("webpack");

var Visualizer = require('webpack-visualizer-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

//let mix = require('laravel-mix').mix;
//mix.sass('public/css/style.scss', 'build/release/public/css/style.css');

module.exports = {
    entry: {
        index: "./client/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "public/dist/"),
    },
    plugins: [
        new HardSourceWebpackPlugin(),

        new Visualizer({
            filename: "./statistics.html"
        })
    ],
    mode: "development",

};
