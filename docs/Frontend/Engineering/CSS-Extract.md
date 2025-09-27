---
date: 2025-03-17 20:33:01
tags:
  - CSS
  - 工程化
  - 前端
---

# 如何抽离 CSS 文件

目前，css 代码被 css-loader 转换后，交给的是 style-loader 进行处理。

style-loader 使用的方式是用一段 js 代码，将样式加入到 style 元素中。

而实际的开发中，我们往往希望依赖的样式最终形成一个 css 文件。

此时，就需要用到一个库：`mini-css-extract-plugin`。

该库提供了 1 个 plugin 和 1 个 loader。

- plugin：负责生成 css 文件。
- loader：负责记录要生成的 css 文件的内容，同时导出开启 css-module 后的样式对象。

使用方式：

```JavaScript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin() //负责生成css文件
  ]
};
```

:::info 配置生成的文件名

同 `output.filename` 的含义一样，即根据 chunk 生成的样式文件名。

配置生成的文件名，例如 `[name].[contenthash:5].css`。

默认情况下，每个 chunk 对应一个 css 文件。

:::
