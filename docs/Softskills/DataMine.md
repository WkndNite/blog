---
date: 2025-06-01 14:05:23
description: 购物狂从没想到会走到今天这一步……
tags:
  - 数据挖掘
  - 大数据与云计算
---

# 超市商品关联分析系统

## 项目简介

- 目的：从事务篮数据中挖掘经常被频繁购买的商品、商品之间的关联规则、购买记录中的序列规则。

## 环境搭建

> 后续我从 Mac 视角编写，有问题可自查平台兼容等。

1. 下载 [数据集](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/retail.dat)。
2. 安装 Docker 环境：

   - CentOS 系统可以看我之前写过的 [Docker 环境搭建](http://localhost:5173/Softskills/Docker/intro#docker-%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA)。
   - Ubuntu 系统和上面类似，包管理器不同，可自行百度。
   - Win 和 Mac 下载 [应用](https://www.docker.com/) 即可。

3. 搭建项目结构如下：

   :::code-group

   ```TXT [file-structure]
    .
    ├── data
    │   └── retail.dat
    └── docker-compose.yml
   ```

   ```YML [docker-compose.yml]
   version: "3"

   services:
   hadoop-namenode:
       image: bde2020/hadoop-namenode:2.0.0-hadoop3.2.1-java8
       platform: linux/amd64
       container_name: hadoop-namenode
       ports:
       - "9870:9870"
       environment:
       - CLUSTER_NAME=test
       networks:
       - hadoopnet

   hadoop-datanode:
       image: bde2020/hadoop-datanode:2.0.0-hadoop3.2.1-java8
       platform: linux/amd64
       container_name: hadoop-datanode
       depends_on:
       - hadoop-namenode
       environment:
       - CORE_CONF_fs_defaultFS=hdfs://hadoop-namenode:8020
       networks:
       - hadoopnet

   spark:
       image: bitnami/spark:3.5.0
       container_name: spark
       depends_on:
       - hadoop-namenode
       ports:
       - "8080:8080"
       - "4040:4040"
       environment:
       - SPARK_MODE=master
       networks:
       - hadoopnet

   networks:
   hadoopnet:
       driver: bridge

   ```

   :::

4. 执行以下命令：

   ```Bash
    docker-compose pull # 拉取镜像（推荐）
    docker-compose up -d # 后台启动容器
    docker ps # 验证容器状态
   ```

5. 访问 9870 端口验证 HDFS 文件系统启动成功。
6. 格式化并上传数据集到 HDFS：

   ```Bash
    docker exec -it hadoop-namenode bash # 进入容器内部
    hdfs namenode -format # 格式化 HDFS
    hdfs dfsadmin -report # 查看运行状态，输出 DataNode 即可

    # 将 retail.dat 拷贝进 Hadoop NameNode 容器
    docker cp ./data/retail.dat hadoop-namenode:/root/retail.dat

    docker exec -it hadoop-namenode bash # 进入容器上传数据到 HDFS
    hdfs dfs -mkdir -p /user/root/input # 创建 HDFS 目录（如果还没建）
    hdfs dfs -put /root/retail.dat /user/root/input/ # 上传数据集
    hdfs dfs -ls /user/root/input # 验证上传成功
   ```

   成功后，应该能看到输出如下：

   ```TXT
    Found 1 items
    -rw-r--r--   3 root supergroup     4167490 2025-06-01 05:17 /user/root/input/retail.dat
   ```

7. 用 Spark 容器测试：

   ```Bash
    docker exec -it spark bash

    spark-submit \
    --master local \
    --class org.apache.spark.examples.JavaWordCount \
    /opt/bitnami/spark/examples/jars/spark-examples_2.12-3.5.0.jar \
    hdfs://hadoop-namenode:8020/user/root/input/retail.dat
   ```

   成功效果应该如下：

   ![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/%E6%88%AA%E5%B1%8F2025-06-01%2014.39.15.png)

:::tip 📌 对比任务书初识预期

| 任务描述                                             | 当前状态                            | 是否使用替代方案 | 替代方式说明                                                                            | 目标是否达成 |
| ---------------------------------------------------- | ----------------------------------- | ---------------- | --------------------------------------------------------------------------------------- | ------------ |
| 🧱 编写 Spark 与 Hadoop 的 Dockerfile + 配置网络桥接 | ✅ 已完成<br>使用官方镜像、配置网络 | ✅ 是            | 使用官方 `bde2020/*` + `bitnami/spark`<br>跳过 Dockerfile 构建，避免 ARM 架构兼容性问题 | ✅ 是        |
| 📁 配置 HDFS 目录结构<br>上传数据、验证服务启动      | ✅ 已完成<br>retail.dat 成功上传    | ❌ 否            | 标准命令 `hdfs dfs -mkdir / -put`<br>未使用替代方案                                     | ✅ 是        |
| 🧩 编写或完善<br>docker-compose.yml                  | ✅ 已完成<br>支持依赖与端口映射     | ❌ 否            | 明确配置 NameNode、DataNode、Spark<br>使用同一网络、服务依赖                            | ✅ 是        |
| 🐳 学习并使用 Docker 基本命令                        | ✅ 已完成<br>掌握核心命令           | ❌ 否            | 熟练使用 `exec`, `cp`, `ps`, `up`, `down` 等                                            | ✅ 是        |
| ⚙️ 测试 Spark 容器运行<br>提交样例作业读取 HDFS      | ✅ 已完成<br>成功运行 Spark 示例    | ✅ 是            | 使用 Spark 自带 `JavaWordCount` 样例<br>读取 `/user/root/input/retail.dat` 验证数据通路 | ✅ 是        |

:::

## 代码逻辑

:::tip 📌 两个阶段的联系

| 第一阶段成果         | 在第二阶段的作用                                             |
| -------------------- | ------------------------------------------------------------ |
| Hadoop + HDFS 已部署 | 你可以从 `/user/root/input/retail.dat` 直接读取数据          |
| Spark 容器运行正常   | 你可以使用 `spark-submit` 运行你编译后的 Java `.jar`         |
| Docker 管理完善      | 后续可以挂载 `target/fp-growth-java.jar` 到 Spark 容器中执行 |

:::

1. 搭建项目结构如下：

   :::code-group

   ```TXT
   supermarket-analysis/
   ├── docker-compose.yml
   ├── data/
   │   └── retail.dat
   ├── fp-growth-java/        ← 💡 新建 Java 项目目录（推荐名）
   │   ├── pom.xml
   │   └── src/
   │       └── main/java/
   │           └── org/example/fpgrowth/
   │               └── App.java
   ```

   ```XML [pom.xml]
   <?xml version="1.0" encoding="UTF-8"?>


    <project xmlns="http://maven.apache.org/POM/4.0.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example.fpgrowth</groupId>
    <artifactId>fp-growth-java</artifactId>
    <version>1.0-SNAPSHOT</version>

    <name>fp-growth-java</name>

    <!-- FIXME change it to the project's website -->

    <url>http://www.example.com</url>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
    </properties>

    <dependencies>
        <!-- Spark Core -->
        <dependency>
        <groupId>org.apache.spark</groupId>
        <artifactId>spark-core_2.12</artifactId>
        <version>3.2.1</version>
        <scope>provided</scope>
        </dependency>

        <!-- Spark SQL -->
        <dependency>
        <groupId>org.apache.spark</groupId>
        <artifactId>spark-sql_2.12</artifactId>
        <version>3.2.1</version>
        <scope>provided</scope>
        </dependency>

        <!-- Spark MLlib -->
        <dependency>
        <groupId>org.apache.spark</groupId>
        <artifactId>spark-mllib_2.12</artifactId>
        <version>3.2.1</version>
        <scope>provided</scope>
        </dependency>

    </dependencies>

    <build>
        <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to
        parent pom) -->
        <plugins>
            <!-- clean lifecycle, see
            https://maven.apache.org/ref/current/maven-core/lifecycles.html#clean_Lifecycle -->
            <plugin>
            <artifactId>maven-clean-plugin</artifactId>
            <version>3.1.0</version>
            </plugin>
            <!-- default lifecycle, jar packaging: see
            https://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_jar_packaging -->
            <plugin>
            <artifactId>maven-resources-plugin</artifactId>
            <version>3.0.2</version>
            </plugin>
            <plugin>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
            </plugin>
            <plugin>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.22.1</version>
            </plugin>
            <plugin>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.0.2</version>
            </plugin>
            <plugin>
            <artifactId>maven-install-plugin</artifactId>
            <version>2.5.2</version>
            </plugin>
            <plugin>
            <artifactId>maven-deploy-plugin</artifactId>
            <version>2.8.2</version>
            </plugin>
            <!-- site lifecycle, see
            https://maven.apache.org/ref/current/maven-core/lifecycles.html#site_Lifecycle -->
            <plugin>
            <artifactId>maven-site-plugin</artifactId>
            <version>3.7.1</version>
            </plugin>
            <plugin>
            <artifactId>maven-project-info-reports-plugin</artifactId>
            <version>3.0.0</version>
            </plugin>
            <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>exec-maven-plugin</artifactId>
            <version>3.0.0</version>
            <configuration>
                <mainClass>org.example.fpgrowth.App</mainClass>
            </configuration>
            </plugin>
        </plugins>
        </pluginManagement>
    </build>
    </project>
   ```

   :::
