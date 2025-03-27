// #region quickSort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  let i = left;
  let j = right;
  const leader = arr[left];
  while (i < j) {
    while (i < j && arr[j] >= leader) {
      j--;
    }
    arr[i] = arr[j];
    while (i < j && arr[i] <= leader) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = leader;
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
  return arr;
}

console.log(quickSort([1, 3, 2, 5, 4, 6, 7, 9, 8, 0]));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// #endregion quickSort

// #region heapSort
function getSmallestK(arr, k) {
  let heapSize = arr.length;
  buildMinHeap(arr);
  let i = arr.length - 1;
  while (k--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapSize--;
    i--;
    heapify(arr, 0, heapSize);
  }
  return arr.slice(i + 1).reverse();
}

function buildMinHeap(arr) {
  let heapSize = arr.length;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(arr, i, heapSize);
  }
}
function heapify(arr, i, heapSize) {
  let left = i * 2 + 1,
    right = i * 2 + 2;
  let smallest = i;
  if (left < heapSize && arr[left] < arr[smallest]) {
    smallest = left;
  }
  if (right < heapSize && arr[right] < arr[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, smallest, heapSize);
  }
}

console.log(getSmallestK([1, 3, 2, 5, 4, 6, 7, 9, 8, 0], 3));
// [0, 1, 2]
// #endregion heapSort

// #region quickSelect
function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function partition(arr, left, right) {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  const pivot = arr[pivotIndex];
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
      storeIndex++;
    }
  }
  [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
  return storeIndex;
}

function quickSelect(arr, left, right, k) {
  if (left === right) return arr[left];
  const pivotIndex = partition(arr, left, right);
  if (pivotIndex === k) return arr[pivotIndex];
  else if (pivotIndex > k) return quickSelect(arr, left, pivotIndex - 1, k);
  else return quickSelect(arr, pivotIndex + 1, right, k);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
// #endregion quickSelect

// #region bfprt
let findKthSmallest = function (arr, k) {
  return bfprt(arr, 0, arr.length - 1, k - 1);
};
function partition(arr, left, right, pivot) {
  let i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) [arr[i++], arr[j--]] = [arr[j], arr[i]];
  }
  return j;
}
function findMedian(arr, left, right) {
  let subArr = arr.slice(left, right + 1);
  subArr.sort((a, b) => a - b);
  return subArr[Math.floor(subArr.length / 2)];
}

function medianOfMedians(arr, left, right) {
  let length = right - left + 1;
  if (length <= 5) return findMedian(arr, left, right);
  let medians = [];
  for (let i = left; i <= right; i += 5) {
    let subArr = arr.slice(i, Math.min(i + 5, right + 1));
    medians.push(findMedian(subArr, 0, subArr.length - 1));
  }
  return medianOfMedians(medians, 0, medians.length - 1);
}

function bfprt(arr, left, right, k) {
  if (left === right) return arr[left];

  const pivot = medianOfMedians(arr, left, right);
  let pivotIndex = partition(arr, left, right, pivot);

  if (pivotIndex === k) return arr[pivotIndex];
  else if (pivotIndex > k) return bfprt(arr, left, pivotIndex, k);
  else return bfprt(arr, pivotIndex + 1, right, k);
}

console.log(findKthSmallest([3, 2, 1, 5, 6, 4], 2)); // 2
// #endregion bfprt
