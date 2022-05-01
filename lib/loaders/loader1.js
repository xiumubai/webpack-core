// loader是一个函数，
// 每个函数会返回函数内部处理完成之后的内容

function loader(source) {
  console.log('loader');
  return source + '/loader1';
}
