// 在webpack中一切皆是插件，一个插件就是一个类，每个类下面会有固定的一个方法apply；
// apply必须接收一个complier示例作为参数
class RunPlugin {
  apply() {
    console.log('run');
  }
}

module.exports = RunPlugin;
