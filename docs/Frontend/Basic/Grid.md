---
date: 2025-03-13 22:11:19
tags:
  - CSS
  - 前端
  - 现代化 CSS
---

# 盘点 CSS Grid

`display: grid;` 或者 `inline-grid;` 可以实现 grid 布局。

二者区别是：

- inline-grid 容器外部盒子保持内联特性，因此可以和图片文字在同一行显示；
- grid 容器保持块状特性，宽度默认为 100%，不和内联元素在一行显示。

| 作用在 grid 容器上    | 作用在 grid 子项上 |
| --------------------- | ------------------ |
| grid-template-columns | grid-column-start  |
| grid-template-rows    | grid-column-end    |
| grid-template-areas   | grid-row-start     |
| grid-template         | grid-row-end       |
| grid-auto-columns     | grid-column        |
| grid-auto-rows        | grid-row           |
| grid-auto-flow        | grid-area          |
| grid                  | justify-self       |
| justify-items         | align-self         |
| align-items           | place-self         |
| place-items           |                    |
| justify-content       |                    |
| align-content         |                    |
| place-content         |                    |
| column-gap            |                    |
| row-gap               |                    |
| gap                   |                    |

## grid-template-columns/rows

`grid-template-columns` 和 `grid-template-rows` 是用于定义 CSS Grid 布局的两个属性，默认值是 `auto`。

它们分别用于指定网格容器的列和行的大小和结构。 grid-template-columns 设置列的宽度，单元格的宽度 grid-template-rows 设置行的高度，单元格的高度

### 单位

- `px`：像素单位，用于指定固定宽度的列或行。
- `%`：百分比单位，用于指定相对于网格容器宽度的列或行的大小。
- `fr`：fraction（分数）单位，用于指定网格容器中可用空间的比例分配。
- `em`：相对于当前元素的字体大小的单位，用于指定列或行的大小。
- `rem`：相对于根元素（html 元素）的字体大小的单位，用于指定列或行的大小。
- `vw`：视口宽度的百分比单位，用于指定列或行的大小。
- `vh`：视口高度的百分比单位，用于指定列或行的大小。
- `auto`：自动计算列或行的大小，根据内容自动调整。
- `min-content`：设置大小为内容的最小尺寸。
- `max-content`：设置大小为内容的最大尺寸。

### 函数

- `repeat()`：用于重复指定数量的列或行，<mark>是一个只能在这两个属性用的函数。</mark>
- `minmax()`：用于指定列或行的最小和最大尺寸。
- `fit-content()`：用于指定列或行的最大尺寸，并允许内容溢出。
- `auto-fill`：自动填充网格线，网格容器会根据列或行的尺寸重复创建尽可能多的轨道，并在容器内填满它们。
- `auto-fit`：与 `auto-fill` 类似，但任何未被内容占用的轨道将会被收缩并且不会占据空间。

> 网格线可以像下面这样命名：
>
> ```CSS :no-line-numbers
> grid-template-columns: [first] 100px [line2] 100px [line3] auto [end];
> ```

## grid-template-areas

`grid-template-areas` 是一个用于定义网格布局的 CSS 属性，它允许你通过指定网格区域来创建复杂的布局。

`grid-template-areas` 属性接受一个字符串，其中每个字符代表一个网格单元。字符串中的每个单词代表一个区域，区域之间用空格分隔。每个区域可以包含一个或多个网格单元。

```CSS
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    '. footer .';
}
```

区域名可以包含任意字符，包括空格和特殊字符。区域名之间用空格分隔，每个区域名代表一个网格区域。例如，`header`、`sidebar` 和 `content` 是三个不同的区域名。

空区域可以用点（`.`）表示，表示该区域不包含任何网格单元。例如，在上面的例子中，`footer` 区域两侧有一个空区域，表示该区域不包含任何网格单元。

然后，grid 子项就可以使用 `grid-area` 属性来指定它们应该放置在哪个区域中。

```CSS
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```

