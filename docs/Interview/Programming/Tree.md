---
date: 2025-07-21 23:18:37
tags:
  - 二叉树
  - 刷题
---

# 二叉树

前序遍历

```JavaScript
var preorderTraversal = function(root) {
   let result = [];
   function _deal(node){
    if(node){
        result.push(node.val);
        _deal(node.left);
        _deal(node.right);
    }
   }
   _deal(root);
   return result;
};

var preorderTraversal = function (root) {
    const stack = [];
    const result = [];
    if(root) stack.push(root)
    while (stack.length) {
        const curNode = stack.pop();
        result.push(curNode.val);

        if (curNode.right) stack.push(curNode.right);
        if (curNode.left) stack.push(curNode.left)
    }

    return result;
}
```
