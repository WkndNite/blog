---
date: 2025-02-12
tags:
  - React
  - 开发
  - Debug
---

# React Toast UI sourcemap 报错

首先附上这个问题出现在的项目地址：[coder-station](https://github.com/WkndNite/coder-station)

## 问题复现

在项目内引入 `toastui.editor`，并使用其 `Editor` 组件，在开发过程中遇到如下报错：

![image](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/bug1.png)

## 解决方案

需要在 `package.json` 中修改项目启动脚本命令：

![image](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/bug1-solution.png)

:::warning
注意，在 `&&` 前并没有空格，是因为如果加上空格会导致该环境变量有尾随空格。
:::

## 成功效果

![image](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/bug1-success.png)
