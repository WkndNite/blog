---
date: 2025-02-12
tags:
  - React
  - 开发
  - Debug
---

# React 请求转发与默认打包路径冲突

首先附上这个问题出现在的项目地址：[coder-station](https://github.com/WkndNite/coder-station)

## 请求转发

在本地开发过程中，React 应用是运行在 3000 端口的，而服务端运行在本地 7001 端口。作为一个前端开发人员，这样的情况应该是屡见不鲜的——这种情况下对数据的请求必然涉及到了跨域（跨域问题本文不详细展开）。

而在 CRA 项目里，有一个很简便的方法可以实现请求的转发。

**在项目的** `src` **目录新建** `setupProxy.js`，下附对应文件代码。

```JavaScript [setupProxy.js]
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/res',
    createProxyMiddleware({
      target: 'http://localhost:7001/res',
      changeOrigin: true
    })
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7001/api',
      changeOrigin: true
    })
  );

  app.use(
    '/static',
    createProxyMiddleware({
      target: 'http://localhost:7001/static',
      changeOrigin: true,
      ws: true
    })
  );
};
```

:::warning 问题一
在我学着使用 setupProxy 的时候，我接受到的知识并不是让我如上书写代码，其对应的 `target` 只书写到端口号，并无后面的路径。我认为，这一部分应该是模块的更新，书写上更加安全，同时符合我们的预期。
:::

## 默认打包

在 React 库中，打包是基于 Webpack 的，其打包的文件会放在 static 目录下。

## 路径的冲突

在书写到 static 路径资源的请求转发之后，启动 React 应用可以发现如下报错：

:::warning 问题二

```text
GET /static/js/bundle.js 200 xxx ms ...

NotFoundError: Not Found
    at ...
    at ...
    at ...
    ...
```

:::

## 解决办法

提出如下两种解决办法，分别对应服务端和纯前端：

### 服务端

可以与服务端协商，修改对静态资源请求的路径命名。比如将服务端资源放置在 dist 等其他目录下，同时前端对请求转发处的路径予以相关配置。从而，达到了解决与打包后 static 路径命名冲突问题的目的。

### 纯前端

前端的 CRA 项目结构是十分干净的，并没有 Webpack 配置。但是，可以通过以下命令，调出相关的配置：

:::code-group

```text [npm] :no-line-numbers
npm run eject
```

```text [pnpm] :no-line-numbers
pnpm run eject
```

```text [yarn] :no-line-numbers
yarn run eject
```

```text [bun] :no-line-numbers
bun run eject
```

:::

:::danger
但是，在使用如上命令时，请注意，该操作是不可逆的。
:::

之后，在弹射出来的 `config/webpack.config.js` 中作出如下修改：

```JavaScript [webpack.config.js] :line-numbers=204
output: {
    // The build folder.
    path: paths.appBuild,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: isEnvDevelopment,
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename: isEnvProduction
    ? 'assets/js/[name].[contenthash:8].js'
    : isEnvDevelopment && 'assets/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: isEnvProduction
    ? 'static/js/[name].[contenthash:8].chunk.js' //[!code --]
    ? 'assets/js/[name].[contenthash:8].chunk.js' //[!code ++]
    : isEnvDevelopment && 'static/js/[name].chunk.js', //[!code --]
    : isEnvDevelopment && 'assets/js/[name].chunk.js', //[!code ++]
    assetModuleFilename: 'static/media/[name].[hash][ext]', //[!code --]
    assetModuleFilename: 'assets/media/[name].[hash][ext]', //[!code ++]

    // ...
}
```
