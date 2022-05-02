const path = require('path');
const RunPlugin = require('./lib/plugins/runPlugin');
const DonePlugin = require('./lib/plugins/DonePlugin');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  // entry: {
  //   foo: './src/foo.js',
  //   bar: './src/bar.js',
  // },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  plugins: [new RunPlugin(), new DonePlugin()],
  modules: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve(__dirname, 'lib/loaders', 'loader1.js'),
          path.resolve(__dirname, 'lib/loaders', 'loader2.js'),
        ],
      },
    ],
  },
};
