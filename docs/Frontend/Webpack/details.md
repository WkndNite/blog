---
date: 2025-03-15 17:10:02
tag:
  - Webpack
---

# 一些细节配置补充

## context

```JavaScript
module.exports = {
  context: path.resolve(__dirname, 'src')
};
```

该配置会影响入口和 loaders 的解析，入口和 loaders 的相对路径会以 context 的配置作为基准路径，这样依赖，你的配置会独立于 CWD（Current Working Directory）。

## output.library(Target)

```JavaScript
module.exports = {
  output: {
    library: 'MyLibrary',
    libraryTarget: 'var'
  }
};
```

如上，library 配置项会将打包后的自执行函数赋值给 MyLibrary，而 libraryTarget 则决定了 MyLibrary 的暴露方式：

- `var`：默认值，暴露给一个普通变量。
- `window`：暴露给 window 对象的一个属性。
- `this`：暴露给 this 的一个属性。
- `global`：暴露给 global 的一个属性。
- `commonjs`：暴露给 exports 的一个属性。

## target

设置打包结果最终要运行的环境：

- `web`：默认值，用于 web 环境的打包。
- `node`: 用于 node 环境的打包。

## module.noParse

```JavaScript
module.exports = {
  module: {
    noParse: /jquery|lodash/
  }
};
```

该配置项可以防止 webpack 解析某些模块，从而提高打包速度。

## resolve

### modules

```JavaScript
module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};
```

该配置项可以设置模块的解析路径，默认配置是 `['node_modules']`，即 webpack 会先在 `node_modules` 中寻找模块，如果找不到，则会在 `node_modules` 的上一级目录中寻找，以此类推。

### extensions

```JavaScript
module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue']
  }
};
```

该配置项可以设置模块的解析后缀，默认配置是 `['.js', '.json']`，即 webpack 会先解析 `.js` 文件，如果找不到，则会在 `.json` 文件中寻找，以此类推。

### alias

```JavaScript
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
```

该配置项可以设置模块的别名，方便在项目中引用模块。

## externals

```JavaScript
module.exports = {
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};
```

该配置项可以防止将某些模块打包到最终的 bundle 中，而是通过 `externals` 配置项来指定这些模块的来源，从而减小打包后的 bundle 体积。

## stats

```JavaScript
module.exports = {
  stats: 'errors-only'
};
```

该配置项可以设置 webpack 打包时的输出信息，默认配置是 `normal`，即输出所有信息，包括打包进度、打包结果等。而 `errors-only` 则只会输出错误信息。
