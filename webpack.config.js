const path = require('path');
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
};
