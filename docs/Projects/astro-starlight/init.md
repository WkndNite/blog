---
date: 2024-12-10
tags:
  - Astro
  - Starlight
  - 开发实践
  - 技术博客
---

# 项目初始化

在没有迁移到VuePress之前，我就是利用 Astro + Starlight + Docs Template 所搭建的，本专栏将详细记录我在开发这个网站时的所做所想，以及如何使用这些工具来搭建类似的文档网站。这一期，我们将开始介绍如何搭建这样一个项目。

## 环境搭建

### node 安装

在这里，推荐给大家两个 node 版本管理工具，分别是 nvm 和 volta。二者都能实现 node 版本的管理，区别在于 volta 可以更为轻松的管理单独项目的 node 版本，而 nvm 会将本地的 node 版本统一化。

:::tip
二者选择其一即可——**不要混用！不要混用！不要混用！**
:::

### npm 安装

npm 是 Node.js 的包管理工具，安装 node 时会自动安装 npm，所以不需要单独安装。

## 项目搭建

在你的终端中运行以下命令来创建一个新的 Astro + Starlight 项目，这将创建一个新的项目目录，其中包含你网站所需的所有文件和配置。

```bash
npm create astro@latest -- --template starlight
```
