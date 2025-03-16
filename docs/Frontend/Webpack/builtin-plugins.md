---
date: 2025-03-16 16:59:43
tags:
  - Webpack
  - 前端
  - 工程化
---

# Webpack 内置插件

所有的 webpack 内置插件都作为 webpack 的静态属性存在的，使用下面的方式即可创建一个插件对象：

```JavaScript
const webpack = require('webpack');
new webpack.插件名(options);
```

## DefinePlugin

全局常量定义插件，使用该插件通常定义一些常量值，例如：

```JavaScript
new webpack.DefinePlugin({
  PI: `Math.PI`, // PI = Math.PI
  VERSION: `"1.0.0"`, // VERSION = "1.0.0"
  DOMAIN: JSON.stringify('duyi.com')
});
```

这样一来，在源码中，我们可以直接使用插件中提供的常量，当 webpack 编译完成后，会自动替换为常量的值。

## BannerPlugin

它可以为每个 chunk 生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息。

```JavaScript
new webpack.BannerPlugin({
  banner: `
  hash:[hash]
  chunkhash:[chunkhash]
  name:[name]
  author:yuanjin
  corporation:duyi
  `
});
```

## ProvidePlugin

自动加载模块，而不必到处 import 或 require：

```JavaScript
new webpack.ProvidePlugin({
  $: 'jquery',
  _: 'lodash'
});
```

然后在我们任意源码中：

```JavaScript
$('#item');
_.drop([1, 2, 3], 2);
```
