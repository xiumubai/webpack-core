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
    // this.hooks.run.call();

    // 确定入口模块
    let entry = {};
    console.log(this.options);
    if (typeof this.options.entry === 'string') {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }
    console.log(entry);
    console.log('compiler开始编译了');
  }
}

module.exports = Compiler;
