---
date: 2025-03-07 18:56:43
tags:
  - ESnext
  - JavaScript
  - 前端
---

# ES6 中数组的改动

## for - of 循环

示例一：

```JavaScript
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item);
}

for (const item of arr) {
  console.log(item);
}
```

示例二：

```JavaScript
const elements = document.querySelectorAll('.item');
for (const elem of elements) {
  // ...
}
```

## 新增 API

| API                         | 作用                                                                      |
| --------------------------- | ------------------------------------------------------------------------- |
| Array.isArray(target)       | 判断一个值是否为数组                                                      |
| Array.from(source)          | 将类数组对象或可迭代对象转换为数组                                        |
| Array.prototype.fill(n)     | 将数组的某些项设置为 n                                                    |
| Array.prototype.filter(fn)  | 过滤数组，返回一个新数组，新数组中的元素是 fn 返回 true 的元素            |
| Array.prototype.forEach(fn) | 遍历数组，对每个元素执行 fn                                               |
| Array.prototype.map(fn)     | 遍历数组，对每个元素执行 fn，返回一个新数组，新数组中的元素是 fn 的返回值 |
| Array.prototype.reduce(fn)  | 遍历数组，对每个元素执行 fn，返回一个值                                   |
| Array.prototype.some(fn)    | 遍历数组，对每个元素执行 fn，如果 fn 返回 true，则返回 true               |
| Array.prototype.every(fn)   | 遍历数组，对每个元素执行 fn，如果 fn 返回 false，则返回 false             |
| Array.prototype.find(fn)    | 遍历数组，对每个元素执行 fn，返回第一个 fn 返回 true 的元素               |
| Array.prototype.includes()  | 判断一个值是否在数组中                                                    |
