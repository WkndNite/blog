---
date: 2025-08-06 17:59:38
tags:
  - 笔试
  - 前端
  - 秋招
---

<style scoped>
.task-list{
  width: 400px;
  display: flex;
  justify-content: space-between;
  .task-list-item{
    margin: 0;
  }
}
</style>

# 往届刷题总结

## 计算机基础

1. 存储一个 32 位的数据 0x9876521 到地址 4000h~4003h，小端方式存储，则 4000h 地址中存放的数据是 ( )。

- [ ] 0x09
- [ ] 0x87
- [ ] 0x65
- [x] 0x21

## 编程

1. 对于一个序列的中位数判定，若是奇数长度的序列不解释，若是偶数长度的序列选择中间两个数字里的较小者。现给定一个序列，排序以后每次取出中位数，并从序列剔除该数得到一个新的序列，最后输出整个序列按照取中位数顺序得到的结果。<el-tag type='primary'>科大讯飞 24 秋招</el-tag><el-tag type='danger'>超时</el-tag>

   :::details 🔍 展开代码
   <<< ./snippets/2026-autumn-test.js#1
   :::

   解析可参考 [二叉索引树](/Interview/Programming/FenwickTree)。

2. 如图 <el-tag type='primary'>科大讯飞 24 秋招</el-tag><el-tag type='danger'>以为很难放弃实则暴力</el-tag>

   ![20250808172814_ee3d4f30473daf8b71a2154c3dec8ac5.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250808172814_ee3d4f30473daf8b71a2154c3dec8ac5.png)

   :::details 🔍 展开代码
   <<< ./snippets/2026-autumn-test.js#2
   :::
