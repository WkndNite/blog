---
date: 2024-12-03
tags:
  - Git
cover: https://cdn-icons-png.flaticon.com/128/12514/12514434.png
---

# 约定式提交

[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更， 使这种惯例与 SemVer 相互对应。

## 提交结构

```md
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

## 类型说明

- `feat`：表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）。
- `fix`：表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）。
- `BREAKING CHANGE`：表示引入了破坏性变更（这和语义化版本中的 MAJOR 相对应）。**破坏性变更可以是任意类型提交的一部分。**
- `docs`：用于修改文档，例如修改 README 文件、API 文档等。
- `style`：用于修改代码的样式，例如调整缩进、空格、空行等。
- `refactor`：用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑。
- `perf`：用于优化性能，例如提升代码的性能、减少内存占用等。
- `test`：用于修改测试用例，例如添加、删除、修改代码的测试用例等。
- `build`：用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等。
- `ci`：用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置。
- `chore`：用于对非业务性代码进行修改，例如修改构建流程或者工具配置等。

## 约定式提交规范

详情可以参照 [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)。

## 如何使用约定式提交

对于约定式提交的使用有很多渠道，包括但不限于 commitlint、commitizen、husky 等。这里介绍我开发过程中自己使用的偏好。

### cz-vinyl

cz-vinyl 是一个基于 [cz-customizable](https://github.com/leonardoanalista/cz-customizable) 的 commitizen 插件，它提供了一套自定义的提交信息模板，可以满足大部分的开发需求。

```sh
npm install -g cz-vinyl
```

```Bash
//.czrc
// 全局配置"C:\Users\lenovo\.czrc"
{ "path": "cz-vinyl" }
```

![cz-conventional-changelog](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/cz-conventional-changelog.png)

![cz-vinyl](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/cz-vinyl.png)

:::tip
cz-vinyl 只不过是一个提交的模板，其本质还是在 Commitizen 工具上构建的。上面展示了只用最基础的 Commitizen 提交和用 cz-vinyl 提交的界面，至于命令行里显示的信息，可以参考对应配置。前者在官方有详细的项目配置介绍，后者我进行了全局配置（图方便的懒人）。
:::

### CodeGeeX

用 VS Code 开发过程中，可以借助 AI 插件 CodeGeeX 智能生成 Commit Message。若想要生成以上风格的提交信息，需要修改插件设置：

```JSON title="settings.json"
{
  "otherOptions": "otherValues",
  "Codegeex.CommitMessage.LanguagePreference": "English",
  "Codegeex.CommitMessageStyle": "ConventionalCommits"
}
```

之后就可以在侧边栏的源代码管理中点击 CodeGeeX 的 Logo 生成 Commit Message，等待几秒就可以提交 and 同步啦。

### Chrome Extension — Refined Github

Refined Github 是一个 Chrome 插件，可以美化 GitHub 的界面，因此可以帮助你更好地浏览你的提交记录。

![refined-github](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/refined-github.png)

### Github Copilot

Github Copilot 是一个由 OpenAI 提供支持的 VS Code 插件，可以帮助你更快地编写代码。在编写代码的过程中，Copilot 会根据你的代码上下文，为你提供代码提示。当你在编写提交信息时，Copilot 也会为你提供提交信息的建议。

好吧，上一段话是 Copilot 吹自己的一段介绍，当你看到这句话的时候，我已经卸载 Codegeex 插件了，因为 Copilot 的功能更加强大，而且是免费的。当然，这句话也是 Copilot 自己写的。关键是，Codegeex 有时候会卡住，Copilot 编写超级快！

虽然但是，Copilot 现在对于 VSCode 可以免费使用了，包括自动编写提交信息，我表示——已转坑！（2024 年 12 月 22 日）

在安装好插件以后，你可以在你的 `settings.json` 文件中添加以下配置来使用你喜欢的提交格式，命令要尽量简洁，让这个所谓的 AI 明白你想要的格式：

```JavaScript
{
  "github.copilot.chat.commitMessageGeneration.instructions": [
    {
      "text": "Use conventional commit message format in English." // [!code focus]
    }
  ]
}
```
