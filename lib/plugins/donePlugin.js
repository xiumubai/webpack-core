// 在webpack中一切皆是插件，一个插件就是一个类，每个类下面会有固定的一个方法apply；
// apply必须接收一个complier示例作为参数
class DonePlugin {
  apply() {
    console.log('done');
  }
}

module.exports = DonePlugin;

// 挂载插件：将compiler示例对象传入到每个插件的apply方法
// 后续想使用该插件的功能，只需要调用apply方法就可以
// apply内部 compiler 可以做狠多的事情