## grid-template

`grid-template` 是一个简写属性，用于同时设置 `grid-template-columns`、`grid-template-rows` 和 `grid-template-areas` 属性。

可以给该属性传入行和列的值：

```CSS
.container {
  display: grid;
  grid-template: 1fr 1fr 1fr / repeat(3, 1fr);
}
```

也可以传入区域名和行高列宽：

```CSS
.container {
  display: grid;
  grid-template: 'header header header' 50px 'sidebar content content' 1fr 'footer footer footer' 50px / 1fr 1fr 1fr;
}
```

:::warning
`grid-template` 缩写在涉及到 areas 的时候 `repeat()` 函数不能使用。
:::

## grid-auto-columns/rows

`grid-auto-columns` 和 `grid-auto-rows` 属性的作用是指定任何自动生成的网格（也称为隐式网格）的尺寸大小。

当你在网格容器中定义了 `grid-template-columns` 和 `grid-template-rows` 属性，但网格项的数量超过了定义的网格轨道数量时，浏览器会自动生成额外的网格轨道。这些额外的网格轨道被称为隐式网格。

```CSS
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-auto-rows: 50px;
}
```

## grid-auto-flow

`grid-auto-flow` 属性用于控制隐式网格项的放置顺序，可选属性值有 `row`、`column` 和 `dense`。

- `row`：默认值，按行顺序放置隐式网格项。
- `column`：按列顺序放置隐式网格项。
- `dense`：按最紧密的方式填充隐式网格项，即使这会导致网格项的顺序与源代码中的顺序不一致。

## grid

熟练使用 grid 缩写属性，是掌握网格布局的重要标志之一。

grid 属性的缩写规则比较复杂。它允许你同时设置以下属性：

- `grid-template-rows` 和 `grid-template-columns`
- `grid-template-areas`
- `grid-auto-rows` 和 `grid-auto-columns`
- `grid-auto-flow`

整体写法可以分为四大类：

- `grid:none`：表示不使用网格布局。
- `grid:[grid-template]`：表示只使用 `grid-template` 属性。
- `grid:[grid-template-rows] [grid-auto-flow && dense?] / [grid-auto-columns]`：表示规定网格行高与列宽，同时规定隐式网格项的放置顺序为 row。
- `grid:[grid-template-rows] / [grid-auto-flow && dense?][grid-auto-columns]`：表示规定网格行高与列宽，同时规定隐式网格项的放置顺序为 column。

## gap

`gap` 属性用于设置网格项之间的间距。它是一个简写属性，可以同时设置行间距和列间距。

- `gap: 10px;`：设置行间距和列间距为 10 像素。
- `row-gap: 10px;`：设置行间距为 10 像素。
- `column-gap: 10px;`：设置列间距为 10 像素。
- `gap: 10px 20px;`：设置行间距为 10 像素，列间距为 20 像素。

## 排列方式

### justify-items

`justify-items` 属性用于设置网格项在网格容器中的水平对齐方式。

- `start`：将网格项的起始边缘对齐到网格容器的起始边缘。
- `end`：将网格项的结束边缘对齐到网格容器的结束边缘。
- `center`：将网格项在网格容器中居中对齐。
- `stretch`：将网格项拉伸以填充整个网格单元格。

### align-items

`align-items` 属性用于设置网格项在网格容器中的垂直对齐方式。

- `start`：将网格项的起始边缘对齐到网格容器的起始边缘。
- `end`：将网格项的结束边缘对齐到网格容器的结束边缘。
- `center`：将网格项在网格容器中居中对齐。
- `stretch`：将网格项拉伸以填充整个网格单元格。
- `baseline`：将网格项的基线对齐到网格容器的基线。

:::warning

- normal 是默认值，会根据使用场景的不同表现为 stretch 或者 start。
- 如果 grid 子项是具有内在尺寸或具有内在比例的元素，则此时 normal 的表现类似于 start 属性值的表现。

:::

### place-items

