import { defineConfig } from 'vitepress';
import { AnnouncementPlugin } from 'vitepress-plugin-announcement';
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss';
import { SponsorPlugin } from 'vitepress-plugin-sponsor';
import { blogTheme } from './blog-theme';

const baseUrl = 'https://blog.wkndnite-tech.cn';
const RSS: RSSOptions = {
  title: '周末晚的岛屿',
  baseUrl,
  copyright: 'MIT License | 周末晚'
};

export default defineConfig({
  ignoreDeadLinks: true,
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
  description: '宁鸣而死 不默而生',
  lastUpdated: true,
  head: [
    [
      'meta',
      {
        name: 'baidu-site-verification',
        content: 'codeva-CxRAHCK2KM'
      }
    ],
    [
      'script',
      {
        src: '//sdk.51.la/js-sdk-pro.min.js',
        charset: 'UTF-8',
        id: 'LA_COLLECT'
      }
    ],
    ['script', {}, 'LA.init({id:"3LcRCF8GiASfiv30",ck:"3LcRCF8GiASfiv30"})'],
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
        href: 'https://chinese-fonts-cdn.deno.dev/packages/moon-stars-kai/dist/MoonStarsKaiHW-Bold/result.css'
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
      {
        text: '站点工具',
        items: [
          { text: '导航集锦', link: '/Nav' },
          { text: '流量管理', link: 'https://v6.51.la' }
        ]
      },
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
        text: '前端漫游',
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
            text: '工程化',
            link: '/Frontend/Engineering'
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
          },
          {
            text: '杂谈',
            link: '/Frontend/Others/some'
          }
        ]
      },
      {
        text: '软技能',
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
            text: '开发范式',
            link: '/DevTips/Design'
          },
          {
            text: '开发工具',
            link: '/DevTips/Others'
          }
        ]
      },
      {
        text: '校招备战',
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
          },
          {
            text: '笔面经验',
            link: '/Interview/Experience'
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
              text: '链表',
              link: '/CS/programmercarl/linkedList'
            },
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
            },
            {
              text: 'ESnext 特性一览',
              link: '/Frontend/ESnext/overview'
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
          text: '前端工程化',
          collapsed: false,
          items: [
            {
              text: 'CSS 工程化概述',
              link: '/Frontend/Engineering/CSS-Engineering'
            },
            {
              text: '利用 Webpack 拆分 CSS',
              link: '/Frontend/Engineering/Webpack-Split-CSS'
            },
            {
              text: '解决类名冲突',
              link: '/Frontend/Engineering/CSS-Name-Conflict'
            },
            {
              text: '解决重复样式的问题',
              link: '/Frontend/Engineering/CSS-Repeat'
            },
            {
              text: '谈一谈 Post CSS',
              link: '/Frontend/Engineering/PostCSS'
            },
            {
              text: '如何抽离 CSS 文件',
              link: '/Frontend/Engineering/CSS-Extract'
            },
            {
              text: 'Babel',
              link: '/Frontend/Engineering/Babel'
            },
            {
              text: '性能优化',
              link: '/Frontend/Engineering/Performance-Optimization'
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
              text: '错误边界',
              link: '/Frontend/React/error-boundaries'
            },
            {
              text: 'Ref',
              link: '/Frontend/React/ref'
            },
            {
              text: '组件渲染时的性能优化',
              link: '/Frontend/React/performance'
            },
            {
              text: '前端框架的理解',
              link: '/Frontend/React/framework-comprehension'
            },
            {
              text: 'React 和 Vue 描述页面的区别',
              link: '/Frontend/React/react-vs-vue'
            },
            {
              text: '前端框架的分类',
              link: '/Frontend/React/framework-classification'
            },
            {
              text: '虚拟 DOM',
              link: '/Frontend/React/virtual-dom'
            },
            {
              text: 'React 整体架构',
              link: '/Frontend/React/react-architecture'
            },
            {
              text: 'React 渲染流程',
              link: '/Frontend/React/render-process'
            },
            {
              text: 'Fiber 双缓冲',
              link: '/Frontend/React/fiber-double-buffer'
            },
            {
              text: '图解 diff 算法',
              link: '/Frontend/React/diff-algorithm'
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
        },
        {
          text: '杂谈',
          collapsed: false,
          items: [
            {
              text: '别瞅了 就这一篇',
              link: '/Frontend/Others/some'
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
            {
              text: 'Git 新旧命令',
              link: '/DevTips/Git/git-command-new'
            },
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
            {
              text: '一些常用命令',
              link: '/DevTips/Docker/command'
            },
            {
              text: 'Docker 通信',
              link: '/DevTips/Docker/communication'
            }
          ]
        },
        {
          text: '开发范式',
          collapsed: false,
          items: [
            {
              text: '设计模式',
              link: '/DevTips/Design/design-patterns'
            },
            {
              text: '设计原则',
              link: '/DevTips/Design/design-principles'
            },
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
          items: [
            {
              text: '菊次郎的夏天',
              link: '/Life/2020/kikujiro-summer'
            }
          ]
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
            },
            {
              text: '加密算法',
              link: '/Interview/Network/encryption'
            },
            {
              text: 'JWT',
              link: '/Interview/Network/jwt'
            },
            {
              text: '同源与跨域',
              link: '/Interview/Network/same-origin-cross-domain'
            },
            {
              text: 'HTTP 各版本',
              link: '/Interview/Network/http-version'
            },
            {
              text: '域名和 DNS',
              link: '/Interview/Network/domain-dns'
            },
            {
              text: '输入 URL 到页面展示',
              link: '/Interview/Network/url-to-page'
            },
            {
              text: 'Session',
              link: '/Interview/Network/session'
            },
            {
              text: 'TCP 协议',
              link: '/Interview/Network/tcp'
            },
            {
              text: 'CSRF 和 XSS',
              link: '/Interview/Network/csrf-xss'
            },
            {
              text: 'SSL、TLS 和 HTTPS',
              link: '/Interview/Network/ssl-tls-https'
            },
            {
              text: '网络性能优化',
              link: '/Interview/Network/performance-optimization'
            },
            {
              text: 'WebSocket',
              link: '/Interview/Network/websocket'
            },
            {
              text: '缓存',
              link: '/Interview/Network/cache'
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
              text: '运算符',
              link: '/Interview/JavaScript/operator'
            },
            {
              text: '原型和原型链',
              link: '/Interview/JavaScript/prototype'
            },
            {
              text: '数据类型的转换',
              link: '/Interview/JavaScript/type-conversion'
            },
            {
              text: 'this 指向',
              link: '/Interview/JavaScript/this'
            },
            {
              text: '垃圾回收与内存泄漏',
              link: '/Interview/JavaScript/gc'
            },
            {
              text: '执行栈和执行上下文',
              link: '/Interview/JavaScript/execution-context'
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
            },
            {
              text: '数组方式解构对象',
              link: '/Interview/diy/destructure'
            }
          ]
        },
        {
          text: '笔面经验',
          collapsed: false,
          items: [
            {
              text: '小米暑期实习一面',
              link: '/Interview/Experience/250319xiaomi'
            },
            {
              text: '腾讯音乐暑期实习初试',
              link: '/Interview/Experience/250320txyy'
            },
            {
              text: '美团暑期实习笔试',
              link: '/Interview/Experience/250322meituan'
            },
            {
              text: '拼多多暑期实习笔试',
              link: '/Interview/Experience/250323pdd'
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
      RssPlugin(RSS),
      // 打赏插件
      SponsorPlugin({
        /**
         * 打赏模块样式
         */
        type: 'simple',
        aliPayQR: '/aliPayQR.jpg',
        weChatQR: '/weChatPayQR.jpg'
      }),
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '👇 微信 👇' },
          {
            type: 'image',
            src: '/wechat.png'
          },
          {
            type: 'text',
            content: '欢迎私信交流'
          }
        ],
        duration: -1,
        twinkle: true,
        mobileMinify: true
      })
    ]
  }
});
