---
date: 2025-03-16 14:33:53
tags:
  - Webpack
  - 工程化
  - 前端
---

# Webpack 常用扩展

下面列出了一些常用的 Webpack 扩展并附上相关链接，包括：

- [`clean-webpack-plugin`](https://www.npmjs.com/package/clean-webpack-plugin)：默认情况下，此插件将在每次成功重新构建后删除 webpack 的 output.path 目录中的所有文件，以及所有未使用的 webpack 资源。
- [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin)：简化 html 文件的创建，可以自动生成 html 文件，并自动注入所有 webpack 打包生成的 bundle。
- [`copy-webpack-plugin`](https://www.npmjs.com/package/copy-webpack-plugin)：将已存在的单个文件或整个目录复制到 build 目录。
- [`file-loader`](https://www.npmjs.com/package/file-loader)：file-loader 将文件上的 import/require（） 解析为 url，并将文件发送到 output 目录。
- [`url-loader`](https://www.npmjs.com/package/url-loader)：一个 webpack 的加载器，用于将文件转换为 base64 URI。
