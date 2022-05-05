// loader是一个函数，
// 每个函数会返回函数内部处理完成之后的内容

function loader2(source) {
  // console.log('loader2执行了\n', source);
  return source + '/loader222';
}

module.exports = loader2;
