console.log(process.argv);

/**
 * 运行命令：node args.js --mode=developemnt 

打印的值：

[
  '/usr/local/bin/node',
  '/Users/janney/Documents/amjanney/webpack-core/demo/args.js',
  --mode=developemnt
]

解析shell参数步骤：

--mode=developemnt -> ['--mode', 'developemnt'] -> ['mode', 'developemnt']

 */

let options = process.argv.slice(2); // 删除前两个元素

console.log('options', options); // ['-mode=developemnt']

let configOptions = options.reduce((config, args) => {
  let [key, value] = args.split('='); // --mode developemnt
  config[key.slice(2)] = value;
  return config;
}, {});

console.log(configOptions);
