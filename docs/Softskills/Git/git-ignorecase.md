---
tags:
  - Git
date: 2025-01-21
---

# Git 大小写不敏感闹乌龙

就在今天，我把自己 Frontend 路径下的 css 文件夹重新更名成 CSS 之后，将所有涉及到路径修正的都做了调整。但是当我 push 之后，却发现远端 Vercel 竟然自动部署失败了！但是，我本地运行 build 命令是没有问题的……

## 失败复现

![部署失败截图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/git-ignorecase-2.png)

## 问题发现

我去查找了很多涉及到相关路径的文档，发现并不是我的路径书写错误了。那为什么本地部署是可以的，Vercel 部署却检测到了 `dead link`
呢？

于是我去查看 Vercel 内部，发现 Vercel 内部的文件夹并没有做出重命名之后的更新。而这种 CI/CD 又是跟踪 GitHub 分支的，所以我的远程仓库没有更新——这就是根本原因！

![项目结构对比](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/git-ignorecase-1.png)

## 问题解决

Git 默认对于文件及文件夹大小写的命名是不敏感的。尽管 Git 可以追踪到我在某些文件里引用路径的更新，但对于文件及文件夹自身大小写的变化，Git 是不会跟踪的。

因此，需要通过以下配置，允许 Git 对这些情况跟踪：

```Bash
git config core.ignorecase false
```

为了方便起见，这种情况应该在普遍的项目里都允许追踪：

```Bash
git config --global core.ignorecase false
```

至此，这场由简单的大小写引起的乌龙就算解决了，Vercel 也能成功部署了。
