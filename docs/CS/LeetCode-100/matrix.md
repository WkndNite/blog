---
date: 2025-03-15 10:57:22
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 矩阵
---

# Hot-100 矩阵

## 73. 矩阵置零

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const changeRows = (row) => {
    for (let i = 0; i < cols; i++) {
      if (matrix[row][i] !== 0) matrix[row][i] = Infinity;
    }
  };
  const changeCols = (col) => {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][col] !== 0) matrix[i][col] = Infinity;
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        changeRows(i);
        changeCols(j);
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === Infinity) matrix[i][j] = 0;
    }
  }

  return matrix;
};
```
