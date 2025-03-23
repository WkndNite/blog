---
date: 2025-03-15 11:12:23
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 图论
---

# Hot-100 图论

## 200. 岛屿数量

```JavaScript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  function dfs(grid, i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    ) {
      return;
    }
    grid[i][j] = '0';
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
```

## 994. 腐烂的橘子

```JavaScript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    if (!grid.length || !grid.flat().includes(1)) return 0;
    const rows = grid.length;
    const columns = grid[0].length;
    let queue = [];
    let fresh = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j]) {
                queue.push([i, j])
            }
        }
    }

    let result = 0;
    while (fresh && queue.length) {
        result++;
        const temp = queue;
        queue = [];
        for (const [x, y] of temp) {
            for (const [i, j] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
                if (i >= 0 && i < rows && j >= 0 && j < columns && grid[i][j] === 1) {
                    fresh--;
                    grid[i][j] = 2;
                    queue.push([i, j])
                }
            }
        }
    }
    return fresh ? -1 : result


};
```

## 207. 课程表

```JavaScript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const map = new Map();
    for(let i = 0;i < prerequisites.length;i++){
        const from = prerequisites[i][1];
        const to = prerequisites[i][0];
        inDegree[to]++;
        const arr = map.get(from);
        if(arr){
            map.set(from,[...arr,to])
        }else{
            map.set(from,[to])
        }
    }

    const queue = [];
    for(let i = 0;i < numCourses;i++){
        if(!inDegree[i])queue.push(i)
    }

    let count = 0;
    while(queue.length){
        const selected = queue.shift();
        count++;
        const laterCourses = map.get(selected);
        if(laterCourses && laterCourses.length){
            for(const to of laterCourses){
                inDegree[to]--;
                if(!inDegree[to])queue.push(to)
            }
        }
    }
    return count === numCourses;
};
```
