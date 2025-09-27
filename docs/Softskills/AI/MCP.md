---
cover: https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250829183008_c1a1ef7964a7784f2feb70fdca001fc1.png
description: 🚀 MCP 助力前端开发
author: 周末晚（试图偷懒版）
date: 2025-08-29 18:29:55
tags:
   - MCP
   - AI
---

# MCP 从入门到实战

## 前置知识

### 通信方式：stdio

> stdio: standard input and output 标准输入输出

![20250829140034_1e5c6db8e53d3a828e7d1267bf597a29.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250829140034_1e5c6db8e53d3a828e7d1267bf597a29.png){width="50%"}

![20250829140045_dcd54ae61dfd97a3ccabbc00eb8451a9.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250829140045_dcd54ae61dfd97a3ccabbc00eb8451a9.png){width="50%"}


stdio 通信高效、简洁，但仅适用于本地进程间通信

### 通信格式：JSON-RPC

:::code-group

```JSON [request.json]
{
  "jsonrpc": "2.0",
  "method": "sum",
  "params": {
    "a": 5,
    "b": 6
  },
  "id": 1
}
```

```JSON [response.json]
{
  "jsonrpc": "2.0",
  "result": 11,
  "id": 1
}
```
:::

## MCP

### 初识

> MCP 全称 Model Context Protocol，是一套标准协议。
>
> 它规定了应用程序之间如何通信。
>
> 官网地址 https://modelcontextprotocol.io/。


- 通信方式 ① stdio「推荐，高效、简洁、本地」
- 通信方式 ② http 「可远程」
- 通信格式 → 基于 JSON-RPC 的进一步规范

1. 初始化 `initialize`

    :::code-group

    ```JSON [request.json]
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "initialize",
      "params": {
        "protocolVersion": "2024-11-05",
        "capabilities": {
          "roots": {
            "listChanged": true
          },
          "sampling": {},
          "elicitation": {}
        },
        "clientInfo": {
          "name": "ExampleClient",
          "title": "Example Client Display Name",
          "version": "1.0.0"
        }
      }
    }
    ```

    ```JSON [response.json]
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "protocolVersion": "2024-11-05",
        "capabilities": {
          "logging": {},
          "prompts": {
            "listChanged": true
          },
          "resources": {
            "subscribe": true,
            "listChanged": true
          },
          "tools": {
            "listChanged": true
          }
        },
        "serverInfo": {
          "name": "ExampleServer",
          "title": "Example Server Display Name",
          "version": "1.0.0"
        },
        "instructions": "Optional instructions for the client"
      }
    }
    ```

    :::

2. 工具发现 `tools/list`：服务器有哪些工具函数可以供客户端调用

    :::code-group

    ```JSON [request.json]
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "tools/list",
      "params": {}
    }
    ```

    ```JSON [response.json]
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "tools": [
          {
            "name": "get_weather",
            "title": "Weather Information Provider",
            "description": "Get current weather information for a location",
            "inputSchema": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string",
                  "description": "City name or zip code"
                }
              },
              "required": ["location"]
            }
          }
        ]
      }
    }
    ```

    :::

