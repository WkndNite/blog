---
date: 2025-03-17 16:25:02
tags:
  - CSS
  - 前端
  - 工程化
---

# 解决类名冲突

## BEM

BEM 是一套针对 CSS 类样式的命名方法。

> 其他命名方法还有：OOCSS、AMCSS、SMACSS等等

BEM 全称是：Block Element Modifier。

一个完整的 BEM 类名：block\_\_element_modifier，例如：banner\_\_dot_selected，可以表示：轮播图中，处于选中状态的小圆点。

三个部分的具体含义为：

- Block：页面中的大区域，表示最顶级的划分，例如：轮播图(banner)、布局(layout)、文章(article)等等。
- element：区域中的组成部分，例如：轮播图中的横幅图片(banner\_\_img)、轮播图中的容器（banner\_\_container）、布局中的头部(layout\_\_header)、文章中的标题(article_title)。
- modifier：可选。通常表示状态，例如：处于展开状态的布局左边栏（layout\_\_left_expand）、处于选中状态的轮播图小圆点(banner\_\_dot_selected)

在某些大型工程中，如果使用 BEM 命名法，还可能会增加一个前缀，来表示类名的用途，常见的前缀有：

- l: layout，表示这个样式是用于布局的。
- c: component，表示这个样式是一个组件，即一个功能区域。
- u: util，表示这个样式是一个通用的、工具性质的样式。
- j: javascript，表示这个样式没有实际意义，是专门提供给 JS 获取元素使用的。

## CSS in JS

CSS in JS 的核心思想是：用一个 JS 对象来描述样式，而不是 CSS 样式表

例如下面的对象就是一个用于描述样式的对象：

```JavaScript
const styles = {
  backgroundColor: '#f40',
  color: '#fff',
  width: '400px',
  height: '500px',
  margin: '0 auto'
};
```

由于这种描述样式的方式根本就不存在类名，自然不会有类名冲突。

至于如何把样式应用到界面上，不是它所关心的事情，你可以用任何技术、任何框架、任何方式将它应用到界面。

> Vue、React 都支持 CSS in JS，可以非常轻松的应用到界面。

CSS in JS 的特点：

- 绝无冲突的可能：由于它根本不存在类名，所以绝不可能出现类名冲突。
- 更加灵活：可以充分利用 JS 语言灵活的特点，用各种招式来处理样式。
- 应用面更广：只要支持 JS 语言，就可以支持 CSS in JS，因此，在一些用 JS 语言开发移动端应用的时候非常好用，因为移动端应用很有可能并不支持 CSS。
- 书写不便：书写样式，特别是公共样式的时候，处理起来不是很方便。
- 在页面中增加了大量冗余内容：在页面中处理 CSS in JS 时，往往是将样式加入到元素的 style 属性中，会大量增加元素的内联样式，并且可能会有大量重复，不易阅读最终的页面代码。

## CSS module

> 通过命名规范来限制类名太过死板，而 CSS in JS 虽然足够灵活，但是书写不便。
>
> CSS module 开辟一种全新的思路来解决类名冲突的问题。

### 思路

CSS module 遵循以下思路解决类名冲突问题：

1. CSS 的类名冲突往往发生在大型项目中。
2. 大型项目往往会使用构建工具（Webpack 等）搭建工程。
3. 构建工具允许将 CSS 样式切分为更加精细的模块。
4. 同 JS 的变量一样，每个 CSS 模块文件中难以出现冲突的类名，冲突的类名往往发生在不同的 CSS 模块文件中。
5. 只需要保证构建工具在合并样式代码后不会出现类名冲突即可。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-31-13-54-37.png)

## 实现原理

在 Webpack 中，作为处理 CSS 的 CSS-loader，它实现了 CSS module 的思想，要启用 CSS module，需要将 CSS-loader 的配置 `modules` 设置为 `true`。

CSS-loader 的实现方式如下：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-31-14-00-56.png)

原理极其简单，开启了 CSS module 后，CSS-loader 会将样式中的类名进行转换，转换为一个唯一的 hash 值。

由于 hash 值是根据模块路径和类名生成的，因此，不同的 CSS 模块，哪怕具有相同的类名，转换后的 hash 值也不一样。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-31-14-04-11.png)

## 如何应用样式

CSS module 带来了一个新的问题：源代码的类名和最终生成的类名是不一样的，而开发者只知道自己写的源代码中的类名，并不知道最终的类名是什么，那如何应用类名到元素上呢？

为了解决这个问题，CSS-loader 会导出原类名和最终类名的对应关系，该关系是通过一个对象描述的。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-31-14-08-49.png)

这样一来，我们就可以在 JS 代码中获取到 CSS 模块导出的结果，从而应用类名了。

style-loader 为了我们更加方便的应用类名，会去除掉其他信息，仅暴露对应关系。

## 其他操作

### 全局类名

某些类名是全局的、静态的，不需要进行转换，仅需要在类名位置使用一个特殊的语法即可：

```CSS
:global(.main){
    ...
}
```

使用了 global 的类名不会进行转换，相反的，没有使用 global 的类名，表示默认使用了 local。

```CSS
:local(.main){
    ...
}
```

使用了 local 的类名表示局部类名，是可能会造成冲突的类名，会被 CSS module 进行转换。

### 如何控制最终的类名

绝大部分情况下，我们都不需要控制最终的类名，因为控制它没有任何意义。

如果一定要控制最终的类名，需要配置 CSS-loader 的 `localIdentName`。

## 其他注意事项

- CSS module 往往配合构建工具使用。
- CSS module 仅处理顶级类名，尽量不要书写嵌套的类名，也没有这个必要。
- CSS module 仅处理类名，不处理其他选择器。
- CSS module 还会处理 id 选择器，不过任何时候都没有使用 id 选择器的理由。
- 使用了 CSS module 后，只要能做到让类名望文知意即可，不需要遵守其他任何的命名规范。
