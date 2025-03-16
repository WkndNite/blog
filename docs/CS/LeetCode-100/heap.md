---
date: 2025-03-15 11:52:12
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 堆
---

# Hot-100 堆

## 215. 数组中的第K个最大元素

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function maxHeapify(nums, index, heapSize) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;
    if (left < heapSize && nums[left] > nums[largest]) largest = left;
    if (right < heapSize && nums[right] > nums[largest]) largest = right;
    if (largest !== index) {
      [nums[index], nums[largest]] = [nums[largest], nums[index]];
      maxHeapify(nums, largest, heapSize);
    }
  }
  function buildMaxHeap(nums, size) {
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      maxHeapify(nums, i, size);
    }
  }
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    --heapSize;
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
};
```
