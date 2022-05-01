const Compiler = require('./compiler');

function webpack(config) {
  // 获取shell中的参数
  let shellOptions = process.argv.slice(2).reduce((config, args) => {
    let [key, value] = args.split('='); // --mode developemnt
    config[key.slice(2)] = value; // {"mode": "developemnt"}
    return config;
  }, {});

  console.log(shellOptions); // {"mode": "developemnt"}

  let compiler = new Compiler();
  return compiler;
}

module.exports = webpack;
