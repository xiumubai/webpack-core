const path = require('path');
const fs = require('fs');
const { SyncHook } = require('tapable');
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
    if (typeof this.options.entry === 'string') {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }

    // loader在什么时候工作的

    // loader 将源文件处理

    // 从入口找到满足条件的源代码

    for (let entryName in entry) {
      const entryPath = toUnixPath(path.join(this.context, entry[entryName]));
      this.buildModule(entryName, entryPath);
    }
  }

  buildModule(moduleName, modulePath) {
    // 读取打包模块的源代码
    const originSourceCode = fs.readFileSync(modulePath, 'utf-8');
    let targetSourceCode = originSourceCode;
    let rules = this.options.modules.rules;
    let loaders = [];

    // 根据对应的正则匹配对应的loader
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].test.test(modulePath)) {
        loaders = [...loaders, ...rules[i].use];
      }
    }

    // 降序调用匹配的loader
    for (let i = loaders.length - 1; i >= 0; i--) {
      targetSourceCode = require(loaders[i])(targetSourceCode);
    }
  }
}

module.exports = Compiler;
