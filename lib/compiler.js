class Compiler {
  constructor(options) {
    this.options = options;
  }
  run() {
    console.log('webpack开始编译了');
  }
}

module.exports = Compiler;
