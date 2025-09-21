---
date: 2025-03-17 19:09:15
description: 拒绝一切的牵一发而动全身 不再深陷代码重复编写的泥潭
tags:
  - CSS
  - 前端
  - 工程化
---

# 解决重复样式的问题

## 基本原理

编写 css 时，受限于 css 语言本身，常常难以处理一些问题：

- 重复的样式值：例如常用颜色、常用尺寸。
- 重复的代码段：例如绝对定位居中、清除浮动。
- 重复的嵌套书写。

由于官方迟迟不对 css 语言本身做出改进，一些第三方机构开始想办法来解决这些问题。

其中一种方案，便是预编译器。

预编译器的原理很简单，即使用一种更加优雅的方式来书写样式代码，通过一个编译器，将其转换为可被浏览器识别的传统 css 代码。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-03-11-48-45.png)

目前，最流行的预编译器有 `LESS` 和 `SASS`。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-02-03-11-50-05.png)

> less官网：<http://lesscss.org/>
>
> less中文文档1（非官方）：<http://lesscss.cn/>
>
> less中文文档2（非官方）：<https://less.bootcss.com/>
>
> sass官网：<https://sass-lang.com/>
>
> sass中文文档1（非官方）：<https://www.sass.hk/>
>
> sass中文文档2（非官方）：<https://sass.bootcss.com/>

## LESS 的安装和使用

从原理可知，要使用 LESS，必须要安装 LESS 编译器

LESS 编译器是基于 node 开发的，可以通过 npm 下载安装：

```shell :no-line-numbers [npm]
npm i -D less
```

安装好了 less 之后，它提供了一个 CLI 工具`lessc`，通过该工具即可完成编译：

```shell :no-line-numbers
lessc less代码文件 编译后的文件
```

试一试:

新建一个`index.less`文件，编写内容如下：

```less
// less代码
@red: #f40;

.redColor {
  color: @red;
}
```

运行命令：

```shell
lessc index.less index.css
```

可以看到编译之后的代码：

```CSS
.redColor {
  color: #f40;
}
```

## LESS 的基本使用

具体的使用见文档：<https://less.bootcss.com/>

- 变量
- 混合
- 嵌套
- 运算
- 函数
- 作用域
- 注释
- 导入

## 在 Webpack 中使用

在 Webpack 中使用 LESS，需要安装 `less-loader`：

```shell :no-line-numbers [npm]
npm i -D less-loader
```

安装好了之后，在 Webpack 的配置文件中，添加一个`less-loader`的配置项即可：

```JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader?modules', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
```

这样，Webpack 就会自动将 LESS 文件编译为 CSS 文件，并插入到页面中。