3. 工具调用 `tools/call`

    :::code-group

    ```JSON [request.json]
    {
      "jsonrpc": "2.0",
      "id": 2,
      "method": "tools/call",
      "params": {
        "name": "get_weather",
        "arguments": {
          "location": "New York"
        }
      }
    }
    ```

    ```JSON [response.json]
    {
      "jsonrpc": "2.0",
      "id": 2,
      "result": {
        "content": [
          {
            "type": "text",
            "text": "72°F"
          }
        ]
      }
    }
    ```

    :::

    :::tip 📌 提示

    1. 函数结果需要放到 content 字段中，使用数组。
    2. 函数结果支持的类型： [参见官网](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#tool-result)

    :::



###  工具和效率

1. MCP Server 的调试工具

    ```Shell :no-line-numbers
    npx @modelcontextprotocol/inspector
    ```

2. MCP SDK：使用 `@modelcontextprotocol/sdk` 可以更方便的开发 `MCP Server`

    ```Shell :no-line-numbers
    npm install @modelcontextprotocol/sdk
    ```

### 对接AI应用程序

>  所有能与大模型交互的应用都可以看作是 AI 应用程序。

常见的 AI 应用程序：

- ChatGPT
- DeepSeek Chat Page
- Claude Desktop 支持 MCP 协议，可充当 MCP 客户端 https://claude.ai/download
- VSCode 支持 MCP 协议，可充当 MCP 客户端
- Cursor 支持 MCP 协议，可充当 MCP 客户端 https://cursor.com/cn
- ...

![20250829154356_307a4729bd0bf6062215bfb244aea439.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250829154356_307a4729bd0bf6062215bfb244aea439.png)

两个核心概念：

- `MCP Host`: 往往指代 AI 应用本身，用于发现 MCP Server 以及其中的工具列表。
- `MCP Client`： 用于和 MCP Server 通信的客户端，往往在 Host 内部开启，通常情况下，每启动一个 MCP Server，就会开启一个 MCP Client。

![20250829155159_9427519addf0e2b9aee3753b4bff2250.png](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/20250829155159_9427519addf0e2b9aee3753b4bff2250.png)

例如：

1. 在 Claude Desk 中打开一个新的聊天窗口；
2. Claude 查看当前启用了哪些 MCP Server；
3. Claude（host）为每个 MCP Server 创建一个 Client；
4. 每个 Client 分别启动各自的 MCP Server，随时准备通信；
5. 当时机到达时，每个 Client 负责调用各自的工具并把结果传递给 Host；
6. Host 根据结果处理后续逻辑。

### 重新认识

MCP，全称 Model Context Protocol， 模型上下文协议。 其旨在为 AI 与外部程序之间建立通信标准， 从而使得外部程序可以被部署到任意 AI， 也使得 AI 应用可以使用任意的外部程序。

### MCP 资源聚合平台

1. https://github.com/modelcontextprotocol/servers
2. https://mcpservers.org/
3. https://mcp.so/
4. https://modelscope.cn/mcp
5. ...

## 实战 · 安全依赖审计工具

### 定义

安全依赖审计，是指对某个工程的所有直接依赖和间接依赖进行安全验证，发现其是否包含潜藏的风险。

### 时机

- 技术选型时，针对目标技术会进行安全依赖审计，可能是远程审计。
- 项目开发时，会针对当前工程进行安全依赖审计，可能是本地审计或远程审计。

### 手段

```Shell :no-line-numbers
npm audit
```

### audit 的缺陷

`npm audit` 的问题：

- 阅读不友好：依赖关系不清晰。
- 功能不完整：① 无法对远程仓库进行审计。② 无法对工程本身进行审计（只能审计依赖）。
- 难以集成：① AI 应用集成方面取决于应用是否支持运行命令。② CI/CD 集成方面无法定义部署决策逻辑。

### 需求

自定义安全审计功能，该功能可支持：

- 对本地工程或远程仓库均能进行安全审计
- 安全审计时能够对工程本身进行审计
- 审计结果中包含清晰的依赖路径
- 审计的结果是一个统一标准的 `markdown` 格式文档
- 支持 `MCP Server` 协议
- 更多的拓展功能……

### MVP 版本实现流程

大致分为两部实现功能：

1. 实现安全审计功能本身：

   ```JavaScript
   /**
    * 根据项目根目录，审计项目中所有的包（含项目本身）
    * @param {string} projectRoot 项目根目录，本地绝对路径或者远程仓库 URL
    * @param {string} savePath 保存审计结果 markdown 的文件名
    */
   export async function auditPackage(projectRoot, savePath) {}
   ```

2. 将该功能套壳为 `MCP Server`。



### 功能流程

:::info ⛽️ 信息

1. 创建工作目录：创建一个临时的工作目录，用于保存执行期间要用到的临时文件。
2. 解析工程：解析本地工程目录或者远程仓库链接，得到对应的 `package.json` 文件内容。
3. 生成 lock 文件：将 `package.json` 写入到临时工作目录，同时根据它生成 `package-lock.json`。
4. 安全审计：进入到临时工作目录，使用 `npm audit` 命令进行安全审计，并讲审计结果规格化。
5. 渲染：将上一步得到的规格化审计结果进行渲染，渲染成标准化的 `markdown` 内容，并保存到结果文件。
6. 删除工作目录：将之前创建的临时工作目录删除。

:::

1. `创建工作目录`: 创建一个临时的工作目录，用于保存执行期间要用到的临时文件。

   > 如何保证目录名的唯一性：随机字符串 + 时间戳、uuid

2. `解析工程`：解析本地工程目录或者远程仓库链接，得到对应的 _package.json_ 文件内容：

   - 分辨是本地工程还是远程仓库；
   - 具体是何种远程仓库（MVP 版本仅考虑 github 仓库）；
   - 如何从出远程仓库的链接中分析得到关键信息：_owner / repo / tag / default\_brach_；
   - 如何获取远程仓库中的 _package.json_；
   - 其他情况处理（MVP 版本不涉及）：非前端工程、monorepo 工程。

3. `生成lock文件`：将 _package.json_ 写入到临时工作目录，同时根据它生成 _package-lock.json_：

    ```Shell :no-line-numbers
    npm install --package-lock-only
    ```

4. `安全审计`：进入到临时工作目录，使用 _npm audit_ 命令进行安全审计，并通过 _DFS_ 将审计结果规格化。

    ```Shell :no-line-numbers
    npm audit --json
    ```

    :::tip 📌 审计结果字段解释
    - severity: 参见 [官方说明](https://docs.npmjs.com/about-audit-reports#severity)。
    - source: NPM 对漏洞的编号，仅存在于 NPM 包中的漏洞。
    - CVE：漏洞的通用编号，该编号跨越语言，详情参见 <https://www.cve.org/>。
    - CWE：漏洞类型编号，通过此编号可以找到漏洞是如何产生的，会造成什么影响，详情参见 <https://cwe.mitre.org/>。
    - CVSS：漏洞严重性评分，对应到 severity 字段。
    :::

   - 如何获取当前工程本身的审计结果：npm 的远程 API

   - 把当前工程的审计结果汇总到结果中

5. `渲染`：将上一步得到的规格化审计结果进行渲染，使用 _ejs_ 模板引擎渲染成标准化的 markdown 内容，并保存到结果文件。

6. `删除工作目录`：将之前创建的临时工作目录删除




### 持续优化

- 使用 TypeScript 重构。
- 上传到 npm，并可以使用 npx 下载执行。
- 从问题出发还是从依赖出发？
- monorepo 工程如何处理？💡工程特征检测 + workspace API 的使用
- 如何适配不同的仓库，比如 gitee、gitlab 等？💡URL 特征检测、策略模式。
- 如何适配不同的本地环境，比如 NPM 版本不同？💡容器技术（本地 docker、远程服务器）固定版本
- 图形表达依赖关系？💡Mermaid、AntV、D3……
- 性能提升？💡包-版本审计结果缓存，本地 / 远程缓存；💡本地缓存可采用 LRU 缓存模型。
- 语义范围合并
  某个包的多个版本范围都有漏洞，如何根据多个语义版本求并集
- 修复建议？💡提示词 + AI 建议
- 步骤拆分💡MCP Tools、MCP Prompt、MCP Resouces、Dify
- 集成到生产管线（CI/CD)。


## 简历

**项目名**：AISC ( AI Security-Check )

**角色**：前端架构师

**项目描述**：

研发基于 MCP Server 协议的前端通用安全依赖审计工具，解决 npm audit 的核心痛点。

工具支持本地工程和远程仓库，包含 CVSS、CWE、依赖链等关键审计信息。

审计结果为标准化 markdown 文件，将来亦可支持渲染为其他标准格式，如 JSON、HTML 等。工具可用于本地依赖检查和技术选型等安全审计工作。

项目已无缝集成到公司的 LLM 工具链，服务于公司所有生产线，安全审计效率提升 90%。

**技术栈**：NodeJS、MCP Server、Zod、Ejs、Git API、Semver、Docker、Monorepo。

**项目业绩**：

- 多种仓库类型的特征提炼和远程解析。
- 利用 workspace api 解析 monorepo 工程的所有子工程依赖。
- 无安装实现 lock 文件生成。
- 利用 npm security api 完成主工程安全审计。
- 依赖图到依赖链底转换，完成图结构的 DFS，并处理 recursive dependency 问题。
- 使用模板引擎渲染审计结果。
- 使用容器技术固定环境版本。
- 合并漏洞影响的语义范围。
- 使用 LRU 提升审计性能。
- 使用 MCP Prompts、MCP Tools、MCP Resources 构建 MCP 服务链。


## 面试

**背景**

这是一个安全审计工具。

过去在开发过程中，或者在做技术选型的时候，我们都是使用 npm audit 进行手动审计。

手动审计有很多的问题：比方说，难以和公司现有的 AI 工具链结合；结果格式既不友好、也不稳定；还有就是 npm audit 只能对本地工程的依赖项进行审计，对远程工程和工程自身无法处理。

总之，有很多问题，导致每次在做安全审计的时候都会浪费大量时间。

所以，我们架构组就提了一个 OKR 来解决这个问题，最后这个项目就交到了我手上。

**方案**

首先，我制定了一套自动化管线来解决这个问题，这套管线大致流程是：

第一步，自动创建一个临时工作目录。
第二步，获取待审计工程的 package.json。
第三步，在该环境中根据这个 package.json 生成 lock 文件来锁定具体版本。
第四步，根据 lock 文件得到一个审计结果，并且把这个审计结果规格化，比如把依赖图转换为依赖链，比如利用 npm 远程 API 得到自身工程的审计结果并合并到最终结果，总之，最终能得到一个标准化的审计结果。
第五步，把审计结果渲染成 markdown。
最后，把临时工作目录删除。

整个流程用程序自动化完成。

**实施**

流程还是比较简单，但这里面有很多细节不好处理。

比如版本问题，由于这个工具是作为 MCP Server 在本地运行的，而本地的 npm 版本是有差异的，就导致审计出来的结果格式不一致。为解决这个问题，我引入了 Docker 来固定环境版本。

另外，官方的审计 API 得到的结果是一个依赖图，而我们最终需要的是一个依赖链，这里就涉及到图转链的操作，并且还要考虑到图中有环的问题，这一块属于算法问题。

然后，还有就是某些工程是用 monorepo 搭建的，这里需要去判断工程使用哪种工具搭建的 monorepo，然后去适配不同的 workspace API 来读取到工程下所有子工程的依赖。

【语义版本合并、缓存性能...】

**效果**

最终，这个工具落地效果还是比较惊喜的。它可以集成到 Cursor、VSCode、Dify 这些工具，也可以直接调用。后面我们所有的安全审计都是靠这套工具完成的，整个公司在审计这一块现在基本不用耗费什么时间。
