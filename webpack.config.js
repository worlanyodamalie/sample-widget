const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutDir = './dist';

module.exports = (env) => {
    return [
        {
            entry: './src/index.js',
            output: {
                filename: 'sample-widget.js',
                path: path.resolve(bundleOutDir)
            },
            devServer: {
                contentBase: bundleOutDir
            },
            plugins: [new webpack.SourceMapDevToolPlugin() , new copyWebpackPlugin({ 
                patterns: [
                 {from: 'demo/' , to: bundleOutDir}
            ]  
        })]
        }
    ]
} ;