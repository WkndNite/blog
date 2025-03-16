import { defineConfig } from 'vitepress';
import { blogTheme } from './blog-theme';
import { SponsorPlugin } from 'vitepress-plugin-sponsor';
export default defineConfig({
  cleanUrls: true,
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    theme: { light: 'one-light', dark: 'dracula' },
    codeCopyButtonTitle: '复制代码'
  },
  extends: blogTheme,
  lang: 'zh-cn',
  title: '周末晚的岛屿',
  description: '基于粥里有勺糖提供主题所搭建的周末晚的博客',
  lastUpdated: true,
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-095CYQ2P6C'
      }
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-095CYQ2P6C');
    `
    ],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Medium/result.css'
      }
    ]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Wkndnite'
      }
    ],
    nav: [
      { text: '导航站', link: '/Nav' },
      {
        text: 'CS 基础',
        items: [
          {
            text: 'LeetCode Hot 100',
            link: '/CS/LeetCode-100'
          },
          {
            text: '数据结构与算法',
            link: '/CS/DSA'
          },
          {
            text: '代码随想录',
            link: '/CS/programmercarl'
          }
        ]
      },
      {
        text: '前端学习',
        items: [
          { text: 'CSS', link: '/Frontend/CSS' },
          {
            text: 'JavaScript',
            link: '/Frontend/JavaScript'
          },
          {
            text: 'ESnext',
            link: '/Frontend/ESnext'
          },
          {
            text: 'TypeScript',
            link: '/Frontend/TypeScript'
          },
          {
            text: 'Webpack',
            link: '/Frontend/Webpack'
          },
          {
            text: 'Vue',
            link: '/Frontend/Vue'
          },
          {
            text: 'React',
            link: '/Frontend/React'
          },
          {
            text: '浏览器',
            link: '/Frontend/Browser'
          },
          {
            text: 'Debug',
            link: '/Frontend/Projects'
          }
        ]
      },
      {
        text: '开发工具',
        items: [
          {
            text: 'Git',
            link: '/DevTips/Git'
          },
          {
            text: 'Docker',
            link: '/DevTips/Docker'
          },
          {
            text: '设计模式与设计原则',
            link: '/DevTips/Design'
          },
          {
            text: '开发杂谈',
            link: '/DevTips/Others'
          }
        ]
      },
      {
        text: '面试备战',
        items: [
          {
            text: '网络',
            link: '/Interview/Network'
          },
          {
            text: 'CSS',
            link: '/Interview/CSS'
          },
          {
            text: 'JavaScript',
            link: '/Interview/JavaScript'
          },
          {
            text: '手搓代码',
            link: '/Interview/diy'
          }
        ]
      },
      { text: '个人作品', link: '/Works' },
      { text: '生活随笔', link: '/Life/' }
    ],
    sidebar: {
      '/CS/': [
        {
          text: 'LeetCode Hot 100',
          collapsed: false,
          items: [
            {
              text: 'Hot-100 哈希',
              link: '/CS/LeetCode-100/hash'
            },
            {
              text: 'Hot-100 双指针',
              link: '/CS/LeetCode-100/two-pointer'
            },
            {
              text: 'Hot-100 普通数组',
              link: '/CS/LeetCode-100/array'
            },
            {
              text: 'Hot-100 矩阵',
              link: '/CS/LeetCode-100/matrix'
            },
            {
              text: 'Hot-100 链表',
              link: '/CS/LeetCode-100/linklist'
            },
            {
              text: 'Hot-100 二叉树',
              link: '/CS/LeetCode-100/tree'
            },
            {
              text: 'Hot-100 图论',
              link: '/CS/LeetCode-100/graph'
            },
            {
              text: 'Hot-100 回溯',
              link: '/CS/LeetCode-100/backtracking'
            },
            {
              text: 'Hot-100 二分查找',
              link: '/CS/LeetCode-100/binary-search'
            },
            {
              text: 'Hot-100 栈',
              link: '/CS/LeetCode-100/stack'
            },
            {
              text: 'Hot-100 堆',
              link: '/CS/LeetCode-100/heap'
            },
            {
              text: 'Hot-100 贪心算法',
              link: '/CS/LeetCode-100/greedy'
            },
            {
              text: 'Hot-100 动态规划',
              link: '/CS/LeetCode-100/dp'
            },
            {
              text: 'Hot-100 技巧',
              link: '/CS/LeetCode-100/technique'
            }
          ]
        },
        {
          text: '数据结构与算法',
          collapsed: false,
          items: [
            {
              text: '前端必会算法（一）',
              link: '/CS/DSA/frontend-1'
            },
            {
              text: '前端必会算法（二）',
              link: '/CS/DSA/frontend-2'
            },
            {
              text: '前端必会算法（三）',
              link: '/CS/DSA/frontend-3'
            }
          ]
        },
        {
          text: '代码随想录',
          collapsed: false,
          items: [
            {
              text: '二叉树',
              link: '/CS/programmercarl/tree'
            },
            {
              text: '动态规划',
              link: '/CS/programmercarl/dp'
            }
          ]
        }
      ],
      '/Frontend/': [
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              text: '块级格式化上下文',
              link: '/Frontend/CSS/block-formatting-context'
            },
            {
              text: 'CSS 计算属性',
              link: '/Frontend/CSS/computed'
            },
            {
              text: '视觉格式化模型',
              link: '/Frontend/CSS/visual-formatting-model'
            },
            {
              text: '层叠上下文',
              link: '/Frontend/CSS/stacking-context'
            },
            {
              text: '现代化 CSS 中的 border',
              link: '/Frontend/CSS/modern-border'
            },
            {
              text: '一文搞懂 flex',
              link: '/Frontend/CSS/modern-flex'
            },
            {
              text: '盘点 CSS Grid',
              link: '/Frontend/CSS/grid'
            }
          ]
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'JavaScript 中数字的存储',
              link: '/Frontend/JavaScript/number-storage'
            },
            {
              text: '一些或大或小的坑',
              link: '/Frontend/JavaScript/some-details'
            },
            {
              text: '位运算',
              link: '/Frontend/JavaScript/bit-operation'
            },
            {
              text: 'JavaScript 作用域与闭包',
              link: '/Frontend/JavaScript/scope-closure'
            }
          ]
        },
        {
          text: 'ESnext',
          collapsed: false,
          items: [
            {
              text: 'ES6+ 一些零碎的改动',
              link: '/Frontend/ESnext/some-changes'
            },
            {
              text: 'ES6 中数组的改动',
              link: '/Frontend/ESnext/array'
            },
            {
              text: 'ES6 中对象的改动',
              link: '/Frontend/ESnext/object'
            },
            {
              text: 'Promise',
              link: '/Frontend/ESnext/promise'
            }
          ]
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            {
              text: '字节 · 深入浅出 TypeScript',
              link: '/Frontend/TypeScript/byte-ts'
            }
          ]
        },
        {
          text: 'Webpack',
          collapsed: false,
          items: [
            {
              text: 'Webpack 入门',
              link: '/Frontend/Webpack/intro'
            },
            {
              text: '模块化兼容性',
              link: '/Frontend/Webpack/module-compatibility'
            },
            {
              text: 'Webpack 中的配置文件',
              link: '/Frontend/Webpack/config'
            },
            {
              text: 'Webpack 编译过程',
              link: '/Frontend/Webpack/compile-process'
            },
            {
              text: '入口与出口配置',
              link: '/Frontend/Webpack/entry-output'
            },
            {
              text: 'Loaders 与 Plugins',
              link: '/Frontend/Webpack/loaders-plugins'
            },
            {
              text: 'Webpack 如何区分环境？',
              link: '/Frontend/Webpack/env'
            },
            {
              text: '一些细节配置补充',
              link: '/Frontend/Webpack/details'
            },
            {
              text: 'Webpack 常用扩展',
              link: '/Frontend/Webpack/extension'
            },
            {
              text: '开发服务器',
              link: '/Frontend/Webpack/dev-server'
            },
            {
              text: 'Webpack 内置插件',
              link: '/Frontend/Webpack/builtin-plugins'
            }
          ]
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            {
              text: 'Vue3 里的 ref 和 reactive',
              link: '/Frontend/Vue/ref-reactive'
            },
            {
              text: '谈一谈 Vue3 中的虚拟 DOM',
              link: '/Frontend/Vue/virtual-dom'
            },
            {
              text: 'Vue3 中模板的本质',
              link: '/Frontend/Vue/nature-of-template'
            },
            {
              text: '组件树和虚拟 DOM 树',
              link: '/Frontend/Vue/component-tree-and-virtual-dom-tree'
            },
            {
              text: 'Vue 中数据拦截的本质',
              link: '/Frontend/Vue/data-interception'
            },
            {
              text: 'Vue 中响应式数据的本质',
              link: '/Frontend/Vue/reactive-data'
            }
          ]
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            {
              text: '字节 · 响应式系统与 React',
              link: '/Frontend/React/byte-react'
            },
            {
              text: 'React 核心概念（一）',
              link: '/Frontend/React/core-concepts-one'
            },
            {
              text: 'React 核心概念（二）',
              link: '/Frontend/React/core-concepts-two'
            },
            {
              text: 'React 路由',
              link: '/Frontend/React/router'
            },
            {
              text: 'React 中的状态管理库',
              link: '/Frontend/React/redux'
            },
            {
              text: '属性默认值和类型检查',
              link: '/Frontend/React/prop-type'
            },
            {
              text: '高阶组件',
              link: '/Frontend/React/hoc'
            },
            {
              text: 'Context',
              link: '/Frontend/React/context'
            },
            {
              text: 'Render Props',
              link: '/Frontend/React/render-props'
            },
            {
              text: 'Portals',
              link: '/Frontend/React/portals'
            },
            {
              text: '组件渲染时的性能优化',
              link: '/Frontend/React/performance'
            }
          ]
        },
        {
          text: '浏览器',
          collapsed: false,
          items: [
            {
              text: '浏览器渲染原理',
              link: '/Frontend/Browser/render'
            }
          ]
        },
        {
          text: 'Debug',
          collapsed: false,
          items: [
            {
              text: 'React 请求转发与默认打包冲突',
              link: '/Frontend/Projects/cra-path-conflict-proxy-pack'
            },
            {
              text: 'React Toast UI sourcemap 报错',
              link: '/Frontend/Projects/toastui-parse-sourcemap'
            }
          ]
        }
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
              link: '/DevTips/Git/git-ignorecase'
            }
          ]
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            {
              text: 'Docker 存在的必要性',
              link: '/DevTips/Docker/preview'
            },
            { text: '简短的介绍', link: '/DevTips/Docker/intro' },
            { text: '一些常用命令', link: '/DevTips/Docker/command' },
            {
              text: 'Docker 通信',
              link: '/DevTips/Docker/communication'
            }
          ]
        },
        {
          text: '设计模式与设计原则',
          collapsed: false,
          items: [
            { text: '设计模式', link: '/DevTips/Design/design-patterns' },
            { text: '设计原则', link: '/DevTips/Design/design-principles' },
            {
              text: '设计模式详解第一期 单例模式',
              link: '/DevTips/Design/design-patterns-singleton'
            }
          ]
        }
      ],
      '/Life/': [
        {
          text: '2020',
          collapsed: false,
          items: [{ text: '菊次郎的夏天', link: '/Life/2020/kikujiro-summer' }]
        },
        {
          text: '2021',
          collapsed: false,
          items: [
            {
              text: '《史记·项羽本纪》的一些看法',
              link: '/Life/2021/historical-records-xiangyu'
            }
          ]
        }
      ],
      '/Interview/': [
        {
          text: '网络',
          collapsed: false,
          items: [
            {
              text: '五层网络模型',
              link: '/Interview/Network/network-model'
            },
            {
              text: '常见请求方法',
              link: '/Interview/Network/request-method'
            },
            {
              text: 'Cookie',
              link: '/Interview/Network/cookie'
            },
            {
              text: 'cookie 和 storage 的区别',
              link: '/Interview/Network/cookie-storage-difference'
            }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              text: 'CSS 单位总结',
              link: '/Interview/CSS/unit'
            },
            {
              text: '居中方式总结',
              link: '/Interview/CSS/center'
            }
          ]
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'let var const',
              link: '/Interview/JavaScript/let-var-const'
            },
            {
              text: 'JavaScript 数据类型',
              link: '/Interview/JavaScript/data-type'
            },
            {
              text: 'JavaScript 中的包装类型',
              link: '/Interview/JavaScript/wrapper'
            },
            {
              text: '原型和原型链',
              link: '/Interview/JavaScript/prototype'
            },
            {
              text: '数据类型的转换',
              link: '/Interview/JavaScript/type-conversion'
            }
          ]
        },
        {
          text: '手搓代码',
          collapsed: false,
          items: [
            {
              text: '手搓 Promise 全系列',
              link: '/Interview/diy/promise'
            }
          ]
        }
      ]
    }
  },
  vite: {
    ssr: {
      noExternal: ['dayjs']
    },
    plugins: [
      // 打赏插件
      SponsorPlugin({
        /**
         * 打赏模块样式
         */
        type: 'simple',
        aliPayQR: '/aliPayQR.jpg',
        weChatQR: '/weChatPayQR.jpg'
      })
    ]
  }
});
