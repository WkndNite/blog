---
date: 2024-12-28
tags:
  - CSS
  - 前端
sticky: 2
---

# CSS 计算属性

浏览器对于 DOM 的渲染，是从 DOM 树的根节点开始，逐级遍历每个节点，计算每个节点的样式，然后绘制到屏幕上。在这个过程中，浏览器会计算每个节点的样式，这个计算过程就是计算值。那么，每一个 DOM 节点是如何从没有任何样式，到最终计算出全部 CSS 属性样式的呢？我们拿下面的代码来举个例子。

```css
/*author stylesheet*/
body {
 font-family: Arial;
}
.red {
 color: red;
 font-size: 40px;
}
h1 {
 font-size: 26px;
}
div h1.red {
 font-size: 3em;
 font-size: 30px;
}
/*user agent stylesheet*/
h1 {
 display: block;
 font-size: 2em;
 font-weight: bold;
}
```

## 确定声明值

属性值的计算第一步是确定声明值。参考样式表中没有冲突的声明，直接拿来，作为 CSS 属性值。

在上面的例子里，经过这一步，`h1` 的样式就会变成下面这样。

```css
h1 {
 display: block;
 color: red;
 font-weight: bold;
}
```

## 层叠冲突

如果有多个样式表，或者同一个样式表中有多个相同选择器的声明，就会发生层叠冲突。层叠冲突的解决，是根据 CSS 的层叠规则来解决的。层叠规则是：

- 比较重要性
  - 作者样式表会覆盖浏览器样式表
  - 重要声明会覆盖普通声明
- 比较特殊性
  - 特殊性高的选择器会覆盖特殊性低的选择器
  - 通过选择器的个数，计算得到一个四位数，数值越大，特殊性越高。千位取决于是不是内联样式，百位取决于 ID 选择器的个数，十位取决于类选择器、属性选择器和伪类选择器的个数，个位取决于元素选择器和伪元素选择器的个数。在以前，这个数字并不是逢十进一，而是逢 256 进一，现在已经分为了四个等级，单独存储数字比较了。
- 比较源次序
  - 后面的样式表会覆盖前面的样式表

:::tip 层叠在实际应用有什么用?

① 可以通过层叠来覆盖浏览器默认样式，比如 reset.css。\
② 可以通过层叠覆盖其余样式。\
③ **爱恨法则**，在书写 a 元素的样式，要按照 link-visited-hover-active 的顺序书写。
:::

在上面的例子里，比较重要性会选择抛弃掉浏览器样式里的 `font-size: 2em`;，然后比较特殊性，选择 `div h1.red` 的声明，最后比较源次序，选择最后一个声明，所以 `h1` 的样式会变成下面这样。

```css
h1 {
 display: block;
 color: red;
 font-weight: bold;
 font-size: 30px;
}
```

## 使用继承

那么全部的 CSS 属性我们是不可能都写一次的，这些属性又是怎么绑定到 DOM 节点上的呢？这就是继承的作用。继承是指，某些属性的值会从父元素继承到子元素。但是前提是——这个属性是可以继承的。CSS 中有很多属性是可以继承的，比如 `color`、`font-size`、`font-family` 等。而有一些属性是不可以继承的，比如 `border`、`margin`、`padding` 等。

在上面的例子里，如果我们在根节点设置字体种类，那么所有的子节点都会继承这个字体种类。但是，如果我们在根节点设置边框宽度，那么所有的子节点都不会继承这个边框宽度。

```css
h1 {
 display: block;
 color: red;
 font-weight: bold;
 font-size: 30px;
 font-family: Arial;
}
```

## 使用默认值

在经历过前面三步以后，如果某个属性还是没有值，那么就会使用默认值。

对于开头给出的例子，经过完整的四步以后，`h1` 的样式会变成下面这样。

```css
h1 {
 display: block;
 color: red;
 font-weight: bold;
 font-size: 30px;
 font-family: Arial;
 background-color: transparent;
 /*Other Styles*/
}
```