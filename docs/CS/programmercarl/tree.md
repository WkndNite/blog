---
date: 2025-03-15 22:30:22
tags:
  - 代码随想录
  - 计算机基础
  - 二叉树
  - 数据结构与算法
---

# 二叉树

## 二叉树的节点定义

```js
function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
```

## 二叉树的递归遍历

:::code-group

```js [前序遍历]
function preOrderTraversal(root) {
  return root
    ? [
        root.value,
        ...preOrderTraversal(root.left),
        ...preOrderTraversal(root.right)
      ]
    : [];
}
```

```js [中序遍历]
function inOrderTraversal(root) {
  return root
    ? [
        ...inOrderTraversal(root.left),
        root.value,
        ...inOrderTraversal(root.right)
      ]
    : [];
}
```

```js [后序遍历]
function postOrderTraversal(root) {
  return root
    ? [
        ...postOrderTraversal(root.left),
        ...postOrderTraversal(root.right),
        root.value
      ]
    : [];
}
```

:::

## 二叉树的迭代遍历

:::code-group

```js [前序遍历]
function preOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.value);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
}
```

```js [中序遍历]
function inOrderTraversal(root) {
  if (!root) return [];
  let current = root;
  const stack = [];
  const result = [];
  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.value);
      current = current.right;
    }
  }
  return result;
}
```

```js [后序遍历]
function postOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.unshift(node.value);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result;
}
```

:::

## 二叉树的层序遍历

```js
function levelOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
```
