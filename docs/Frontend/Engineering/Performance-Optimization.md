---
date: 2025-03-20 15:55:22
tags:
  - 性能优化
  - 前端
  - 工程化
---

# 性能优化

## 概述

本章所讲的性能优化主要体现在三个方面：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-12-09-53-01.png)

### 构建性能

这里所说的构建性能，是指在 `开发阶段的构建性能`，而不是生产环境的构建性能。

<mark>优化的目标，是降低从打包开始，到代码效果呈现所经过的时间。</mark>

构建性能会影响开发效率。构建性能越高，开发过程中时间的浪费越少。

### 传输性能

传输性能是指，打包后的 JS 代码传输到浏览器经过的时间。

在优化传输性能时要考虑到：

1. 总传输量：所有需要传输的 JS 文件的内容加起来，就是总传输量，重复代码越少，总传输量越少。
2. 文件数量：当访问页面时，需要传输的 JS 文件数量，文件数量越多，http 请求越多，响应速度越慢。
3. 浏览器缓存：JS 文件会被浏览器缓存，被缓存的文件不会再进行传输。

### 运行性能

运行性能是指，JS 代码在浏览器端的运行速度。

它主要取决于我们如何书写高性能的代码。

`永远不要过早的关注于性能`，因为你在开发的时候，无法完全预知最终的运行性能，过早的关注性能会极大的降低开发效率。

性能优化主要从上面三个维度入手。

<mark>性能优化没有完美的解决方案，因为可能一方面的优化会引起另一方面性能的损耗，需要具体情况具体分析。</mark>

## 构建性能的优化

### 减少模块解析

首先，我们要了解什么是模块解析。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-13-16-26-41.png)

模块解析包括：抽象语法树分析、依赖分析、模块语法替换

那么，不做模块解析会发生什么？

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-13-16-28-10.png)

如果某个模块不做解析，该模块经过 loader 处理后的代码就是最终代码。

如果没有 loader 对该模块进行处理，该模块的源码就是最终打包结果的代码。

如果不对某个模块进行解析，可以缩短构建时间。既然如此，什么样的模块可以不被解析？

模块中无其他依赖：一些已经打包好的第三方库，比如 jquery。

如何能保证这些第三方库不被解析呢？

配置 `module.noParse`，它是一个正则，被正则匹配到的模块不会解析。

### 优化 loader 性能

1. 进一步限制 loader 的应用范围

   思路是：对于某些库，不使用 loader。

   例如：babel-loader 可以转换 ES6 或更高版本的语法，可是有些库本身就是用 ES5 语法书写的，不需要转换，使用 babel-loader 反而会浪费构建时间

   lodash 就是这样的一个库，它是一个工具库，使用的是 ES3 语法。

   通过 `module.rule.exclude` 或 `module.rule.include`，排除或仅包含需要应用 loader 的场景

   ```JavaScript [webpack.config.js]
   module.exports = {
   module: {
       rules: [
       {
           test: /\.js$/,
           exclude: /lodash/,
           use: 'babel-loader'
       }
       ]
   }
   };
   ```

   如果暴力一点，甚至可以排除掉 `node_modules` 目录中的模块，或仅转换 `src` 目录的模块。

   ```JavaScript [webpack.config.js]
   module.exports = {
   module: {
       rules: [
       {
           test: /\.js$/,
           exclude: /node_modules/,
           //或
           // include: /src/,
           use: 'babel-loader'
       }
       ]
   }
   };
   ```

   > 这种做法是对 loader 的范围进行进一步的限制，和 noParse 不冲突，noParse 配置的模块仍然会被 loaders 处理。

2. 缓存 loader 的结果

   我们可以基于一种假设：如果某个文件内容不变，经过相同的 loader 解析后，解析后的结果也不变。

   于是，可以将 loader 的解析结果保存下来，让后续的解析直接使用保存的结果。

   `cache-loader` 可以实现这样的功能。

   ```JavaScript [webpack.config.js]
   module.exports = {
   module: {
       rules: [
       {
           test: /\.js$/,
           use: ['cache-loader', ...loaders]
       }
       ]
   }
   };
   ```

   有趣的是，`cache-loader` 放到最前面，却能够决定后续的 loader 是否运行。

   实际上，loader 的运行过程中，还包含一个过程，即 `pitch`。

   ![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-21-13-32-36.png)

   `cache-loader` 还可以实现各自自定义的配置，具体方式见文档。

