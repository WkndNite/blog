---
date: 2025-03-12 10:28:22
tags:
  - Webpack
  - 前端
  - 工程化
---

# Loaders 与 Plugins

> Webpack 要做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。

## Loaders

### 基本介绍

Loader 本质上是一个函数，它的作用是将某个源码字符串转换为另一个源码字符串并返回。

我们可以像下面这样，声明一个 loader 函数，而 <mark>loader 的本质就是一个函数</mark>：

```JavaScript [loader.js]
let loaderUtils = require('loader-utils');
module.exports = function (source) {
  // 变量 a = 1;
  var options = loaderUtils.getOptions(this);
  var reg = new RegExp(options.needToReplace, 'g');
  return source.replace(reg, 'var');
};
```

但是这并不会直接在 `npx webpack` 中生效，所以我们需要在 Webpack 的配置文件中声明该 loader 的使用规则。

在这之前，我们先来回顾之前提到的 [chunk 解析模块的流程](./Compile-Process.md#编译阶段)，并完善之前的流程图：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-13-09-35-44.png)

在新添加的处理 loaders 这一步，具体步骤又如下：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-13-10-29-54.png)

### 完整配置

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: './loaders/loader.js',
            options: {
              needToReplace: '变量'
            }
          }
        ]
      }
    ]
  }
};
```

:::tip

- 正如上面代码提到的，要想获取 options 需要通过 `this` 或者 loader-utils 包提供的 `getOptions` 方法。
- 针对模块的配置，v4 只有两个配置，rules、noParse。
- 路径只有包名的时候会去 `node_modules` 中查找，相对路径会从配置文件所在目录开始查找。

:::

### 简化配置

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['./loaders/loader.js']
      }
    ]
  }
};
```

### 多个 loader

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['./loaders/loader1.js', './loaders/loader2.js']
      }
    ]
  }
};
```

:::warning
Webpack 的 loader 设计为链式调用，当存在多个 loader 的时候，会按照从后往前的顺序执行。
:::

::::details Demo 样式处理

:::code-group

```JavaScript [loader.js]
module.exports = function (sourceCode) {
  var code = `var style = document.createElement("style");
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode}\``;
  return code;
};
```

```JavaScript [index.js]
var content = require('./assets/index.css');

console.log(content); //css的源码字符串
```

```JavaScript [webpack.config.js]
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['./loaders/style-loader']
      }
    ]
  }
};
```

:::

::::

::::details Demo 图片处理

:::code-group

```JavaScript [loader.js]
var loaderUtil = require('loader-utils');

function loader(buffer) {
  //给的是buffer
  console.log('文件数据大小：(字节)', buffer.byteLength);
  var { limit = 1000, filename = '[contenthash].[ext]' } =
    loaderUtil.getOptions(this);
  if (buffer.byteLength >= limit) {
    var content = getFilePath.call(this, buffer, filename);
  } else {
    var content = getBase64(buffer);
  }
  return `module.exports = \`${content}\``;
}

loader.raw = true; //该loader要处理的是原始数据

module.exports = loader;

function getBase64(buffer) {
  return 'data:image/png;base64,' + buffer.toString('base64');
}

function getFilePath(buffer, name) {
  var filename = loaderUtil.interpolateName(this, name, {
    content: buffer
  });
  this.emitFile(filename, buffer);
  return filename;
}
```

```JavaScript [index.js]
var src = require('./assets/webpack.png');
console.log(src);
var img = document.createElement('img');
img.src = src;
document.body.appendChild(img);
```

```JavaScript [webpack.config.js]
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: './loaders/img-loader.js',
            options: {
              limit: 3000, //3000字节以上使用图片，3000字节以内使用base64
              filename: 'img-[contenthash:5].[ext]'
            }
          }
        ]
      }
    ]
  }
};
```

:::

::::

## Plugins

插件用于解决 loader 无法实现的其他事:

- 当 Webpack 生成文件时，顺便多生成一个说明描述文件。
- 当 Webpack 编译启动时，控制台输出一句话表示 Webpack 启动了。

这种类似的功能需要把功能嵌入到 Webpack 的编译流程中，而这种事情的实现是依托于 Plugin 的。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-15-12-45-16.png)

<mark>Plugin 的本质是一个带有 apply 方法的对象：</mark>

```JavaScript
var plugin = {
  apply: function (compiler) {}
};
```

通常，出于习惯我们会将该对象写成构造函数的模式：

```JavaScript
class MyPlugin {
  apply(compiler) {}
}

var plugin = new MyPlugin();
```

要将插件应用到 webpack，需要把插件对象配置到 webpack 的 plugins 数组中，如下：

```JavaScript
module.exports = {
  plugins: [new MyPlugin()]
};
```

apply 函数会在初始化阶段创建好 Compiler 对象后运行。

Compiler 对象是在初始化阶段构建的，整个 Webpack 打包期间只有一个 Compiler 对象，后续完成打包工作的是 Compiler 对象内部创建的 Compilation。

apply 方法会在创建好 compiler 对象后调用，并向方法传入一个 compiler 对象:

![image](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/apply-compiler.png)

Compiler 对象提供了大量 hooks，plugin 的开发者可以注册这些钩子函数，参与 Webpack 编译和生成。

你可以在 apply 方法中使用下面的代码注册钩子函数:

```JavaScript
class MyPlugin {
  apply(compiler) {
    compiler.hooks.事件名称.事件类型(name, function (compilation) {
      //事件处理函数
    });
  }
}
```

- 事件名称：即要监听的事件名称，所有的 hook 可以[参考官网](https://www.webpackjs.com/api/compiler-hooks/)。
- 事件类型：这一部分使用的是 Tapable API，这个小型的库是一个专门用于钩子函数监听的库。它提供了一些事件类型：
  - tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束。
  - tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束。
  - tapPromise：注册一个基于 Promise 的异步的钩子函数，函数通过返回的 Promise 进入已决状态表示事件处理结束。
- 处理函数：处理函数有一个事件参数 `compilation`。
