// 在webpack中一切皆是插件，一个插件就是一个类，每个类下面会有固定的一个方法apply；
// apply必须接收一个complier示例作为参数
class DonePlugin {
  apply(compiler) {
    // 使用tapable，有选择的执行代码
    compiler.hooks.done.tap('DonePlugin', () => {
      console.log('DonePlugin');
    });
  }
  run() {
    console.log('done插件执行了');
  }
}

module.exports = DonePlugin;

// 挂载插件：将compiler示例对象传入到每个插件的apply方法
// 后续想使用该插件的功能，只需要调用apply方法就可以
// apply内部 compiler 可以做狠多的事情

// 挂载以后，并不会立即执行插件中的代码，如果想让某个插件立即生效， 需要使用tapable库,webpack自带（发布订阅）
