---
date: 2025-03-16 11:23:26
tags:
  - 二叉树
  - 数据结构与算法
  - 计算机基础
  - 代码随想录
---

# 二叉树

## 102. 二叉树的层序遍历

:::details

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};
```

:::

## 107. 二叉树的层序遍历 II

:::details

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.unshift(level);
  }
  return result;
};
```

:::

## 199. 二叉树的右视图

:::details

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
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level);
  }
  return result.map((arr) => arr[arr.length - 1]);
};
```

:::

## 637. 二叉树的层平均值

:::details

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
var averageOfLevels = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level);
  }
  function _sum(arr) {
    return arr.reduce((previous, current) => previous + current, 0);
  }
  return result.map((arr) => _sum(arr) / arr.length);
};
```

:::

## 429. N 叉树的层序遍历

:::details

```js
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.children && queue.push(...node.children);
    }
    result.push(level);
  }
  return result;
};
```

:::

## 515. 在每个树行中找最大值

:::details

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
var largestValues = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(level);
  }
  return result.map((arr) => Math.max(...arr));
};
```

:::

## 116. 填充每个节点的下一个右侧节点指针

:::details

```js
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return null;
  let leftMost = root;
  while (leftMost.left) {
    let head = leftMost;
    while (head) {
      head.left.next = head.right;
      if (head.next) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftMost = leftMost.left;
  }
  return root;
};
```

:::

<!-- TODO：## 117. 填充每个节点的下一个右侧节点指针 II -->

## 104. 二叉树的最大深度

:::details

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

:::

## 111. 二叉树的最小深度

:::details

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let result = Infinity;
  if (root.left) result = Math.min(minDepth(root.left), result);
  if (root.right) result = Math.min(minDepth(root.right), result);
  return 1 + result;
};
```

:::

## 226. 翻转二叉树

:::details

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root || root.length <= 1) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
```

:::

## 100. 相同的树

:::details

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
```

:::

## 572. 另一棵树的子树

:::details

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
```

:::
