---
date: 2025-03-09 22:29:19
cover: https://webpack.js.org/site-logo.c0e60df418e04f58.svg
tags:
  - Webpack
  - 前端
  - 工程化
---

# Webpack 中的配置文件

Webpack 提供的 CLI 支持很多参数，例如 `--mode`，但是更多的时候，我们会使用更加灵活的配置文件来控制 Webpack 的行为。

默认情况下，Webpack 会读取项目根目录下的 `webpack.config.js` 文件作为配置文件，当然，你也可以通过 `--config` 参数指定配置文件。

配置文件中通过 CJS 导出一个对象，对象中的各种属性对应不同的 Webpack 配置。

:::warning

1. 配置文件中的代码必须是有效的 node 代码。
2. 当命令行参数与配置文件中的配置出现冲突时，以命令行参数为准。

:::

> 打包过程是在 node 环境下执行的，所以配置文件必须使用 CJS 模块化标准。

## 基本配置

1. `mode`：编译模式，是一个字符串，取值为 `development` 或 `production`。指定编译结果代码运行的环境，会影响 Webpack 对编译结果代码格式的处理。
2. `entry`：入口文件，是一个字符串或数组，指定 Webpack 从哪个文件开始打包。
3. `output`：输出文件，是一个对象，指定 Webpack 打包后的文件输出到哪里，以及如何命名。

## devtool 最佳实践

1. 对于开发环境

   - `eval`：每个模块都使用 eval() 执行，并且都有 _//# sourceURL_。此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以 **不能正确的显示行数**。

   - `eval-source-map`：每个模块使用 eval() 执行，并且 source map 转换为 `DataUrl` 后添加到 eval() 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的 **最佳品质** 的 source map。

   - `eval-cheap-source-map`：类似 eval-source-map，每个模块使用 eval() 执行。这是 "cheap（低开销）" 的 source map，因为它 **没有生成列映射**（column mapping），只是映射行数。它会忽略源自 loader 的 source map，并且仅显示转译后的代码，就像 eval devtool。

   - `eval-cheap-module-source-map`：类似 eval-cheap-source-map，并且，在这种情况下，**源自 loader 的 source map 会得到更好的处理结果**。然而，loader source map 会被简化为每行一个映射（mapping）。

2. 对于生产环境
   - `none`（省略 devtool 选项）：不生成 source map。这是一个不错的选择。
   - `source-map`：整个 source map 作为一个单独的文件生成。它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它。但是，应该将服务器配置为 **不允许普通用户访问 source map 文件**！
   - `hidden-source-map`：与 source-map 相同，但**不会为 bundle 添加引用注释**。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用。
   - `nosources-source-map`：创建的 source map 不包含 sourcesContent(源代码内容)。它可以用来映射客户端上的堆栈跟踪，而无须暴露所有的源代码。你可以将 source map 文件部署到 web 服务器。
