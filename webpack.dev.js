// We need to merge common webpack configuration
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name].[ext]'
  },
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      // Load react component css
      {
        test: /\.css$/,
        use:[
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
})