// docs/.vitepress/config.mts
import { defineConfig } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress/dist/node/index.js';

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/@sugarat/theme/node.mjs';
var blogTheme = getThemeConfig({
  footer: {
    version: false,
    copyright: 'MIT License | \u5468\u672B\u665A',
    icpRecord: {
      name: '\u664BICP\u59072024052317\u53F7',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  search: {
    btnPlaceholder: '\u641C\u7D22',
    placeholder: '\u641C\u7D22\u6587\u7AE0',
    emptyText: '\u6CA1\u6709\u627E\u5230\u76F8\u5173\u6587\u7AE0',
    heading: '\u5171\u627E\u5230 {{searchResult}} \u7BC7\u6587\u7AE0'
  },
  themeColor: 'el-blue',
  recommend: false,
  author: '\u5468\u672B\u665A',
  home: {
    logo: '/avatar.jpg'
  },
  friend: {
    list: [
      {
        nickname: '\u7CA5\u91CC\u6709\u52FA\u7CD6',
        des: '\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF',
        avatar:
          'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
        url: 'https://sugarat.top'
      },
      {
        nickname: 'Vitepress',
        des: 'Vite & Vue Powered Static Site Generator',
        avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
        url: 'https://vitepress.dev/'
      },
      {
        nickname: 'Yiov',
        des: 'VitePress \u5FEB\u901F\u4E0A\u624B\u4E2D\u6587\u6559\u7A0B',
        avatar: 'https://avatars.githubusercontent.com/u/90893790?v=4',
        url: 'https://vitepress.yiov.top/'
      },
      {
        nickname: '\u82CF\u67D8',
        des: '\u53BB\u53D1\u5149\uFF0C\u800C\u4E0D\u662F\u88AB\u7167\u4EAE',
        avatar: 'https://suzhelevel6.github.io/suzhe_blog/touxiang1MB.jpg',
        url: 'https://suzhelevel6.github.io/suzhe_blog/'
      },
      {
        nickname: 'Lumen',
        des: '\u96C6\u6210 Vue \u529F\u80FD\u7EC4\u4EF6\u548C\u4E3B\u9898\u7F8E\u5316\u7684 VitePress \u63D2\u4EF6',
        avatar: 'https://lumen.theojs.cn/Logo.webp',
        url: 'https://lumen.theojs.cn/'
      },
      {
        nickname: '\u8302\u8302\u5BFC\u822A',
        des: '\u57FA\u4E8E VitePress \u7684\u4E2A\u4EBA\u524D\u7AEF\u5BFC\u822A\u9875\u9762\u6A21\u677F',
        avatar: 'https://fe-nav.netlify.app/logo.png',
        url: 'https://fe-nav.netlify.app/'
      }
    ],
    random: true,
    limit: 3
  },
  article: {
    hiddenCover: true,
    readingTime: false
  },
  hotArticle: {
    title: '\u{1F525} \u7CBE\u9009\u6587\u7AE0',
    nextText: '\u6362\u4E00\u7EC4',
    pageSize: 9,
    empty: '\u6682\u65E0\u7CBE\u9009\u5185\u5BB9'
  },
  comment: {
    label: '',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"/><path stroke="#fff" d="M21 15L20 32"/><path stroke="#fff" d="M28 15L27 32"/><path stroke="#fff" d="M33 20L16 20"/><path stroke="#fff" d="M32 27L15 27"/></g></svg>',
    type: 'giscus',
    options: {
      repo: 'WkndNite/blog',
      repoId: 'R_kgDONtQ1pA',
      category: 'Announcements',
      categoryId: 'DIC_kwDONtQ1pM4CnEEJ',
      inputPosition: 'top'
    },
    mobileMinify: true
  },
  backToTop: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#CA2C31" d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"/><path fill="#A02422" d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77c.32 0 4.37.32 4.37.32l14.4-16.1l3.64-27.5l-13.19 6.64z"/><path fill="#CA2C31" d="M56.5 100.84s4.77-.97 8.17-2.59c3.4-1.62 7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89l6.59-11.87z"/><path fill="#F7D74D" d="M31.58 80.66s-5.74-.48-12.03 7.47c-5.74 7.26-8.43 19.08-9.47 22.12s-3.53 3.66-2.7 5.05s4.42 1.31 8.85.76s8.23-1.94 8.23-1.94s-.19.48-.83 1.52c-.23.37-1.03.9-.97 1.45c.14 1.31 11.36 1.34 20.32-7.88c9.68-9.95 4.98-18.11 4.98-18.11L31.58 80.66z"/><path fill="#FBF0B4" d="M33.31 85.29s-6.19.33-11.31 8.28s-7.5 17.16-7.01 17.78c.48.62 10.02-2.83 12.31-2.14c1.57.48.76 2.07 1.18 2.49c.35.35 4.49.94 11.19-6.32c6.71-7.26 5.12-17.46 5.12-17.46l-11.48-2.63z"/><path fill="#858585" d="M36.35 74.44s-3.11 2.77-4.22 4.36c-1.11 1.59-1.11 1.73-1.04 2.21c.07.48 1.22 5.75 6.01 10.37c5.88 5.67 11.13 6.43 11.89 6.43c.76 0 5.81-5.67 5.81-5.67l-18.45-17.7z"/><path fill="#437687" d="M50.1 91.24s5.04 3.31 13.49.47c11.55-3.88 20.02-12.56 30.51-23.52c10.12-10.58 18.61-23.71 18.61-23.71l-5.95-19.93L50.1 91.24z"/><path fill="#3F545F" d="m67.99 80.33l1.39-4.32l3.48.49s2.65 1.25 4.6 2.16c1.95.91 4.46 1.6 4.46 1.6l-4.95 4.18s-2.7-1.02-4.67-1.88c-2.22-.97-4.31-2.23-4.31-2.23z"/><path fill="#8DAFBF" d="M84.32 16.14s-9.62 5.58-23.41 18.63c-12.43 11.76-21.64 22.4-23.87 31.45c-1.86 7.58-.87 12.18 3.36 17.15c4.47 5.26 9.71 7.87 9.71 7.87s3.94.06 20.38-12.59C91 62.86 107.43 36.42 107.43 36.42L84.32 16.14z"/><path fill="#D83F22" d="M104.18 41.84s-8.37-3.57-14.34-11.9c-5.93-8.27-5.46-13.86-5.46-13.86s4.96-3.89 16.11-8.34c7.5-2.99 17.71-4.52 21.07-2.03s-2.3 14.98-2.3 14.98l-10.31 19.96l-4.77 1.19z"/><path fill="#6896A5" d="M68.17 80.4s-7.23-3.69-11.83-8.94c-8.7-9.91-10.5-20.79-10.5-20.79l4.37-5.13S51.3 57.1 60.63 67.09c6.08 6.51 12.43 9.49 12.43 9.49s-1.27 1.07-2.63 2.11c-.87.67-2.26 1.71-2.26 1.71z"/><path fill="#A02422" d="M112.71 44.48s4.34-5.23 8.45-17.02c5.74-16.44.74-21.42.74-21.42s-1.69 7.82-7.56 18.69c-4.71 8.71-10.41 17-10.41 17s3.14 1.41 4.84 1.9c2.14.62 3.94.85 3.94.85z"/><path fill="#B3E1EE" d="M39.81 69.66c1.3 1.24 3.27-.06 4.56-3.1c1.3-3.04 1.28-4.74.28-5.46c-1.24-.9-3.32 1.07-4.23 2.82c-1 1.94-1.59 4.8-.61 5.74zm45.14-49.53s-7.61 5.47-15.73 12.91c-7.45 6.83-12.39 12.17-13.07 13.41c-.72 1.33-.73 3.21-.17 4.17s1.8 1.46 2.93.62c1.13-.85 9.18-9.75 16.45-16.11c6.65-5.82 11.78-9.51 11.78-9.51s2.08-3.68 1.74-4.52c-.34-.85-3.93-.97-3.93-.97z"/><path fill="#ED6A65" d="M84.95 20.13s5.62-4.31 11.74-7.34c5.69-2.82 11.35-5.17 12.37-3.13c.97 1.94-5.37 4.58-10.95 8.14c-5.58 3.56-10.95 7.81-10.95 7.81s-.82-1.5-1.35-2.89a23.7 23.7 0 0 1-.86-2.59z"/><path fill="#E1E1E1" d="M89.59 39.25c-5.57-5.13-13.32-3.75-17.14.81c-3.92 4.7-3.63 11.88 1 16.2c4.21 3.92 12.04 4.81 16.76-.69c4.2-4.88 3.94-12.13-.62-16.32z"/><path fill="#3F545F" d="M75.33 41.87c-3.31 3.25-3.13 9.69.81 12.63c3.44 2.57 8.32 2.44 11.38-.69c3.06-3.13 3.06-8.82.19-11.76c-3.3-3.37-8.59-3.9-12.38-.18z"/><path fill="#A02524" d="M50 76.89s6.19-6.28 6.87-5.6c.68.68.59 4.49-2.37 8.73c-2.97 4.24-9.5 11.79-14.67 16.88c-5.1 5.01-12.29 10.74-12.97 10.64c-.53-.08-2.68-1.15-3.54-2.19c-.84-1.03 1.67-5.9 2.68-7.51c1.02-1.61 24-20.95 24-20.95z"/><path fill="#CA2C31" d="M21.23 101.85c-.08 1.44 2.12 3.54 2.12 3.54L56.87 71.3s-1.57-1.77-6.19 1.1c-4.66 2.9-8.74 6.38-14.76 12.21c-8.39 8.14-14.61 15.8-14.69 17.24z"/><path fill="#FFF" d="M19.06 36.95c-1.11 1.11-1.16 2.89.08 3.91c1.1.91 2.89.32 3.56-.5s.59-2.6-.3-3.48c-.89-.89-2.66-.6-3.34.07z"/><path fill="#FFF" d="M41.02 35.65c-.84.93-.57 2.31.21 2.82s1.95.46 2.52-.24c.51-.63.57-1.89-.21-2.67c-.68-.67-1.98-.51-2.52.09z" opacity=".5"/><path fill="#FFF" d="M55.55 11.89s1.22-3.48 1.94-3.52c.73-.04 1.78 3.48 1.78 3.48s3.61.04 3.85.57c.31.68-2.31 2.96-2.31 2.96s.85 3.4.45 3.81c-.45.45-3.56-1.34-3.56-1.34s-3.2 2.23-3.89 1.62c-.6-.53.65-4.13.65-4.13s-3-2.19-2.84-2.8c.23-.86 3.93-.65 3.93-.65zm41.46 83.44c1.21.67 2.73.29 3.29-1c.51-1.15-.43-2.52-1.28-2.89c-.85-.37-2.34.12-2.88 1.09c-.53.96.14 2.4.87 2.8zm17.18-29.49c-.69-1.07-2.18-1.42-3.15-.56c-.94.84-.71 2.16-.18 2.83c.53.67 1.95.92 2.81.37s.94-2 .52-2.64z"/></svg>'
  },
  popover: {
    title: '\u516C\u544A',
    body: [
      { type: 'text', content: '\u{1F447} \u5FAE\u4FE1 \u{1F447}' },
      {
        type: 'image',
        src: '/wechat.png'
      },
      {
        type: 'text',
        content: '\u6B22\u8FCE\u79C1\u4FE1\u4EA4\u6D41'
      }
    ]
  },
  works: {
    title: '\u4E2A\u4EBA\u4F5C\u54C1',
    description: '\u8BB0\u5F55\u5F00\u53D1\u7684\u70B9\u70B9\u6EF4\u6EF4',
    list: [
      {
        title: '\u95EE\u5377\u4F4E\u7801\u5F15\u64CE',
        description:
          '\u{1F4AD} \u672C\u5730\u5316\u6C99\u7BB1\u7684\u95EE\u5377\u751F\u6210\u5E73\u53F0',
        time: {
          start: '2025/03/01'
        },
        url: 'https://lowcode.maozi.io',
        cover: {
          urls: [
            '/works/PixPin_2025-03-12_21-09-40.png',
            '/works/PixPin_2025-03-12_21-12-19.png',
            '/works/PixPin_2025-03-12_21-20-24.png',
            '/works/PixPin_2025-03-12_21-21-04.png'
          ],
          layout: 'list'
        },
        tags: ['Vue3', 'Pinia', 'TypeScript']
      },
      {
        title: 'IT \u77E5\u8BC6\u5E93\u524D\u540E\u53F0',
        description:
          '\u{1F4DD} CRA \u548C Umi \u53CC\u67B6\u6784\u524D\u540E\u53F0\u9879\u76EE',
        time: {
          start: '2025/02/07'
        },
        url: 'https://github.com/WkndNite/coder-station',
        cover: {
          urls: [
            '/works/b41cbd6999f93adb61e5fd56adf40af.png',
            '/works/94cdbed03feedbb78a9ee5e26890360.png'
          ],
          layout: 'list'
        },
        tags: ['React', 'Ant Design']
      }
    ]
  }
});

// docs/.vitepress/config.mts
import { SponsorPlugin } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress-plugin-sponsor/dist/index.mjs';
var config_default = defineConfig({
  cleanUrls: true,
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    lineNumbers: true,
    container: {
      tipLabel: '\u63D0\u793A',
      warningLabel: '\u8B66\u544A',
      dangerLabel: '\u5371\u9669',
      infoLabel: '\u4FE1\u606F',
      detailsLabel: '\u8BE6\u7EC6\u4FE1\u606F'
    },
    theme: { light: 'one-light', dark: 'dracula' },
    codeCopyButtonTitle: '\u590D\u5236\u4EE3\u7801'
  },
  extends: blogTheme,
  lang: 'zh-cn',
  title: '\u5468\u672B\u665A\u7684\u5C9B\u5C7F',
  description:
    '\u57FA\u4E8E\u7CA5\u91CC\u6709\u52FA\u7CD6\u63D0\u4F9B\u4E3B\u9898\u6240\u642D\u5EFA\u7684\u5468\u672B\u665A\u7684\u535A\u5BA2',
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
      label: '\u76EE\u5F55'
    },
    returnToTopLabel: '\u56DE\u5230\u9876\u90E8',
    sidebarMenuLabel: '\u76F8\u5173\u6587\u7AE0',
    lastUpdatedText: '\u4E0A\u6B21\u66F4\u65B0\u4E8E',
    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Wkndnite'
      }
    ],
    nav: [
      { text: '\u5BFC\u822A\u7AD9', link: '/Nav' },
      {
        text: 'CS \u57FA\u7840',
        items: [
          {
            text: 'LeetCode Hot 100',
            link: '/CS/LeetCode-100'
          },
          {
            text: '\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5',
            link: '/CS/DSA'
          },
          {
            text: '\u4EE3\u7801\u968F\u60F3\u5F55',
            link: '/CS/programmercarl'
          }
        ]
      },
      {
        text: '\u524D\u7AEF\u5B66\u4E60',
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
            text: '\u6D4F\u89C8\u5668',
            link: '/Frontend/Browser'
          },
          {
            text: 'Debug',
            link: '/Frontend/Projects'
          }
        ]
      },
      {
        text: '\u5F00\u53D1\u5DE5\u5177',
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
            text: '\u8BBE\u8BA1\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u539F\u5219',
            link: '/DevTips/Design'
          },
          {
            text: '\u5F00\u53D1\u6742\u8C08',
            link: '/DevTips/Others'
          }
        ]
      },
      {
        text: '\u9762\u8BD5\u5907\u6218',
        items: [
          {
            text: '\u7F51\u7EDC',
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
            text: '\u624B\u6413\u4EE3\u7801',
            link: '/Interview/diy'
          }
        ]
      },
      { text: '\u4E2A\u4EBA\u4F5C\u54C1', link: '/Works' },
      { text: '\u751F\u6D3B\u968F\u7B14', link: '/Life/' }
    ],
    sidebar: {
      '/CS/': [
        {
          text: 'LeetCode Hot 100',
          collapsed: false,
          items: [
            {
              text: 'Hot-100 \u54C8\u5E0C',
              link: '/CS/LeetCode-100/hash'
            },
            {
              text: 'Hot-100 \u53CC\u6307\u9488',
              link: '/CS/LeetCode-100/two-pointer'
            },
            {
              text: 'Hot-100 \u666E\u901A\u6570\u7EC4',
              link: '/CS/LeetCode-100/array'
            },
            {
              text: 'Hot-100 \u77E9\u9635',
              link: '/CS/LeetCode-100/matrix'
            },
            {
              text: 'Hot-100 \u94FE\u8868',
              link: '/CS/LeetCode-100/linklist'
            },
            {
              text: 'Hot-100 \u4E8C\u53C9\u6811',
              link: '/CS/LeetCode-100/tree'
            },
            {
              text: 'Hot-100 \u56FE\u8BBA',
              link: '/CS/LeetCode-100/graph'
            },
            {
              text: 'Hot-100 \u56DE\u6EAF',
              link: '/CS/LeetCode-100/backtracking'
            },
            {
              text: 'Hot-100 \u4E8C\u5206\u67E5\u627E',
              link: '/CS/LeetCode-100/binary-search'
            },
            {
              text: 'Hot-100 \u6808',
              link: '/CS/LeetCode-100/stack'
            },
            {
              text: 'Hot-100 \u5806',
              link: '/CS/LeetCode-100/heap'
            },
            {
              text: 'Hot-100 \u8D2A\u5FC3\u7B97\u6CD5',
              link: '/CS/LeetCode-100/greedy'
            },
            {
              text: 'Hot-100 \u52A8\u6001\u89C4\u5212',
              link: '/CS/LeetCode-100/dp'
            },
            {
              text: 'Hot-100 \u6280\u5DE7',
              link: '/CS/LeetCode-100/technique'
            }
          ]
        },
        {
          text: '\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5',
          collapsed: false,
          items: [
            {
              text: '\u524D\u7AEF\u5FC5\u4F1A\u7B97\u6CD5\uFF08\u4E00\uFF09',
              link: '/CS/DSA/frontend-1'
            },
            {
              text: '\u524D\u7AEF\u5FC5\u4F1A\u7B97\u6CD5\uFF08\u4E8C\uFF09',
              link: '/CS/DSA/frontend-2'
            },
            {
              text: '\u524D\u7AEF\u5FC5\u4F1A\u7B97\u6CD5\uFF08\u4E09\uFF09',
              link: '/CS/DSA/frontend-3'
            }
          ]
        },
        {
          text: '\u4EE3\u7801\u968F\u60F3\u5F55',
          collapsed: false,
          items: [
            {
              text: '\u4E8C\u53C9\u6811',
              link: '/CS/programmercarl/tree'
            },
            {
              text: '\u52A8\u6001\u89C4\u5212',
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
              text: '\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587',
              link: '/Frontend/CSS/block-formatting-context'
            },
            {
              text: 'CSS \u8BA1\u7B97\u5C5E\u6027',
              link: '/Frontend/CSS/computed'
            },
            {
              text: '\u89C6\u89C9\u683C\u5F0F\u5316\u6A21\u578B',
              link: '/Frontend/CSS/visual-formatting-model'
            },
            {
              text: '\u5C42\u53E0\u4E0A\u4E0B\u6587',
              link: '/Frontend/CSS/stacking-context'
            },
            {
              text: '\u73B0\u4EE3\u5316 CSS \u4E2D\u7684 border',
              link: '/Frontend/CSS/modern-border'
            },
            {
              text: '\u4E00\u6587\u641E\u61C2 flex',
              link: '/Frontend/CSS/modern-flex'
            },
            {
              text: '\u76D8\u70B9 CSS Grid',
              link: '/Frontend/CSS/grid'
            }
          ]
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: 'JavaScript \u4E2D\u6570\u5B57\u7684\u5B58\u50A8',
              link: '/Frontend/JavaScript/number-storage'
            },
            {
              text: '\u4E00\u4E9B\u6216\u5927\u6216\u5C0F\u7684\u5751',
              link: '/Frontend/JavaScript/some-details'
            },
            {
              text: '\u4F4D\u8FD0\u7B97',
              link: '/Frontend/JavaScript/bit-operation'
            },
            {
              text: 'JavaScript \u4F5C\u7528\u57DF\u4E0E\u95ED\u5305',
              link: '/Frontend/JavaScript/scope-closure'
            }
          ]
        },
        {
          text: 'ESnext',
          collapsed: false,
          items: [
            {
              text: 'ES6+ \u4E00\u4E9B\u96F6\u788E\u7684\u6539\u52A8',
              link: '/Frontend/ESnext/some-changes'
            },
            {
              text: 'ES6 \u4E2D\u6570\u7EC4\u7684\u6539\u52A8',
              link: '/Frontend/ESnext/array'
            },
            {
              text: 'ES6 \u4E2D\u5BF9\u8C61\u7684\u6539\u52A8',
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
              text: '\u5B57\u8282 \xB7 \u6DF1\u5165\u6D45\u51FA TypeScript',
              link: '/Frontend/TypeScript/byte-ts'
            }
          ]
        },
        {
          text: 'Webpack',
          collapsed: false,
          items: [
            {
              text: 'Webpack \u5165\u95E8',
              link: '/Frontend/Webpack/intro'
            },
            {
              text: '\u6A21\u5757\u5316\u517C\u5BB9\u6027',
              link: '/Frontend/Webpack/module-compatibility'
            },
            {
              text: 'Webpack \u4E2D\u7684\u914D\u7F6E\u6587\u4EF6',
              link: '/Frontend/Webpack/config'
            },
            {
              text: 'Webpack \u7F16\u8BD1\u8FC7\u7A0B',
              link: '/Frontend/Webpack/compile-process'
            },
            {
              text: '\u5165\u53E3\u4E0E\u51FA\u53E3\u914D\u7F6E',
              link: '/Frontend/Webpack/entry-output'
            },
            {
              text: 'Loaders \u4E0E Plugins',
              link: '/Frontend/Webpack/loaders-plugins'
            },
            {
              text: 'Webpack \u5982\u4F55\u533A\u5206\u73AF\u5883\uFF1F',
              link: '/Frontend/Webpack/env'
            },
            {
              text: '\u4E00\u4E9B\u7EC6\u8282\u914D\u7F6E\u8865\u5145',
              link: '/Frontend/Webpack/details'
            },
            {
              text: 'Webpack \u5E38\u7528\u6269\u5C55',
              link: '/Frontend/Webpack/extension'
            },
            {
              text: '\u5F00\u53D1\u670D\u52A1\u5668',
              link: '/Frontend/Webpack/dev-server'
            },
            {
              text: 'Webpack \u5185\u7F6E\u63D2\u4EF6',
              link: '/Frontend/Webpack/builtin-plugins'
            }
          ]
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            {
              text: 'Vue3 \u91CC\u7684 ref \u548C reactive',
              link: '/Frontend/Vue/ref-reactive'
            },
            {
              text: '\u8C08\u4E00\u8C08 Vue3 \u4E2D\u7684\u865A\u62DF DOM',
              link: '/Frontend/Vue/virtual-dom'
            },
            {
              text: 'Vue3 \u4E2D\u6A21\u677F\u7684\u672C\u8D28',
              link: '/Frontend/Vue/nature-of-template'
            },
            {
              text: '\u7EC4\u4EF6\u6811\u548C\u865A\u62DF DOM \u6811',
              link: '/Frontend/Vue/component-tree-and-virtual-dom-tree'
            },
            {
              text: 'Vue \u4E2D\u6570\u636E\u62E6\u622A\u7684\u672C\u8D28',
              link: '/Frontend/Vue/data-interception'
            },
            {
              text: 'Vue \u4E2D\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u672C\u8D28',
              link: '/Frontend/Vue/reactive-data'
            }
          ]
        },
        {
          text: 'React',
          collapsed: false,
          items: [
            {
              text: '\u5B57\u8282 \xB7 \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u4E0E React',
              link: '/Frontend/React/byte-react'
            },
            {
              text: 'React \u6838\u5FC3\u6982\u5FF5\uFF08\u4E00\uFF09',
              link: '/Frontend/React/core-concepts-one'
            },
            {
              text: 'React \u6838\u5FC3\u6982\u5FF5\uFF08\u4E8C\uFF09',
              link: '/Frontend/React/core-concepts-two'
            },
            {
              text: 'React \u8DEF\u7531',
              link: '/Frontend/React/router'
            },
            {
              text: 'React \u4E2D\u7684\u72B6\u6001\u7BA1\u7406\u5E93',
              link: '/Frontend/React/redux'
            },
            {
              text: '\u5C5E\u6027\u9ED8\u8BA4\u503C\u548C\u7C7B\u578B\u68C0\u67E5',
              link: '/Frontend/React/prop-type'
            },
            {
              text: '\u9AD8\u9636\u7EC4\u4EF6',
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
              text: '\u7EC4\u4EF6\u6E32\u67D3\u65F6\u7684\u6027\u80FD\u4F18\u5316',
              link: '/Frontend/React/performance'
            }
          ]
        },
        {
          text: '\u6D4F\u89C8\u5668',
          collapsed: false,
          items: [
            {
              text: '\u6D4F\u89C8\u5668\u6E32\u67D3\u539F\u7406',
              link: '/Frontend/Browser/render'
            }
          ]
        },
        {
          text: 'Debug',
          collapsed: false,
          items: [
            {
              text: 'React \u8BF7\u6C42\u8F6C\u53D1\u4E0E\u9ED8\u8BA4\u6253\u5305\u51B2\u7A81',
              link: '/Frontend/Projects/cra-path-conflict-proxy-pack'
            },
            {
              text: 'React Toast UI sourcemap \u62A5\u9519',
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
            { text: 'Commit \u89C4\u8303', link: '/DevTips/Git/commit' },
            {
              text: 'Git \u65B0\u65E7\u547D\u4EE4',
              link: '/DevTips/Git/git-command-new'
            },
            {
              text: 'Git \u5927\u5C0F\u5199\u4E0D\u654F\u611F\u95F9\u4E4C\u9F99',
              link: '/DevTips/Git/git-ignorecase'
            }
          ]
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            {
              text: 'Docker \u5B58\u5728\u7684\u5FC5\u8981\u6027',
              link: '/DevTips/Docker/preview'
            },
            {
              text: '\u7B80\u77ED\u7684\u4ECB\u7ECD',
              link: '/DevTips/Docker/intro'
            },
            {
              text: '\u4E00\u4E9B\u5E38\u7528\u547D\u4EE4',
              link: '/DevTips/Docker/command'
            },
            {
              text: 'Docker \u901A\u4FE1',
              link: '/DevTips/Docker/communication'
            }
          ]
        },
        {
          text: '\u8BBE\u8BA1\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u539F\u5219',
          collapsed: false,
          items: [
            {
              text: '\u8BBE\u8BA1\u6A21\u5F0F',
              link: '/DevTips/Design/design-patterns'
            },
            {
              text: '\u8BBE\u8BA1\u539F\u5219',
              link: '/DevTips/Design/design-principles'
            },
            {
              text: '\u8BBE\u8BA1\u6A21\u5F0F\u8BE6\u89E3\u7B2C\u4E00\u671F \u5355\u4F8B\u6A21\u5F0F',
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
              text: '\u83CA\u6B21\u90CE\u7684\u590F\u5929',
              link: '/Life/2020/kikujiro-summer'
            }
          ]
        },
        {
          text: '2021',
          collapsed: false,
          items: [
            {
              text: '\u300A\u53F2\u8BB0\xB7\u9879\u7FBD\u672C\u7EAA\u300B\u7684\u4E00\u4E9B\u770B\u6CD5',
              link: '/Life/2021/historical-records-xiangyu'
            }
          ]
        }
      ],
      '/Interview/': [
        {
          text: '\u7F51\u7EDC',
          collapsed: false,
          items: [
            {
              text: '\u4E94\u5C42\u7F51\u7EDC\u6A21\u578B',
              link: '/Interview/Network/network-model'
            },
            {
              text: '\u5E38\u89C1\u8BF7\u6C42\u65B9\u6CD5',
              link: '/Interview/Network/request-method'
            },
            {
              text: 'Cookie',
              link: '/Interview/Network/cookie'
            },
            {
              text: 'cookie \u548C storage \u7684\u533A\u522B',
              link: '/Interview/Network/cookie-storage-difference'
            }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              text: 'CSS \u5355\u4F4D\u603B\u7ED3',
              link: '/Interview/CSS/unit'
            },
            {
              text: '\u5C45\u4E2D\u65B9\u5F0F\u603B\u7ED3',
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
              text: 'JavaScript \u6570\u636E\u7C7B\u578B',
              link: '/Interview/JavaScript/data-type'
            },
            {
              text: 'JavaScript \u4E2D\u7684\u5305\u88C5\u7C7B\u578B',
              link: '/Interview/JavaScript/wrapper'
            },
            {
              text: '\u539F\u578B\u548C\u539F\u578B\u94FE',
              link: '/Interview/JavaScript/prototype'
            },
            {
              text: 'JavaScript \u4E2D\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362',
              link: '/Interview/JavaScript/type-conversion'
            }
          ]
        },
        {
          text: '\u624B\u6413\u4EE3\u7801',
          collapsed: false,
          items: [
            {
              text: '\u624B\u6413 Promise \u5168\u7CFB\u5217',
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
export { config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGVub3ZvL0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tICcuL2Jsb2ctdGhlbWUnO1xuaW1wb3J0IHsgU3BvbnNvclBsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tc3BvbnNvcic7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjbGVhblVybHM6IHRydWUsXG4gIG1hcmtkb3duOiB7XG4gICAgbWF0aDogdHJ1ZSxcbiAgICBpbWFnZToge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgdGlwTGFiZWw6ICdcdTYzRDBcdTc5M0EnLFxuICAgICAgd2FybmluZ0xhYmVsOiAnXHU4QjY2XHU1NDRBJyxcbiAgICAgIGRhbmdlckxhYmVsOiAnXHU1MzcxXHU5NjY5JyxcbiAgICAgIGluZm9MYWJlbDogJ1x1NEZFMVx1NjA2RicsXG4gICAgICBkZXRhaWxzTGFiZWw6ICdcdThCRTZcdTdFQzZcdTRGRTFcdTYwNkYnXG4gICAgfSxcbiAgICB0aGVtZTogeyBsaWdodDogJ29uZS1saWdodCcsIGRhcms6ICdkcmFjdWxhJyB9LFxuICAgIGNvZGVDb3B5QnV0dG9uVGl0bGU6ICdcdTU5MERcdTUyMzZcdTRFRTNcdTc4MDEnXG4gIH0sXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgbGFuZzogJ3poLWNuJyxcbiAgdGl0bGU6ICdcdTU0NjhcdTY3MkJcdTY2NUFcdTc2ODRcdTVDOUJcdTVDN0YnLFxuICBkZXNjcmlwdGlvbjogJ1x1NTdGQVx1NEU4RVx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENlx1NjNEMFx1NEY5Qlx1NEUzQlx1OTg5OFx1NjI0MFx1NjQyRFx1NUVGQVx1NzY4NFx1NTQ2OFx1NjcyQlx1NjY1QVx1NzY4NFx1NTM1QVx1NUJBMicsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBoZWFkOiBbXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7XG4gICAgICAgIGFzeW5jOiAnJyxcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLTA5NUNZUTJQNkMnXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHt9LFxuICAgICAgYFxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgZ3RhZygnY29uZmlnJywgJ0ctMDk1Q1lRMlA2QycpO1xuICAgIGBcbiAgICBdLFxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvbG9nby5zdmcnIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgIGhyZWY6ICdodHRwczovL2NoaW5lc2UtZm9udHMtY2RuLmRlbm8uZGV2L3BhY2thZ2VzL3lvemFpL2Rpc3QvWW96YWktTWVkaXVtL3Jlc3VsdC5jc3MnXG4gICAgICB9XG4gICAgXVxuICBdLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIG91dGxpbmU6IHtcbiAgICAgIGxldmVsOiBbMiwgM10sXG4gICAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NSdcbiAgICB9LFxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTAnLFxuICAgIGxhc3RVcGRhdGVkVGV4dDogJ1x1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFx1NEU4RScsXG5cbiAgICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBpY29uOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Xa25kbml0ZSdcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnXHU1QkZDXHU4MjJBXHU3QUQ5JywgbGluazogJy9OYXYnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDUyBcdTU3RkFcdTc4NDAnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdMZWV0Q29kZSBIb3QgMTAwJyxcbiAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENScsXG4gICAgICAgICAgICBsaW5rOiAnL0NTL0RTQSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTRFRTNcdTc4MDFcdTk2OEZcdTYwRjNcdTVGNTUnLFxuICAgICAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjAnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0NTUycsIGxpbms6ICcvRnJvbnRlbmQvQ1NTJyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0JyxcbiAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvSmF2YVNjcmlwdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdFU25leHQnLFxuICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FU25leHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1R5cGVTY3JpcHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnV2VicGFjaycsXG4gICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2snXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnVnVlJyxcbiAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1JlYWN0JyxcbiAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU2RDRGXHU4OUM4XHU1NjY4JyxcbiAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQnJvd3NlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdEZWJ1ZycsXG4gICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Byb2plY3RzJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1NURFNVx1NTE3NycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0dpdCcsXG4gICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvR2l0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0RvY2tlcicsXG4gICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRG9ja2VyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1NEUwRVx1OEJCRVx1OEJBMVx1NTM5Rlx1NTIxOScsXG4gICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1Njc0Mlx1OEMwOCcsXG4gICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvT3RoZXJzJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OTc2Mlx1OEJENVx1NTkwN1x1NjIxOCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1N0Y1MVx1N0VEQycsXG4gICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0NTUycsXG4gICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9DU1MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCcsXG4gICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NjI0Qlx1NjQxM1x1NEVFM1x1NzgwMScsXG4gICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9kaXknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnXHU0RTJBXHU0RUJBXHU0RjVDXHU1NEMxJywgbGluazogJy9Xb3JrcycgfSxcbiAgICAgIHsgdGV4dDogJ1x1NzUxRlx1NkQzQlx1OTY4Rlx1N0IxNCcsIGxpbms6ICcvTGlmZS8nIH1cbiAgICBdLFxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvQ1MvJzogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0xlZXRDb2RlIEhvdCAxMDAnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU1NEM4XHU1RTBDJyxcbiAgICAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvaGFzaCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NTNDQ1x1NjMwN1x1OTQ4OCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3R3by1wb2ludGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU2NjZFXHU5MDFBXHU2NTcwXHU3RUM0JyxcbiAgICAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvYXJyYXknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTc3RTlcdTk2MzUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9tYXRyaXgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTk0RkVcdTg4NjgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9saW5rbGlzdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NEU4Q1x1NTNDOVx1NjgxMScsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3RyZWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTU2RkVcdThCQkEnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9ncmFwaCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NTZERVx1NkVBRicsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2JhY2t0cmFja2luZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NEU4Q1x1NTIwNlx1NjdFNVx1NjI3RScsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2JpbmFyeS1zZWFyY2gnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTY4MDgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9zdGFjaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NTgwNicsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2hlYXAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdThEMkFcdTVGQzNcdTdCOTdcdTZDRDUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9ncmVlZHknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTUyQThcdTYwMDFcdTg5QzRcdTUyMTInLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9kcCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NjI4MFx1NURFNycsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3RlY2huaXF1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTVGQzVcdTRGMUFcdTdCOTdcdTZDRDVcdUZGMDhcdTRFMDBcdUZGMDknLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL0RTQS9mcm9udGVuZC0xJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NUZDNVx1NEYxQVx1N0I5N1x1NkNENVx1RkYwOFx1NEU4Q1x1RkYwOScsXG4gICAgICAgICAgICAgIGxpbms6ICcvQ1MvRFNBL2Zyb250ZW5kLTInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1RkM1XHU0RjFBXHU3Qjk3XHU2Q0Q1XHVGRjA4XHU0RTA5XHVGRjA5JyxcbiAgICAgICAgICAgICAgbGluazogJy9DUy9EU0EvZnJvbnRlbmQtMydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RUUzXHU3ODAxXHU5NjhGXHU2MEYzXHU1RjU1JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTRFOENcdTUzQzlcdTY4MTEnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0NTL3Byb2dyYW1tZXJjYXJsL3RyZWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyJyxcbiAgICAgICAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybC9kcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAnL0Zyb250ZW5kLyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDU1MnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NTc1N1x1N0VBN1x1NjgzQ1x1NUYwRlx1NTMxNlx1NEUwQVx1NEUwQlx1NjU4NycsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL2Jsb2NrLWZvcm1hdHRpbmctY29udGV4dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDU1MgXHU4QkExXHU3Qjk3XHU1QzVFXHU2MDI3JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvY29tcHV0ZWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU4OUM2XHU4OUM5XHU2ODNDXHU1RjBGXHU1MzE2XHU2QTIxXHU1NzhCJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvdmlzdWFsLWZvcm1hdHRpbmctbW9kZWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU1QzQyXHU1M0UwXHU0RTBBXHU0RTBCXHU2NTg3JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1Mvc3RhY2tpbmctY29udGV4dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTczQjBcdTRFRTNcdTUzMTYgQ1NTIFx1NEUyRFx1NzY4NCBib3JkZXInLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0NTUy9tb2Rlcm4tYm9yZGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NEUwMFx1NjU4N1x1NjQxRVx1NjFDMiBmbGV4JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvbW9kZXJuLWZsZXgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU3NkQ4XHU3MEI5IENTUyBHcmlkJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvZ3JpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCBcdTRFMkRcdTY1NzBcdTVCNTdcdTc2ODRcdTVCNThcdTUwQTgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0phdmFTY3JpcHQvbnVtYmVyLXN0b3JhZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU0RTAwXHU0RTlCXHU2MjE2XHU1OTI3XHU2MjE2XHU1QzBGXHU3Njg0XHU1NzUxJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0L3NvbWUtZGV0YWlscydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTRGNERcdThGRDBcdTdCOTcnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0phdmFTY3JpcHQvYml0LW9wZXJhdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NEY1Q1x1NzUyOFx1NTdERlx1NEUwRVx1OTVFRFx1NTMwNScsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvSmF2YVNjcmlwdC9zY29wZS1jbG9zdXJlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFU25leHQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0VTNisgXHU0RTAwXHU0RTlCXHU5NkY2XHU3ODhFXHU3Njg0XHU2NTM5XHU1MkE4JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FU25leHQvc29tZS1jaGFuZ2VzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0VTNiBcdTRFMkRcdTY1NzBcdTdFQzRcdTc2ODRcdTY1MzlcdTUyQTgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9hcnJheSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFUzYgXHU0RTJEXHU1QkY5XHU4QzYxXHU3Njg0XHU2NTM5XHU1MkE4JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FU25leHQvb2JqZWN0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1Byb21pc2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9wcm9taXNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTVCNTdcdTgyODIgXHUwMEI3IFx1NkRGMVx1NTE2NVx1NkQ0NVx1NTFGQSBUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9UeXBlU2NyaXB0L2J5dGUtdHMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1dlYnBhY2snLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1dlYnBhY2sgXHU1MTY1XHU5NUU4JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2ludHJvJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NkEyMVx1NTc1N1x1NTMxNlx1NTE3Q1x1NUJCOVx1NjAyNycsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9tb2R1bGUtY29tcGF0aWJpbGl0eSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1NEUyRFx1NzY4NFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNicsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9jb25maWcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTdGMTZcdThCRDFcdThGQzdcdTdBMEInLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svY29tcGlsZS1wcm9jZXNzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NTE2NVx1NTNFM1x1NEUwRVx1NTFGQVx1NTNFM1x1OTE0RFx1N0Y2RScsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9lbnRyeS1vdXRwdXQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTG9hZGVycyBcdTRFMEUgUGx1Z2lucycsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9sb2FkZXJzLXBsdWdpbnMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTU5ODJcdTRGNTVcdTUzM0FcdTUyMDZcdTczQUZcdTU4ODNcdUZGMUYnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svZW52J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NEUwMFx1NEU5Qlx1N0VDNlx1ODI4Mlx1OTE0RFx1N0Y2RVx1ODg2NVx1NTE0NScsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9kZXRhaWxzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1dlYnBhY2sgXHU1RTM4XHU3NTI4XHU2MjY5XHU1QzU1JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2V4dGVuc2lvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svZGV2LXNlcnZlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1NTE4NVx1N0Y2RVx1NjNEMlx1NEVGNicsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9idWlsdGluLXBsdWdpbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Z1ZScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVnVlMyBcdTkxQ0NcdTc2ODQgcmVmIFx1NTQ4QyByZWFjdGl2ZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL3JlZi1yZWFjdGl2ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdThDMDhcdTRFMDBcdThDMDggVnVlMyBcdTRFMkRcdTc2ODRcdTg2NUFcdTYyREYgRE9NJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvdmlydHVhbC1kb20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVnVlMyBcdTRFMkRcdTZBMjFcdTY3N0ZcdTc2ODRcdTY3MkNcdThEMjgnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Z1ZS9uYXR1cmUtb2YtdGVtcGxhdGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU2ODExXHU1NDhDXHU4NjVBXHU2MkRGIERPTSBcdTY4MTEnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Z1ZS9jb21wb25lbnQtdHJlZS1hbmQtdmlydHVhbC1kb20tdHJlZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdWdWUgXHU0RTJEXHU2NTcwXHU2MzZFXHU2MkU2XHU2MjJBXHU3Njg0XHU2NzJDXHU4RDI4JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvZGF0YS1pbnRlcmNlcHRpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVnVlIFx1NEUyRFx1NTRDRFx1NUU5NFx1NUYwRlx1NjU3MFx1NjM2RVx1NzY4NFx1NjcyQ1x1OEQyOCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL3JlYWN0aXZlLWRhdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JlYWN0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTVCNTdcdTgyODIgXHUwMEI3IFx1NTRDRFx1NUU5NFx1NUYwRlx1N0NGQlx1N0VERlx1NEUwRSBSZWFjdCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvYnl0ZS1yZWFjdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdTY4MzhcdTVGQzNcdTY5ODJcdTVGRjVcdUZGMDhcdTRFMDBcdUZGMDknLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2NvcmUtY29uY2VwdHMtb25lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NjgzOFx1NUZDM1x1Njk4Mlx1NUZGNVx1RkYwOFx1NEU4Q1x1RkYwOScsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvY29yZS1jb25jZXB0cy10d28nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU4REVGXHU3NTMxJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yb3V0ZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU0RTJEXHU3Njg0XHU3MkI2XHU2MDAxXHU3QkExXHU3NDA2XHU1RTkzJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZWR1eCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTVDNUVcdTYwMjdcdTlFRDhcdThCQTRcdTUwM0NcdTU0OENcdTdDN0JcdTU3OEJcdTY4QzBcdTY3RTUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3Byb3AtdHlwZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTlBRDhcdTk2MzZcdTdFQzRcdTRFRjYnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2hvYydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb250ZXh0JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9jb250ZXh0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1JlbmRlciBQcm9wcycsXG4gICAgICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVuZGVyLXByb3BzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1BvcnRhbHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3BvcnRhbHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHU2NUY2XHU3Njg0XHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9wZXJmb3JtYW5jZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2RDRGXHU4OUM4XHU1NjY4JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjhcdTZFMzJcdTY3RDNcdTUzOUZcdTc0MDYnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0Jyb3dzZXIvcmVuZGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdEZWJ1ZycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU4QkY3XHU2QzQyXHU4RjZDXHU1M0QxXHU0RTBFXHU5RUQ4XHU4QkE0XHU2MjUzXHU1MzA1XHU1MUIyXHU3QTgxJyxcbiAgICAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9Qcm9qZWN0cy9jcmEtcGF0aC1jb25mbGljdC1wcm94eS1wYWNrJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1JlYWN0IFRvYXN0IFVJIHNvdXJjZW1hcCBcdTYyQTVcdTk1MTknLFxuICAgICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Byb2plY3RzL3RvYXN0dWktcGFyc2Utc291cmNlbWFwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgICcvRGV2VGlwcy8nOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR2l0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdDb21taXQgXHU4OUM0XHU4MzAzJywgbGluazogJy9EZXZUaXBzL0dpdC9jb21taXQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHaXQgXHU2NUIwXHU2NUU3XHU1NDdEXHU0RUU0JywgbGluazogJy9EZXZUaXBzL0dpdC9naXQtY29tbWFuZC1uZXcnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdHaXQgXHU1OTI3XHU1QzBGXHU1MTk5XHU0RTBEXHU2NTRGXHU2MTFGXHU5NUY5XHU0RTRDXHU5Rjk5JyxcbiAgICAgICAgICAgICAgbGluazogJy9EZXZUaXBzL0dpdC9naXQtaWdub3JlY2FzZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRG9ja2VyJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEb2NrZXIgXHU1QjU4XHU1NzI4XHU3Njg0XHU1RkM1XHU4OTgxXHU2MDI3JyxcbiAgICAgICAgICAgICAgbGluazogJy9EZXZUaXBzL0RvY2tlci9wcmV2aWV3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0I4MFx1NzdFRFx1NzY4NFx1NEVDQlx1N0VDRCcsIGxpbms6ICcvRGV2VGlwcy9Eb2NrZXIvaW50cm8nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTRFMDBcdTRFOUJcdTVFMzhcdTc1MjhcdTU0N0RcdTRFRTQnLCBsaW5rOiAnL0RldlRpcHMvRG9ja2VyL2NvbW1hbmQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEb2NrZXIgXHU5MDFBXHU0RkUxJyxcbiAgICAgICAgICAgICAgbGluazogJy9EZXZUaXBzL0RvY2tlci9jb21tdW5pY2F0aW9uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTRFMEVcdThCQkVcdThCQTFcdTUzOUZcdTUyMTknLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRicsIGxpbms6ICcvRGV2VGlwcy9EZXNpZ24vZGVzaWduLXBhdHRlcm5zJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4QkJFXHU4QkExXHU1MzlGXHU1MjE5JywgbGluazogJy9EZXZUaXBzL0Rlc2lnbi9kZXNpZ24tcHJpbmNpcGxlcycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1OEJFNlx1ODlFM1x1N0IyQ1x1NEUwMFx1NjcxRiBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEYnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduL2Rlc2lnbi1wYXR0ZXJucy1zaW5nbGV0b24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgJy9MaWZlLyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICcyMDIwJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnXHU4M0NBXHU2QjIxXHU5MENFXHU3Njg0XHU1OTBGXHU1OTI5JywgbGluazogJy9MaWZlLzIwMjAva2lrdWppcm8tc3VtbWVyJyB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJzIwMjEnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1MzAwQVx1NTNGMlx1OEJCMFx1MDBCN1x1OTg3OVx1N0ZCRFx1NjcyQ1x1N0VBQVx1MzAwQlx1NzY4NFx1NEUwMFx1NEU5Qlx1NzcwQlx1NkNENScsXG4gICAgICAgICAgICAgIGxpbms6ICcvTGlmZS8yMDIxL2hpc3RvcmljYWwtcmVjb3Jkcy14aWFuZ3l1J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgICcvSW50ZXJ2aWV3Lyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTdGNTFcdTdFREMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NEU5NFx1NUM0Mlx1N0Y1MVx1N0VEQ1x1NkEyMVx1NTc4QicsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvbmV0d29yay1tb2RlbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTVFMzhcdTg5QzFcdThCRjdcdTZDNDJcdTY1QjlcdTZDRDUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3JlcXVlc3QtbWV0aG9kJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0Nvb2tpZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvY29va2llJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ2Nvb2tpZSBcdTU0OEMgc3RvcmFnZSBcdTc2ODRcdTUzM0FcdTUyMkInLFxuICAgICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2Nvb2tpZS1zdG9yYWdlLWRpZmZlcmVuY2UnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NTUycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ1NTIFx1NTM1NVx1NEY0RFx1NjAzQlx1N0VEMycsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0NTUy91bml0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NUM0NVx1NEUyRFx1NjVCOVx1NUYwRlx1NjAzQlx1N0VEMycsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0NTUy9jZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0phdmFTY3JpcHQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ2xldCB2YXIgY29uc3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L2xldC12YXItY29uc3QnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCBcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEInLFxuICAgICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L2RhdGEtdHlwZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NEUyRFx1NzY4NFx1NTMwNVx1ODhDNVx1N0M3Qlx1NTc4QicsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvd3JhcHBlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTUzOUZcdTU3OEJcdTU0OENcdTUzOUZcdTU3OEJcdTk0RkUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3Byb3RvdHlwZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NEUyRFx1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4Qlx1NzY4NFx1OEY2Q1x1NjM2MicsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvdHlwZS1jb252ZXJzaW9uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTYyNEJcdTY0MTNcdTRFRTNcdTc4MDEnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NjI0Qlx1NjQxMyBQcm9taXNlIFx1NTE2OFx1N0NGQlx1NTIxNycsXG4gICAgICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeS9wcm9taXNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgdml0ZToge1xuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogWydkYXlqcyddXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBcdTYyNTNcdThENEZcdTYzRDJcdTRFRjZcbiAgICAgIFNwb25zb3JQbHVnaW4oe1xuICAgICAgICAvKipcbiAgICAgICAgICogXHU2MjUzXHU4RDRGXHU2QTIxXHU1NzU3XHU2ODM3XHU1RjBGXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgYWxpUGF5UVI6ICcvYWxpUGF5UVIuanBnJyxcbiAgICAgICAgd2VDaGF0UVI6ICcvd2VDaGF0UGF5UVIuanBnJ1xuICAgICAgfSlcbiAgICBdXG4gIH1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGVub3ZvL0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiO2ltcG9ydCB7IGdldFRoZW1lQ29uZmlnIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUvbm9kZSc7XG5cbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcbiAgZm9vdGVyOiB7XG4gICAgdmVyc2lvbjogZmFsc2UsXG4gICAgY29weXJpZ2h0OiAnTUlUIExpY2Vuc2UgfCBcdTU0NjhcdTY3MkJcdTY2NUEnLFxuICAgIGljcFJlY29yZDoge1xuICAgICAgbmFtZTogJ1x1NjY0QklDUFx1NTkwNzIwMjQwNTIzMTdcdTUzRjcnLFxuICAgICAgbGluazogJ2h0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vJ1xuICAgIH1cbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgYnRuUGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjInLFxuICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU3QUUwJyxcbiAgICBlbXB0eVRleHQ6ICdcdTZDQTFcdTY3MDlcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTAnLFxuICAgIGhlYWRpbmc6ICdcdTUxNzFcdTYyN0VcdTUyMzAge3tzZWFyY2hSZXN1bHR9fSBcdTdCQzdcdTY1ODdcdTdBRTAnXG4gIH0sXG4gIHRoZW1lQ29sb3I6ICdlbC1ibHVlJyxcbiAgcmVjb21tZW5kOiBmYWxzZSxcbiAgYXV0aG9yOiAnXHU1NDY4XHU2NzJCXHU2NjVBJyxcbiAgaG9tZToge1xuICAgIGxvZ286ICcvYXZhdGFyLmpwZydcbiAgfSxcbiAgZnJpZW5kOiB7XG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gICAgICAgIGRlczogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNlx1NzUyOFx1NEU4RVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRicsXG4gICAgICAgIGF2YXRhcjpcbiAgICAgICAgICAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnVml0ZXByZXNzJyxcbiAgICAgICAgZGVzOiAnVml0ZSAmIFZ1ZSBQb3dlcmVkIFN0YXRpYyBTaXRlIEdlbmVyYXRvcicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi92aXRlcHJlc3MtbG9nby1sYXJnZS53ZWJwJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly92aXRlcHJlc3MuZGV2LydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnWWlvdicsXG4gICAgICAgIGRlczogJ1ZpdGVQcmVzcyBcdTVGRUJcdTkwMUZcdTRFMEFcdTYyNEJcdTRFMkRcdTY1ODdcdTY1NTlcdTdBMEInLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvOTA4OTM3OTA/dj00JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly92aXRlcHJlc3MueWlvdi50b3AvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTgyQ0ZcdTY3RDgnLFxuICAgICAgICBkZXM6ICdcdTUzQkJcdTUzRDFcdTUxNDlcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTg4QUJcdTcxNjdcdTRFQUUnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3N1emhlbGV2ZWw2LmdpdGh1Yi5pby9zdXpoZV9ibG9nL3RvdXhpYW5nMU1CLmpwZycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc3V6aGVsZXZlbDYuZ2l0aHViLmlvL3N1emhlX2Jsb2cvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdMdW1lbicsXG4gICAgICAgIGRlczogJ1x1OTZDNlx1NjIxMCBWdWUgXHU1MjlGXHU4MEZEXHU3RUM0XHU0RUY2XHU1NDhDXHU0RTNCXHU5ODk4XHU3RjhFXHU1MzE2XHU3Njg0IFZpdGVQcmVzcyBcdTYzRDJcdTRFRjYnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2x1bWVuLnRoZW9qcy5jbi9Mb2dvLndlYnAnLFxuICAgICAgICB1cmw6ICdodHRwczovL2x1bWVuLnRoZW9qcy5jbi8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1x1ODMwMlx1ODMwMlx1NUJGQ1x1ODIyQScsXG4gICAgICAgIGRlczogJ1x1NTdGQVx1NEU4RSBWaXRlUHJlc3MgXHU3Njg0XHU0RTJBXHU0RUJBXHU1MjREXHU3QUVGXHU1QkZDXHU4MjJBXHU5ODc1XHU5NzYyXHU2QTIxXHU2NzdGJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9mZS1uYXYubmV0bGlmeS5hcHAvbG9nby5wbmcnLFxuICAgICAgICB1cmw6ICdodHRwczovL2ZlLW5hdi5uZXRsaWZ5LmFwcC8nXG4gICAgICB9XG4gICAgXSxcbiAgICByYW5kb206IHRydWUsXG4gICAgbGltaXQ6IDNcbiAgfSxcbiAgYXJ0aWNsZToge1xuICAgIGhpZGRlbkNvdmVyOiB0cnVlLFxuICAgIHJlYWRpbmdUaW1lOiBmYWxzZVxuICB9LFxuICBob3RBcnRpY2xlOiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdUREMjUgXHU3Q0JFXHU5MDA5XHU2NTg3XHU3QUUwJyxcbiAgICBuZXh0VGV4dDogJ1x1NjM2Mlx1NEUwMFx1N0VDNCcsXG4gICAgcGFnZVNpemU6IDksXG4gICAgZW1wdHk6ICdcdTY2ODJcdTY1RTBcdTdDQkVcdTkwMDlcdTUxODVcdTVCQjknXG4gIH0sXG4gIGNvbW1lbnQ6IHtcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48ZyBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI0XCI+PHBhdGggZmlsbD1cIiMyRjg4RkZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTQ0IDhINFYzOEgxOUwyNCA0M0wyOSAzOEg0NFY4WlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yMSAxNUwyMCAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yOCAxNUwyNyAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMyAyMEwxNiAyMFwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMiAyN0wxNSAyN1wiLz48L2c+PC9zdmc+JyxcbiAgICB0eXBlOiAnZ2lzY3VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICByZXBvOiAnV2tuZE5pdGUvYmxvZycsXG4gICAgICByZXBvSWQ6ICdSX2tnRE9OdFExcEEnLFxuICAgICAgY2F0ZWdvcnk6ICdBbm5vdW5jZW1lbnRzJyxcbiAgICAgIGNhdGVnb3J5SWQ6ICdESUNfa3dET050UTFwTTRDbkVFSicsXG4gICAgICBpbnB1dFBvc2l0aW9uOiAndG9wJ1xuICAgIH0sXG4gICAgbW9iaWxlTWluaWZ5OiB0cnVlXG4gIH0sXG4gIGJhY2tUb1RvcDoge1xuICAgIGljb246ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj48cGF0aCBmaWxsPVwiI0NBMkMzMVwiIGQ9XCJtMy43NyA3MS43M2wxNi4zNC0xNi4xbDI3LjgyLTQuOTNsLTIuNzUgMTQuNTZMNy41NyA3Ni44MmwtMi40My0xLjA1elwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMjIuOTQgNTkuNzZMNS4yIDc1Ljg4bDEzLjA1IDYuMzZsMTkuODEtMTAuMTF2LTQuNzdsNC4wNS0xMC45MnptNDEuOTggMjguMzlsLTguNTcgMy43MmwtOC4wOSAxNy4xNXM3LjEyIDE1Ljc3IDcuNDQgMTUuNzdjLjMyIDAgNC4zNy4zMiA0LjM3LjMybDE0LjQtMTYuMWwzLjY0LTI3LjVsLTEzLjE5IDYuNjR6XCIvPjxwYXRoIGZpbGw9XCIjQ0EyQzMxXCIgZD1cIk01Ni41IDEwMC44NHM0Ljc3LS45NyA4LjE3LTIuNTljMy40LTEuNjIgNy42LTQuMDQgNy42LTQuMDRsLTEuNTQgMTMuNDNsLTE1LjA1IDE3LjEzcy0uNTktLjczLTMuMDktNi4xN2MtMS45OS00LjM0LTIuNjgtNS44OS0yLjY4LTUuODlsNi41OS0xMS44N3pcIi8+PHBhdGggZmlsbD1cIiNGN0Q3NERcIiBkPVwiTTMxLjU4IDgwLjY2cy01Ljc0LS40OC0xMi4wMyA3LjQ3Yy01Ljc0IDcuMjYtOC40MyAxOS4wOC05LjQ3IDIyLjEycy0zLjUzIDMuNjYtMi43IDUuMDVzNC40MiAxLjMxIDguODUuNzZzOC4yMy0xLjk0IDguMjMtMS45NHMtLjE5LjQ4LS44MyAxLjUyYy0uMjMuMzctMS4wMy45LS45NyAxLjQ1Yy4xNCAxLjMxIDExLjM2IDEuMzQgMjAuMzItNy44OGM5LjY4LTkuOTUgNC45OC0xOC4xMSA0Ljk4LTE4LjExTDMxLjU4IDgwLjY2elwiLz48cGF0aCBmaWxsPVwiI0ZCRjBCNFwiIGQ9XCJNMzMuMzEgODUuMjlzLTYuMTkuMzMtMTEuMzEgOC4yOHMtNy41IDE3LjE2LTcuMDEgMTcuNzhjLjQ4LjYyIDEwLjAyLTIuODMgMTIuMzEtMi4xNGMxLjU3LjQ4Ljc2IDIuMDcgMS4xOCAyLjQ5Yy4zNS4zNSA0LjQ5Ljk0IDExLjE5LTYuMzJjNi43MS03LjI2IDUuMTItMTcuNDYgNS4xMi0xNy40NmwtMTEuNDgtMi42M3pcIi8+PHBhdGggZmlsbD1cIiM4NTg1ODVcIiBkPVwiTTM2LjM1IDc0LjQ0cy0zLjExIDIuNzctNC4yMiA0LjM2Yy0xLjExIDEuNTktMS4xMSAxLjczLTEuMDQgMi4yMWMuMDcuNDggMS4yMiA1Ljc1IDYuMDEgMTAuMzdjNS44OCA1LjY3IDExLjEzIDYuNDMgMTEuODkgNi40M2MuNzYgMCA1LjgxLTUuNjcgNS44MS01LjY3bC0xOC40NS0xNy43elwiLz48cGF0aCBmaWxsPVwiIzQzNzY4N1wiIGQ9XCJNNTAuMSA5MS4yNHM1LjA0IDMuMzEgMTMuNDkuNDdjMTEuNTUtMy44OCAyMC4wMi0xMi41NiAzMC41MS0yMy41MmMxMC4xMi0xMC41OCAxOC42MS0yMy43MSAxOC42MS0yMy43MWwtNS45NS0xOS45M0w1MC4xIDkxLjI0elwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJtNjcuOTkgODAuMzNsMS4zOS00LjMybDMuNDguNDlzMi42NSAxLjI1IDQuNiAyLjE2YzEuOTUuOTEgNC40NiAxLjYgNC40NiAxLjZsLTQuOTUgNC4xOHMtMi43LTEuMDItNC42Ny0xLjg4Yy0yLjIyLS45Ny00LjMxLTIuMjMtNC4zMS0yLjIzelwiLz48cGF0aCBmaWxsPVwiIzhEQUZCRlwiIGQ9XCJNODQuMzIgMTYuMTRzLTkuNjIgNS41OC0yMy40MSAxOC42M2MtMTIuNDMgMTEuNzYtMjEuNjQgMjIuNC0yMy44NyAzMS40NWMtMS44NiA3LjU4LS44NyAxMi4xOCAzLjM2IDE3LjE1YzQuNDcgNS4yNiA5LjcxIDcuODcgOS43MSA3Ljg3czMuOTQuMDYgMjAuMzgtMTIuNTlDOTEgNjIuODYgMTA3LjQzIDM2LjQyIDEwNy40MyAzNi40Mkw4NC4zMiAxNi4xNHpcIi8+PHBhdGggZmlsbD1cIiNEODNGMjJcIiBkPVwiTTEwNC4xOCA0MS44NHMtOC4zNy0zLjU3LTE0LjM0LTExLjljLTUuOTMtOC4yNy01LjQ2LTEzLjg2LTUuNDYtMTMuODZzNC45Ni0zLjg5IDE2LjExLTguMzRjNy41LTIuOTkgMTcuNzEtNC41MiAyMS4wNy0yLjAzcy0yLjMgMTQuOTgtMi4zIDE0Ljk4bC0xMC4zMSAxOS45NmwtNC43NyAxLjE5elwiLz48cGF0aCBmaWxsPVwiIzY4OTZBNVwiIGQ9XCJNNjguMTcgODAuNHMtNy4yMy0zLjY5LTExLjgzLTguOTRjLTguNy05LjkxLTEwLjUtMjAuNzktMTAuNS0yMC43OWw0LjM3LTUuMTNTNTEuMyA1Ny4xIDYwLjYzIDY3LjA5YzYuMDggNi41MSAxMi40MyA5LjQ5IDEyLjQzIDkuNDlzLTEuMjcgMS4wNy0yLjYzIDIuMTFjLS44Ny42Ny0yLjI2IDEuNzEtMi4yNiAxLjcxelwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMTEyLjcxIDQ0LjQ4czQuMzQtNS4yMyA4LjQ1LTE3LjAyYzUuNzQtMTYuNDQuNzQtMjEuNDIuNzQtMjEuNDJzLTEuNjkgNy44Mi03LjU2IDE4LjY5Yy00LjcxIDguNzEtMTAuNDEgMTctMTAuNDEgMTdzMy4xNCAxLjQxIDQuODQgMS45YzIuMTQuNjIgMy45NC44NSAzLjk0Ljg1elwiLz48cGF0aCBmaWxsPVwiI0IzRTFFRVwiIGQ9XCJNMzkuODEgNjkuNjZjMS4zIDEuMjQgMy4yNy0uMDYgNC41Ni0zLjFjMS4zLTMuMDQgMS4yOC00Ljc0LjI4LTUuNDZjLTEuMjQtLjktMy4zMiAxLjA3LTQuMjMgMi44MmMtMSAxLjk0LTEuNTkgNC44LS42MSA1Ljc0em00NS4xNC00OS41M3MtNy42MSA1LjQ3LTE1LjczIDEyLjkxYy03LjQ1IDYuODMtMTIuMzkgMTIuMTctMTMuMDcgMTMuNDFjLS43MiAxLjMzLS43MyAzLjIxLS4xNyA0LjE3czEuOCAxLjQ2IDIuOTMuNjJjMS4xMy0uODUgOS4xOC05Ljc1IDE2LjQ1LTE2LjExYzYuNjUtNS44MiAxMS43OC05LjUxIDExLjc4LTkuNTFzMi4wOC0zLjY4IDEuNzQtNC41MmMtLjM0LS44NS0zLjkzLS45Ny0zLjkzLS45N3pcIi8+PHBhdGggZmlsbD1cIiNFRDZBNjVcIiBkPVwiTTg0Ljk1IDIwLjEzczUuNjItNC4zMSAxMS43NC03LjM0YzUuNjktMi44MiAxMS4zNS01LjE3IDEyLjM3LTMuMTNjLjk3IDEuOTQtNS4zNyA0LjU4LTEwLjk1IDguMTRjLTUuNTggMy41Ni0xMC45NSA3LjgxLTEwLjk1IDcuODFzLS44Mi0xLjUtMS4zNS0yLjg5YTIzLjcgMjMuNyAwIDAgMS0uODYtMi41OXpcIi8+PHBhdGggZmlsbD1cIiNFMUUxRTFcIiBkPVwiTTg5LjU5IDM5LjI1Yy01LjU3LTUuMTMtMTMuMzItMy43NS0xNy4xNC44MWMtMy45MiA0LjctMy42MyAxMS44OCAxIDE2LjJjNC4yMSAzLjkyIDEyLjA0IDQuODEgMTYuNzYtLjY5YzQuMi00Ljg4IDMuOTQtMTIuMTMtLjYyLTE2LjMyelwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJNNzUuMzMgNDEuODdjLTMuMzEgMy4yNS0zLjEzIDkuNjkuODEgMTIuNjNjMy40NCAyLjU3IDguMzIgMi40NCAxMS4zOC0uNjljMy4wNi0zLjEzIDMuMDYtOC44Mi4xOS0xMS43NmMtMy4zLTMuMzctOC41OS0zLjktMTIuMzgtLjE4elwiLz48cGF0aCBmaWxsPVwiI0EwMjUyNFwiIGQ9XCJNNTAgNzYuODlzNi4xOS02LjI4IDYuODctNS42Yy42OC42OC41OSA0LjQ5LTIuMzcgOC43M2MtMi45NyA0LjI0LTkuNSAxMS43OS0xNC42NyAxNi44OGMtNS4xIDUuMDEtMTIuMjkgMTAuNzQtMTIuOTcgMTAuNjRjLS41My0uMDgtMi42OC0xLjE1LTMuNTQtMi4xOWMtLjg0LTEuMDMgMS42Ny01LjkgMi42OC03LjUxYzEuMDItMS42MSAyNC0yMC45NSAyNC0yMC45NXpcIi8+PHBhdGggZmlsbD1cIiNDQTJDMzFcIiBkPVwiTTIxLjIzIDEwMS44NWMtLjA4IDEuNDQgMi4xMiAzLjU0IDIuMTIgMy41NEw1Ni44NyA3MS4zcy0xLjU3LTEuNzctNi4xOSAxLjFjLTQuNjYgMi45LTguNzQgNi4zOC0xNC43NiAxMi4yMWMtOC4zOSA4LjE0LTE0LjYxIDE1LjgtMTQuNjkgMTcuMjR6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xOS4wNiAzNi45NWMtMS4xMSAxLjExLTEuMTYgMi44OS4wOCAzLjkxYzEuMS45MSAyLjg5LjMyIDMuNTYtLjVzLjU5LTIuNi0uMy0zLjQ4Yy0uODktLjg5LTIuNjYtLjYtMy4zNC4wN3pcIi8+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTQxLjAyIDM1LjY1Yy0uODQuOTMtLjU3IDIuMzEuMjEgMi44MnMxLjk1LjQ2IDIuNTItLjI0Yy41MS0uNjMuNTctMS44OS0uMjEtMi42N2MtLjY4LS42Ny0xLjk4LS41MS0yLjUyLjA5elwiIG9wYWNpdHk9XCIuNVwiLz48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNNTUuNTUgMTEuODlzMS4yMi0zLjQ4IDEuOTQtMy41MmMuNzMtLjA0IDEuNzggMy40OCAxLjc4IDMuNDhzMy42MS4wNCAzLjg1LjU3Yy4zMS42OC0yLjMxIDIuOTYtMi4zMSAyLjk2cy44NSAzLjQuNDUgMy44MWMtLjQ1LjQ1LTMuNTYtMS4zNC0zLjU2LTEuMzRzLTMuMiAyLjIzLTMuODkgMS42MmMtLjYtLjUzLjY1LTQuMTMuNjUtNC4xM3MtMy0yLjE5LTIuODQtMi44Yy4yMy0uODYgMy45My0uNjUgMy45My0uNjV6bTQxLjQ2IDgzLjQ0YzEuMjEuNjcgMi43My4yOSAzLjI5LTFjLjUxLTEuMTUtLjQzLTIuNTItMS4yOC0yLjg5Yy0uODUtLjM3LTIuMzQuMTItMi44OCAxLjA5Yy0uNTMuOTYuMTQgMi40Ljg3IDIuOHptMTcuMTgtMjkuNDljLS42OS0xLjA3LTIuMTgtMS40Mi0zLjE1LS41NmMtLjk0Ljg0LS43MSAyLjE2LS4xOCAyLjgzYy41My42NyAxLjk1LjkyIDIuODEuMzdzLjk0LTIgLjUyLTIuNjR6XCIvPjwvc3ZnPidcbiAgfSxcbiAgcG9wb3Zlcjoge1xuICAgIHRpdGxlOiAnXHU1MTZDXHU1NDRBJyxcbiAgICBib2R5OiBbXG4gICAgICB7IHR5cGU6ICd0ZXh0JywgY29udGVudDogJ1x1RDgzRFx1REM0NyBcdTVGQUVcdTRGRTEgXHVEODNEXHVEQzQ3JyB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICBzcmM6ICcvd2VjaGF0LnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudDogJ1x1NkIyMlx1OEZDRVx1NzlDMVx1NEZFMVx1NEVBNFx1NkQ0MSdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHdvcmtzOiB7XG4gICAgdGl0bGU6ICdcdTRFMkFcdTRFQkFcdTRGNUNcdTU0QzEnLFxuICAgIGRlc2NyaXB0aW9uOiAnXHU4QkIwXHU1RjU1XHU1RjAwXHU1M0QxXHU3Njg0XHU3MEI5XHU3MEI5XHU2RUY0XHU2RUY0JyxcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnXHU5NUVFXHU1Mzc3XHU0RjRFXHU3ODAxXHU1RjE1XHU2NENFJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdcdUQ4M0RcdURDQUQgXHU2NzJDXHU1NzMwXHU1MzE2XHU2Qzk5XHU3QkIxXHU3Njg0XHU5NUVFXHU1Mzc3XHU3NTFGXHU2MjEwXHU1RTczXHU1M0YwJyxcbiAgICAgICAgdGltZToge1xuICAgICAgICAgIHN0YXJ0OiAnMjAyNS8wMy8wMSdcbiAgICAgICAgfSxcblxuICAgICAgICB1cmw6ICdodHRwczovL2xvd2NvZGUubWFvemkuaW8nLFxuICAgICAgICBjb3Zlcjoge1xuICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICcvd29ya3MvUGl4UGluXzIwMjUtMDMtMTJfMjEtMDktNDAucG5nJyxcbiAgICAgICAgICAgICcvd29ya3MvUGl4UGluXzIwMjUtMDMtMTJfMjEtMTItMTkucG5nJyxcbiAgICAgICAgICAgICcvd29ya3MvUGl4UGluXzIwMjUtMDMtMTJfMjEtMjAtMjQucG5nJyxcbiAgICAgICAgICAgICcvd29ya3MvUGl4UGluXzIwMjUtMDMtMTJfMjEtMjEtMDQucG5nJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgbGF5b3V0OiAnbGlzdCdcbiAgICAgICAgfSxcbiAgICAgICAgdGFnczogWydWdWUzJywgJ1BpbmlhJywgJ1R5cGVTY3JpcHQnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdJVCBcdTc3RTVcdThCQzZcdTVFOTNcdTUyNERcdTU0MEVcdTUzRjAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1RDgzRFx1RENERCBDUkEgXHU1NDhDIFVtaSBcdTUzQ0NcdTY3QjZcdTY3ODRcdTUyNERcdTU0MEVcdTUzRjBcdTk4NzlcdTc2RUUnLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgc3RhcnQ6ICcyMDI1LzAyLzA3J1xuICAgICAgICB9LFxuXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Xa25kTml0ZS9jb2Rlci1zdGF0aW9uJyxcbiAgICAgICAgY292ZXI6IHtcbiAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAnL3dvcmtzL2I0MWNiZDY5OTlmOTNhZGI2MWU1ZmQ1NmFkZjQwYWYucG5nJyxcbiAgICAgICAgICAgICcvd29ya3MvOTRjZGJlZDAzZmVlZGJiNzhhOWVlNWUyNjg5MDM2MC5wbmcnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYXlvdXQ6ICdsaXN0J1xuICAgICAgICB9LFxuICAgICAgICB0YWdzOiBbJ1JlYWN0JywgJ0FudCBEZXNpZ24nXVxuICAgICAgfVxuICAgIF1cbiAgfVxufSk7XG5cbmV4cG9ydCB7IGJsb2dUaGVtZSB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLG9CQUFvQjs7O0FDQXZCLFNBQVMsc0JBQXNCO0FBRWpXLElBQU0sWUFBWSxlQUFlO0FBQUEsRUFDL0IsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixnQkFBZ0I7QUFBQSxJQUNoQixhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxNQUNKO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsUUFDTCxRQUNFO0FBQUEsUUFDRixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixV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Q0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxzQkFBTyxNQUFNLE9BQU87QUFBQSxNQUM1QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLE9BQU8sTUFBTSxnQkFBZ0I7QUFBQSxVQUNyQztBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsRUFBRSxNQUFNLDRCQUFRLE1BQU0sU0FBUztBQUFBLE1BQy9CLEVBQUUsTUFBTSw0QkFBUSxNQUFNLFNBQVM7QUFBQSxJQUNqQztBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1o7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLHVCQUFhLE1BQU0sc0JBQXNCO0FBQUEsWUFDakQsRUFBRSxNQUFNLGdDQUFZLE1BQU0sK0JBQStCO0FBQUEsWUFDekQ7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSxrQ0FBUyxNQUFNLHdCQUF3QjtBQUFBLFlBQy9DLEVBQUUsTUFBTSx3Q0FBVSxNQUFNLDBCQUEwQjtBQUFBLFlBQ2xEO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sa0NBQWtDO0FBQUEsWUFDeEQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sb0NBQW9DO0FBQUEsWUFDMUQ7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTyxDQUFDLEVBQUUsTUFBTSx3Q0FBVSxNQUFNLDZCQUE2QixDQUFDO0FBQUEsUUFDaEU7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLEtBQUs7QUFBQSxNQUNILFlBQVksQ0FBQyxPQUFPO0FBQUEsSUFDdEI7QUFBQSxJQUNBLFNBQVM7QUFBQTtBQUFBLE1BRVAsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSVosTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
