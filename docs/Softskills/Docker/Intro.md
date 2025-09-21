---
date: 2024-12-23
tags:
  - Docker
---

# 关于 Docker 的那点破事儿

本文将初次解开 Docker 的面纱，让你了解 Docker 的那点破事儿。

## Docker 的底层技术

![Docker 底层技术](https://docs.docker.com/get-started/images/docker-architecture.webp)

## Docker 环境搭建

![Docker 环境搭建](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-env-setup.excalidraw.png)

:::info
这一步开始我在我的阿里云服务器上演示，操作系统是 CentOS。
:::

### 环境预搭建

首先需要保证自己的操作系统、网络服务等支持 Docker 的运行，鉴于实验基于云服务器开发，这一步大概率不会出现问题。

### 包管理工具的预先安装与更新

```Bash
uname -r
yun install yum-utils
yum makecache --refresh
```

### 安装 Docker

:::warning
如果你的服务器或者本地环境之前有过 Docker，可以选择跳过这一步或者先卸载之前的 Docker。
:::

```Bash :no-line-numbers
yum install docker-ce docker-ce-cli containerd.io
```

### 配置镜像加速器

```Bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'

{
  "registry-mirrors": ["https://xtzljfhc.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 验证 Docker 是否安装成功

```Bash :no-line-numbers
docker --version
```

### 测试镜像以及容器

```Bash
docker pull hello-world
docker run hello-world
```

:::tip Congratulations!
至此，你应该已经完成了 Docker 的安装和测试，接下来我们将继续探索 Docker 的更多功能。
:::
