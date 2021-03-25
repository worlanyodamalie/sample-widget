const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const bundleOutDir = './dist';
 
module.exports = (env) => {
    
    return [
        {
            mode: 'development' ,
            devtool: 'eval-source-map',
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
                    }),
                    new Dotenv(
                        {
                            path: path.resolve('.env.local')
                        }
                    ) 
                       
            ],
            module: {
                rules: [
                    { test: /\.html$/i, use: 'html-loader' },
                    { test: /\.css$/i, use: ['style-loader', 'css-loader' ] },
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