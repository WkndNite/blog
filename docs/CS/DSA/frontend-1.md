---
date: 2025-03-09 11:24:22
tags:
  - 数据结构与算法
  - 计算机基础
  - 前端必会算法
---

# 前端必会算法（一）

## 链表的逆置

```JavaScript
function reverse(node) {
  let previous = null;
  let current = node;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
```

## 冒泡排序

```JavaScript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}
```

## 选择排序

```JavaScript
function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
```

## 简单快速排序

```JavaScript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let leader = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < leader) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), leader, ...quickSort(right)];
}
```

## 标准快速排序

```JavaScript
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  let i = left;
  let j = right;
  const leader = arr[left];
  while (i < j) {
    while (i < j && arr[j] >= leader) {
      j--;
    }
    arr[i] = arr[j];
    while (i < j && arr[i] <= leader) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = leader;
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
  return arr;
}
```
