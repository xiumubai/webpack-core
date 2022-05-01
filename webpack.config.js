const path = require('path');
const RunPlugin = require('./lib/plugins/runPlugin');
const DonePlugin = require('./lib/plugins/DonePlugin');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  plugins: [new RunPlugin(), new DonePlugin()],
};
