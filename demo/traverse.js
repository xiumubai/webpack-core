const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const code = `function sum(x, y) {
  return x + y
}`;

const ast = parser.parse(code);
console.log('=============ast==========');

console.log(ast.program.body.value);
console.log('=============ast==========');
traverse(ast, {
  FunctionDeclaration: function ({ node }) {
    console.log('====', node.source);
  },
});
