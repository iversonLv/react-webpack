// Common setting for webpack
module.exports = {
  entry: './index.js',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // load images for css
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
      }
    ],
  }
}