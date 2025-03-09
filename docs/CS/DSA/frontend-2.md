---
date: 2025-03-09 11:24:22
tags:
  - 数据结构与算法
  - 计算机基础
  - 前端必会算法
---

# 前端必会算法（二）

## 二叉树的遍历

```js
function preOrder(node) {
  if (node) {
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
}
```

## 前序中序还原二叉树

```js
function buildTree(preOrder, inOrder) {
  if (!preOrder.length || !inOrder.length) return null;
  const root = preOrder[0];
  const rootIndex = inOrder.indexOf(root);

  const preOrderLeft = preOrder.slice(1, rootIndex + 1);
  const preOrderRight = preOrder.slice(rootIndex + 1);

  const inOrderLeft = inOrder.slice(0, rootIndex);
  const inOrderRight = inOrder.slice(rootIndex + 1);

  return {
    data: root,
    left: buildTree(preOrderLeft, inOrderLeft),
    right: buildTree(preOrderRight, inOrderRight),
  };
}
```

## 中序后序还原二叉树

```js
function buildTree(inOrder, postOrder) {
  if (!inOrder.length || !postOrder.length) return null;
  const root = postOrder[postOrder.length - 1];
  const rootIndex = inOrder.indexOf(root);

  const inOrderLeft = inOrder.slice(0, rootIndex);
  const inOrderRight = inOrder.slice(rootIndex + 1);

  const postOrderLeft = postOrder.slice(0, rootIndex);
  const postOrderRight = postOrder.slice(rootIndex, postOrder.length - 1);

  return {
    data: root,
    left: buildTree(inOrderLeft, postOrderLeft),
    right: buildTree(inOrderRight, postOrderRight),
  };
}
```
