---
date: 2025-03-08 23:18:21
tags:
  - leetcode100
  - 计算机基础
  - 数据结构与算法
---

# 树

## 94. 二叉树的中序遍历

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const _inorder = (root) => {
    if (!root) return;
    _inorder(root.left);
    result.push(root.val);
    _inorder(root.right);
  };
  _inorder(root);
  return result;
};
```
