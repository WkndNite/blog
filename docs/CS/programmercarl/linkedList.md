---
date: 2025-03-17 20:52:44
tags:
  - 代码随想录
  - 链表
  - 数据结构与算法
  - 计算机基础
---

# 链表

## 203. 移除链表元素

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(-1,head);
    let current = dummy;
    while(current.next){
        if(current.next.val===val){
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    return dummy.next
};
```

## 707. 设计链表

<!-- TODO -->
