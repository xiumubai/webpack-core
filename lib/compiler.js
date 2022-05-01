const { SyncHook } = require('tapable');

class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
      emit: new SyncHook(),
    };
  }
  run() {
    // 执行插件
    this.hooks.run.call();
    console.log('compiler开始编译了');
  }
}

module.exports = Compiler;
