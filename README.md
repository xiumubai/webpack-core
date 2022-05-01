# webpack-core

webpack 核心源码实现

## 整理打包流程

1. 初始化参数
   1. 从配置文件和 shell 中读取合并参数
2. 开始编译
   1. 使用配置参数初始化 complier 对象
   2. 挂载插件
   3. 依据配置文件找到入口模块
3. 编译模块
   1. 配置文件中的 Loader 从入口模块开始编译有所有文件
   2. 依据入口找到所有依赖模块
4. 完成编译
   1. 得到当前语言可以识别的数据类型
5. 输出资源
   1. 依据入口模块及其依赖的的模块关系，组装包含多个模块的 chunk
   2. 将 chunk 转换为独立的文件添加至输出列表中
6. 写入文件
   1. 确认输出内容
   2. 路径写入缓存
