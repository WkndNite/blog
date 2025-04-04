// @ts-nocheck
import fs from 'fs';
import path from 'path';

function getTitle(content) {
  const match = content.match(/# (.+)/);
  return match
    ? match[0].replace('# ', '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    : '标题显示错误';
}

function getList(content) {
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
  const categoryItems = [];
  for (const file of files) {
    const indexPath = path.join(categoryPath, file, 'index.md');
    // 从index.md中读取标题
    const content = fs.readFileSync(indexPath, 'utf-8');
    const title = getTitle(content);
    const list = getList(content);
    const obj = list.map((item) => ({
      text: item.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      link: `/${category}/${file}/${item.replace(/\[([^\]]+)\]\((?:.*\/)?([^/.]+)\.\w+\)/g, '$2')}`
    }));

    categoryItems.push({
      text: title,
      collapsed: false,
      items: obj
    });
  }
  sidebar[`/${category}/`] = categoryItems;
}

export { sidebar };
