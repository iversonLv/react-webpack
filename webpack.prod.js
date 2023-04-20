// We need to merge common webpack configuration
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const path = require('path')

// Optimization
const TerserPlugin = require("terser-webpack-plugin"); // For js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // For css
const HtmlWebpackPlugin = require('html-webpack-plugin') // For html

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'images/[name].[contenthash].[ext]'
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    // remove the files
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
})