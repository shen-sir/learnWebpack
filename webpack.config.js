const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    // app: './src/index.js',
    // print: './src/print.js'
    app: './src/index.js',
    b:'webpack-hot-middleware/client'
  },
  devtool: 'inline-source-map',//inline-source-map仅适用于开发环境
  devServer:{
    contentBase: './dist', //将 dist 目录下的文件，作为可访问文件。
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
   // OccurenceOrderPlugin is needed for webpack 1.x only
  //  new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin(),
   // Use NoErrorsPlugin for webpack 1.x
   new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
};