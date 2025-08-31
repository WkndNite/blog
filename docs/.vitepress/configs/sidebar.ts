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

// 保留原逻辑：解析index.md的标题和列表项（无改动）
const parseIndexMd = (filePath: string) => {
  const content = fs.readFileSync(filePath, "utf-8");

  // 去除 Markdown 注释块 <!-- -->
  const cleaned = content.replace(/<!--[\s\S]*?-->/g, "");

  // 提取index.md的总标题（优先一级标题#，无则用文件名）
  const titleMatch = cleaned.match(/# (.+)/);
  const title = titleMatch
    ? titleMatch[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // 移除标题中的链接语法
    : path.basename(filePath, ".md");

  // 提取所有 "- " 开头的列表项（保留原始格式，后续处理）
  const hrefList = (cleaned.match(/- (.+)/g) || []).map((item) =>
    item.replace(/- /g, ""),
  );

  return { title, hrefList };
};

/**
 * 核心修改：处理链接路径拼接逻辑
 * 1. 若匹配 Markdown 链接（[文本](路径)）：
 *    - 文本部分：提取 [ ] 内的纯文本
 *    - 路径部分：若路径含后缀（如.html/.pdf），直接用完整路径；若为.md，仅取文件名（兼容原逻辑）
 * 2. 若不匹配 Markdown 链接，直接用原始文本作为文本和路径
 */
const transformLinkToSidebarItem = (list: string[], basePath: string) => {
  return list.map((item) => {
    // 匹配 Markdown 链接语法：[文本内容](路径信息)
    const linkMatch = item.match(/\[([^\]]+)\]\(([^)]+)\)/);

    if (linkMatch) {
      const text = linkMatch[1]; // 提取 [ ] 内的纯文本（如“2025-03-19 小米日常一面”）
      const rawPath = linkMatch[2]; // 提取 ( ) 内的原始路径（如“250319xiaomi.md”或“docs/250319xiaomi.html”）

      // 处理路径：若路径含后缀（非纯文件名），直接用原始路径；否则取文件名（兼容原.md逻辑）
      const isHasExtension = path.extname(rawPath) !== "";
      const finalPath = isHasExtension
        ? rawPath
        : path.basename(rawPath, path.extname(rawPath)); // 若为纯文件名（如“250319xiaomi”），直接用

      // 拼接基础路径（如“/Interview” + “/250319xiaomi.html”）
      return {
        text,
        link: `${basePath}/${finalPath}`.replace(/\/+/g, "/"), // 处理多斜杠问题（如“//”转为“/”）
      };
    }

    // 若不匹配 Markdown 链接（如纯文本“测试项”），文本和路径都用原始文本
    return {
      text: item,
      link: `${basePath}/${item}`.replace(/\/+/g, "/"),
    };
  });
};

// 保留原逻辑：检测目录类型（single/double/mixed/unknown）
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

// 保留原逻辑：生成侧边栏项（无改动，依赖修改后的transformLinkToSidebarItem）
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
          return {
            text: title,
            link: `/${category}/${path.basename(file, ".md")}`,
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

// 只需要处理这些指定目录
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

  sidebar[`/${category}/`] = generateSidebarItems(categoryPath, category);
});

export { sidebar };
