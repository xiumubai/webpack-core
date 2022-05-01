const { SyncHook } = require('tapable');
const path = require('path');
const toUnixPath = require('../utils');
class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
      emit: new SyncHook(),
    };
    this.context = options.context || process.cwd();
  }
  run() {
    // 确定入口模块
    let entry = {};
    console.log(this.options);
    if (typeof this.options.entry === 'string') {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }

    // loader在什么时候工作的

    // loader 将源文件处理

    // 从入口找到满足条件的源代码

    for (let name in entry) {
      const entryPath = toUnixPath(path.join(this.context, entry[name]));
      console.log(entryPath);
    }
  }
}

module.exports = Compiler;
