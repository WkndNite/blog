---
date: 2025-03-10 16:56:14
tags:
  - CSS
  - 前端
  - 现代化 CSS
---

# 一文搞懂 flex

对于布局之前我们学习过 浮动 定位。那本身不算真正的布局，接下来要学习才属于真正的 css 布局（layout）。

Flex box，也称为弹性盒模型，是一种新的布局模式。它提供了一种更加有效的方式来布局、对齐和分配容器内项目的空间，即使它们的大小是动态的或者未知的。Flex box 布局主要思想是让容器能够改变其子元素的宽度、高度（和顺序）以最好地填充可用空间（主要是为了适应所有类型的显示设备和屏幕大小）。

## 基本概念

### 容器和项目

- Flex 容器：通过将一个元素的 display 属性设置为 flex 或 inline-flex 来创建一个 Flex 容器。
- Flex 项目：Flex 容器的直接子元素自动成为 Flex 项目。

:::info

- 容器设置为 `display: flex` 时，Flex 容器未显式设置与宽度相关的属性时，其宽度与其父容器等同（相当于 width: 100% ）。
- 容器设置为 `display: inline-flex` 时，Flex 容器未显式设置与宽度相关的属性时，其宽度等同于所有 Flex 项目的宽度和。
- 使用建议：使用 `display: inline-flex` 时最好结合 min-width 和 min-height 一起使用。不建议显式设置 width 和 height

:::

### 设置 Flex 会发生什么

flex 项目会水平单行排列，无论多少个项目都会在一行内展示，可能会发生压缩。默认排列的方向被称为主轴方向，也会有一个侧轴。 可以使用一些 flex 相关的 css 属性。

:::warning 注意
display 设置为 flex 时，Flex 容器从表现形式上类似于块容器，事实它是一个 Flex 容器，上下文格式是 FFC，因此运用于 BFC 上的一些布局属性就不再适用，比如：

- CSS 的 `float` 和 `clear` 属性在 Flex 项目上不起作用，也不会让 Flex 项目脱离文档流。
- CSS 的 `vertical-align` 属性在 Flex 项目上不起作用。
- CSS 伪元素 `::first-line` 和 `::first-letter` 在 Flex 容器上不起作用，而且 Flex 容器不会为其祖先提供首行或首字母格式化。

:::

## Flex 容器的主轴和交叉轴

### 主轴方向

`flex-direction` 属性定义了主轴的方向，它决定了 Flex 项目在容器中的排列方向。

- `row`：这是默认方向，项目沿着文本的书写方向水平排列，一般是从左到右。在 RTL 语言环境中，方向是从右到左。
- `row-reverse`：项目沿着文本的书写方向水平排列，但顺序相反，一般是从右到左。在 RTL 语言环境中，方向是从左到右。
- `column`：主轴是垂直方向，从上到下。
- `column-reverse`：主轴是垂直方向，从下到上。

### 主轴方向的对齐方式

主轴方向上的排列方式是通过 `justify-content` 属性来控制的，该属性定义了容器中项目对齐主轴的方式。

- `flex-start`：项目在交叉轴的起始位置对齐。
- `flex-end`：项目在交叉轴的结束位置对齐。
- `center`：项目在交叉轴的中心位置对齐。
- `space-between`：项目在交叉轴上均匀分布，第一个项目对齐到交叉轴的起始位置，最后一个项目对齐到交叉轴的结束位置，剩余的项目在它们之间均匀分布。
- `space-around`：项目在交叉轴上均匀分布，每个项目周围有相等的空间，项目之间的空间是项目与边框之间的空间的两倍。
- `space-evenly`：项目在交叉轴上均匀分布，每个项目之间的空间和项目与边框之间的空间相等。

### 交叉轴方向

当项目宽度超过容器宽度会被压缩，而非换行展示，想要换行展示需要用 `flex-wrap` 属性。该属性在 Flex 布局中用于控制 Flex 项是否换行以及如何换行。这个属性对于管理当 Flex 容器空间不足以容纳所有 Flex 项在一行或一列时的布局非常有用。

flex-wrap 属性的可选值：

- `nowrap`：这是默认值，表示 Flex 项不会换行，所有 Flex 项都会尝试在一行内排列。如果 Flex 项的总宽度超过容器宽度，它们会被压缩或溢出。
- `wrap`：表示 Flex 项可以换行。如果 Flex 项的总宽度超过容器宽度，它们会换行到下一行。
- `wrap-reverse`：表示 Flex 项可以换行，但换行的方向与 `wrap` 相反，即最后一行会显示在容器的顶部，第一行显示在容器的底部。

:::info
flex-direction 和 flex-wrap 属性可以合并为 `flex-flow` 属性，例如 `flex-flow: row wrap;`。
:::

### 交叉轴方向的对齐方式

通过设置 `align-items` 属性来控制交叉轴方向上的对齐方式。

- `stretch`：这是默认值，表示 Flex 项会拉伸以填满整个容器的高度（或宽度，取决于主轴的方向）。除非，**项目已经设置了具体的高度**。
- `flex-start`：项目在交叉轴的起始位置对齐。
- `flex-end`：项目在交叉轴的结束位置对齐。
- `center`：项目在交叉轴的中心位置对齐。
- `baseline`：项目在交叉轴的基线对齐。

