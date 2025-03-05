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

## 21. 合并两个有序链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} i
 * @param {ListNode} j
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let i = list1;
  let j = list2;
  let res = new ListNode(-101, null);
  let cur = res;
  while (i && j) {
    if (i.val <= j.val) {
      cur.next = i;
      cur = cur.next;
      i = i.next;
    } else {
      cur.next = j;
      cur = cur.next;
      j = j.next;
    }
  }
  while (i) {
    cur.next = i;
    cur = cur.next;
    i = i.next;
  }
  while (j) {
    cur.next = j;
    cur = cur.next;
    j = j.next;
  }
  return res.next;
};
```
