import { defineConfig } from 'vitepress';
import { blogTheme } from './blog-theme';
import { SponsorPlugin } from 'vitepress-plugin-sponsor';

export default defineConfig({
  cleanUrls: true,
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    theme: { light: 'one-light', dark: 'dracula' },
    codeCopyButtonTitle: '复制代码',
  },
  extends: blogTheme,
  lang: 'zh-cn',
  title: '周末晚的岛屿',
  description: '基于粥里有勺糖提供主题所搭建的周末晚的博客',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Medium/result.css',
      },
    ],
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Wkndnite',
      },
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'CS 基础',
        items: [
          {
            text: 'LeetCode Hot 100',
            link: '/CS/LeetCode-100',
          },
          {
            text: '数据结构与算法',
            link: '/CS/DSA',
          },
        ],
      },
      {
        text: '前端学习',
        items: [
          { text: 'CSS', link: '/Frontend/CSS' },
          {
            text: 'JavaScript',
            link: '/Frontend/JavaScript',
          },
          {
            text: 'ES6+',
            link: '/Frontend/ES6+',
          },
          {
            text: 'TypeScript',
            link: '/Frontend/TypeScript',
          },
          {
            text: 'Webpack',
            link: '/Frontend/Webpack',
          },
          {
            text: 'Vue',
            link: '/Frontend/Vue',
          },
          {
            text: 'React',
            link: '/Frontend/React',
          },
        ],
      },
      {
        text: '开发工具',
        items: [
          {
            text: 'Git',
            link: '/DevTips/Git',
          },
          {
            text: 'Docker',
            link: '/DevTips/Docker',
          },
          {
            text: '设计模式与设计原则',
            link: '/DevTips/Design',
          },
          {
            text: '开发杂谈',
            link: '/DevTips/Others',
          },
        ],
      },
      { text: '项目记录', link: '/Projects/' },
      { text: '生活随笔', link: '/Life/' },
      { text: '面试备战', link: '/Interview/' },
    ],
    sidebar: {
      '/CS/': [
        {
          text: 'LeetCode Hot 100',
          collapsed: false,
          items: [
            {
              text: '哈希',
              link: '/CS/LeetCode-100/hash',
            },
            {
              text: '链表',
              link: '/CS/LeetCode-100/linklist',
            },
            {
              text: '双指针',
              link: '/CS/LeetCode-100/two-pointer',
            },
            {
              text: '树',
              link: '/CS/LeetCode-100/tree',
            },
            {
              text: '动态规划',
              link: '/CS/LeetCode-100/dp',
            },
            {
              text: '巧妙的解题方法',
              link: '/CS/LeetCode-100/technique',
            },
          ],
        },
        {
          text: '数据结构与算法',
          collapsed: false,
          items: [
            {
              text: '前端必会算法（一）',
              link: '/CS/DSA/frontend-1',
            },
            {
              text: '前端必会算法（二）',
              link: '/CS/DSA/frontend-2',
            },
            {
              text: '前端必会算法（三）',
              link: '/CS/DSA/frontend-3',
            },
          ],
        },
      ],
      '/Frontend/': [
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              text: 'CSS 计算属性',
              link: '/Frontend/CSS/computed',
            },
            {
              text: '视觉格式化模型',
              link: '/Frontend/CSS/visual-formatting-model',
            },
            {
              text: '层叠上下文',
              link: '/Frontend/CSS/stacking-context',
            },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'JavaScript 中数字的存储',
              link: '/Frontend/JavaScript/number-storage',
            },
            {
              text: '一些或大或小的坑',
              link: '/Frontend/JavaScript/some-details',
            },
            {
              text: '位运算',
              link: '/Frontend/JavaScript/bit-operation',
            },
            {
              text: 'JavaScript 作用域与闭包',
              link: '/Frontend/JavaScript/scope-closure',
            },
          ],
        },
        {
          text: 'ES6+',
          collapsed: false,
          items: [
            {
              text: 'ES6+ 一些零碎的改动',
              link: '/Frontend/ES6+/some-changes',
            },
            {
              text: 'ES6 中数组的改动',
              link: '/Frontend/ES6+/array',
            },
            {
              text: 'ES6 中对象的改动',
              link: '/Frontend/ES6+/object',
            },
            {
              text: 'Promise',
              link: '/Frontend/ES6+/promise',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            {
              text: '字节 · 深入浅出 TypeScript',
              link: '/Frontend/TypeScript/byte-ts',
            },
          ],
        },
        {
          text: 'Webpack',
          collapsed: false,
          items: [
            {
              text: 'Webpack 入门',
              link: '/Frontend/Webpack/intro',
            },
            {
              text: '模块化兼容性',
              link: '/Frontend/Webpack/module-compatibility',
            },
            {
              text: 'Webpack 中的 配置文件',
              link: '/Frontend/Webpack/config',
            },
            {
              text: 'Webpack 编译过程',
              link: '/Frontend/Webpack/compile-process',
            },
          ],
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            {
              text: 'Vue3 里的 ref 和 reactive',
              link: '/Frontend/Vue/ref-reactive',
            },
            {
              text: '谈一谈 Vue3 中的虚拟 DOM',
              link: '/Frontend/Vue/virtual-dom',
            },
            {
              text: 'Vue3 中模板的本质',
              link: '/Frontend/Vue/nature-of-template',
            },
            {
              text: '组件树和虚拟 DOM 树',
              link: '/Frontend/Vue/component-tree-and-virtual-dom-tree',
            },
            {
              text: 'Vue 中数据拦截的本质',
              link: '/Frontend/Vue/data-interception',
            },
            {
              text: 'Vue 中响应式数据的本质',
              link: '/Frontend/Vue/reactive-data',
            },
          ],
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            {
              text: '字节 · 响应式系统与 React',
              link: '/Frontend/React/byte-react',
            },
            {
              text: 'React 核心概念（一）',
              link: '/Frontend/React/core-concepts-one',
            },
            {
              text: 'React 核心概念（二）',
              link: '/Frontend/React/core-concepts-two',
            },
            {
              text: 'React 路由',
              link: '/Frontend/React/router',
            },
            {
              text: 'React 中的状态管理库',
              link: '/Frontend/React/redux',
            },
            {
              text: '属性默认值和类型检查',
              link: '/Frontend/React/prop-type',
            },
            {
              text: '高阶组件',
              link: '/Frontend/React/hoc',
            },
            {
              text: 'Context',
              link: '/Frontend/React/context',
            },
            {
              text: 'Render Props',
              link: '/Frontend/React/render-props',
            },
            {
              text: 'Portals',
              link: '/Frontend/React/portals',
            },
            {
              text: '组件渲染时的性能优化',
              link: '/Frontend/React/performance',
            },
          ],
        },
      ],
      '/DevTips/': [
        {
          text: 'Git',
          collapsed: false,
          items: [
            { text: 'Commit 规范', link: '/DevTips/Git/commit' },
            { text: 'Git 新旧命令', link: '/DevTips/Git/git-command-new' },
            {
              text: 'Git 大小写不敏感闹乌龙',
              link: '/DevTips/Git/git-ignorecase',
            },
          ],
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            {
              text: 'Docker 存在的必要性',
              link: '/DevTips/Docker/preview',
            },
            { text: '简短的介绍', link: '/DevTips/Docker/intro' },
            { text: '一些常用命令', link: '/DevTips/Docker/command' },
            {
              text: 'Docker 通信',
              link: '/DevTips/Docker/communication',
            },
          ],
        },
        {
          text: '设计模式与设计原则',
          collapsed: false,
          items: [
            { text: '设计模式', link: '/DevTips/Design/design-patterns' },
            { text: '设计原则', link: '/DevTips/Design/design-principles' },
            {
              text: '设计模式详解第一期 单例模式',
              link: '/DevTips/Design/design-patterns-singleton',
            },
          ],
        },
      ],
      '/Projects/': [
        {
          text: 'React',
          collapsed: false,
          items: [
            {
              text: '请求转发与默认打包路径冲突',
              link: '/Projects/React/path-conflict-proxy-pack',
            },
            {
              text: 'Toast UI sourcemap 报错',
              link: '/Projects/React/toastui-parse-sourcemap',
            },
          ],
        },
      ],
      '/Life/': [
        {
          text: '2020',
          collapsed: false,
          items: [{ text: '菊次郎的夏天', link: '/Life/2020/kikujiro-summer' }],
        },
        {
          text: '2021',
          collapsed: false,
          items: [
            {
              text: '《史记·项羽本纪》的一些看法',
              link: '/Life/2021/historical-records-xiangyu',
            },
          ],
        },
      ],
      '/Interview/': [
        {
          text: '网络',
          collapsed: false,
          items: [
            {
              text: '五层网络模型',
              link: '/Interview/Network/network-model',
            },
            {
              text: '常见请求方法',
              link: '/Interview/Network/request-method',
            },
            {
              text: 'Cookie',
              link: '/Interview/Network/cookie',
            },
            {
              text: 'cookie 和 storage 的区别',
              link: '/Interview/Network/cookie-storage-difference',
            },
          ],
        },
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: ['dayjs'],
    },
    plugins: [
      // 打赏插件
      SponsorPlugin({
        /**
         * 打赏模块样式
         */
        type: 'simple',
        aliPayQR: '/aliPayQR.jpg',
        weChatQR: '/weChatPayQR.jpg',
      }),
    ],
  },
});
