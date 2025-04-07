---
tags:
  - JavaScript
  - 前端
date: 2025-01-01
---

# 一些细节

这里放了一些我在复盘 JS 过程中遇到的一些坑。

## 逗号运算符

```JavaScript
let x = 1;
(x = x++ * 2), x++ * 2, x++ * 2;
console.log(x); // 4

let y = 1;
y = (y++ * 2, y++ * 2, y++ * 2);
console.log(y); // 6
```
