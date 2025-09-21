---
date: 2025-03-10 11:22:57
tags:
  - Webpack
  - 前端
  - 工程化
---

# Webpack 编译过程

整个过程大致分为三个阶段：初始化阶段、编译阶段、输出阶段。

## 初始化阶段

在这个阶段，Webpack 会将 `CLI 参数`、`配置文件`、`默认配置` 进行合并，形成一个最终的配置对象。

对配置的处理过程是依托一个第三方库 yargs 完成的。

此阶段相对比较简单，主要是为了接下来的编译阶段作必要的准备工作。

目前，可以简单地理解为，初始化阶段主要用于产生一个最终的配置。

## 编译阶段

1. 创建 chunk

   chunk 是 Webpack 在内部构建过程中的一个概念，译为 `块`，它表示通过某个入口文件找到的所有依赖的统称。

   每个 chunk 都有至少两个属性：

   - name：默认是 main。
   - id：唯一编号，开发环境和 name 相同，生产环境是一个数字，从 0 开始。

2. 构建所有依赖模块

   ![webpack-chunk-process](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/webpack-chunk-process.png)

   ![webpack-chunk-entry](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/webpack-chunk-entry.png)

   > AST在线测试工具：<https://astexplorer.net/>

3. 产生 chunk assets

   在第二步完成后，chunk 中会产生一个模块列表，列表中包含了模块 id 和模块转换后的代码。

   接下来，Webpack 会根据配置为 chunk 生成一个资源列表，即 chunk assets，资源列表可以理解为是生成到最终文件的文件名和文件内容。

   ![webpack-chunk-to-assets](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/webpack-chunk-to-assets.png)

   > chunk hash 是根据所有 chunk assets 的内容生成的一个 hash 字符串。

   ![webpack-chunk-hash](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/webpack-chunk-hash.png)

4. 合并 chunk assets

   将多个 chunk 的 assets 合并到一起，并产生一个总的 hash。

   ![webpack-chunk-merge](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/webpack-chunk-merge.png)

## 输出阶段

此步骤非常简单，Webpack 将利用 node 中的 fs 模块，根据编译产生的总的 assets，生成相应的文件。

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-09-12-54-34.png)

## 总过程

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2020-01-09-15-51-07.png)

## 涉及术语

- `module`：模块，分割的代码单元，Webpack 中的模块可以是任何内容的文件，不仅限于 JS。
- `chunk`：Webpack 内部构建模块的块，一个 chunk 中包含多个模块，这些模块是从入口模块通过依赖分析得来的。
- `bundle`：chunk 构建好模块后会生成 chunk 的资源清单，清单中的每一项就是一个 bundle，可以认为 bundle 就是最终生成的文件。
- `hash`：最终的资源清单所有内容联合生成的 hash 值。
- `chunk hash`：chunk 生成的资源清单内容联合生成的 hash 值。
- `chunk name`：chunk 的名称，如果没有配置则使用 main。
- `id`：通常指 chunk 的唯一编号，如果在开发环境下构建，和 chunk name 相同；如果是生产环境下构建，则使用一个从 0 开始的数字进行编号。
