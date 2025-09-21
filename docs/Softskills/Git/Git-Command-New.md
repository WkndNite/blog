---
date: 2025-01-04
tags:
  - Git
---

# Git ( 新鲜版 )

Git 是一个分布式版本控制系统，它是由 Linus Torvalds 在 2005 年创建的但是，很多开发者现在使用的命令依然是老的 Git 命令，这些命令已经过时了。在这篇文章中，我将从头到尾对 Git 命令做一个梳理，希望你能用到一些比较新的命令来提升你的 Git 操作的安全性和效率。

:::tip
本文不涉及 Git 的背景、基础以及如何安装，只对 Git 命令做一个梳理。前序工作请自行查阅相关资料。当然，除了安装问题，别的不影响你阅读本文。
:::

:::info
本文只能保证你成为一个基础的 Git 用户，无法让你精通 Git 命令。如果你想要更深入的了解 Git 命令，你可以查阅 [官方文档](https://git-scm.com/doc)。毕竟，我所列出的命令只是 Git 命令的冰山一角。
:::

## 旧的 Git 命令

### Git 工作流程

下面这些是比较常用的命令，能够让你从初始化一个 Git 仓库或克隆别人的仓库起步，到提交代码、远程同步。这便完成了一个最基本的 Git 工作流程。

```Bash
git clone url-example # 克隆远程仓库
git init # 初始化一个 Git 仓库
git add 1.txt  # 添加文件到暂存区
git add .  # 添加所有文件到暂存区
git status  # 查看当前仓库的状态
git commit -m "commit message"  # 提交暂存区的文件
git pull # 拉取远程仓库的代码
git push # 推送代码到远程仓库
```

### 一些别的命令

接下来展示了一些你可能能用到但是不常用的命令。此外，你可以借助一些 UI 界面完成这些命令，比如 VS Code 插件 Git Graph 便支持下面的 `git reset` 命令。

1. 你可以通过下面的命令**查看或者切换分支**。

   ```Bash
   git branch # 查看本地分支
   git branch -a # 查看所有分支，包括远程分支
   git branch new_branch # 创建新分支
   git checkout another_branch # 切换分支
   git checkout -b new_branch # 创建并切换到新分支
   ```

2. 你可以通过下面的命令**查看你的提交历史**。默认情况输出的是最近的提交，参数的含义顾名思义。当然，我仍然推荐通过 UI 界面查看提交历史。

   ```Bash :no-line-numbers
   git log --oneline --graph --all # 查看分支的历史
   ```

3. 如果你发现自己的代码写错了，想要回到之前的版本，你也可以通过 Git **回退版本**。

   ```Bash
   git reset (--soft | --mixed | --hard) [commit]
   # commit 可以是 commit id，也可以是 HEAD^，HEAD~6 这样的相对引用
   ```

   可以看到，参数是 soft、mixed、hard，分别代表了回退版本后的状态。soft 代表回退版本后保留工作区，mixed 代表回退版本后保留暂存区，hard 代表回退版本后不保留工作区和暂存区。

   :::danger
   因此，在使用--hard 参数的时候，请务必**慎之又慎**！
   :::

4. 那在你回退版本之后，你又后悔了，想要回到之后的版本，你可以通过 Git **查看新版本历史**。

   ```Bash :no-line-numbers
   git reflog
   ```

5. 在前面通过 reset 你可以实现让暂存区的工作返回到你的工作区，那如何直接丢弃你工作区的修改呢？你可以通过下面的命令**丢弃工作区的修改**。

   ```Bash :no-line-numbers
   git checkout -- file
   ```

   你可以通过 `git checkout -- .` 丢弃所有工作区的修改。

6. 当然，在团队协作过程中，你是一定会用到合并他人的分支的。你可以通过下面的命令**合并分支**。

   ```Bash :no-line-numbers
   git merge another_branch
   ```

   你可以通过 `git merge --abort` 取消合并。
   :::tip
   在合并他人分支的时候，记得先切换到他人分支拉取最新代码，再切换回自己的分支合并他人分支。
   :::

7. 既然 pull 命令需要切换到他人分支使用，那如何在自己的分支拉取他人分支的代码呢？

   ```Bash :no-line-numbers
   git fetch origin remote_another_branch:local_another_branch
   ```

8. 在和远程仓库交互之前，需要先配置远程仓库的地址。你可以通过下面的命令**配置远程仓库的地址**。

   ```Bash :no-line-numbers
   git remote add origin url-example
   ```

   origin 是远程仓库的别名，url-example 是远程仓库的地址。你可以通过 `git remote -v` 查看远程仓库的地址。

9. 可以通过栈命令**暂存工作区的修改**。

   ```Bash
   git stash
   git checkout another_branch
   # do something
   git checkout main
   git stash pop
   ```

10. 在和远程仓库交互的过程中，我们可能会遇到**分支跟踪**的问题，可能在你拉取的时候，也可能在你推送的时候。建议提前设置分支跟踪。

    ```Bash :no-line-numbers
    git branch --set-upstream-to=origin/remote_branch local_branch
    ```

## 新的 Git 命令

1. `git switch` 和 `git restore` 命令是在 Git 2.23 版本中引入的，用来替代 `git checkout` 命令。

   ```Bash
   git switch another_branch
   git swithc -c new_branch
   git switch -c new_branch --track origin/remote_branch
   git switch - # 切换到上一个分支
   ```

   ```Bash
   git restore file
   git restore --source=commit_id file
   git restore --staged file
   git restore --source=commit_id .
   git restore -w -- * # 恢复所有删除的文件
   git restore --staged --worktree file # 丢弃
   ```

2. `git worktree` 命令是在 Git 2.5 版本中引入的，用来管理多个工作目录下的多个分支，开发者可以借助这个命令同时开发多个分支。

   ```Bash
   git worktree add dir_path another_branch
   git worktree list
   git worktree remove dir_path
   git worktree move old_dir_path new_dir_path
   ```

3. `git sparse-checkout` 命令是在 Git 2.25 版本中引入的，用来配置仓库的工作区，可以通过这个命令只拉取仓库的部分文件。其中，set 命令之后可以列出多个你想要检索拉取的路径，也可以分多次调用。

   ```Bash
   git sparse-checkout init # 启用 sparse-checkout
   git sparse-checkout set dir/
   git sparse-checkout list
   git sparse-checkout add dir/
   git sparse-checkout disable
   ```

4. `git range-diff` 命令是在 Git 2.19 版本中引入的，用来比较两个 commit 之间的差异。

   ```Bash
   git range-diff A~n..A B~n..B # 比较i两个分支上的最近的 n 个提交
   git range-diff A..B C..D # 更常见的用法 直接指定两个范围
   ```

5. `git maintenance` 命令是在 Git 2.30 版本引入的，用于管理和自动化各种维护任务的命令，通过一组预定义的任务来帮助保持仓库的健康状态和高性能。

   - gc 执行完整的垃圾收集 包括压缩对象数据库
   - commit-graph 构建或更新提交图文件以加速提交历史查询
   - loose-objects 清理松散对象并将其打包
   - incremental-repack 逐步重新打包对象以优化存储
   - prefetch 预先获取远程分支的新数据 以加速未来的克隆和拉取操作

   ```Bash
   git maintenance start # 启用自动维护
   git maintenance stop # 禁用自动维护
   git maintenance run # 执行所有配置的维护任务
   git maintenance run --task=gc # 执行指定的维护任务
   git maintenance start --schedule=daily # 定时执行维护任务
   ```

   也可以将维护任务配置到 `.git/config` 文件中。

   ```Bash
   [maintenance "daily"]
       task = prefetch
       task = loose-objects
   [maintenance "hourly"]
       task = commit-graph
   [maintenance "weekly"]
       task = incremental-repack
   [maintenance "monthly"]
       task = gc
   ```

6. `git log --remerge-diff` 命令是在 Git 2.35 版本中引入的，通过重播记录的合并策略重建合并提交，并展示该合并引入的确切更改。这对于调试合并冲突或审查复杂的合并历史非常有用。

   ```Bash :no-line-numbers
   git log --remerge-diff
   ```

## 推荐操作

1. 能使用新命令的时候尽量使用新命令，新命令更加安全、高效。比如分支的切换，可以使用 `git switch` 命令代替 `git checkout` 命令。

2. 关于代码拉取

   `git pull` 命令会使得提交历史变得混乱，原因是 `git pull` 命令实际上是 `git fetch` 和 `git merge` 命令的组合。为了使提交历史记录维持线性，推荐使用 `git pull --rebase` 命令。

   :::tip
   在变基之前，本地的文件是不可以有变更的。如果有的话，可以通过 `git stash` 命令暂存变更货在合适的情况下直接提交或删除变更内容。
   :::

   为了方便你的操作，可以直接将变基拉取设置为默认行为。

   ```Bash
   git config --global pull.rebase true
   git config --global rebase.autoStash true
   ```

3. 能进行命令行操作就尽量不要使用 UI 界面，尤其是你不太了解 Git 命令的时候。
4. 能进行细粒度操作就尽量不要进行粗粒度操作，比如 `git add .` 命令会将所有文件添加到暂存区，但是可以通过 `git add file` 命令将指定文件添加到暂存区。
5. 团队合作的时候，尽量不要涉及风险操作，比如强制推送、回退版本、栈空间暂存更改等。
6. 协同开发的过程，提交消息格式尽量统一，可以自己定制，也可以使用 Conventional Commit，方便别人能看懂你的提交记录。
