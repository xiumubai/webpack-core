// 在webpack中一切皆是插件，一个插件就是一个类，每个类下面会有固定的一个方法apply；
// apply必须接收一个complier示例作为参数
class RunPlugin {
  apply(compiler) {
    compiler.hooks.run.tap('RunPlugin', () => {
      console.log('RunPlugin');
    });
  }
  run() {
    console.log('run插件执行了');
  }
}

module.exports = RunPlugin;
