// loader是一个函数，
// 每个函数会返回函数内部处理完成之后的内容

function loader1(source) {
  // console.log('loader1执行了\n', source);
  return source + '/source+loader1';
}
module.exports = loader1;
