---
date: 2025-03-01 23:49:19
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 链表

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

## 141. 环形链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
};
```

## 142. 环形链表 II

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  // a + ( n + 1 ) * b + n * c = 2 * ( a + b )
  // (n - 1 ) * b + n * c = a = ( n - 1 ) * ( b + c ) + c
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
```

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

## 206. 反转链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newHead = null;
  while (head) {
    const next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
};
```

## 234. 回文链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const result = [];
  let cur = head;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  const length = result.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    if (result[left] !== result[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```
