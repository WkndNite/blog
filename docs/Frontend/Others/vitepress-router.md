---
date: 2025-04-04 12:11:38
tags:
  - Vitepress
  - 约定大于配置
  - 开发范式
---

# 博客路由迁移

在软件开发领域，有一条开发范式，叫做“约定大于配置”。

我之前写文章需要每次新建一个文件都要负责三个模块——文章内容 markdown 编写、模块下文章列表 markdown 编写、侧边栏手动编写。

然而，这和约定式路由十分相似，因此今天做了配置，根据目录来帮我生成这样的侧边栏配置，不需要我再去手写啦。

在 Vite 构建的项目里，我们通过 `import.meta.glob` 来实现一个手写约定式路由，Webpack 通过 `require.context`。而在 Vitepress 会更容易，因为不需要考虑开发环境和生产环境的差异，生成侧边栏配置的过程全部运行在 Node 环境，因此只需如下配置：

```JavaScript [.vitepress/data/sidebar.ts]
import fs from 'fs';
import path from 'path';

type SidebarItem = {
  text: string;
  collapsed: boolean;
  items: Array<{
    text: string;
    link: string;
  }>;
};

function getTitle(content: string) {
  const match = content.match(/# (.+)/);
  return match
    ? match[0].replace('# ', '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    : '标题显示错误';
}

function getList(content: string) {
  const match = content.match(/- (.+)/g);
  return match ? match.map((item) => item.replace(/- /g, '')) : '列表显示错误';
}

const docsPath = path.resolve(__dirname, '../..');
const filteredPathArray = ['index.md', '.vitepress', 'Nav', 'Works', 'public'];
const categories = fs
  .readdirSync(docsPath)
  .filter((category) => !filteredPathArray.includes(category));

const sidebar = {};

for (const category of categories) {
  const categoryPath = path.join(docsPath, category);
  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file !== 'index.md');
  const categoryItems: Array<SidebarItem> = [];
  for (const file of files) {
    const indexPath = path.join(categoryPath, file, 'index.md');
    // 从index.md中读取标题
    const content = fs.readFileSync(indexPath, 'utf-8');
    const title = getTitle(content);
    const list = getList(content);
    let obj: { text: string; link: string }[] = [];
    if (Array.isArray(list)) {
      obj = list.map((item) => ({
        text: item.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
        link: `/${category}/${file}/${item.replace(/\[([^\]]+)\]\((?:.*\/)?([^/.]+)\.\w+\)/g, '$2')}`
      }));
    }

    categoryItems.push({
      text: title,
      collapsed: false,
      items: obj
    });
  }
  sidebar[`/${category}/`] = categoryItems;
}

export { sidebar };
```