3. 为 loader 的运行开启多线程。

   `thread-loader` 会开启一个线程池，线程池中包含适量的线程。

   它会把后续的 loader 放到线程池的线程中运行，以提高构建效率。

   由于后续的 loader 会放到新的线程中，所以，后续的 loader 不能：

   - 使用 webpack api 生成文件
   - 无法使用自定义的 plugin api
   - 无法访问 webpack options

   > 在实际的开发中，可以进行测试，来决定 `thread-loader` 放到什么位置。

   :::warning
   开启和管理线程需要消耗时间，在小型项目中使用 `thread-loader` 反而会增加构建时间。
   :::

### 热替换 HMR

> 热替换并不能降低构建时间（可能还会稍微增加），但可以降低代码改动到效果呈现的时间。

当使用 `webpack-dev-server` 时，考虑代码改动到效果呈现的过程：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-21-14-20-49.png)

而使用了热替换后，流程发生了变化：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-21-14-22-32.png)

我们可以通过以下修改应用热更新：

:::code-group

```JavaScript [webpack.config.js]
module.exports = {
  devServer: {
    hot: true // 开启HMR
  },
  plugins: [
    // 可选
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

```JavaScript [index.js]
if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}
```

:::

首先，这段代码会参与最终运行！

当开启了热更新后，webpack-dev-server 会向打包结果中注入 module.hot 属性。

默认情况下，webpack-dev-server 不管是否开启了热更新，当重新打包后，都会调用 location.reload 刷新页面。

但如果运行了 module.hot.accept()，将改变这一行为。

module.hot.accept() 的作用是让 webpack-dev-server 通过 socket 管道，把服务器更新的内容发送到浏览器。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-21-14-34-05.png)

然后，将结果交给插件 HotModuleReplacementPlugin 注入的代码执行。

插件 HotModuleReplacementPlugin 会根据覆盖原始代码，然后让代码重新执行。

<mark>所以，热替换发生在代码运行期。</mark>

对于样式也是可以使用热替换的，但需要使用 style-loader。

因为热替换发生时，HotModuleReplacementPlugin 只会简单的重新运行模块代码。

因此 style-loader 的代码一运行，就会重新设置 style 元素中的样式。

而 mini-css-extract-plugin，由于它生成文件是在 `构建期间`，运行期间不会也无法改动文件，因此它对于热替换是无效的。

## 传输性能的优化

### 分包

#### 手动分包

手动分包的总体思路是：公共模块会被打包成为动态链接库(dll Dynamic Link Library)，并生成资源清单。

![单独打包公共模块](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-24-13-24-57.png)

先来看以下的代码：

```JavaScript [index.js]
import $ from 'jquery';
import _ from 'lodash';
_.isArray($('.red'));
```

由于资源清单中包含 `jquery` 和 `lodash` 两个模块，因此打包结果的大致格式是：

```JavaScript
(function (modules) {
  //...
})({
  // index.js文件的打包结果并没有变化
  './src/index.js': function (module, exports, __webpack_require__) {
    var $ = __webpack_require__('./node_modules/jquery/index.js');
    var _ = __webpack_require__('./node_modules/lodash/index.js');
    _.isArray($('.red'));
  },
  // 由于资源清单中存在，jquery的代码并不会出现在这里
  './node_modules/jquery/index.js': function (
    module,
    exports,
    __webpack_require__
  ) {
    module.exports = jquery;
  },
  // 由于资源清单中存在，lodash的代码并不会出现在这里
  './node_modules/lodash/index.js': function (
    module,
    exports,
    __webpack_require__
  ) {
    module.exports = lodash;
  }
});
```

但如果我们同时有多个入口，并且这些入口都依赖了相同的公共库，那么打包结果都会像上面一样，就连公共库也会被打包多次，这显然并不是我们所期望的。

如果可能的话，我们想要让这些公共库的打包结果被抽离成仅此一份的。

<mark>打包公共模块是一个独立的打包过程。</mark>

1. 单独打包公共模块，暴露变量名。

   ```JavaScript [webpack.dll.config.js]
   module.exports = {
     mode: 'production',
     entry: {
      jquery: ['jquery'],
      lodash: ['lodash']
     },
     output: {
       filename: 'dll/[name].js',
       library: '[name]'
     }
   };
   ```

2. 利用 `DllPlugin` 生成资源清单。

   ```JavaScript [webpack.dll.config.js]
   module.exports = {
     // ...
     plugins: [
       new webpack.DllPlugin({
         //资源清单的保存位置
         path: path.resolve(__dirname, 'dll', '[name].manifest.json'),
         //资源清单中，暴露的变量名
         name: '[name]'
       })
     ]
   };
   ```

运行后，即可完成公共模块打包。

那在我们打包之后，又该如何使用这些公共模块呢？

1. 在页面中手动引入公共模块。

   ```HTML
   <script src="./dll/jquery.js"></script>
   <script src="./dll/lodash.js"></script>
   ```

2. 重新设置 `clean-webpack-plugin`。

   如果使用了插件 `clean-webpack-plugin`，为了避免它把公共模块清除，需要做出以下配置：

   ```JavaScript [webpack.config.js]
   new CleanWebpackPlugin({
       // 要清除的文件或目录
       // 排除掉dll目录本身和它里面的文件
       cleanOnceBeforeBuildPatterns: ['`/*', '!dll', '!dll/*']
   });
   ```

   > 目录和文件的匹配规则使用的是 [globbing patterns](https://github.com/sindresorhus/globby#globbing-patterns)。

3. 使用 `DllReferencePlugin` 控制打包结果。

   ```JavaScript [webpack.config.js]
   module.exports = {
     plugins: [
       new webpack.DllReferencePlugin({
         manifest: require('./dll/jquery.manifest.json')
       }),
       new webpack.DllReferencePlugin({
         manifest: require('./dll/lodash.manifest.json')
       })
     ]
   };
   ```

:::info 总结

- 手动打包的过程

  1. 开启 `output.library` 暴露公共模块
  2. 用 `DllPlugin` 创建资源清单
  3. 用 `DllReferencePlugin` 使用资源清单

- 手动打包的注意事项

  1. 资源清单不参与运行，可以不放到打包目录中
  2. 记得手动引入公共 JS，以及避免被删除
  3. 不要对小型的公共 JS 库使用

- 优点

  1. 极大提升自身模块的打包速度
  2. 极大的缩小了自身文件体积
  3. 有利于浏览器缓存第三方库的公共代码

- 缺点

  1. 使用非常繁琐
  2. 如果第三方库中包含重复代码，则效果不太理想

:::

#### 自动分包

不同与手动分包，自动分包是从 `实际的角度` 出发，从一个更加 `宏观的角度` 来控制分包，而一般不对具体哪个包要分出去进行控制。

因此使用自动分包，不仅非常方便，而且更加贴合实际的开发需要。

要控制自动分包，关键是要配置一个合理的 `分包策略`。

有了分包策略之后，不需要额外安装任何插件，webpack 会自动的按照策略进行分包。

> - 实际上，webpack 在内部是使用 `SplitChunksPlugin` 进行分包的。
> - 过去有一个库 `CommonsChunkPlugin` 也可以实现分包，不过由于该库某些地方并不完善。
> - 到了 `webpack4` 之后，已被 `SplitChunksPlugin` 取代。

![分包简单流程](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-24-17-19-47.png)

从分包流程中至少可以看出以下几点：

- 分包策略至关重要，它决定了如何分包。
- 分包时，webpack 开启了一个 `新的 chunk`，对分离的模块进行打包。
- 打包结果中，公共的部分被提取出来形成了一个单独的文件，它是新 chunk 的产物。

接下来，我们研究一下怎么配置自动分包。

webpack 提供了 `optimization` 配置项，用于配置一些优化信息。

其中 `splitChunks` 是分包策略的配置。

```JavaScript [webpack.config.js]
module.exports = {
  optimization: {
    splitChunks: {
      // 分包策略
    }
  }
};
```

事实上，分包策略有其默认的配置，我们只需要轻微的改动，即可应对大部分分包场景。

1. chunks

   该配置项用于配置需要应用分包策略的 chunk。

   我们知道，分包是从已有的 chunk 中分离出新的 chunk，那么哪些 chunk 需要分离呢？

   chunks 有三个取值，分别是：

   - all: 对于所有的 chunk 都要应用分包策略。
   - async：【默认】仅针对异步 chunk 应用分包策略。
   - initial：仅针对普通 chunk 应用分包策略。

   所以，你只需要配置 `chunks` 为 `all` 即可。

2. maxSize

   该配置可以控制包的最大字节数。

   如果某个包（包括分出来的包）超过了该值，则 webpack 会尽可能的将其分离成多个包。

   :::warning
   分包的 `基础单位是模块`，如果一个完整的模块超过了该体积，它是无法做到再切割的，因此，尽管使用了这个配置，完全有可能某个包还是会超过这个体积。
   :::

   另外，该配置看上去很美妙，实际意义其实不大。

   因为分包的目的是 `提取大量的公共代码`，从而减少总体积和充分利用浏览器缓存。

   虽然该配置可以把一些包进行再切分，但是实际的总体积和传输量并没有发生变化。

   > 如果要进一步减少公共模块的体积，只能是压缩和 `Tree Shaking`。

3. 当然，分包配置不只有上文所提到的那些。如果不想使用其他配置的默认值，可以手动进行配置：

   - automaticNameDelimiter：新 chunk 名称的分隔符，默认值 ~。
   - minChunks：一个模块被多少个 chunk 使用时，才会进行分包，默认值 1。
   - minSize：当分包达到多少字节后才允许被真正的拆分，默认值 30000。

> 之前配置的分包策略是全局的。而实际上，分包策略是基于缓存组的。

每个缓存组提供一套独有的策略，webpack 按照缓存组的优先级依次处理每个缓存组，被缓存组处理过的分包不需要再次分包。

默认情况下，webpack 提供了两个缓存组：

```JavaScript [webpack.config.js]
module.exports = {
  optimization: {
    splitChunks: {
      //全局配置
      cacheGroups: {
        // 属性名是缓存组名称，会影响到分包的chunk名
        // 属性值是缓存组的配置，缓存组继承所有的全局配置，也有自己特殊的配置
        vendors: {
          // 当匹配到相应模块时，将这些模块进行单独打包
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // 缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
        },
        default: {
          minChunks: 2, // 覆盖全局配置，将最小chunk引用数改为2
          priority: -20, // 优先级
          reuseExistingChunk: true // 重用已经被分离出去的chunk
        }
      }
    }
  }
};
```

很多时候，缓存组对于我们来说没什么意义，因为默认的缓存组就已经够用了。

但是我们同样可以利用缓存组来完成一些事情，比如对公共样式的抽离：

```JavaScript [webpack.config.js]
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          test: /\.css$/, // 匹配样式模块
          minSize: 0, // 覆盖默认的最小尺寸，这里仅仅是作为测试
          minChunks: 2 // 覆盖默认的最小chunk引用数
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css',
      // chunkFilename 是配置来自于分割 chunk 的文件名
      chunkFilename: 'common.[hash:5].css'
    })
  ]
};
```

:::details 多页面应用

虽然现在单页应用是主流，但免不了还是会遇到多页应用。

由于在多页应用中需要为每个 html 页面指定需要的 chunk，这就造成了问题。

```JavaScript [webpack.config.js]
new HtmlWebpackPlugin({
  template: './public/index.html',
  chunks: ['index~other', 'vendors~index~other', 'index']
});
```

我们必须手动的指定被分离出去的 chunk 名称，这不是一种好办法。

幸好 `html-webpack-plugin` 的新版本中解决了这一问题。

```shell :no-line-numbers [npm]
npm i -D html-webpack-plugin@next
```

做出以下配置即可：

```JavaScript [webpack.config.js]
new HtmlWebpackPlugin({
  template: './public/index.html',
  chunks: ['index']
});
```

它会自动的找到被 `index` 分离出去的 chunk，并完成引用。

:::

总结一下，自动分包的原理其实并不复杂，主要经过以下步骤：

1. 检查每个 chunk 编译的结果。
2. 根据分包策略，找到那些满足策略的模块。
3. 根据分包策略，生成新的 chunk 打包这些模块（代码有所变化）。
4. 把打包出去的模块从原始包中移除，并修正原始包代码。

在代码层面，有以下变动：

1. 分包的代码中，加入一个全局变量，类型为数组，其中包含公共模块的代码。
2. 原始包的代码中，使用数组中的公共代码。

### 单模块体积优化

#### 压缩

1. 为什么要进行代码压缩？减少代码体积；破坏代码的可读性，提升破解成本。
2. 什么时候要进行代码压缩？生产环境。

3. 使用什么压缩工具？目前最流行的代码压缩工具主要有两个：`UglifyJs` 和 `Terser`。

UglifyJs 是一个传统的代码压缩工具，已存在多年，曾经是前端应用的必备工具，但由于它不支持 ES6 语法，所以目前的流行度已有所下降。

Terser 是一个新起的代码压缩工具，支持 ES6+ 语法，因此被很多构建工具内置使用。Webpack 安装后会内置 Terser，当启用生产环境后即可用其进行代码压缩。

因此，我们选择 `Terser`。

:::info 关于副作用 Side Effect

`副作用`：函数运行过程中，可能会对外部环境造成影响的功能。

如果函数中包含以下代码，该函数叫做 `副作用函数`:

- 异步代码
- localStorage
- 对外部数据的修改

如果一个函数没有副作用，同时，函数的返回结果仅依赖参数，则该函数叫做 `纯函数`(pure function)。

:::

> 在 Terser 的官网可尝试它的压缩效果：<https://terser.org/>

Webpack 自动集成了 Terser。如果你想更改、添加压缩工具，又或者是想对 Terser 进行配置，使用下面的 webpack 配置即可：

```JavaScript [webpack.config.js]
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  optimization: {
    // 是否要启用压缩，默认情况下，生产环境会自动开启
    minimize: true,
    minimizer: [ // 压缩时使用的插件，可以有多个
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  },
};
```

#### Tree Shaking

> 压缩可以移除模块内部的无效代码。
>
> Tree Shaking 可以移除模块之间的无效代码。

某些模块导出的代码并不一定会被用到。

:::code-group

```JavaScript [myMath.js]
export function add(a, b) {
  console.log('add');
  return a + b;
}

