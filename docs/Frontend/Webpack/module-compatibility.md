---
date: 2025-03-08 18:02:47
tags:
  - Webpack
  - 前端
  - 工程化
---

# 模块化兼容性

由于 Webpack 同时支持 ES6 Module 和 CJS，因此需要理解他们互操作时 Webpack 是如何处理的。

## 同模块化标准

如果到处和导入使用的是同一种模块化标准，打包后的效果和之前学习的模块化没有任何差异。

![image](./assets/same-module-standard.excalidraw.png)

## 不同模块化标准

![image](./assets/diff-module-standard.excalidraw.png)

## 最佳实践

代码编写最忌讳的是精神分裂，选择一个合适的模块化标准，然后贯彻整个开发阶段。
