---
recommed: 3
tags:
  - Docker
date: 2024-12-27
---

# Docker 和网络的关系

在这篇文章里，我们主要来探讨一下 Docker 和网络有什么关系。

## Docker 网络概述

Docker 提供了多种网络模式，以满足不同的应用需求。主要的网络模式包括：

- **bridge**：默认的网络模式，适用于大多数应用场景。
- **host**：容器与宿主机共享网络命名空间。
- **none**：容器没有网络连接。
- **overlay**：用于跨主机的容器通信。
- **macvlan**：允许容器拥有自己的 MAC 地址。
- **container**：容器与另一个容器共享网络命名空间。

## 网络实践

### 容器之间之间 Ping 通

首先我们准备两个 tomcat 的容器，然后进入容器内部安装 iproute2 和 iputils-ping 来为后续操作提供支持。

当然，安装的过程可能比较漫长，**你也可以直接封装一个带有这些安装包的镜像**，这样就不需要重复安装了。

```Bash
docker pull tomcat
docker run -d -P --name tomcat-01 tomcat
docker run -d -P --name tomcat-02  tomcat
# 进入容器 1
docker exec -it tomcat-01 bash
apt-get update
apt-get install iproute2
apt-get install iputils-ping
# 进入容器 2
docker exec -it tomcat-02 bash
apt-get update
apt-get install iproute2
apt-get install iputils-ping
```

然后，我们进入两个容器内部，查看容器的 ip 地址。

```Bash
docker exec -it tomcat-01 bash -c "ip addr"
docker exec -it tomcat-02 bash -c "ip addr"
```

![Tomcat 容器获取各自ip](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/tomcat-container-ip.png)

如上图，我们可以得到到两个容器的 ip 地址，分别是 172.17.0.2 和 172.17.0.3。

然后我们分别在两个容器内部 ping 对方的 ip 地址，看是否能够 ping 通。

```Bash
# 在容器 1 内 ping 容器 2
docker exec -it tomcat-01 bash -c "ping -c 3 172.17.0.3"
# 在容器 2 内 ping 容器 1
docker exec -it tomcat-02 bash -c "ping -c 3 172.17.0.2"
```

![Tomcat 容器之间 ping 通](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/tomcat-container-ping.png)

如上图，我们可以看到两个容器之间是可以 ping 通的。

### 容器与宿主机之间 Ping 通

首先我们先检查一下宿主机的 ip 地址。

```Bash
ip addr
```

![宿主机ip](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/host-ip.png)

如上图，我们可以看到宿主机的 ip 地址是 172.30.150.182。接下来我们分别在两个容器内部 ping 宿主机的 ip 地址，并在宿主机对容器的 ip 地址进行 ping 操作。

```Bash
docker exec -it tomcat-01 bash -c "ping -c 3 172.30.150.182"
docker exec -it tomcat-02 bash -c "ping -c 3 172.30.150.182"
ping -c 3 172.17.0.2
ping -c 3 172.17.0.3
```

![Tomcat 容器与宿主机之间 ping 通](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/tomcat-container-host-ping.png)

如上图，我们可以看到容器与宿主机之间也是可以 ping 通的。

### 插曲——原理

观察前面给出的宿主机在执行 `ip addr` 命令后的输出，第一个是 lo 接口，第二个是 eth0 接口，第三个是 docker0 接口，第四个是 br 接口，第五个是 veth@37 接口，第六个是 veth@39 接口。分别代表了什么意思呢？

- lo 接口：本地回环接口，用于本地通信。
- eth0 接口：宿主机的物理网卡接口。
- docker0 接口：Docker 的默认网桥，用于连接容器。
- br 接口：桥接接口，用于连接容器。
- veth@37 接口：虚拟以太网接口，用于连接容器和网桥。
- veth@39 接口：虚拟以太网接口，用于连接容器和网桥。

其实观察前面的图你就会明白，最后两个接口分别对应着 tomcat-01 和 tomcat-02 两个容器。此处的 br 接口，是因为我在我的服务器上还运行着另外一个容器——Harbor。那么，我们怎么得知这些接口情况呢？

```Bash
docker network ls
```

![Docker 网络列表](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-network-list.png)

看上面这张图，在对应前面宿主机的 ip 图，是不是就明白 br 接口对应哪个容器了呢？

### Ping 的时候可以用容器名吗？

