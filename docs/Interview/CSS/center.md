---
date: 2025-03-14 13:26:12
tags:
  - CSS
  - 面试
  - 前端
---

# 居中方式总结

## 经典真题

> 怎么让一个 div 水平垂直居中？

## 水平居中

- 设置盒子 margin : 0 auto：这种居中方式的原理在于设置 margin-left 为 auto 时，margin-left 就会被设置为能有多大就设置多大，所以盒子会跑到最右边，而设置 margin-right 为 auto 时，同理盒子就会跑到最左边。所以，当我们设置左右的 margin 都是 auto 的时候，盒子就跑到了中间，从而形成了水平居中。

- 第二种常见的方式就是通过 display : flex 设置盒子的外层盒子是一个弹性盒，然后通过 justify-content : center 使得内部的盒子居中。

## 垂直居中

关于盒子的垂直方向居中，方法就比较多了，这里介绍几种：

1. 通过 `vertical-align:middle` 实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     text-align: center;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
     vertical-align: middle;
     margin: 0 auto;
     display: inline-block;
   }
   .brotherBox {
     height: 100%;
     background: red;
     display: inline-block;
     vertical-align: middle;
   }
   ```

   :::warning

   - 生效的前提是元素的 display：inline-block。
   - 需要一个兄弟元素做参照物，让它垂直于兄弟元素的中心点。
     > vertical-align 对齐的方法是寻找兄弟元素中最高的元素作为参考。

   :::

2. 通过伪元素 `:before` 实现垂直居中。

   平白无故添加一个无意义的参考元素不怎么好，我们可以去除作为参考的兄弟元素，转为给父元素添加一个伪元素，如下：

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     text-align: center;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
     vertical-align: middle;
     margin: 0 auto;
     display: inline-block;
   }
   .container::before {
     content: '';
     height: 100%;
     display: inline-block;
     vertical-align: middle;
   }
   ```

3. 通过 `绝对定位` 实现垂直居中。

   这种方式需要设置父元素为相对定位，子元素为绝对定位，然后配合 margin-left 为负的盒子高度一半来实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     position: relative;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
     position: absolute;
     left: 50%;
     top: 50%;
     margin-left: -50px;
     margin-top: -50px;
   }
   ```

4. 通过 `transform` 实现垂直居中。

   可以通过定位配合 transform 也可以实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     position: relative;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translateX(-50px) translateY(-50px);
   }
   ```

5. 通过 `flex` 实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
   }
   ```

6. 可以通过 `flex + margin` 实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     display: flex;
   }

   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
     margin: auto;
   }
   ```

7. 通过 `grid` 实现垂直居中。

   ```CSS
   .container {
     width: 500px;
     height: 300px;
     background-color: pink;
     display: grid;
     place-items: center;
   }
   .item {
     width: 100px;
     height: 100px;
     background-color: skyblue;
   }
   ```

## 真题解答

> 怎么让一个 div 水平垂直居中？

- 通过 `vertical-align: middle` 实现垂直居中。
- 通过 `伪元素 :before` 实现垂直居中。
- 通过 `绝对定位` 实现垂直居中。
- 通过 `transform` 实现垂直居中。
- 通过 `flex` 实现垂直居中。
- 通过 `flex + margin` 实现垂直居中。
- 通过 `grid` 实现垂直居中。
