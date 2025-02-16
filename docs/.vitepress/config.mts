import { defineConfig } from 'vitepress';
import { blogTheme } from './blog-theme';
import { SponsorPlugin } from 'vitepress-plugin-sponsor';

export default defineConfig({
  cleanUrls: true,
  markdown: {
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
        href: 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Bold/result.css',
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

    logo: '/logo.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Wkndnite',
      },
    ],
    // items 可以实现下拉框 后期内容多了可以引入
    nav: [
      { text: '首页', link: '/' },
      { text: 'CS 基础', link: '/CS/' },
      {
        text: '前端学习',
        items: [
          { text: 'CSS', link: '/Frontend/CSS' },
          {
            text: 'JavaScript',
            link: '/Frontend/JavaScript',
          },
          {
            text: 'TypeScript',
            link: '/Frontend/TypeScript',
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
        ],
      },
      { text: '项目记录', link: '/Projects/' },
      { text: '生活随笔', link: '/Life/' },
      { text: '面试备战', link: '/Interview/' },
    ],
    sidebar: {
      '/CS/': [],
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
              text: '一些或大或小的坑',
              link: '/Frontend/Javascript/some-details',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            {
              text: '字节·深入浅出 TypeScript',
              link: '/Frontend/TypeScript/byte-ts',
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
          ],
        },
      ],
      '/DevTips/': [
        {
          text: 'Git',
          collapsed: false,
          items: [
            { text: 'Commit 规范', link: '/DevTips/commit' },
            { text: 'Git 新旧命令', link: '/DevTips/git-command-new' },
            {
              text: 'Git 大小写不敏感闹乌龙',
              link: '/DevTips/git-ignorecase',
            },
          ],
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            {
              text: 'Docker 存在的必要性',
              link: '/Tools/docker/preview',
            },
            { text: '简短的介绍', link: '/Tools/docker/intro' },
            { text: '一些常用命令', link: '/Tools/docker/command' },
            {
              text: 'Docker 通信',
              link: '/Tools/docker/communication',
            },
          ],
        },
        {
          text: '设计模式与设计原则',
          collapsed: false,
          items: [
            { text: '设计模式', link: '/DevTips/design-patterns' },
            { text: '设计原则', link: '/DevTips/design-principles' },
            {
              text: '设计模式详解第一期 单例模式',
              link: '/DevTips/design-patterns-singleton',
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
          ],
        },
      ],
      '/Life/': [{ text: '菊次郎的夏天', link: '/Life/2020/kikujiro-summer' }],
      '/Interview/': [
        {
          text: '网络',
          collapsed: false,
          items: [
            {
              text: '五层网络模型',
              link: '/Interview/Network/network-model',
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
