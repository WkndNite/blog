---
date: 2025-03-11 22:25:46
tags:
  - Webpack
  - 前端
  - 工程化
---

# 入口与出口配置

## 一些补充

首先对 NodeJS 中一些概念作出补充。

- `./`：在模块化代码中表示当前文件目录，但是在路径处理中，表示运行环境所在的位置。
- `__dirname`：所有情况下都表示当前文件所在目录的绝对路径。
- `path.resolve('./','src','sub','child','index.js')`：该函数可以接收多个参数，返回一个由这些参数拼接而成的绝对路径。

## 出口配置

```JavaScript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

- `path`：指定输出文件的目标路径，必须是绝对路径。
- 采用 `path.resolve` 函数，可以确保路径在不同操作系统中的兼容性，同时也不会受到项目位置迁移带来的影响。
- `filename`：指定输出文件的名称，可以包含占位符，如 `[name]`、`[hash]`、`[chunkhash]` 等。每个 chunk 会包含编译以后的 js 文件和对应的 map 文件，而这个属性就是用来配置 js 文件的名称的。

## 入口配置

:::code-group

```JavaScript [字符串]
module.exports = {
  entry: './src/index.js'
};
```

```JavaScript [数组]
module.exports = {
  entry: ['./src/index.js', './src/other.js']
};
```

```JavaScript [对象]
module.exports = {
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  }
};
```

:::

- `entry`：指定入口文件，可以是字符串、数组、对象。

> 注意，entry 事实上配置的是 `chunk`。

## 最佳实践

### 一个页面对应一个 JS 文件

- 目录结构

  ```text
  ├── src
  │   ├── pageA
  │   │   ├── index.js
  │   │   └── other.js
  │   │── pageB
  │   │   ├── index.js
  │   │   └── other.js
  │── pageC
  │   │   ├── index1.js
  │   │   └── index2.js
  │   └── common
  │       ├── index.js
  │       └── other.js
  ├── webpack.config.js
  └── package.json
  ```

- webpack 配置

  ```JavaScript
  module.exports = {
    entry: {
      pageA: './src/pageA/index.js',
      pageB: './src/pageB/index.js',
      pageC: ['./src/pageC/index1.js', './src/pageC/index2.js']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    }
  };
  ```

- 这种方式适用于页面之间的功能差异巨大，公共代码较少的情况，这种情况下打包出来的最终代码不会有太多的重复。
- 至于不抽离公共代码，是因为一旦抽离，公共部分的代码无法对外暴露，那么依赖他的代码又如何运行呢？

### 一个页面对应多个 JS 文件

- 目录结构

  ```text
  ├── src
  │   ├── index.js
  │   ├── subFunc
  │   │   ├── index.js
  │   │   └── other.js
  │   │── subFunc
  │   │   ├── index.js
  │   │   └── other.js
  │   └── common
  │       ├── index.js
  │       └── other.js
  ├── webpack.config.js
  └── package.json
  ```

- webpack 配置

  ```JavaScript
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: '[name].[chunkhash:8].js'
    }
  };
  ```

- 这种方式适用于页面之间有一些独立、相同的功能，专门使用一个 chunk 抽离，更有利于浏览器缓存这些内容。
- 上文提到的无法抽离是因为一部分代码会依赖公共代码，像这里的 statistics 模块，它并不被依赖，便可以被抽离出来单独成为一个 chunk。
- 至于为什么不按照多模块进行配置，就是因为上面提到的利于缓存以及减少传输的原因。

### 单页面应用

所谓 SPA，就是指整个网站或网站的某一个功能块只有一个页面，页面中的内容全部靠 JS 创建和控制。Vue 和 React 都是实现 SPA 的利器。

- 目录结构

  ```text
  ├── src
  │   ├── pageA
  │   │   ├── index.js
  │   │   └── other.js
  │   │── pageB
  │   │   ├── index.js
  │   │   └── other.js
  │   │── statistics
  │   │   ├── index.js
  │   │   └── other.js
  │   └── common
  │       ├── index.js
  │       └── other.js
  ├── webpack.config.js
  └── package.json
  ```

- webpack 配置

  ```JavaScript
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: '[name].[chunkhash:8].js'
    }
  };
  ```
