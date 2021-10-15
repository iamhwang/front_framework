const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/_page/index.jsx'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
