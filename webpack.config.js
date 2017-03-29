
// Webpack config file
module.exports = {
  entry: './views/test.js',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js',
    publicPath:'assets'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
};
