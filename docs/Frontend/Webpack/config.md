---
date: 2025-03-09 22:29:19
cover: https://webpack.js.org/site-logo.c0e60df418e04f58.svg
tags:
  - Webpack
  - 前端
---

# 配置文件

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
2. `entry`：入口文件，是一个字符串。
3. `output`：输出文件，是一个字符串，指定编译结果文件。
