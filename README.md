# 周末晚的岛屿 🏝️

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![VitePress](https://img.shields.io/badge/VitePress-1.6.3-green.svg)
![Vue](https://img.shields.io/badge/Vue-3.5.12-4FC08D.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)

一个基于 VitePress 搭建的个人技术博客

[🌐 在线访问](https://blog.wkndnite-tech.cn/) • [📖 文档](https://vitepress.dev/) • [🐛 反馈问题](https://github.com/WkndNite/blog/issues)

</div>

## ✨ 特性

- 🚀 **现代化技术栈** - 基于 VitePress 构建，支持 Vue 3 和 TypeScript
- 🎨 **精美主题** - 使用 @sugarat/theme 主题，界面简洁美观
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🔍 **全文搜索** - 集成 Pagefind 实现快速搜索
- 📊 **数学公式** - 支持 LaTeX 数学公式渲染
- 🎯 **代码高亮** - 精美的代码语法高亮
- 🔔 **公告系统** - 支持站点公告功能
- 📡 **RSS 订阅** - 自动生成 RSS 订阅源
- ⚡ **快速部署** - 一键部署到 Vercel

## 📁 项目结构

```
blog/
├── docs/                    # 文档目录
│   ├── .vitepress/         # VitePress 配置
│   ├── Frontend/           # 前端技术文章
│   ├── Interview/          # 面试相关
│   ├── Life/              # 生活随笔
│   ├── Softskills/        # 软技能
│   ├── Works/             # 作品展示
│   ├── Nav/               # 导航页面
│   ├── public/            # 静态资源
│   └── index.md           # 首页
├── package.json           # 项目配置
├── biome.json            # 代码格式化配置
├── vercel.json           # Vercel 部署配置
└── README.md             # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- Bun (推荐) 或 npm/yarn/pnpm

### 安装依赖

```bash
# 使用 bun (推荐)
bun install

# 或使用 npm
npm install
```

### 本地开发

```bash
# 启动开发服务器
bun run dev

# 或使用 npm
npm run dev
```

访问 http://localhost:5173 查看本地效果

### 构建部署

```bash
# 构建生产版本
bun run build

# 预览构建结果
bun run serve
```

## 🛠️ 开发工具

### 代码格式化

```bash
# 格式化代码
bun run format
```

### 文本校验

```bash
# 检查和修复文本问题
bun run lint
```

### 提交代码

```bash
# 自动格式化、校验并提交
bun run cz
```

## 🎨 主题配置

本项目使用 [@sugarat/theme](https://theme.sugarat.top/) 主题，支持丰富的自定义配置：

- 个性化首页设计
- 自动切换励志格言
- 文章分类和标签
- 评论系统集成
- 赞助支持功能

## 📝 内容分类

- **Frontend** - 前端技术学习笔记和实践经验
- **Interview** - 面试题目整理和求职经验分享
- **Life** - 生活感悟和随笔记录
- **Softskills** - 软技能提升和职场心得
- **Works** - 个人作品和项目展示
- **Nav** - 实用工具和网站导航

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

**周末晚 (WkndNite)**

- 🌐 个人网站: [https://blog.wkndnite-tech.cn/](https://blog.wkndnite-tech.cn/)
- 🐙 GitHub: [@WkndNite](https://github.com/WkndNite)
- 📧 邮箱: [联系邮箱](malito:WkndNite@126.com)

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 强大的静态站点生成器
- [@sugarat/theme](https://theme.sugarat.top/) - 精美的博客主题
- [Element Plus](https://element-plus.org/) - Vue 3 组件库
- [Vercel](https://vercel.com/) - 优秀的部署平台

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐！**

</div>
