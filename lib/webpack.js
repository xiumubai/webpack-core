const Compiler = require('./compiler');

function webpack(config) {
  let compiler = new Compiler();
  return compiler;
}

module.exports = webpack;
