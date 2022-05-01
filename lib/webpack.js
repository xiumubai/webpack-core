const Compiler = require('./compiler');

function webpack(config) {
  // 获取shell中的参数
  let shellOptions = process.argv.slice(2).reduce((config, args) => {
    let [key, value] = args.split('='); // --mode developemnt
    config[key.slice(2)] = value; // {"mode": "developemnt"}
    return config;
  }, {});

  // TODO 1. 获取参数，合并配置参数
  const finalOptions = { ...config, ...shellOptions };

  console.log('========配置参数=====\n', finalOptions); // {"mode": "developemnt"}

  let compiler = new Compiler(finalOptions);

  // 挂载插件
  finalOptions.plugins.forEach((plugin) => {
    console.log(plugin);
    plugin.apply(compiler);
  });
  return compiler;
}

module.exports = webpack;
