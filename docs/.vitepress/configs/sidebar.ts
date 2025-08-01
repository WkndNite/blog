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

type Sidebar = Record<string, SidebarItem[]>;

const parseIndexMd = (filePath: string) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // 去除 Markdown 注释块 <!-- -->
  const cleaned = content.replace(/<!--[\s\S]*?-->/g, '');

  const titleMatch = cleaned.match(/# (.+)/);
  const title = titleMatch
    ? titleMatch[1].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    : path.basename(filePath, '.md');

  const hrefList = (cleaned.match(/- (.+)/g) || []).map((item) =>
    item.replace(/- /g, '')
  );

  return { title, hrefList };
};

const transformLinkToSidebarItem = (list: string[], basePath: string) => {
  return list.map((item) => {
    const match = item.match(/\[([^\]]+)\]\((?:.*\/)?([^/]+)\.\w+\)/);
    const text = match?.[1] ?? item;
    const slug = match?.[2] ?? item;

    return {
      text,
      link: `${basePath}/${slug}`
    };
  });
};

const detectDirectoryType = (dirPath: string) => {
  const children = fs.readdirSync(dirPath);

  const onlySubDirs = children.every((file) =>
    fs.statSync(path.join(dirPath, file)).isDirectory()
  );

  const hasIndex = children.includes('index.md');
  const hasOtherMd = children.some((file) => file.endsWith('.md'));

  if (!onlySubDirs && hasIndex) return 'single';
  if (onlySubDirs) return 'double';
  if (!onlySubDirs && !hasIndex && hasOtherMd) return 'mixed';
  return 'unknown';
};

const generateSidebarItems = (dirPath: string, category: string) => {
  const type = detectDirectoryType(dirPath);
  const items: SidebarItem[] = [];

  if (type === 'single') {
    const indexPath = path.join(dirPath, 'index.md');
    const { title, hrefList } = parseIndexMd(indexPath);
    items.push({
      text: title,
      collapsed: false,
      items: transformLinkToSidebarItem(hrefList, `/${category}`)
    });
  } else if (type === 'double' || type === 'mixed') {
    // 处理子目录
    const subDirs = fs
      .readdirSync(dirPath)
      .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());

    for (const subDir of subDirs) {
      const subDirPath = path.join(dirPath, subDir);
      const indexPath = path.join(subDirPath, 'index.md');

      if (fs.existsSync(indexPath)) {
        const { title, hrefList } = parseIndexMd(indexPath);
        items.push({
          text: title,
          collapsed: false,
          items: transformLinkToSidebarItem(hrefList, `/${category}/${subDir}`)
        });
      }
    }

    // 处理混合目录中的单个文件
    if (type === 'mixed') {
      const singleFiles = fs
        .readdirSync(dirPath)
        .filter((file) => {
          const fullPath = path.join(dirPath, file);
          return (
            fs.statSync(fullPath).isFile() &&
            file.endsWith('.md') &&
            file !== 'index.md'
          );
        })
        .map((file) => {
          const filePath = path.join(dirPath, file);
          const { title } = parseIndexMd(filePath);
          return {
            text: title,
            link: `/${category}/${path.basename(file, '.md')}`
          };
        });

      if (singleFiles.length > 0) {
        items.push({
          text: '碎片集锦',
          collapsed: false,
          items: singleFiles
        });
      }
    }
  } else {
    console.warn(`未知目录类型: ${dirPath}`);
  }

  return items;
};

// 只需要处理这些指定目录
const TARGET_DIRECTORIES = ['Life', 'Frontend', 'Interview', 'Softskills'];

const sidebar: Sidebar = {};
const docsPath = path.resolve(__dirname, '../..');

TARGET_DIRECTORIES.forEach((category) => {
  const categoryPath = path.join(docsPath, category);

  if (!fs.existsSync(categoryPath)) {
    console.warn(`目录不存在: ${categoryPath}`);
    return;
  }

  if (!fs.statSync(categoryPath).isDirectory()) {
    console.warn(`路径不是目录: ${categoryPath}`);
    return;
  }

  sidebar[`/${category}/`] = generateSidebarItems(categoryPath, category);
});

export { sidebar };
