const webpack = require('webpack');

const config = require('./webpack.config');

const compiler = webpack(config);

compiler.run((err, states) => {
  console.log(states.toJson());
});
