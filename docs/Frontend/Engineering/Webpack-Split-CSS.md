---
date: 2025-03-17 16:08:57
tags:
  - Webpack
  - CSS
  - 工程化
  - 前端
---

# 利用 Webpack 拆分 CSS

要拆分 CSS，就必须把 CSS 当成像 JS 那样的模块；要把 CSS 当成模块，就必须有一个构建工具（Webpack），它具备合并代码的能力。

而 Webpack 本身只能读取 CSS 文件的内容、将其当作 JS 代码进行分析，因此，会导致错误。

于是，就必须有一个 loader，能够将 CSS 代码转换为 JS 代码。

## CSS-loader

CSS-loader 的作用，就是将 CSS 代码转换为 JS 代码。

它的处理原理极其简单：将 CSS 代码作为字符串导出。

例如：

```CSS
.red {
  color: '#f40';
}
```

经过 CSS-loader 转换后变成 JS 代码：

```JavaScript
module.exports = `.red{
    color:"#f40";
}`;
```

> 上面的 JS 代码是经过简化后的，不代表真实的 CSS-loader 的转换后代码，CSS-loader 转换后的代码会有些复杂，同时会导出更多的信息，但核心思想不变。

再例如：

```CSS
.red {
  color: '#f40';
  background: url('./bg.png');
}
```

经过 CSS-loader 转换后变成 JS 代码：

```JavaScript
var import1 = require('./bg.png');
module.exports = `.red{
    color:"#f40";
    background:url("${import1}")
}`;
```

这样一来，经过 Webpack 的后续处理，会把依赖 `./bg.png` 添加到模块列表，然后再将代码转换为：

```JavaScript
var import1 = __Webpack_require__('./src/bg.png');
module.exports = `.red{
    color:"#f40";
    background:url("${import1}")
}`;
```

再例如：

```CSS
@import './reset.CSS';
.red {
  color: '#f40';
  background: url('./bg.png');
}
```

会转换为：

```JavaScript
var import1 = require('./reset.CSS');
var import2 = require('./bg.png');
module.exports = `${import1}
.red{
    color:"#f40";
    background:url("${import2}")
}`;
```

总结，CSS-loader 干了什么：

1. 将 CSS 文件的内容作为字符串导出。
2. 将 CSS 中的其他依赖作为 require 导入，以便 Webpack 分析依赖。

## style-loader

由于 CSS-loader 仅提供了将 CSS 转换为字符串导出的能力，剩余的事情要交给其他 loader 或 plugin 来处理。

style-loader 可以将 CSS-loader 转换后的代码进一步处理，将 CSS-loader 导出的字符串加入到页面的 style 元素中。

例如：

```CSS
.red {
  color: '#f40';
}
```

经过 CSS-loader 转换后变成 JS 代码：

```JavaScript
module.exports = `.red{
    color:"#f40";
}`;
```

经过 style-loader 转换后变成：

```JavaScript
module.exports = `.red{
    color:"#f40";
}`;
var style = module.exports;
var styleElem = document.createElement('style');
styleElem.innerHTML = style;
document.head.appendChild(styleElem);
module.exports = {};
```

> 以上代码均为简化后的代码，并不代表真实的代码。
>
> style-loader 有能力避免同一个样式的重复导入。
