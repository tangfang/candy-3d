'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'candy-3d',
      template: './src/index.html'
    }),
  ]
};