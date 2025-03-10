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

## 二叉树的比较

```js
function CompareTree(root1, root2) {
  if (root1 === root2) return true;
  if (!root1 || !root2) return false;
  if (root1.length !== root2.length) return false;
  if (root1.data !== root2.data) return false;
  return (
    CompareTree(root1.left, root2.left) && CompareTree(root1.right, root2.right)
  );
}
```

## 可对称二叉树比较

```js
function CompareTree(root1, root2) {
  if (root1 === root2) return true;
  if (!root1 || !root2) return false;
  if (root1.length !== root2.length) return false;
  if (root1.data !== root2.data) return false;
  return (
    (CompareTree(root1.left, root2.left) &&
      CompareTree(root1.right, root2.right)) ||
    (CompareTree(root1.left, root2.right) &&
      CompareTree(root1.right, root2.left))
  );
}
```

## 二叉树的 diff 算法

```js
function diffTree(root1, root2) {
  const diffList = [];
  if (root1 === root2) return diffList;
  else if (!root1) {
    diffList.push({ type: 'add', before: null, after: root2 });
  } else if (!root2) {
    diffList.push({ type: 'remove', before: root1, after: null });
  } else if (root1.data !== root2.data) {
    diffList.push({ type: 'update', before: root1.data, after: root2.data });
    diffTree(root1.left, root2.left);
    diffTree(root1.right, root2.right);
  } else {
    diffTree(root1.left, root2.left);
    diffTree(root1.right, root2.right);
  }
}
```
