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

/**
 * @description 从 index.md 中获取 H1 标题
 */
function getTitle(content: string) {
  const match = content.match(/# (.+)/);
  return match
    ? match[0].replace('# ', '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    : '标题显示错误';
}

/**
 * @description 从 index.md 中获取超链接列表
 */
function getList(content: string): string[] {
  const match = content.match(/- (.+)/g);
  if (!match) {
    console.warn('列表匹配失败');
    return [];
  }
  return match.map((item) => item.replace(/- /g, ''));
}


/**
 * @description 将 Markdown 链接列表转换为 sidebar item 数组
 * @param list - Markdown 链接数组
 * @param category - 分类名，docs 下的一级目录
 * @param subCategory - 当前子文件夹名，若为 index 说明一级目录下无二级目录，则不拼接 subCategory
 * @returns Sidebar 里某一具体类下的列表
 */
function transformLinkToSidebarItem(
  list: string[],
  category: string,
  subCategory: string
): { text: string; link: string }[] {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item) => {
    const match = item.match(/\[([^\]]+)\]\((?:.*\/)?([^/]+)\.\w+\)/);
    // 匹配文章标题
    const text = match?.[1] ?? item;
    // 匹配文章链接
    const slug = match?.[2] ?? item;

    // 如果是 index，不拼接 file
    const path = subCategory === 'index'
      ? `/${category}/${slug}`
      : `/${category}/${subCategory}/${slug}`;

    return { text, link: path };
  });
}


// 最终目标 生成的 Sidebar 配置
const sidebar:Record<string,SidebarItem[]> = {};

// 硬编码 和项目结构相关 找 docs 目录路径
const docsPath = path.resolve(__dirname, '../..');
const filteredPathArray = [
  'index.md',
  '.vitepress',
  'Nav',
  'Works',
  'public',
  'CS',
  'Life'
];

// 对于 Life 这样的单层文件夹直接读取 index.md 生成侧边栏
const singleLayerCategories = ['Life'];

const categories = fs
  .readdirSync(docsPath)
  .filter((category) => !filteredPathArray.includes(category));


for (const category of categories) {
  const categoryPath = path.join(docsPath, category);
  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file !== 'index.md');
  const categoryItems: Array<SidebarItem> = [];
  for (const file of files) {
    const indexPath = path.join(categoryPath, file, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    const title = getTitle(content);
    const list = getList(content);

    categoryItems.push({
      text: title,
      collapsed: true,
      items: transformLinkToSidebarItem(list, category, file)
    });
  }
  sidebar[`/${category}/`] = categoryItems;
}



for(const category of singleLayerCategories) {
  const categoryPath = path.join(docsPath, category);
  const indexPath = path.join(categoryPath, 'index.md');
  const content = fs.readFileSync(indexPath, 'utf-8');

  const title = getTitle(content);
  const list = getList(content);

  sidebar[`/${category}/`] = [
    {
      text: title,
      collapsed: true,
      items: transformLinkToSidebarItem(list, category, 'index')
    }];
}

export { sidebar };