`place-items` 是一个简写属性，用于同时设置 `align-items` 和 `justify-items` 属性。

- `place-items: start;`：将网格项的起始边缘对齐到网格容器的起始边缘。
- `place-items: end;`：将网格项的结束边缘对齐到网格容器的结束边缘。
- `place-items: center;`：将网格项在网格容器中居中对齐。
- `place-items: stretch;`：将网格项拉伸以填充整个网格单元格。
- `place-items: baseline;`：将网格项的基线对齐到网格容器的基线。
- `place-items: start end;`：将网格项的起始边缘对齐到网格容器的起始边缘，将网格项的结束边缘对齐到网格容器的结束边缘。

> 当传入两个值，第一个值表示 align-items，第二个值表示 justify-items。

### justify-content

`justify-content` 属性用于设置网格容器内的网格项在水平方向上的对齐方式。

- `start`：将网格项对齐到容器的起始边缘。
- `end`：将网格项对齐到容器的结束边缘。
- `center`：将网格项在容器中居中对齐。
- `space-between`：将网格项在容器中均匀分布，第一个网格项对齐到容器的起始边缘，最后一个网格项对齐到容器的结束边缘，剩余的网格项均匀分布。
- `space-around`：将网格项在容器中均匀分布，每个网格项两侧的间距相等，网格项之间的间距是网格项两侧间距的一半。
- `space-evenly`：将网格项在容器中均匀分布，每个网格项之间的间距相等，包括网格项与容器边缘之间的间距。

### align-content

`align-content` 属性用于设置网格容器内的网格项在垂直方向上的对齐方式。

- `start`：将网格项对齐到容器的起始边缘。
- `end`：将网格项对齐到容器的结束边缘。
- `center`：将网格项在容器中居中对齐。
- `space-between`：将网格项在容器中均匀分布，第一个网格项对齐到容器的起始边缘，最后一个网格项对齐到容器的结束边缘，剩余的网格项均匀分布。
- `space-around`：将网格项在容器中均匀分布，每个网格项两侧的间距相等，网格项之间的间距是网格项两侧间距的一半。
- `space-evenly`：将网格项在容器中均匀分布，每个网格项之间的间距相等，包括网格项与容器边缘之间的间距。

### place-content

`place-content` 属性用于同时设置 `align-content` 和 `justify-content` 属性。

- `place-content: start;`：将网格项对齐到容器的起始边缘。
- `place-content: end;`：将网格项对齐到容器的结束边缘。
- `place-content: center;`：将网格项在容器中居中对齐。
- `place-content: space-between;`：将网格项在容器中均匀分布，第一个网格项对齐到容器的起始边缘，最后一个网格项对齐到容器的结束边缘，剩余的网格项均匀分布。
- `place-content: space-around;`：将网格项在容器中均匀分布，每个网格项两侧的间距相等，网格项之间的间距是网格项两侧间距的一半。
- `place-content: space-evenly;`：将网格项在容器中均匀分布，每个网格项之间的间距相等，包括网格项与容器边缘之间的间距。
- `place-content: start end;`：将网格项对齐到容器的起始边缘，将网格项对齐到容器的结束边缘。

> 当传入两个值，第一个值表示 align-content，第二个值表示 justify-content。

## grid 项目区间范围设置属性

```CSS
.item-1 {
  /* 也可以传入负数表示倒着数 */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.item-2 {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}
.item-3 {
  grid-area: 1 / 1 / 3 / 3;
}
```

> span 关键字
>
> - `grid-column-start: span 2;` 表示网格项的起始列是当前列，结束列是当前列的下一列，即跨越两列。
> - 不建议 grid-column-start 和 grid-column-end 同时使用span 语法，因为完全没有必要，且不会产生任何效果。

## grid 项目对齐方式

```CSS
.item {
  justify-self: auto | normal | stretch | start | end | center | baseline;
  align-self: auto | normal | stretch | start | end | center | baseline;
}
```