export function sub(a, b) {
  console.log('sub');
  return a - b;
}
```

```JavaScript [index.js]
import { add } from './myMath';
console.log(add(1, 2));
```

:::

Tree Shaking 用于移除掉不会用到的导出。

`webpack2` 开始就支持了 `Tree Shaking`。只要是生产环境，`Tree Shaking` 自动开启。

那么，Tree Shaking 是如何工作的呢？

Webpack 会从入口模块出发寻找依赖关系。

当解析一个模块时，webpack 会根据 ES6 的模块导入语句来判断，该模块依赖了另一个模块的哪个导出

webpack 之所以选择 ES6 的模块导入语句，是因为 ES6 模块有以下特点：

1. 导入导出语句只能是顶层语句。
2. import 的模块名只能是字符串常量。
3. import 绑定的变量是不可变的。

这些特征都非常有利于分析出稳定的依赖。

<mark>在具体分析依赖时，webpack 坚持的原则是：保证代码正常运行，然后再尽量 Tree Shaking。</mark>

所以，如果你依赖的是一个导出的对象，由于 JS 语言的动态特性，以及 `webpack` 还不够智能，为了保证代码正常运行，它不会移除对象中的任何信息

因此，我们在编写代码的时候，`尽量`：

- 使用 `export xxx` 导出，而不使用 `export default {xxx}` 导出。
- 使用 `import {xxx} from "xxx"` 导入，而不使用 `import xxx from "xxx"` 导入。

依赖分析完毕后，webpack 会根据每个模块每个导出是否被使用，标记其他导出为 `DeadCode`，然后交给代码压缩工具处理。

代码压缩工具最终移除掉那些 `DeadCode` 代码。

1. 第三方库

   某些第三方库可能使用的是 CJS 的方式导出，比如 lodash，又或者没有提供普通的 ES6 方式导出。

   对于这些库，`Tree Shaking` 是无法发挥作用的。

   因此要寻找这些库的 ES6 版本，好在很多流行但没有使用的 ES6 的第三方库，都发布了它的 ES6 版本，比如 lodash-es。

2. 作用域分析

   `Tree Shaking` 本身并没有完善的作用域分析，可能导致在一些 `DeadCode` 函数中的依赖仍然会被视为依赖。

   插件 `webpack-deep-scope-plugin` 提供了作用域分析，可解决这些问题。

3. 副作用问题

   webpack 在 `Tree Shaking` 的使用，有一个原则：`一定要保证代码正确运行`。

   在满足该原则的基础上，再来决定如何 `Tree Shaking`。

   因此，当 `Webpack` 无法确定某个模块是否有副作用时，它往往将其视为有副作用

   因此，某些情况可能并不是我们所想要的：

   ```JavaScript
   //common.js
   var n = Math.random();

   //index.js
   import './common.js';
   ```

   虽然我们根本没用有 `common.js` 的导出，但 `webpack` 担心 `common.js` 有副作用，如果去掉会影响某些功能。

   如果要解决该问题，就需要标记该文件是没有副作用的。

   在 `package.json` 中加入 `sideEffects`。

   ```JSON
   {
     "sideEffects": false
   }
   ```

   有两种配置方式：

   - false：当前工程中，所有模块都没有副作用。注意，这种写法会影响到某些 css 文件的导入。
   - 数组：设置哪些文件拥有副作用，例如：`["!src/common.js"]`，表示只要不是 `src/common.js` 的文件，都有副作用。

   > 这种方式我们一般不处理，通常是一些第三方库在它们自己的 `package.json` 中标注。

4. css Tree Shaking

   `webpack` 无法对 `css` 完成 Tree Shaking，因为 css 跟 es6 没有半毛钱关系。

   因此对 css 的 Tree Shaking 需要其他插件完成，例如：purgecss-webpack-plugin。

   :::warning
   `purgecss-webpack-plugin` 对 `css module` 无能为力。
   :::
