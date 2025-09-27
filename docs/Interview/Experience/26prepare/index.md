---
date: 2025-08-06 17:59:38
publish: false
tags:
  - 笔试
  - 前端
  - 秋招
---

# 往届刷题总结

## 计算机基础

1. 存储一个 32 位的数据 0x9876521 到地址 4000h~4003h，小端方式存储，则 4000h 地址中存放的数据是 ( )。<el-tag type='primary'>科大讯飞 24 秋招</el-tag>

- [ ] 0x09
- [ ] 0x87
- [ ] 0x65
- [x] 0x21

2. 以下代码的执行结果是：<el-tag type='primary'>京东 24 秋招</el-tag><el-tag type='danger'>字符串拼接不相加</el-tag>

- [ ] 2
- [ ] 12
- [ ] 3
- [x] 21

```JavaScript
var obj = {"key":"1","value":"2"};
var newObj = obj;
newObj.value += obj.key;
alert(obj.value);
```

## 编程

1. 对于一个序列的中位数判定，若是奇数长度的序列不解释，若是偶数长度的序列选择中间两个数字里的较小者。现给定一个序列，排序以后每次取出中位数，并从序列剔除该数得到一个新的序列，最后输出整个序列按照取中位数顺序得到的结果。<el-tag type='primary'>科大讯飞 24 秋招</el-tag><el-tag type='danger'>超时</el-tag>

   :::details 🔍 展开代码
   <<< ./1.js
   :::

   解析可参考 [二叉索引树](/Interview/Programming/FenwickTree)。

2. 如图 <el-tag type='primary'>科大讯飞 24 秋招</el-tag><el-tag type='danger'>以为很难放弃实则暴力</el-tag>

   ![20250808172814_ee3d4f30473daf8b71a2154c3dec8ac5.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250808172814_ee3d4f30473daf8b71a2154c3dec8ac5.png)

   :::details 🔍 展开代码
   <<< ./2.js
   :::

3. 如图 <el-tag type='primary'>京东 24 秋招</el-tag><el-tag type='warning'>this 指向</el-tag>

   ![20250809212837_6c490f7b3a01adccb7fab4b095b3726a.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250809212837_6c490f7b3a01adccb7fab4b095b3726a.png)

   :::details 🔍 展开代码
   <<< ./3.js{19-24}
   :::

4. 如图 <el-tag type='primary'>京东 24 秋招</el-tag><el-tag type='warning'>不难但脑子抽了</el-tag>

   ![20250809220024_07a2e84c53e2a16bcf54562c934e491f.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250809220024_07a2e84c53e2a16bcf54562c934e491f.png)

   :::details 🔍 展开代码
   <<< ./4.js
   :::

5. 如图 <el-tag type='primary'>京东 24 秋招</el-tag><el-tag type='warning'>区间化处理不只是输出最小值</el-tag>

   ![20250810144405_dccc9319f78929e08157215f317ed816.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250810144405_dccc9319f78929e08157215f317ed816.png)

   :::details 🔍 展开代码
   <<< ./5.js
   :::

6. 如图 <el-tag type='primary'>虾皮 24 秋招</el-tag><el-tag type='danger'>数组的预处理和双指针思想</el-tag>

   ![20250810162310_5cf777b124c4fdf9468dc9d4f9e88037.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250810162310_5cf777b124c4fdf9468dc9d4f9e88037.png)

   :::details 🔍 展开代码
   <<< ./6.js
   :::

7. 如图 <el-tag type='primary'>虾皮 24 秋招</el-tag><el-tag type='danger'>背包问题不熟练</el-tag>

   ![20250810165354_b2fbc0fe0749cdee30d93848713dffad.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250810165354_b2fbc0fe0749cdee30d93848713dffad.png)

   :::details 🔍 展开代码
   <<< ./7.js
   :::

8. 给出一个仅由大写字母 A 和 B 构成的字符串 s，请你求出 s 中包含 A 和 B 个数相同的连续区间的最长长度。<el-tag type='primary'>京东 2024 春招</el-tag><el-tag type='warning'>暴力双循环超时</el-tag>

   :::details 🔍 展开代码
   <<< ./8.js
   :::

9. 如图 <el-tag type='primary'>快手 2024 秋招</el-tag><el-tag type='warning'>注意递归和 memo 位置不写错</el-tag>

   ![20250810232312_39204325e024e25be2e1ddd3789ba553.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250810232312_39204325e024e25be2e1ddd3789ba553.png)

   :::details 🔍 展开代码
   <<< ./9.js
   :::

10. 如图 <el-tag type='primary'>滴滴 2024 秋招</el-tag>

    ![20250906214947_0efcde3d90dcb0fc1d9c114996072392.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250906214947_0efcde3d90dcb0fc1d9c114996072392.png)


   :::details 🔍 展开代码
   <<< ./10.js
   :::

11. 如图 <el-tag type='primary'>滴滴 2024 秋招</el-tag>


    ![20250906215026_3154bda7df0c6489d3e6f4ea30ae118c.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250906215026_3154bda7df0c6489d3e6f4ea30ae118c.png)

    :::details 🔍 展开代码
    <<< ./11.js
    :::

12. 如图 <el-tag type='primary'>滴滴 2024 春招</el-tag>

    ![20250906221246_2af370f4644df488e189d4d2866a23d1.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250906221246_2af370f4644df488e189d4d2866a23d1.png)

    :::details 🔍 展开代码
    <<< ./12.js
    :::