### 多行对齐方式

`align-content` 属性用于在多行 Flex 项之间以及容器的边缘之间创建空间。它只在 `flex-wrap` 属性设置为 `wrap` 或 `wrap-reverse` 时生效。

- `stretch`：这是默认值，表示 Flex 项会拉伸以填满整个容器的高度（或宽度，取决于主轴的方向）。
- `flex-start`：项目在交叉轴的起始位置对齐。
- `flex-end`：项目在交叉轴的结束位置对齐。
- `center`：项目在交叉轴的中心位置对齐。
- `space-between`：项目在交叉轴上均匀分布，第一个项目对齐到交叉轴的起始位置，最后一个项目对齐到交叉轴的结束位置，剩余的项目在它们之间均匀分布。
- `space-around`：项目在交叉轴上均匀分布，每个项目周围有相等的空间，项目之间的空间是项目与边框之间的空间的两倍。
- `space-evenly`：项目在交叉轴上均匀分布，每个项目之间的空间和项目与边框之间的空间相等。

## Flex 项目属性

### align-self

`align-self` 属性允许单个 Flex 项目在交叉轴上具有不同的对齐方式，而其他项目仍然使用 `align-items` 属性的值。

- `auto`：默认值，表示继承父容器的 `align-items` 属性值。
- `stretch`：项目会拉伸以填满整个容器的高度（或宽度，取决于主轴的方向）。
- `flex-start`：项目在交叉轴的起始位置对齐。
- `flex-end`：项目在交叉轴的结束位置对齐。
- `center`：项目在交叉轴的中心位置对齐。
- `baseline`：项目在交叉轴的基线对齐。

### order

默认情况下，Flex 项按照它们在 HTML 中出现的顺序排列。

`order` 属性可以改变这个顺序，同时不改变 DOM 结构。

- `order` 属性接受一个整数作为值，默认值为 `0`。数值越小，项目越靠前。
- 可以使用负数来将项目排在最前面。

### flex-grow

`flex-grow` 属性定义了项目的放大比例，默认值为 `0`，即如果存在剩余空间，也不放大。

- `flex-grow` 属性接受一个非负整数作为值，表示项目的放大比例。
- 如果所有项目的 `flex-grow` 属性都为 `1`，则它们将等分剩余空间（如果有的话）。

flex 项目的最终宽度是：

$$
NewWidth = Width + { PositiveFreeSpace \times (flex-grow) \over \sum \  (flex-grow) }
$$

### flex-shrink

`flex-shrink` 属性定义了项目的缩小比例，默认值为 `1`，即如果空间不足，该项目将缩小。

- `flex-shrink` 属性接受一个非负整数作为值，表示项目的缩小比例。
- 如果所有项目的 `flex-shrink` 属性都为 `1`，当空间不足时，所有项目将等比例缩小。

flex 项目收缩计算公式如下：

$$
New Width = Width - { ShrunkSpace \times ShrinkRatio }
$$

$$
TotalShrinkScaledWidth = \sum Width \times flexShrinkValue
$$

$$
ShrunkRatio = { Width \times flexShrinkValue \over TotalShrinkScaledWidth }
$$

### flex-basis

`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。它的默认值为 `auto`，即项目的本来大小。

- `flex-basis` 属性接受一个长度值（如 `px`、`em` 等）或百分比作为值，表示项目的初始大小。
- `flex-basis` 在内容宽度超过预设值，会自动地由内容撑开；而 `width` 会在宽度不够时发生溢出。
- flex-basis 还支持一些关键字, 直接忽略 width 属性的作用：
  - content: 和 max-content 效果一致。
  - max-content: 文字不换行最大区域。
  - min-content: 文字自然换行最小区域。
  - fit-content: 作用不详。

:::info 提问：同时设置 `width` 和 `flex-basis` 最终宽度多少？

$$
FinalWidth = max(flexBasisValue , min(Content,Width))
$$

:::

:::tip
在 Flex 布局中，最好使用 `flex-basis`。
:::

## 总结

> [!IMPORTANT] 重点
> 在 Flex 布局中，`flex` 是用于设置 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写属性。

| **单值语法**  | **等同于**     | **备注**             |
| ------------- | -------------- | -------------------- |
| flex: initial | flex: 0 1 auto | 初始值，常用         |
| flex: 0       | flex: 0 1 0%   | 适用场景少           |
| flex: none    | flex: 0 0 auto | 推荐                 |
| flex: 1       | flex: 1 1 0%   | 推荐                 |
| flex: auto    | flex: 1 1 auto | 适用场景少，但很有用 |

## 补充：flex-gap

在 Flex 布局中，gap 是一个用于设置项目之间的间隙的属性。它是 row-gap 和 column-gap 的简写形式，用于定义主轴和交叉轴上的间隙大小。 具体来说，gap 属性接受一个长度值，表示项目之间的间隙大小。可以使用一个值来同时设置主轴和交叉轴上的间隙，也可以使用两个值分别设置主轴和交叉轴上的间隙。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/flex-gap.png)
