const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutDir = './dist';
 
module.exports = (env) => {
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
    console.log('Production: ', env.production); // true

    return [
        {
            mode: 'development' ,
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
                        {from: 'demo/' , to: path.resolve(bundleOutDir)}
                        ]  
                    })     
            ],
            module: {
                rules: [
                    { test: /\.html$/i, use: 'html-loader' },
                    { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                    {
                        test: /\.js$/i, exclude: /node_modules/, use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/env' , {
                                    'targets' : {
                                       'browsers' : ['ie 6' , 'safari 7'] 
                                    }
                                }]]
                            }

                        }
                    }
                    
                ]
            }

        }
    ]
} ;