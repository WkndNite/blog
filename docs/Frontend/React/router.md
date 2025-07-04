---
tags:
  - React
  - 前端
date: 2025-01-21
cover: https://reactrouter.com/splash/hero-3d-logo.dark.webp
---

# React 路由

## 前端路由概念

早期的时候并不存在前端路由，那个时候只有后端路由，类似下图：

![早期路由](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/router1.excalidraw.png)

后来，随着单页面应用的流行，整个 Web 应用只存在一个页面，通过 JS 来调整模块显示不同的内容，类似于下图：

![单页面应用路由](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/router2.excalidraw.png)

可以看到，所谓的前端路由实际上是协调当前页面显示什么模块。那么单页面应用，还存在后端路由吗？实际上也是存在的，后端路由负责返回对应的数据。

## React-router

可以参照当前官网最新信息：[React Router](https://reactrouter.com/)

## 管理系统 Demo

### 服务端

通过下面的命令可以快速搭建一个本地服务器，只需要把需要的数据存放在 `server/db.json` 中：

```Bash
mkdir server
npm init -y
npm i json-server
```

### 客户端

详细代码可以参照 [GitHub 仓库](https://github.com/WkndNite/react-demos/tree/main/student-ms/client)
