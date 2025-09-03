import fs from "node:fs";
import path from "node:path";

type SidebarItem = {
  text: string;
  collapsed: boolean;
  items: Array<{
    text: string;
    link: string;
  }>;
};

type Sidebar = Record<string, SidebarItem[]>;

// 解析index.md的标题和列表项
const parseIndexMd = (filePath: string) => {
  const content = fs.readFileSync(filePath, "utf-8");

  // 去除 Markdown 注释块 <!-- -->
  const cleaned = content.replace(/<!--[\s\S]*?-->/g, "");

  // 提取index.md的总标题（优先一级标题#，无则用文件名）
  const titleMatch = cleaned.match(/# (.+)/);
  const title = titleMatch
    ? titleMatch[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // 移除标题中的链接语法
    : path.basename(filePath, ".md");

  // 提取所有 "- " 开头的列表项
  const hrefList = (cleaned.match(/- (.+)/g) || []).map((item) =>
    item.replace(/- /g, ""),
  );

  return { title, hrefList };
};

/**
 * 处理链接路径拼接逻辑
 * 确保生成的链接与实际路由路径完全匹配，以支持当前页面高亮
 */
const transformLinkToSidebarItem = (list: string[], basePath: string) => {
  return list.map((item) => {
    // 匹配 Markdown 链接语法：[文本内容](路径信息)
    const linkMatch = item.match(/\[([^\]]+)\]\(([^)]+)\)/);

    if (linkMatch) {
      const text = linkMatch[1];
      const rawPath = linkMatch[2];
      const ext = path.extname(rawPath);
      const isMdFile = ext.toLowerCase() === ".md";

      // 处理路径：
      // 1. .md文件移除扩展名（大多数文档系统会自动处理）
      // 2. 其他文件保留完整路径
      // 3. 确保路径以/开头，保持一致性
      let finalPath = isMdFile ? path.basename(rawPath, ext) : rawPath;

      // 组合基础路径和最终路径，确保路径格式统一
      let fullLink = `${basePath}/${finalPath}`.replace(/\/+/g, "/");

      // 确保链接始终以/开头
      if (!fullLink.startsWith("/")) {
        fullLink = `/${fullLink}`;
      }

      return {
        text,
        link: fullLink,
      };
    }

    // 非Markdown链接处理
    let fullLink = `${basePath}/${item}`.replace(/\/+/g, "/");
    if (!fullLink.startsWith("/")) {
      fullLink = `/${fullLink}`;
    }

    return {
      text: item,
      link: fullLink,
    };
  });
};

// 检测目录类型
const detectDirectoryType = (dirPath: string) => {
  const children = fs.readdirSync(dirPath);

  const onlySubDirs = children.every((file) =>
    fs.statSync(path.join(dirPath, file)).isDirectory(),
  );

  const hasIndex = children.includes("index.md");
  const hasOtherMd = children.some((file) => file.endsWith(".md"));

  if (!onlySubDirs && hasIndex) return "single";
  if (onlySubDirs) return "double";
  if (!onlySubDirs && !hasIndex && hasOtherMd) return "mixed";
  return "unknown";
};

// 生成侧边栏项
const generateSidebarItems = (dirPath: string, category: string) => {
  const type = detectDirectoryType(dirPath);
  const items: SidebarItem[] = [];

  if (type === "single") {
    const indexPath = path.join(dirPath, "index.md");
    const { title, hrefList } = parseIndexMd(indexPath);
    items.push({
      text: title,
      collapsed: false,
      items: transformLinkToSidebarItem(hrefList, `/${category}`),
    });
  } else if (type === "double" || type === "mixed") {
    // 处理子目录
    const subDirs = fs
      .readdirSync(dirPath)
      .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());

    for (const subDir of subDirs) {
      const subDirPath = path.join(dirPath, subDir);
      const indexPath = path.join(subDirPath, "index.md");

      if (fs.existsSync(indexPath)) {
        const { title, hrefList } = parseIndexMd(indexPath);
        items.push({
          text: title,
          collapsed: false,
          items: transformLinkToSidebarItem(hrefList, `/${category}/${subDir}`),
        });
      }
    }

    // 处理混合目录中的单个文件
    if (type === "mixed") {
      const singleFiles = fs
        .readdirSync(dirPath)
        .filter((file) => {
          const fullPath = path.join(dirPath, file);
          return (
            fs.statSync(fullPath).isFile() &&
            file.endsWith(".md") &&
            file !== "index.md"
          );
        })
        .map((file) => {
          const filePath = path.join(dirPath, file);
          const { title } = parseIndexMd(filePath);
          // 确保单个文件链接格式正确
          const fileName = path.basename(file, ".md");
          let link = `/${category}/${fileName}`;
          if (!link.startsWith("/")) {
            link = `/${link}`;
          }
          return {
            text: title,
            link: link,
          };
        });

      if (singleFiles.length > 0) {
        items.push({
          text: "碎片集锦",
          collapsed: false,
          items: singleFiles,
        });
      }
    }
  } else {
    console.warn(`未知目录类型: ${dirPath}`);
  }

  return items;
};

// 需要处理的指定目录
const TARGET_DIRECTORIES = ["Life", "Frontend", "Interview", "Softskills"];

const sidebar: Sidebar = {};
const docsPath = path.resolve(__dirname, "../..");

// 遍历目标目录生成侧边栏
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

  // 确保侧边栏键名格式一致，以/结尾
  const sidebarKey = `/${category}/`;
  sidebar[sidebarKey] = generateSidebarItems(categoryPath, category);
});

export { sidebar };
