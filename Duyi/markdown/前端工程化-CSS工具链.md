# CSS工具链

## 语言问题

1. 语法缺失（循环、判断、拼接）
2. 功能缺失（颜色函数、数学函数、自定义函数）

```txt
1. 新语言 sass/less/stylus ---> css预编译器 ---> CSS ---> 后处理器 ---> CSS
2. pnpm i -g sass
3. sass from.sass to.css [--no-source-map] [-w]
4. 默认生成源码地图 -w可监听变化自动编译文件
5. 转换为CSS后的问题：厂商前缀autoprefixer/代码压缩cssnano/代码剪枝purgecss/类名冲突css module
6. 处理的过程都可以集成到 PostCSS：postcss postcss-cli
```

## 工程问题
