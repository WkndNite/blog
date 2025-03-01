---
date: 2025-03-01 23:49:19
tags:
  - LeetCode
  - 计算机基础
  - 数据结构与算法
---

# LeetCode Hot 100 - 链表

## 160. 相交链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  function _getLinkSize(head) {
    let cur = head;
    let size = 0;
    while (cur) {
      cur = cur.next;
      size++;
    }
    return size;
  }

  let sizeA = _getLinkSize(headA);
  let sizeB = _getLinkSize(headB);

  let [curA, curB] = [headA, headB];

  if (sizeA > sizeB) {
    [curA, curB] = [curB, curA];
    [sizeA, sizeB] = [sizeB, sizeA];
  }

  let sizeDiff = sizeB - sizeA;
  while (sizeDiff-- > 0) {
    curB = curB.next;
  }
  while (curB && curB !== curA) {
    curB = curB.next;
    curA = curA.next;
  }
  return curB;
};
```