还是用之前的容器来举例，记不住容器的 ip 地址，但是记住了容器的名字，那么我们怎么 ping 呢？

```Bash
docker exec -it tomcat-01 bash -c "ping -c 3 tomcat-02"
# ping: tomcat-02: Name or service not known
docker exec -it tomcat-02 bash -c "ping -c 3 tomcat-01"
# ping: tomcat-01: Name or service not known
```

如上图，我们可以看到，在容器内部 ping 容器名是 ping 不通的。那么，我们怎么解决呢？此时，我们会引入 `--link` 参数。

```Bash
docker run -d -P --name tomcat-03 --link tomcat-01 tomcat
docker exec -it tomcat-03 bash -c "apt-get update && apt-get install iproute2 iputils-ping -y"
docker exec -it tomcat-03 bash -c "ping -c 3 tomcat-01"
docker exec -it tomcat-01 bash -c "ping -c 3 tomcat-03"
```

![--link 参数](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-container-link.png)

:::tip
--link 参数的作用是让容器之间能够互相通信，但是只能做到单向通信，即容器 1 可以 ping 容器 2，但是容器 2 不能 ping 容器 1。究其本质，其实是通过--link 可以在容器的 hosts 文件中添加一条记录，我们也可以进入容器内部通过 `cat /etc/hosts` 命令查看。
:::

### 自定义网络

我们也可以通过下面的命令来创建自定义网络。其中，`--driver bridge` 表示使用桥接模式，`--subnet 192.168.0.0/16` 表示子网掩码，`--gateway 192.168.0.1` 表示网关。

> 网关，就是网络中所有设备共享的出口，比如，一个网络中所有设备都需要访问互联网，那么就需要一个设备作为出口，这个设备就是网关。

```Bash
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
```

在此之后，你会得到一个 Hash 值，这个 Hash 值就是你的网络 ID，你可以通过 `docker network ls` 命令查看。也可以通过 `docker network inspect mynet` 命令查看网络详情。

接下来，我们启动两个容器，并指定网络为 mynet。为了方便，我们先通过以下命令将之前的 tomcat-01 打包成镜像，并命名为 tomcat-01。

```Bash
docker commit tomcat-01 tomcat-01
docker images # 查看镜像列表，找到 tomcat-01 镜像
```

然后，我们通过以下命令启动两个容器，并指定网络为 mynet。

```Bash
docker run -d -P --name tomcat-04 --net mynet tomcat-01
docker run -d -P --name tomcat-05 --net mynet tomcat-01
```

然后，我们再次用 inspect 命令查看网络详情，可以看到，两个容器已经加入了 mynet 网络。

```Bash
docker network inspect mynet
```

![自定义网络](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-network-custom.png)

接下来，我们分别在两个容器内部 ping 对方的 ip 地址，看是否能够 ping 通。重点来了！**此时，我们通过容器名也是可以 ping 通的！**

```Bash
docker exec -it tomcat-04 bash -c "ping -c 3 192.168.0.3"
docker exec -it tomcat-05 bash -c "ping -c 3 192.168.0.2"
docker exec -it tomcat-04 bash -c "ping -c 3 tomcat-05"
docker exec -it tomcat-05 bash -c "ping -c 3 tomcat-04"
```

![自定义网络 ping 通](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-network-custom-ping.png)

如上图，我们可以看到两个容器之间是可以 ping 通的。

### 不同网络之间通信

截至目前，我们在 docker0 网络中启动了三个容器，在 mynet 网络中启动了两个容器。那么，我们怎么让这两个网络中的容器之间能够通信呢？

:::tip 怎么查看 docker0 网络中的容器呢？

```Bash
docker network inspect bridge
```

:::

```Bash
docker network connect mynet tomcat-01
docker network inspect mynet
docker network inspect bridge
```

![不同网络之间通信](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-network-connect.png)

此时，我们用 tomcat-01 和 tomcat-02 分别对 tomcat-04 进行 ping，看是否能够 ping 通。

```Bash
docker exec -it tomcat-01 bash -c "ping -c 3 tomcat-04"
docker exec -it tomcat-02 bash -c "ping -c 3 tomcat-04"
docker exec -it tomcat-02 bash -c "ping -c 3 192.168.0.2"
```

![不同网络之间通信 ping 通](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/docker-network-connect-ping.png)
