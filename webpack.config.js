var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread', 'syntax-dynamic-import']
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GrillMaster',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  watchOptions: {
    poll: true
  }
}