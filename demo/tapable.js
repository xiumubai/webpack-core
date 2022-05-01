const { SyncHook } = require('tapable');

const btn = new SyncHook();

btn.tap('handle1', () => {
  console.log('事件1发生了');
});

btn.tap('handle2', () => {
  console.log('事件2发生了');
});

btn.call();
