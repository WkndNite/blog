---
date: 2025-03-16 14:51:55
tags:
  - Webpack
  - 前端
  - 工程化
---

# 开发服务器

为了提高开发效率，Webpack 官方制作了 [webpack-dev-server](https://webpackjs.com/configuration/dev-server/) 来作为开发服务器，它既不是 `loader`，也不是 `plugin`，而是一个独立的库。

## 安装

```Bash :no-line-numbers
npm install webpack-dev-server --save-dev
```

## 执行命令

```Bash :no-line-numbers
npx webpack-dev-server
```

`webpack-dev-server` 命令几乎支持所有的 `webpack` 命令行参数。这个命令是专门为开发阶段服务的，真正部署的时候，需要使用 `webpack` 命令打包。

当我们执行该命令之后，会做出如下操作：

- 内部执行 `webpack` 命令，传递命令参数。
- 开启 `watch` 模式，监听文件变化。
- 注册 `hooks`，类似于 `plugin`，webpack-dev-server 会向 webpack 中注册一些钩子函数，主要用来将资源列表保存起来以及禁止 webpack 输出文件。
- 用 express 开启一个服务器，监听某个端口，当请求到达后，根据请求的路径，给予相应的资源内容。

## 配置

针对 `webpack-dev-server` 的常用配置项，如下：

- `port`：监听的端口号。
- `proxy`：代理配置。
- `stats`：控制台输出信息。
- `open`：自动打开浏览器。
- `index`：默认打开的文件。
