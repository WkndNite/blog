// docs/.vitepress/config.mts
import { AnnouncementPlugin } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress-plugin-announcement/dist/index.mjs';
import { RssPlugin } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress-plugin-rss/dist/index.mjs';
import { SponsorPlugin } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress-plugin-sponsor/dist/index.mjs';
import { defineConfig } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/vitepress/dist/node/index.js';

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from 'file:///C:/Users/lenovo/Desktop/blog/node_modules/@sugarat/theme/node.mjs';
var blogTheme = getThemeConfig({
  mermaid: true,
  footer: {
    version: false,
    copyright: 'MIT License | \u5468\u672B\u665A\u7684\u5C9B\u5C7F',
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
      },
      {
        nickname: '.Han',
        des: '\u8FD0\u6C14\u662F\u8BA1\u5212\u4E4B\u5916\u7684\u4E1C\u897F',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640',
        url: 'https://www.vvhan.com/'
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
  },
  groupIcon: {
    customIcon: {
      '.php': 'vscode-icons:file-type-php',
      '.jsx': 'vscode-icons:file-type-reactjs',
      '.babelrc': 'vscode-icons:file-type-babel'
    }
  }
});

// docs/.vitepress/data/nav.ts
var nav = [
  {
    text: '\u7AD9\u70B9\u5DE5\u5177',
    items: [
      { text: '\u5BFC\u822A\u96C6\u9526', link: '/Nav' },
      { text: '\u6D41\u91CF\u7BA1\u7406', link: 'https://v6.51.la' }
    ]
  },
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
    text: '\u524D\u7AEF\u6F2B\u6E38',
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
        text: '\u5DE5\u7A0B\u5316',
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
        text: '\u6D4F\u89C8\u5668',
        link: '/Frontend/Browser'
      },
      {
        text: 'Debug',
        link: '/Frontend/Projects'
      },
      {
        text: '\u6742\u8C08',
        link: '/Frontend/Others/some'
      }
    ]
  },
  {
    text: '\u8F6F\u6280\u80FD',
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
        text: '\u5F00\u53D1\u8303\u5F0F',
        link: '/DevTips/Design'
      },
      {
        text: '\u5F00\u53D1\u5DE5\u5177',
        link: '/DevTips/Others'
      }
    ]
  },
  {
    text: '\u6821\u62DB\u5907\u6218',
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
        text: '\u624B\u6495\u4EE3\u7801',
        link: '/Interview/diy'
      },
      {
        text: '\u7B14\u9762\u7ECF\u9A8C',
        link: '/Interview/Experience'
      }
    ]
  },
  { text: '\u4E2A\u4EBA\u4F5C\u54C1', link: '/Works' },
  { text: '\u751F\u6D3B\u968F\u7B14', link: '/Life/' }
];

// docs/.vitepress/data/sidebar.ts
import fs from 'fs';
import path from 'path';
var __vite_injected_original_dirname =
  'C:\\Users\\lenovo\\Desktop\\blog\\docs\\.vitepress\\data';
var docsPath = path.resolve(__vite_injected_original_dirname, '../..');
var filteredPathArray = ['index.md', '.vitepress', 'Nav', 'Works', 'public'];
var categories = fs
  .readdirSync(docsPath)
  .filter((category) => !filteredPathArray.includes(category));
var result = {};
for (const category of categories) {
  result[`/${category}/`] = [];
}
for (const category of categories) {
  const categoryPath = path.join(docsPath, category);
  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file !== 'index.md');
  for (const file of files) {
    const indexPath = path.join(categoryPath, file, 'index.md');
    console.log(indexPath);
    const content = fs.readFileSync(indexPath, 'utf-8');
    const title = content.match(/# (.+)/);
    console.log(title);
  }
}
var sidebar = {
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
        },
        {
          text: '\u6392\u5E8F\u7B97\u6CD5',
          link: '/CS/DSA/sort'
        }
      ]
    },
    {
      text: '\u4EE3\u7801\u968F\u60F3\u5F55',
      collapsed: false,
      items: [
        {
          text: '\u94FE\u8868',
          link: '/CS/programmercarl/linkedList'
        },
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
        },
        {
          text: 'ESnext \u7279\u6027\u4E00\u89C8',
          link: '/Frontend/ESnext/overview'
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
      text: '\u524D\u7AEF\u5DE5\u7A0B\u5316',
      collapsed: false,
      items: [
        {
          text: 'CSS \u5DE5\u7A0B\u5316\u6982\u8FF0',
          link: '/Frontend/Engineering/CSS-Engineering'
        },
        {
          text: '\u5229\u7528 Webpack \u62C6\u5206 CSS',
          link: '/Frontend/Engineering/Webpack-Split-CSS'
        },
        {
          text: '\u89E3\u51B3\u7C7B\u540D\u51B2\u7A81',
          link: '/Frontend/Engineering/CSS-Name-Conflict'
        },
        {
          text: '\u89E3\u51B3\u91CD\u590D\u6837\u5F0F\u7684\u95EE\u9898',
          link: '/Frontend/Engineering/CSS-Repeat'
        },
        {
          text: '\u8C08\u4E00\u8C08 Post CSS',
          link: '/Frontend/Engineering/PostCSS'
        },
        {
          text: '\u5982\u4F55\u62BD\u79BB CSS \u6587\u4EF6',
          link: '/Frontend/Engineering/CSS-Extract'
        },
        {
          text: 'Babel',
          link: '/Frontend/Engineering/Babel'
        },
        {
          text: '\u6027\u80FD\u4F18\u5316',
          link: '/Frontend/Engineering/Performance-Optimization'
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
          text: '\u9519\u8BEF\u8FB9\u754C',
          link: '/Frontend/React/error-boundaries'
        },
        {
          text: 'Ref',
          link: '/Frontend/React/ref'
        },
        {
          text: '\u7EC4\u4EF6\u6E32\u67D3\u65F6\u7684\u6027\u80FD\u4F18\u5316',
          link: '/Frontend/React/performance'
        },
        {
          text: '\u524D\u7AEF\u6846\u67B6\u7684\u7406\u89E3',
          link: '/Frontend/React/framework-comprehension'
        },
        {
          text: 'React \u548C Vue \u63CF\u8FF0\u9875\u9762\u7684\u533A\u522B',
          link: '/Frontend/React/react-vs-vue'
        },
        {
          text: '\u524D\u7AEF\u6846\u67B6\u7684\u5206\u7C7B',
          link: '/Frontend/React/framework-classification'
        },
        {
          text: '\u865A\u62DF DOM',
          link: '/Frontend/React/virtual-dom'
        },
        {
          text: 'React \u6574\u4F53\u67B6\u6784',
          link: '/Frontend/React/react-architecture'
        },
        {
          text: 'React \u6E32\u67D3\u6D41\u7A0B',
          link: '/Frontend/React/render-process'
        },
        {
          text: 'Fiber \u53CC\u7F13\u51B2',
          link: '/Frontend/React/fiber-double-buffer'
        },
        {
          text: '\u56FE\u89E3 diff \u7B97\u6CD5',
          link: '/Frontend/React/diff-algorithm'
        },
        {
          text: 'Message Channel',
          link: '/Frontend/React/message-channel'
        },
        {
          text: 'Scheduler \u8C03\u5EA6\u666E\u901A\u4EFB\u52A1',
          link: '/Frontend/React/scheduler-normal-task'
        },
        {
          text: 'Scheduler \u8C03\u5EA6\u5EF6\u65F6\u4EFB\u52A1',
          link: '/Frontend/React/scheduler-timeout-task'
        },
        {
          text: '\u6700\u5C0F\u5806',
          link: '/Frontend/React/min-heap'
        },
        {
          text: 'Hook \u539F\u7406',
          link: '/Frontend/React/hook'
        },
        {
          text: 'useState \u548C useReducer',
          link: '/Frontend/React/useState-useReducer'
        },
        {
          text: 'effect \u76F8\u5173 Hooks',
          link: '/Frontend/React/effect-hooks'
        },
        {
          text: 'useCallback \u548C useMemo',
          link: '/Frontend/React/useCallback-useMemo'
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
    },
    {
      text: '\u6742\u8C08',
      collapsed: false,
      items: [
        {
          text: '\u522B\u7785\u4E86 \u5C31\u8FD9\u4E00\u7BC7',
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
      text: '\u5F00\u53D1\u8303\u5F0F',
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
        },
        {
          text: '\u52A0\u5BC6\u7B97\u6CD5',
          link: '/Interview/Network/encryption'
        },
        {
          text: 'JWT',
          link: '/Interview/Network/jwt'
        },
        {
          text: '\u540C\u6E90\u4E0E\u8DE8\u57DF',
          link: '/Interview/Network/same-origin-cross-domain'
        },
        {
          text: 'HTTP \u5404\u7248\u672C',
          link: '/Interview/Network/http-version'
        },
        {
          text: '\u57DF\u540D\u548C DNS',
          link: '/Interview/Network/domain-dns'
        },
        {
          text: '\u8F93\u5165 URL \u5230\u9875\u9762\u5C55\u793A',
          link: '/Interview/Network/url-to-page'
        },
        {
          text: 'Session',
          link: '/Interview/Network/session'
        },
        {
          text: 'TCP \u534F\u8BAE',
          link: '/Interview/Network/tcp'
        },
        {
          text: 'CSRF \u548C XSS',
          link: '/Interview/Network/csrf-xss'
        },
        {
          text: 'SSL\u3001TLS \u548C HTTPS',
          link: '/Interview/Network/ssl-tls-https'
        },
        {
          text: '\u7F51\u7EDC\u6027\u80FD\u4F18\u5316',
          link: '/Interview/Network/performance-optimization'
        },
        {
          text: 'WebSocket',
          link: '/Interview/Network/websocket'
        },
        {
          text: '\u7F13\u5B58',
          link: '/Interview/Network/cache'
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
          text: '\u8FD0\u7B97\u7B26',
          link: '/Interview/JavaScript/operator'
        },
        {
          text: '\u539F\u578B\u548C\u539F\u578B\u94FE',
          link: '/Interview/JavaScript/prototype'
        },
        {
          text: '\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362',
          link: '/Interview/JavaScript/type-conversion'
        },
        {
          text: 'this \u6307\u5411',
          link: '/Interview/JavaScript/this'
        },
        {
          text: '\u5783\u573E\u56DE\u6536\u4E0E\u5185\u5B58\u6CC4\u6F0F',
          link: '/Interview/JavaScript/gc'
        },
        {
          text: '\u6267\u884C\u6808\u548C\u6267\u884C\u4E0A\u4E0B\u6587',
          link: '/Interview/JavaScript/execution-context'
        },
        {
          text: '\u4F5C\u7528\u57DF\u4E0E\u4F5C\u7528\u57DF\u94FE',
          link: '/Interview/JavaScript/scope-chain'
        },
        {
          text: '\u4E8B\u4EF6\u5FAA\u73AF',
          link: '/Interview/JavaScript/event-loop'
        }
      ]
    },
    {
      text: '\u624B\u6495\u4EE3\u7801',
      collapsed: false,
      items: [
        {
          text: '\u624B\u6413 Promise \u5168\u7CFB\u5217',
          link: '/Interview/diy/promise'
        },
        {
          text: '\u6570\u7EC4\u65B9\u5F0F\u89E3\u6784\u5BF9\u8C61',
          link: '/Interview/diy/destructure'
        },
        {
          text: '\u624B\u6495\u4E8B\u4EF6\u603B\u7EBF',
          link: '/Interview/diy/event-bus'
        },
        {
          text: '\u5927\u6587\u4EF6\u4E0A\u4F20',
          link: '/Interview/diy/big-file-upload'
        },
        {
          text: '\u9632\u6296\u548C\u8282\u6D41',
          link: '/Interview/diy/debounce-throttle'
        },
        {
          text: '\u51FD\u6570\u67EF\u91CC\u5316',
          link: '/Interview/diy/currying'
        }
      ]
    },
    {
      text: '\u7B14\u9762\u7ECF\u9A8C',
      collapsed: false,
      items: [
        {
          text: '\u5C0F\u7C73\u65E5\u5E38\u5B9E\u4E60\u4E00\u9762',
          link: '/Interview/Experience/250319xiaomi'
        },
        {
          text: '\u817E\u8BAF\u97F3\u4E50\u6691\u671F\u5B9E\u4E60\u521D\u8BD5',
          link: '/Interview/Experience/250320txyy'
        },
        {
          text: '\u997F\u4E86\u4E48\u6691\u671F\u5B9E\u4E60\u7B14\u8BD5',
          link: '/Interview/Experience/250321ele'
        },
        {
          text: '\u7F8E\u56E2\u6691\u671F\u5B9E\u4E60\u7B14\u8BD5',
          link: '/Interview/Experience/250322meituan'
        },
        {
          text: '\u62FC\u591A\u591A\u6691\u671F\u5B9E\u4E60\u7B14\u8BD5',
          link: '/Interview/Experience/250323pdd'
        },
        {
          text: '\u817E\u8BAF\u97F3\u4E50\u6691\u671F\u5B9E\u4E60\u590D\u8BD5',
          link: '/Interview/Experience/250325txyy'
        },
        {
          text: '\u5FEB\u624B\u6691\u671F\u5B9E\u4E60\u4E00\u9762',
          link: '/Interview/Experience/250326kuaishou'
        },
        {
          text: '\u7F8E\u56E2\u6691\u671F\u5B9E\u4E60\u521D\u8BD5',
          link: '/Interview/Experience/250326meituan'
        },
        {
          text: '\u767E\u5EA6\u65E5\u5E38\u5B9E\u4E60\u4E00\u9762',
          link: '/Interview/Experience/250326baidu'
        },
        {
          text: '\u5B57\u8282\u6691\u671F\u5B9E\u4E60\u4E00\u9762',
          link: '/Interview/Experience/250327byte'
        },
        {
          text: '\u4F5C\u4E1A\u5E2E\u6691\u671F\u5B9E\u4E60\u4E00\u9762',
          link: '/Interview/Experience/250327zyb'
        },
        {
          text: '\u5FEB\u624B\u6691\u671F\u5B9E\u4E60\u4E8C\u9762',
          link: '/Interview/Experience/250328kuaishou'
        },
        {
          text: '\u7F8E\u56E2\u6691\u671F\u5B9E\u4E60\u4E8C\u9762',
          link: '/Interview/Experience/250328meituan'
        }
      ]
    }
  ]
};

// docs/.vitepress/config.mts
var baseUrl = 'https://blog.wkndnite-tech.cn';
var RSS = {
  title: '\u5468\u672B\u665A\u7684\u5C9B\u5C7F',
  baseUrl,
  copyright: 'MIT License | \u5468\u672B\u665A'
};
var config_default = defineConfig({
  ignoreDeadLinks: true,
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
  description: '\u5B81\u9E23\u800C\u6B7B \u4E0D\u9ED8\u800C\u751F',
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
        href: 'https://chinese-fonts-cdn.deno.dev/packages/moon-stars-kai/dist/MoonStarsKai-Bold/result.css'
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
    nav,
    sidebar
  },
  vite: {
    ssr: {
      noExternal: ['dayjs']
    },
    plugins: [
      RssPlugin(RSS),
      SponsorPlugin({
        type: 'simple',
        aliPayQR: '/aliPayQR.jpg',
        weChatQR: '/weChatPayQR.jpg'
      }),
      AnnouncementPlugin({
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
        ],
        duration: -1,
        twinkle: true,
        mobileMinify: true
      })
    ]
  }
});
export { config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvbmF2LnRzIiwgImRvY3MvLnZpdGVwcmVzcy9kYXRhL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGVub3ZvL0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBBbm5vdW5jZW1lbnRQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLWFubm91bmNlbWVudCc7XG5pbXBvcnQgeyBSU1NPcHRpb25zLCBSc3NQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLXJzcyc7XG5pbXBvcnQgeyBTcG9uc29yUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1zcG9uc29yJztcbmltcG9ydCB7IGJsb2dUaGVtZSB9IGZyb20gJy4vYmxvZy10aGVtZSc7XG5pbXBvcnQgeyBuYXYgfSBmcm9tICcuL2RhdGEvbmF2JztcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL2RhdGEvc2lkZWJhcic7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9ibG9nLndrbmRuaXRlLXRlY2guY24nO1xuY29uc3QgUlNTOiBSU1NPcHRpb25zID0ge1xuICB0aXRsZTogJ1x1NTQ2OFx1NjcyQlx1NjY1QVx1NzY4NFx1NUM5Qlx1NUM3RicsXG4gIGJhc2VVcmwsXG4gIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU1NDY4XHU2NzJCXHU2NjVBJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIG1hcmtkb3duOiB7XG4gICAgbWF0aDogdHJ1ZSxcbiAgICBpbWFnZToge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgdGlwTGFiZWw6ICdcdTYzRDBcdTc5M0EnLFxuICAgICAgd2FybmluZ0xhYmVsOiAnXHU4QjY2XHU1NDRBJyxcbiAgICAgIGRhbmdlckxhYmVsOiAnXHU1MzcxXHU5NjY5JyxcbiAgICAgIGluZm9MYWJlbDogJ1x1NEZFMVx1NjA2RicsXG4gICAgICBkZXRhaWxzTGFiZWw6ICdcdThCRTZcdTdFQzZcdTRGRTFcdTYwNkYnXG4gICAgfSxcbiAgICB0aGVtZTogeyBsaWdodDogJ29uZS1saWdodCcsIGRhcms6ICdkcmFjdWxhJyB9LFxuICAgIGNvZGVDb3B5QnV0dG9uVGl0bGU6ICdcdTU5MERcdTUyMzZcdTRFRTNcdTc4MDEnXG4gIH0sXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgbGFuZzogJ3poLWNuJyxcbiAgdGl0bGU6ICdcdTU0NjhcdTY3MkJcdTY2NUFcdTc2ODRcdTVDOUJcdTVDN0YnLFxuICBkZXNjcmlwdGlvbjogJ1x1NUI4MVx1OUUyM1x1ODAwQ1x1NkI3QiBcdTRFMERcdTlFRDhcdTgwMENcdTc1MUYnLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgaGVhZDogW1xuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2JhaWR1LXNpdGUtdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgY29udGVudDogJ2NvZGV2YS1DeFJBSENLMktNJ1xuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7XG4gICAgICAgIHNyYzogJy8vc2RrLjUxLmxhL2pzLXNkay1wcm8ubWluLmpzJyxcbiAgICAgICAgY2hhcnNldDogJ1VURi04JyxcbiAgICAgICAgaWQ6ICdMQV9DT0xMRUNUJ1xuICAgICAgfVxuICAgIF0sXG4gICAgWydzY3JpcHQnLCB7fSwgJ0xBLmluaXQoe2lkOlwiM0xjUkNGOEdpQVNmaXYzMFwiLGNrOlwiM0xjUkNGOEdpQVNmaXYzMFwifSknXSxcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHtcbiAgICAgICAgYXN5bmM6ICcnLFxuICAgICAgICBzcmM6ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctMDk1Q1lRMlA2QydcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge30sXG4gICAgICBgXG4gICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICBndGFnKCdjb25maWcnLCAnRy0wOTVDWVEyUDZDJyk7XG4gICAgYFxuICAgIF0sXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9sb2dvLnN2ZycgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vY2hpbmVzZS1mb250cy1jZG4uZGVuby5kZXYvcGFja2FnZXMvbW9vbi1zdGFycy1rYWkvZGlzdC9Nb29uU3RhcnNLYWktQm9sZC9yZXN1bHQuY3NzJ1xuICAgICAgfVxuICAgIF1cbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnXG4gICAgfSxcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwJyxcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxuXG4gICAgbG9nbzogJy9sb2dvLnN2ZycsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vV2tuZG5pdGUnXG4gICAgICB9XG4gICAgXSxcbiAgICBuYXY6IG5hdixcbiAgICBzaWRlYmFyOiBzaWRlYmFyXG4gIH0sXG4gIHZpdGU6IHtcbiAgICBzc3I6IHtcbiAgICAgIG5vRXh0ZXJuYWw6IFsnZGF5anMnXVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgUnNzUGx1Z2luKFJTUyksXG4gICAgICBTcG9uc29yUGx1Z2luKHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIGFsaVBheVFSOiAnL2FsaVBheVFSLmpwZycsXG4gICAgICAgIHdlQ2hhdFFSOiAnL3dlQ2hhdFBheVFSLmpwZydcbiAgICAgIH0pLFxuICAgICAgQW5ub3VuY2VtZW50UGx1Z2luKHtcbiAgICAgICAgdGl0bGU6ICdcdTUxNkNcdTU0NEEnLFxuICAgICAgICBib2R5OiBbXG4gICAgICAgICAgeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdcdUQ4M0RcdURDNDcgXHU1RkFFXHU0RkUxIFx1RDgzRFx1REM0NycgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgc3JjOiAnL3dlY2hhdC5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiAnXHU2QjIyXHU4RkNFXHU3OUMxXHU0RkUxXHU0RUE0XHU2RDQxJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZHVyYXRpb246IC0xLFxuICAgICAgICB0d2lua2xlOiB0cnVlLFxuICAgICAgICBtb2JpbGVNaW5pZnk6IHRydWVcbiAgICAgIH0pXG4gICAgXVxuICB9XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJsb2ctdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2xlbm92by9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHNcIjtpbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnO1xuXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XG4gIG1lcm1haWQ6IHRydWUsXG4gIGZvb3Rlcjoge1xuICAgIHZlcnNpb246IGZhbHNlLFxuICAgIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU1NDY4XHU2NzJCXHU2NjVBXHU3Njg0XHU1QzlCXHU1QzdGJyxcbiAgICBpY3BSZWNvcmQ6IHtcbiAgICAgIG5hbWU6ICdcdTY2NEJJQ1BcdTU5MDcyMDI0MDUyMzE3XHU1M0Y3JyxcbiAgICAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcbiAgICB9XG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGJ0blBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcbiAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1N0FFMCcsXG4gICAgZW1wdHlUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwJyxcbiAgICBoZWFkaW5nOiAnXHU1MTcxXHU2MjdFXHU1MjMwIHt7c2VhcmNoUmVzdWx0fX0gXHU3QkM3XHU2NTg3XHU3QUUwJ1xuICB9LFxuICB0aGVtZUNvbG9yOiAnZWwtYmx1ZScsXG4gIHJlY29tbWVuZDogZmFsc2UsXG4gIGF1dGhvcjogJ1x1NTQ2OFx1NjcyQlx1NjY1QScsXG4gIGhvbWU6IHtcbiAgICBsb2dvOiAnL2F2YXRhci5qcGcnXG4gIH0sXG4gIGZyaWVuZDoge1xuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuICAgICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxuICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1ZpdGVwcmVzcycsXG4gICAgICAgIGRlczogJ1ZpdGUgJiBWdWUgUG93ZXJlZCBTdGF0aWMgU2l0ZSBHZW5lcmF0b3InLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1lpb3YnLFxuICAgICAgICBkZXM6ICdWaXRlUHJlc3MgXHU1RkVCXHU5MDFGXHU0RTBBXHU2MjRCXHU0RTJEXHU2NTg3XHU2NTU5XHU3QTBCJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzkwODkzNzkwP3Y9NCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLnlpb3YudG9wLydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnXHU4MkNGXHU2N0Q4JyxcbiAgICAgICAgZGVzOiAnXHU1M0JCXHU1M0QxXHU1MTQ5XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU4OEFCXHU3MTY3XHU0RUFFJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9zdXpoZWxldmVsNi5naXRodWIuaW8vc3V6aGVfYmxvZy90b3V4aWFuZzFNQi5qcGcnLFxuICAgICAgICB1cmw6ICdodHRwczovL3N1emhlbGV2ZWw2LmdpdGh1Yi5pby9zdXpoZV9ibG9nLydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnTHVtZW4nLFxuICAgICAgICBkZXM6ICdcdTk2QzZcdTYyMTAgVnVlIFx1NTI5Rlx1ODBGRFx1N0VDNFx1NEVGNlx1NTQ4Q1x1NEUzQlx1OTg5OFx1N0Y4RVx1NTMxNlx1NzY4NCBWaXRlUHJlc3MgXHU2M0QyXHU0RUY2JyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9sdW1lbi50aGVvanMuY24vTG9nby53ZWJwJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sdW1lbi50aGVvanMuY24vJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTgzMDJcdTgzMDJcdTVCRkNcdTgyMkEnLFxuICAgICAgICBkZXM6ICdcdTU3RkFcdTRFOEUgVml0ZVByZXNzIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTI0RFx1N0FFRlx1NUJGQ1x1ODIyQVx1OTg3NVx1OTc2Mlx1NkEyMVx1Njc3RicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZmUtbmF2Lm5ldGxpZnkuYXBwL2xvZ28ucG5nJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9mZS1uYXYubmV0bGlmeS5hcHAvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICcuSGFuJyxcbiAgICAgICAgZGVzOiAnXHU4RkQwXHU2QzE0XHU2NjJGXHU4QkExXHU1MjEyXHU0RTRCXHU1OTE2XHU3Njg0XHU0RTFDXHU4OTdGJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9xMS5xbG9nby5jbi9nP2I9cXEmbms9MTY1NTQ2NjM4NyZzPTY0MCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnZ2aGFuLmNvbS8nXG4gICAgICB9XG4gICAgXSxcbiAgICByYW5kb206IHRydWUsXG4gICAgbGltaXQ6IDNcbiAgfSxcbiAgYXJ0aWNsZToge1xuICAgIGhpZGRlbkNvdmVyOiB0cnVlLFxuICAgIHJlYWRpbmdUaW1lOiBmYWxzZVxuICB9LFxuICBob3RBcnRpY2xlOiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdUREMjUgXHU3Q0JFXHU5MDA5XHU2NTg3XHU3QUUwJyxcbiAgICBuZXh0VGV4dDogJ1x1NjM2Mlx1NEUwMFx1N0VDNCcsXG4gICAgcGFnZVNpemU6IDksXG4gICAgZW1wdHk6ICdcdTY2ODJcdTY1RTBcdTdDQkVcdTkwMDlcdTUxODVcdTVCQjknXG4gIH0sXG4gIGNvbW1lbnQ6IHtcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48ZyBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI0XCI+PHBhdGggZmlsbD1cIiMyRjg4RkZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTQ0IDhINFYzOEgxOUwyNCA0M0wyOSAzOEg0NFY4WlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yMSAxNUwyMCAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yOCAxNUwyNyAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMyAyMEwxNiAyMFwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMiAyN0wxNSAyN1wiLz48L2c+PC9zdmc+JyxcbiAgICB0eXBlOiAnZ2lzY3VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICByZXBvOiAnV2tuZE5pdGUvYmxvZycsXG4gICAgICByZXBvSWQ6ICdSX2tnRE9OdFExcEEnLFxuICAgICAgY2F0ZWdvcnk6ICdBbm5vdW5jZW1lbnRzJyxcbiAgICAgIGNhdGVnb3J5SWQ6ICdESUNfa3dET050UTFwTTRDbkVFSicsXG4gICAgICBpbnB1dFBvc2l0aW9uOiAndG9wJ1xuICAgIH0sXG4gICAgbW9iaWxlTWluaWZ5OiB0cnVlXG4gIH0sXG4gIGJhY2tUb1RvcDoge1xuICAgIGljb246ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj48cGF0aCBmaWxsPVwiI0NBMkMzMVwiIGQ9XCJtMy43NyA3MS43M2wxNi4zNC0xNi4xbDI3LjgyLTQuOTNsLTIuNzUgMTQuNTZMNy41NyA3Ni44MmwtMi40My0xLjA1elwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMjIuOTQgNTkuNzZMNS4yIDc1Ljg4bDEzLjA1IDYuMzZsMTkuODEtMTAuMTF2LTQuNzdsNC4wNS0xMC45MnptNDEuOTggMjguMzlsLTguNTcgMy43MmwtOC4wOSAxNy4xNXM3LjEyIDE1Ljc3IDcuNDQgMTUuNzdjLjMyIDAgNC4zNy4zMiA0LjM3LjMybDE0LjQtMTYuMWwzLjY0LTI3LjVsLTEzLjE5IDYuNjR6XCIvPjxwYXRoIGZpbGw9XCIjQ0EyQzMxXCIgZD1cIk01Ni41IDEwMC44NHM0Ljc3LS45NyA4LjE3LTIuNTljMy40LTEuNjIgNy42LTQuMDQgNy42LTQuMDRsLTEuNTQgMTMuNDNsLTE1LjA1IDE3LjEzcy0uNTktLjczLTMuMDktNi4xN2MtMS45OS00LjM0LTIuNjgtNS44OS0yLjY4LTUuODlsNi41OS0xMS44N3pcIi8+PHBhdGggZmlsbD1cIiNGN0Q3NERcIiBkPVwiTTMxLjU4IDgwLjY2cy01Ljc0LS40OC0xMi4wMyA3LjQ3Yy01Ljc0IDcuMjYtOC40MyAxOS4wOC05LjQ3IDIyLjEycy0zLjUzIDMuNjYtMi43IDUuMDVzNC40MiAxLjMxIDguODUuNzZzOC4yMy0xLjk0IDguMjMtMS45NHMtLjE5LjQ4LS44MyAxLjUyYy0uMjMuMzctMS4wMy45LS45NyAxLjQ1Yy4xNCAxLjMxIDExLjM2IDEuMzQgMjAuMzItNy44OGM5LjY4LTkuOTUgNC45OC0xOC4xMSA0Ljk4LTE4LjExTDMxLjU4IDgwLjY2elwiLz48cGF0aCBmaWxsPVwiI0ZCRjBCNFwiIGQ9XCJNMzMuMzEgODUuMjlzLTYuMTkuMzMtMTEuMzEgOC4yOHMtNy41IDE3LjE2LTcuMDEgMTcuNzhjLjQ4LjYyIDEwLjAyLTIuODMgMTIuMzEtMi4xNGMxLjU3LjQ4Ljc2IDIuMDcgMS4xOCAyLjQ5Yy4zNS4zNSA0LjQ5Ljk0IDExLjE5LTYuMzJjNi43MS03LjI2IDUuMTItMTcuNDYgNS4xMi0xNy40NmwtMTEuNDgtMi42M3pcIi8+PHBhdGggZmlsbD1cIiM4NTg1ODVcIiBkPVwiTTM2LjM1IDc0LjQ0cy0zLjExIDIuNzctNC4yMiA0LjM2Yy0xLjExIDEuNTktMS4xMSAxLjczLTEuMDQgMi4yMWMuMDcuNDggMS4yMiA1Ljc1IDYuMDEgMTAuMzdjNS44OCA1LjY3IDExLjEzIDYuNDMgMTEuODkgNi40M2MuNzYgMCA1LjgxLTUuNjcgNS44MS01LjY3bC0xOC40NS0xNy43elwiLz48cGF0aCBmaWxsPVwiIzQzNzY4N1wiIGQ9XCJNNTAuMSA5MS4yNHM1LjA0IDMuMzEgMTMuNDkuNDdjMTEuNTUtMy44OCAyMC4wMi0xMi41NiAzMC41MS0yMy41MmMxMC4xMi0xMC41OCAxOC42MS0yMy43MSAxOC42MS0yMy43MWwtNS45NS0xOS45M0w1MC4xIDkxLjI0elwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJtNjcuOTkgODAuMzNsMS4zOS00LjMybDMuNDguNDlzMi42NSAxLjI1IDQuNiAyLjE2YzEuOTUuOTEgNC40NiAxLjYgNC40NiAxLjZsLTQuOTUgNC4xOHMtMi43LTEuMDItNC42Ny0xLjg4Yy0yLjIyLS45Ny00LjMxLTIuMjMtNC4zMS0yLjIzelwiLz48cGF0aCBmaWxsPVwiIzhEQUZCRlwiIGQ9XCJNODQuMzIgMTYuMTRzLTkuNjIgNS41OC0yMy40MSAxOC42M2MtMTIuNDMgMTEuNzYtMjEuNjQgMjIuNC0yMy44NyAzMS40NWMtMS44NiA3LjU4LS44NyAxMi4xOCAzLjM2IDE3LjE1YzQuNDcgNS4yNiA5LjcxIDcuODcgOS43MSA3Ljg3czMuOTQuMDYgMjAuMzgtMTIuNTlDOTEgNjIuODYgMTA3LjQzIDM2LjQyIDEwNy40MyAzNi40Mkw4NC4zMiAxNi4xNHpcIi8+PHBhdGggZmlsbD1cIiNEODNGMjJcIiBkPVwiTTEwNC4xOCA0MS44NHMtOC4zNy0zLjU3LTE0LjM0LTExLjljLTUuOTMtOC4yNy01LjQ2LTEzLjg2LTUuNDYtMTMuODZzNC45Ni0zLjg5IDE2LjExLTguMzRjNy41LTIuOTkgMTcuNzEtNC41MiAyMS4wNy0yLjAzcy0yLjMgMTQuOTgtMi4zIDE0Ljk4bC0xMC4zMSAxOS45NmwtNC43NyAxLjE5elwiLz48cGF0aCBmaWxsPVwiIzY4OTZBNVwiIGQ9XCJNNjguMTcgODAuNHMtNy4yMy0zLjY5LTExLjgzLTguOTRjLTguNy05LjkxLTEwLjUtMjAuNzktMTAuNS0yMC43OWw0LjM3LTUuMTNTNTEuMyA1Ny4xIDYwLjYzIDY3LjA5YzYuMDggNi41MSAxMi40MyA5LjQ5IDEyLjQzIDkuNDlzLTEuMjcgMS4wNy0yLjYzIDIuMTFjLS44Ny42Ny0yLjI2IDEuNzEtMi4yNiAxLjcxelwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMTEyLjcxIDQ0LjQ4czQuMzQtNS4yMyA4LjQ1LTE3LjAyYzUuNzQtMTYuNDQuNzQtMjEuNDIuNzQtMjEuNDJzLTEuNjkgNy44Mi03LjU2IDE4LjY5Yy00LjcxIDguNzEtMTAuNDEgMTctMTAuNDEgMTdzMy4xNCAxLjQxIDQuODQgMS45YzIuMTQuNjIgMy45NC44NSAzLjk0Ljg1elwiLz48cGF0aCBmaWxsPVwiI0IzRTFFRVwiIGQ9XCJNMzkuODEgNjkuNjZjMS4zIDEuMjQgMy4yNy0uMDYgNC41Ni0zLjFjMS4zLTMuMDQgMS4yOC00Ljc0LjI4LTUuNDZjLTEuMjQtLjktMy4zMiAxLjA3LTQuMjMgMi44MmMtMSAxLjk0LTEuNTkgNC44LS42MSA1Ljc0em00NS4xNC00OS41M3MtNy42MSA1LjQ3LTE1LjczIDEyLjkxYy03LjQ1IDYuODMtMTIuMzkgMTIuMTctMTMuMDcgMTMuNDFjLS43MiAxLjMzLS43MyAzLjIxLS4xNyA0LjE3czEuOCAxLjQ2IDIuOTMuNjJjMS4xMy0uODUgOS4xOC05Ljc1IDE2LjQ1LTE2LjExYzYuNjUtNS44MiAxMS43OC05LjUxIDExLjc4LTkuNTFzMi4wOC0zLjY4IDEuNzQtNC41MmMtLjM0LS44NS0zLjkzLS45Ny0zLjkzLS45N3pcIi8+PHBhdGggZmlsbD1cIiNFRDZBNjVcIiBkPVwiTTg0Ljk1IDIwLjEzczUuNjItNC4zMSAxMS43NC03LjM0YzUuNjktMi44MiAxMS4zNS01LjE3IDEyLjM3LTMuMTNjLjk3IDEuOTQtNS4zNyA0LjU4LTEwLjk1IDguMTRjLTUuNTggMy41Ni0xMC45NSA3LjgxLTEwLjk1IDcuODFzLS44Mi0xLjUtMS4zNS0yLjg5YTIzLjcgMjMuNyAwIDAgMS0uODYtMi41OXpcIi8+PHBhdGggZmlsbD1cIiNFMUUxRTFcIiBkPVwiTTg5LjU5IDM5LjI1Yy01LjU3LTUuMTMtMTMuMzItMy43NS0xNy4xNC44MWMtMy45MiA0LjctMy42MyAxMS44OCAxIDE2LjJjNC4yMSAzLjkyIDEyLjA0IDQuODEgMTYuNzYtLjY5YzQuMi00Ljg4IDMuOTQtMTIuMTMtLjYyLTE2LjMyelwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJNNzUuMzMgNDEuODdjLTMuMzEgMy4yNS0zLjEzIDkuNjkuODEgMTIuNjNjMy40NCAyLjU3IDguMzIgMi40NCAxMS4zOC0uNjljMy4wNi0zLjEzIDMuMDYtOC44Mi4xOS0xMS43NmMtMy4zLTMuMzctOC41OS0zLjktMTIuMzgtLjE4elwiLz48cGF0aCBmaWxsPVwiI0EwMjUyNFwiIGQ9XCJNNTAgNzYuODlzNi4xOS02LjI4IDYuODctNS42Yy42OC42OC41OSA0LjQ5LTIuMzcgOC43M2MtMi45NyA0LjI0LTkuNSAxMS43OS0xNC42NyAxNi44OGMtNS4xIDUuMDEtMTIuMjkgMTAuNzQtMTIuOTcgMTAuNjRjLS41My0uMDgtMi42OC0xLjE1LTMuNTQtMi4xOWMtLjg0LTEuMDMgMS42Ny01LjkgMi42OC03LjUxYzEuMDItMS42MSAyNC0yMC45NSAyNC0yMC45NXpcIi8+PHBhdGggZmlsbD1cIiNDQTJDMzFcIiBkPVwiTTIxLjIzIDEwMS44NWMtLjA4IDEuNDQgMi4xMiAzLjU0IDIuMTIgMy41NEw1Ni44NyA3MS4zcy0xLjU3LTEuNzctNi4xOSAxLjFjLTQuNjYgMi45LTguNzQgNi4zOC0xNC43NiAxMi4yMWMtOC4zOSA4LjE0LTE0LjYxIDE1LjgtMTQuNjkgMTcuMjR6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xOS4wNiAzNi45NWMtMS4xMSAxLjExLTEuMTYgMi44OS4wOCAzLjkxYzEuMS45MSAyLjg5LjMyIDMuNTYtLjVzLjU5LTIuNi0uMy0zLjQ4Yy0uODktLjg5LTIuNjYtLjYtMy4zNC4wN3pcIi8+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTQxLjAyIDM1LjY1Yy0uODQuOTMtLjU3IDIuMzEuMjEgMi44MnMxLjk1LjQ2IDIuNTItLjI0Yy41MS0uNjMuNTctMS44OS0uMjEtMi42N2MtLjY4LS42Ny0xLjk4LS41MS0yLjUyLjA5elwiIG9wYWNpdHk9XCIuNVwiLz48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNNTUuNTUgMTEuODlzMS4yMi0zLjQ4IDEuOTQtMy41MmMuNzMtLjA0IDEuNzggMy40OCAxLjc4IDMuNDhzMy42MS4wNCAzLjg1LjU3Yy4zMS42OC0yLjMxIDIuOTYtMi4zMSAyLjk2cy44NSAzLjQuNDUgMy44MWMtLjQ1LjQ1LTMuNTYtMS4zNC0zLjU2LTEuMzRzLTMuMiAyLjIzLTMuODkgMS42MmMtLjYtLjUzLjY1LTQuMTMuNjUtNC4xM3MtMy0yLjE5LTIuODQtMi44Yy4yMy0uODYgMy45My0uNjUgMy45My0uNjV6bTQxLjQ2IDgzLjQ0YzEuMjEuNjcgMi43My4yOSAzLjI5LTFjLjUxLTEuMTUtLjQzLTIuNTItMS4yOC0yLjg5Yy0uODUtLjM3LTIuMzQuMTItMi44OCAxLjA5Yy0uNTMuOTYuMTQgMi40Ljg3IDIuOHptMTcuMTgtMjkuNDljLS42OS0xLjA3LTIuMTgtMS40Mi0zLjE1LS41NmMtLjk0Ljg0LS43MSAyLjE2LS4xOCAyLjgzYy41My42NyAxLjk1LjkyIDIuODEuMzdzLjk0LTIgLjUyLTIuNjR6XCIvPjwvc3ZnPidcbiAgfSxcbiAgd29ya3M6IHtcbiAgICB0aXRsZTogJ1x1NEUyQVx1NEVCQVx1NEY1Q1x1NTRDMScsXG4gICAgZGVzY3JpcHRpb246ICdcdThCQjBcdTVGNTVcdTVGMDBcdTUzRDFcdTc2ODRcdTcwQjlcdTcwQjlcdTZFRjRcdTZFRjQnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdcdTk1RUVcdTUzNzdcdTRGNEVcdTc4MDFcdTVGMTVcdTY0Q0UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1RDgzRFx1RENBRCBcdTY3MkNcdTU3MzBcdTUzMTZcdTZDOTlcdTdCQjFcdTc2ODRcdTk1RUVcdTUzNzdcdTc1MUZcdTYyMTBcdTVFNzNcdTUzRjAnLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgc3RhcnQ6ICcyMDI1LzAzLzAxJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbG93Y29kZS5tYW96aS5pbycsXG4gICAgICAgIGNvdmVyOiB7XG4gICAgICAgICAgdXJsczogW1xuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0wOS00MC5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0xMi0xOS5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0yMC0yNC5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0yMS0wNC5wbmcnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYXlvdXQ6ICdsaXN0J1xuICAgICAgICB9LFxuICAgICAgICB0YWdzOiBbJ1Z1ZTMnLCAnUGluaWEnLCAnVHlwZVNjcmlwdCddXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0lUIFx1NzdFNVx1OEJDNlx1NUU5M1x1NTI0RFx1NTQwRVx1NTNGMCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHVEODNEXHVEQ0REIENSQSBcdTU0OEMgVW1pIFx1NTNDQ1x1NjdCNlx1Njc4NFx1NTI0RFx1NTQwRVx1NTNGMFx1OTg3OVx1NzZFRScsXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICBzdGFydDogJzIwMjUvMDIvMDcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1drbmROaXRlL2NvZGVyLXN0YXRpb24nLFxuICAgICAgICBjb3Zlcjoge1xuICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICcvd29ya3MvYjQxY2JkNjk5OWY5M2FkYjYxZTVmZDU2YWRmNDBhZi5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy85NGNkYmVkMDNmZWVkYmI3OGE5ZWU1ZTI2ODkwMzYwLnBuZydcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxheW91dDogJ2xpc3QnXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnQW50IERlc2lnbiddXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBncm91cEljb246IHtcbiAgICBjdXN0b21JY29uOiB7XG4gICAgICAnLnBocCc6ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXBocCcsXG4gICAgICAnLmpzeCc6ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXJlYWN0anMnLFxuICAgICAgJy5iYWJlbHJjJzogJ3ZzY29kZS1pY29uczpmaWxlLXR5cGUtYmFiZWwnXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9sZW5vdm8vRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9kYXRhL25hdi50c1wiO2V4cG9ydCBjb25zdCBuYXYgPSBbXG4gIHtcbiAgICB0ZXh0OiAnXHU3QUQ5XHU3MEI5XHU1REU1XHU1MTc3JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnXHU1QkZDXHU4MjJBXHU5NkM2XHU5NTI2JywgbGluazogJy9OYXYnIH0sXG4gICAgICB7IHRleHQ6ICdcdTZENDFcdTkxQ0ZcdTdCQTFcdTc0MDYnLCBsaW5rOiAnaHR0cHM6Ly92Ni41MS5sYScgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDUyBcdTU3RkFcdTc4NDAnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMZWV0Q29kZSBIb3QgMTAwJyxcbiAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgbGluazogJy9DUy9EU0EnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU0RUUzXHU3ODAxXHU5NjhGXHU2MEYzXHU1RjU1JyxcbiAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU2RjJCXHU2RTM4JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnQ1NTJywgbGluazogJy9Gcm9udGVuZC9DU1MnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0JyxcbiAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0VTbmV4dCcsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1R5cGVTY3JpcHQnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1R5cGVTY3JpcHQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnV2VicGFjaycsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVERTVcdTdBMEJcdTUzMTYnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Z1ZScsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1JlYWN0JyxcbiAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjgnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0Jyb3dzZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRGVidWcnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Byb2plY3RzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1Njc0Mlx1OEMwOCcsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvT3RoZXJzL3NvbWUnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1OEY2Rlx1NjI4MFx1ODBGRCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dpdCcsXG4gICAgICAgIGxpbms6ICcvRGV2VGlwcy9HaXQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRG9ja2VyJyxcbiAgICAgICAgbGluazogJy9EZXZUaXBzL0RvY2tlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTgzMDNcdTVGMEYnLFxuICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1NURFNVx1NTE3NycsXG4gICAgICAgIGxpbms6ICcvRGV2VGlwcy9PdGhlcnMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjgyMVx1NjJEQlx1NTkwN1x1NjIxOCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1N0Y1MVx1N0VEQycsXG4gICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ1NTJyxcbiAgICAgICAgbGluazogJy9JbnRlcnZpZXcvQ1NTJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0phdmFTY3JpcHQnLFxuICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjI0Qlx1NjQ5NVx1NEVFM1x1NzgwMScsXG4gICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTdCMTRcdTk3NjJcdTdFQ0ZcdTlBOEMnLFxuICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgeyB0ZXh0OiAnXHU0RTJBXHU0RUJBXHU0RjVDXHU1NEMxJywgbGluazogJy9Xb3JrcycgfSxcbiAgeyB0ZXh0OiAnXHU3NTFGXHU2RDNCXHU5NjhGXHU3QjE0JywgbGluazogJy9MaWZlLycgfVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVxcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9sZW5vdm8vRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9kYXRhL3NpZGViYXIudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGRvY3NQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uJyk7XG5jb25zdCBmaWx0ZXJlZFBhdGhBcnJheSA9IFsnaW5kZXgubWQnLCAnLnZpdGVwcmVzcycsICdOYXYnLCAnV29ya3MnLCAncHVibGljJ107XG5jb25zdCBjYXRlZ29yaWVzID0gZnNcbiAgLnJlYWRkaXJTeW5jKGRvY3NQYXRoKVxuICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWZpbHRlcmVkUGF0aEFycmF5LmluY2x1ZGVzKGNhdGVnb3J5KSk7XG5cbmNvbnN0IHJlc3VsdCA9IHt9O1xuZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gIHJlc3VsdFtgLyR7Y2F0ZWdvcnl9L2BdID0gW107XG59XG5cbmZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICBjb25zdCBjYXRlZ29yeVBhdGggPSBwYXRoLmpvaW4oZG9jc1BhdGgsIGNhdGVnb3J5KTtcbiAgY29uc3QgZmlsZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhjYXRlZ29yeVBhdGgpXG4gICAgLmZpbHRlcigoZmlsZSkgPT4gZmlsZSAhPT0gJ2luZGV4Lm1kJyk7XG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGluZGV4UGF0aCA9IHBhdGguam9pbihjYXRlZ29yeVBhdGgsIGZpbGUsICdpbmRleC5tZCcpO1xuICAgIGNvbnNvbGUubG9nKGluZGV4UGF0aCk7XG4gICAgLy8gXHU0RUNFaW5kZXgubWRcdTRFMkRcdThCRkJcdTUzRDZcdTY4MDdcdTk4OThcbiAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGluZGV4UGF0aCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBjb250ZW50Lm1hdGNoKC8jICguKykvKTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gICcvQ1MvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdMZWV0Q29kZSBIb3QgMTAwJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU1NEM4XHU1RTBDJyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9oYXNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU1M0NDXHU2MzA3XHU5NDg4JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC90d28tcG9pbnRlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NjY2RVx1OTAxQVx1NjU3MFx1N0VDNCcsXG4gICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvYXJyYXknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTc3RTlcdTk2MzUnLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL21hdHJpeCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1OTRGRVx1ODg2OCcsXG4gICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvbGlua2xpc3QnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTRFOENcdTUzQzlcdTY4MTEnLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3RyZWUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTU2RkVcdThCQkEnLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2dyYXBoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU1NkRFXHU2RUFGJyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9iYWNrdHJhY2tpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTRFOENcdTUyMDZcdTY3RTVcdTYyN0UnLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2JpbmFyeS1zZWFyY2gnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTY4MDgnLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3N0YWNrJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU1ODA2JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9oZWFwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU4RDJBXHU1RkMzXHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9ncmVlZHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTUyQThcdTYwMDFcdTg5QzRcdTUyMTInLFxuICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2RwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU2MjgwXHU1REU3JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC90ZWNobmlxdWUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDUnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1RkM1XHU0RjFBXHU3Qjk3XHU2Q0Q1XHVGRjA4XHU0RTAwXHVGRjA5JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0RTQS9mcm9udGVuZC0xJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NUZDNVx1NEYxQVx1N0I5N1x1NkNENVx1RkYwOFx1NEU4Q1x1RkYwOScsXG4gICAgICAgICAgbGluazogJy9DUy9EU0EvZnJvbnRlbmQtMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTVGQzVcdTRGMUFcdTdCOTdcdTZDRDVcdUZGMDhcdTRFMDlcdUZGMDknLFxuICAgICAgICAgIGxpbms6ICcvQ1MvRFNBL2Zyb250ZW5kLTMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2MzkyXHU1RThGXHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgICBsaW5rOiAnL0NTL0RTQS9zb3J0J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU0RUUzXHU3ODAxXHU5NjhGXHU2MEYzXHU1RjU1JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OTRGRVx1ODg2OCcsXG4gICAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybC9saW5rZWRMaXN0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NEU4Q1x1NTNDOVx1NjgxMScsXG4gICAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybC90cmVlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTJBOFx1NjAwMVx1ODlDNFx1NTIxMicsXG4gICAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybC9kcCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy9Gcm9udGVuZC8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0NTUycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTU3NTdcdTdFQTdcdTY4M0NcdTVGMEZcdTUzMTZcdTRFMEFcdTRFMEJcdTY1ODcnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL2Jsb2NrLWZvcm1hdHRpbmctY29udGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDU1MgXHU4QkExXHU3Qjk3XHU1QzVFXHU2MDI3JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0NTUy9jb21wdXRlZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTg5QzZcdTg5QzlcdTY4M0NcdTVGMEZcdTUzMTZcdTZBMjFcdTU3OEInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL3Zpc3VhbC1mb3JtYXR0aW5nLW1vZGVsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NUM0Mlx1NTNFMFx1NEUwQVx1NEUwQlx1NjU4NycsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1Mvc3RhY2tpbmctY29udGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTczQjBcdTRFRTNcdTUzMTYgQ1NTIFx1NEUyRFx1NzY4NCBib3JkZXInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL21vZGVybi1ib3JkZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RTAwXHU2NTg3XHU2NDFFXHU2MUMyIGZsZXgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL21vZGVybi1mbGV4J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NzZEOFx1NzBCOSBDU1MgR3JpZCcsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvZ3JpZCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0phdmFTY3JpcHQnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCBcdTRFMkRcdTY1NzBcdTVCNTdcdTc2ODRcdTVCNThcdTUwQTgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvSmF2YVNjcmlwdC9udW1iZXItc3RvcmFnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTRFMDBcdTRFOUJcdTYyMTZcdTU5MjdcdTYyMTZcdTVDMEZcdTc2ODRcdTU3NTEnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvSmF2YVNjcmlwdC9zb21lLWRldGFpbHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RjREXHU4RkQwXHU3Qjk3JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0phdmFTY3JpcHQvYml0LW9wZXJhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NEY1Q1x1NzUyOFx1NTdERlx1NEUwRVx1OTVFRFx1NTMwNScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0L3Njb3BlLWNsb3N1cmUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdFU25leHQnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRVM2KyBcdTRFMDBcdTRFOUJcdTk2RjZcdTc4OEVcdTc2ODRcdTY1MzlcdTUyQTgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0L3NvbWUtY2hhbmdlcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFUzYgXHU0RTJEXHU2NTcwXHU3RUM0XHU3Njg0XHU2NTM5XHU1MkE4JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9hcnJheSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFUzYgXHU0RTJEXHU1QkY5XHU4QzYxXHU3Njg0XHU2NTM5XHU1MkE4JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9vYmplY3QnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUHJvbWlzZScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FU25leHQvcHJvbWlzZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFU25leHQgXHU3Mjc5XHU2MDI3XHU0RTAwXHU4OUM4JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9vdmVydmlldydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1R5cGVTY3JpcHQnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1QjU3XHU4MjgyIFx1MDBCNyBcdTZERjFcdTUxNjVcdTZENDVcdTUxRkEgVHlwZVNjcmlwdCcsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9UeXBlU2NyaXB0L2J5dGUtdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdXZWJwYWNrJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1dlYnBhY2sgXHU1MTY1XHU5NUU4JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svaW50cm8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2QTIxXHU1NzU3XHU1MzE2XHU1MTdDXHU1QkI5XHU2MDI3JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svbW9kdWxlLWNvbXBhdGliaWxpdHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTRFMkRcdTc2ODRcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9jb25maWcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTdGMTZcdThCRDFcdThGQzdcdTdBMEInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9jb21waWxlLXByb2Nlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1MTY1XHU1M0UzXHU0RTBFXHU1MUZBXHU1M0UzXHU5MTREXHU3RjZFJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svZW50cnktb3V0cHV0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0xvYWRlcnMgXHU0RTBFIFBsdWdpbnMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9sb2FkZXJzLXBsdWdpbnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTU5ODJcdTRGNTVcdTUzM0FcdTUyMDZcdTczQUZcdTU4ODNcdUZGMUYnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9lbnYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RTAwXHU0RTlCXHU3RUM2XHU4MjgyXHU5MTREXHU3RjZFXHU4ODY1XHU1MTQ1JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svZGV0YWlscydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1NUUzOFx1NzUyOFx1NjI2OVx1NUM1NScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2V4dGVuc2lvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9kZXYtc2VydmVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1dlYnBhY2sgXHU1MTg1XHU3RjZFXHU2M0QyXHU0RUY2JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svYnVpbHRpbi1wbHVnaW5zJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1MzE2JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NTUyBcdTVERTVcdTdBMEJcdTUzMTZcdTY5ODJcdThGRjAnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRW5naW5lZXJpbmcvQ1NTLUVuZ2luZWVyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTIyOVx1NzUyOCBXZWJwYWNrIFx1NjJDNlx1NTIwNiBDU1MnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRW5naW5lZXJpbmcvV2VicGFjay1TcGxpdC1DU1MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4OUUzXHU1MUIzXHU3QzdCXHU1NDBEXHU1MUIyXHU3QTgxJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL0NTUy1OYW1lLUNvbmZsaWN0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1ODlFM1x1NTFCM1x1OTFDRFx1NTkwRFx1NjgzN1x1NUYwRlx1NzY4NFx1OTVFRVx1OTg5OCcsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FbmdpbmVlcmluZy9DU1MtUmVwZWF0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEMwOFx1NEUwMFx1OEMwOCBQb3N0IENTUycsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FbmdpbmVlcmluZy9Qb3N0Q1NTJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTk4Mlx1NEY1NVx1NjJCRFx1NzlCQiBDU1MgXHU2NTg3XHU0RUY2JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL0NTUy1FeHRyYWN0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0JhYmVsJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL0JhYmVsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FbmdpbmVlcmluZy9QZXJmb3JtYW5jZS1PcHRpbWl6YXRpb24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdWdWUnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVnVlMyBcdTkxQ0NcdTc2ODQgcmVmIFx1NTQ4QyByZWFjdGl2ZScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvcmVmLXJlYWN0aXZlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEMwOFx1NEUwMFx1OEMwOCBWdWUzIFx1NEUyRFx1NzY4NFx1ODY1QVx1NjJERiBET00nLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL3ZpcnR1YWwtZG9tJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Z1ZTMgXHU0RTJEXHU2QTIxXHU2NzdGXHU3Njg0XHU2NzJDXHU4RDI4JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Z1ZS9uYXR1cmUtb2YtdGVtcGxhdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU2ODExXHU1NDhDXHU4NjVBXHU2MkRGIERPTSBcdTY4MTEnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL2NvbXBvbmVudC10cmVlLWFuZC12aXJ0dWFsLWRvbS10cmVlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Z1ZSBcdTRFMkRcdTY1NzBcdTYzNkVcdTYyRTZcdTYyMkFcdTc2ODRcdTY3MkNcdThEMjgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL2RhdGEtaW50ZXJjZXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Z1ZSBcdTRFMkRcdTU0Q0RcdTVFOTRcdTVGMEZcdTY1NzBcdTYzNkVcdTc2ODRcdTY3MkNcdThEMjgnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL3JlYWN0aXZlLWRhdGEnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdSZWFjdCcsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVCNTdcdTgyODIgXHUwMEI3IFx1NTRDRFx1NUU5NFx1NUYwRlx1N0NGQlx1N0VERlx1NEUwRSBSZWFjdCcsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9ieXRlLXJlYWN0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NjgzOFx1NUZDM1x1Njk4Mlx1NUZGNVx1RkYwOFx1NEUwMFx1RkYwOScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9jb3JlLWNvbmNlcHRzLW9uZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdTY4MzhcdTVGQzNcdTY5ODJcdTVGRjVcdUZGMDhcdTRFOENcdUZGMDknLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvY29yZS1jb25jZXB0cy10d28nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU4REVGXHU3NTMxJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3JvdXRlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdTRFMkRcdTc2ODRcdTcyQjZcdTYwMDFcdTdCQTFcdTc0MDZcdTVFOTMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVkdXgnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1QzVFXHU2MDI3XHU5RUQ4XHU4QkE0XHU1MDNDXHU1NDhDXHU3QzdCXHU1NzhCXHU2OEMwXHU2N0U1JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3Byb3AtdHlwZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTlBRDhcdTk2MzZcdTdFQzRcdTRFRjYnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvaG9jJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvbnRleHQnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvY29udGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZW5kZXIgUHJvcHMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVuZGVyLXByb3BzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1BvcnRhbHMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcG9ydGFscydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTk1MTlcdThCRUZcdThGQjlcdTc1NEMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvZXJyb3ItYm91bmRhcmllcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZWYnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVmJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1N0VDNFx1NEVGNlx1NkUzMlx1NjdEM1x1NjVGNlx1NzY4NFx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9wZXJmb3JtYW5jZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTY4NDZcdTY3QjZcdTc2ODRcdTc0MDZcdTg5RTMnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvZnJhbWV3b3JrLWNvbXByZWhlbnNpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU1NDhDIFZ1ZSBcdTYzQ0ZcdThGRjBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzM0FcdTUyMkInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVhY3QtdnMtdnVlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1Njg0Nlx1NjdCNlx1NzY4NFx1NTIwNlx1N0M3QicsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9mcmFtZXdvcmstY2xhc3NpZmljYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4NjVBXHU2MkRGIERPTScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC92aXJ0dWFsLWRvbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdTY1NzRcdTRGNTNcdTY3QjZcdTY3ODQnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcmVhY3QtYXJjaGl0ZWN0dXJlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NkUzMlx1NjdEM1x1NkQ0MVx1N0EwQicsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZW5kZXItcHJvY2VzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdGaWJlciBcdTUzQ0NcdTdGMTNcdTUxQjInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvZmliZXItZG91YmxlLWJ1ZmZlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTU2RkVcdTg5RTMgZGlmZiBcdTdCOTdcdTZDRDUnLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvZGlmZi1hbGdvcml0aG0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWVzc2FnZSBDaGFubmVsJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L21lc3NhZ2UtY2hhbm5lbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTY2hlZHVsZXIgXHU4QzAzXHU1RUE2XHU2NjZFXHU5MDFBXHU0RUZCXHU1MkExJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3NjaGVkdWxlci1ub3JtYWwtdGFzaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTY2hlZHVsZXIgXHU4QzAzXHU1RUE2XHU1RUY2XHU2NUY2XHU0RUZCXHU1MkExJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3NjaGVkdWxlci10aW1lb3V0LXRhc2snXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2NzAwXHU1QzBGXHU1ODA2JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L21pbi1oZWFwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvb2sgXHU1MzlGXHU3NDA2JyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2hvb2snXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAndXNlU3RhdGUgXHU1NDhDIHVzZVJlZHVjZXInLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvdXNlU3RhdGUtdXNlUmVkdWNlcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdlZmZlY3QgXHU3NkY4XHU1MTczIEhvb2tzJyxcbiAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2VmZmVjdC1ob29rcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd1c2VDYWxsYmFjayBcdTU0OEMgdXNlTWVtbycsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC91c2VDYWxsYmFjay11c2VNZW1vJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2RDRGXHU4OUM4XHU1NjY4JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NkQ0Rlx1ODlDOFx1NTY2OFx1NkUzMlx1NjdEM1x1NTM5Rlx1NzQwNicsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9Ccm93c2VyL3JlbmRlcidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RlYnVnJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JlYWN0IFx1OEJGN1x1NkM0Mlx1OEY2Q1x1NTNEMVx1NEUwRVx1OUVEOFx1OEJBNFx1NjI1M1x1NTMwNVx1NTFCMlx1N0E4MScsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9Qcm9qZWN0cy9jcmEtcGF0aC1jb25mbGljdC1wcm94eS1wYWNrJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JlYWN0IFRvYXN0IFVJIHNvdXJjZW1hcCBcdTYyQTVcdTk1MTknLFxuICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUHJvamVjdHMvdG9hc3R1aS1wYXJzZS1zb3VyY2VtYXAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTY3NDJcdThDMDgnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1MjJCXHU3Nzg1XHU0RTg2IFx1NUMzMVx1OEZEOVx1NEUwMFx1N0JDNycsXG4gICAgICAgICAgbGluazogJy9Gcm9udGVuZC9PdGhlcnMvc29tZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy9EZXZUaXBzLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2l0JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDb21taXQgXHU4OUM0XHU4MzAzJywgbGluazogJy9EZXZUaXBzL0dpdC9jb21taXQnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR2l0IFx1NjVCMFx1NjVFN1x1NTQ3RFx1NEVFNCcsXG4gICAgICAgICAgbGluazogJy9EZXZUaXBzL0dpdC9naXQtY29tbWFuZC1uZXcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR2l0IFx1NTkyN1x1NUMwRlx1NTE5OVx1NEUwRFx1NjU0Rlx1NjExRlx1OTVGOVx1NEU0Q1x1OUY5OScsXG4gICAgICAgICAgbGluazogJy9EZXZUaXBzL0dpdC9naXQtaWdub3JlY2FzZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RvY2tlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdEb2NrZXIgXHU1QjU4XHU1NzI4XHU3Njg0XHU1RkM1XHU4OTgxXHU2MDI3JyxcbiAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRG9ja2VyL3ByZXZpZXcnXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1N0I4MFx1NzdFRFx1NzY4NFx1NEVDQlx1N0VDRCcsIGxpbms6ICcvRGV2VGlwcy9Eb2NrZXIvaW50cm8nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RTAwXHU0RTlCXHU1RTM4XHU3NTI4XHU1NDdEXHU0RUU0JyxcbiAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRG9ja2VyL2NvbW1hbmQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRG9ja2VyIFx1OTAxQVx1NEZFMScsXG4gICAgICAgICAgbGluazogJy9EZXZUaXBzL0RvY2tlci9jb21tdW5pY2F0aW9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1RjAwXHU1M0QxXHU4MzAzXHU1RjBGJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRicsXG4gICAgICAgICAgbGluazogJy9EZXZUaXBzL0Rlc2lnbi9kZXNpZ24tcGF0dGVybnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4QkJFXHU4QkExXHU1MzlGXHU1MjE5JyxcbiAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduL2Rlc2lnbi1wcmluY2lwbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1OEJFNlx1ODlFM1x1N0IyQ1x1NEUwMFx1NjcxRiBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEYnLFxuICAgICAgICAgIGxpbms6ICcvRGV2VGlwcy9EZXNpZ24vZGVzaWduLXBhdHRlcm5zLXNpbmdsZXRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy9MaWZlLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnMjAyMCcsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTgzQ0FcdTZCMjFcdTkwQ0VcdTc2ODRcdTU5MEZcdTU5MjknLFxuICAgICAgICAgIGxpbms6ICcvTGlmZS8yMDIwL2tpa3VqaXJvLXN1bW1lcidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJzIwMjEnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHUzMDBBXHU1M0YyXHU4QkIwXHUwMEI3XHU5ODc5XHU3RkJEXHU2NzJDXHU3RUFBXHUzMDBCXHU3Njg0XHU0RTAwXHU0RTlCXHU3NzBCXHU2Q0Q1JyxcbiAgICAgICAgICBsaW5rOiAnL0xpZmUvMjAyMS9oaXN0b3JpY2FsLXJlY29yZHMteGlhbmd5dSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgJy9JbnRlcnZpZXcvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdcdTdGNTFcdTdFREMnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RTk0XHU1QzQyXHU3RjUxXHU3RURDXHU2QTIxXHU1NzhCJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL25ldHdvcmstbW9kZWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU4QkY3XHU2QzQyXHU2NUI5XHU2Q0Q1JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3JlcXVlc3QtbWV0aG9kJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0Nvb2tpZScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9jb29raWUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnY29va2llIFx1NTQ4QyBzdG9yYWdlIFx1NzY4NFx1NTMzQVx1NTIyQicsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9jb29raWUtc3RvcmFnZS1kaWZmZXJlbmNlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTJBMFx1NUJDNlx1N0I5N1x1NkNENScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9lbmNyeXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0pXVCcsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9qd3QnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1NDBDXHU2RTkwXHU0RTBFXHU4REU4XHU1N0RGJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3NhbWUtb3JpZ2luLWNyb3NzLWRvbWFpbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIVFRQIFx1NTQwNFx1NzI0OFx1NjcyQycsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9odHRwLXZlcnNpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1N0RGXHU1NDBEXHU1NDhDIEROUycsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9kb21haW4tZG5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEY5M1x1NTE2NSBVUkwgXHU1MjMwXHU5ODc1XHU5NzYyXHU1QzU1XHU3OTNBJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3VybC10by1wYWdlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Nlc3Npb24nLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvc2Vzc2lvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUQ1AgXHU1MzRGXHU4QkFFJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3RjcCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDU1JGIFx1NTQ4QyBYU1MnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvY3NyZi14c3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnU1NMXHUzMDAxVExTIFx1NTQ4QyBIVFRQUycsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9zc2wtdGxzLWh0dHBzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1N0Y1MVx1N0VEQ1x1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9wZXJmb3JtYW5jZS1vcHRpbWl6YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2ViU29ja2V0JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3dlYnNvY2tldCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTdGMTNcdTVCNTgnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvY2FjaGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDU1MnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ1NTIFx1NTM1NVx1NEY0RFx1NjAzQlx1N0VEMycsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvQ1NTL3VuaXQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1QzQ1XHU0RTJEXHU2NUI5XHU1RjBGXHU2MDNCXHU3RUQzJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9DU1MvY2VudGVyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSmF2YVNjcmlwdCcsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdsZXQgdmFyIGNvbnN0JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L2xldC12YXItY29uc3QnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCBcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEInLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvZGF0YS10eXBlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0phdmFTY3JpcHQgXHU0RTJEXHU3Njg0XHU1MzA1XHU4OEM1XHU3QzdCXHU1NzhCJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3dyYXBwZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4RkQwXHU3Qjk3XHU3QjI2JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L29wZXJhdG9yJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTM5Rlx1NTc4Qlx1NTQ4Q1x1NTM5Rlx1NTc4Qlx1OTRGRScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC9wcm90b3R5cGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXHU3Njg0XHU4RjZDXHU2MzYyJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3R5cGUtY29udmVyc2lvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd0aGlzIFx1NjMwN1x1NTQxMScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC90aGlzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTc4M1x1NTczRVx1NTZERVx1NjUzNlx1NEUwRVx1NTE4NVx1NUI1OFx1NkNDNFx1NkYwRicsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC9nYydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTYyNjdcdTg4NENcdTY4MDhcdTU0OENcdTYyNjdcdTg4NENcdTRFMEFcdTRFMEJcdTY1ODcnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvZXhlY3V0aW9uLWNvbnRleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RjVDXHU3NTI4XHU1N0RGXHU0RTBFXHU0RjVDXHU3NTI4XHU1N0RGXHU5NEZFJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3Njb3BlLWNoYWluJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NEU4Qlx1NEVGNlx1NUZBQVx1NzNBRicsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC9ldmVudC1sb29wJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MjRCXHU2NDk1XHU0RUUzXHU3ODAxJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NjI0Qlx1NjQxMyBQcm9taXNlIFx1NTE2OFx1N0NGQlx1NTIxNycsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvZGl5L3Byb21pc2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2NTcwXHU3RUM0XHU2NUI5XHU1RjBGXHU4OUUzXHU2Nzg0XHU1QkY5XHU4QzYxJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9kaXkvZGVzdHJ1Y3R1cmUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2MjRCXHU2NDk1XHU0RThCXHU0RUY2XHU2MDNCXHU3RUJGJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9kaXkvZXZlbnQtYnVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTkyN1x1NjU4N1x1NEVGNlx1NEUwQVx1NEYyMCcsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvZGl5L2JpZy1maWxlLXVwbG9hZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTk2MzJcdTYyOTZcdTU0OENcdTgyODJcdTZENDEnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeS9kZWJvdW5jZS10aHJvdHRsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUxRkRcdTY1NzBcdTY3RUZcdTkxQ0NcdTUzMTYnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeS9jdXJyeWluZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1N0IxNFx1OTc2Mlx1N0VDRlx1OUE4QycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVDMEZcdTdDNzNcdTY1RTVcdTVFMzhcdTVCOUVcdTRFNjBcdTRFMDBcdTk3NjInLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzE5eGlhb21pJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1ODE3RVx1OEJBRlx1OTdGM1x1NEU1MFx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1NTIxRFx1OEJENScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjB0eHl5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OTk3Rlx1NEU4Nlx1NEU0OFx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1N0IxNFx1OEJENScsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjFlbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU3RjhFXHU1NkUyXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU3QjE0XHU4QkQ1JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyMm1laXR1YW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2MkZDXHU1OTFBXHU1OTFBXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU3QjE0XHU4QkQ1JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyM3BkZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTgxN0VcdThCQUZcdTk3RjNcdTRFNTBcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTU5MERcdThCRDUnLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI1dHh5eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVGRUJcdTYyNEJcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTRFMDBcdTk3NjInLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI2a3VhaXNob3UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU3RjhFXHU1NkUyXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU1MjFEXHU4QkQ1JyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyNm1laXR1YW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU3NjdFXHU1RUE2XHU2NUU1XHU1RTM4XHU1QjlFXHU0RTYwXHU0RTAwXHU5NzYyJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyNmJhaWR1J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NUI1N1x1ODI4Mlx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1NEUwMFx1OTc2MicsXG4gICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjdieXRlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU0RjVDXHU0RTFBXHU1RTJFXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU0RTAwXHU5NzYyJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyN3p5YidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVGRUJcdTYyNEJcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTRFOENcdTk3NjInLFxuICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI4a3VhaXNob3UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU3RjhFXHU1NkUyXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU0RThDXHU5NzYyJyxcbiAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyOG1laXR1YW4nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLFNBQVMsMEJBQTBCO0FBQ25DLFNBQXFC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QUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxFQUFFLE1BQU0sNEJBQVEsTUFBTSxTQUFTO0FBQUEsRUFDL0IsRUFBRSxNQUFNLDRCQUFRLE1BQU0sU0FBUztBQUNqQzs7O0FDdkg2VSxPQUFPLFFBQVE7QUFDNVYsT0FBTyxVQUFVO0FBRGpCLElBQU0sbUNBQW1DO0FBR3pDLElBQU0sV0FBVyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUNoRCxJQUFNLG9CQUFvQixDQUFDLFlBQVksY0FBYyxPQUFPLFNBQVMsUUFBUTtBQUM3RSxJQUFNLGFBQWEsR0FDaEIsWUFBWSxRQUFRLEVBQ3BCLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLFNBQVMsUUFBUSxDQUFDO0FBRTdELElBQU0sU0FBUyxDQUFDO0FBQ2hCLFdBQVcsWUFBWSxZQUFZO0FBQ2pDLFNBQU8sSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzdCO0FBRUEsV0FBVyxZQUFZLFlBQVk7QUFDakMsUUFBTSxlQUFlLEtBQUssS0FBSyxVQUFVLFFBQVE7QUFDakQsUUFBTSxRQUFRLEdBQ1gsWUFBWSxZQUFZLEVBQ3hCLE9BQU8sQ0FBQyxTQUFTLFNBQVMsVUFBVTtBQUN2QyxhQUFXLFFBQVEsT0FBTztBQUN4QixVQUFNLFlBQVksS0FBSyxLQUFLLGNBQWMsTUFBTSxVQUFVO0FBQzFELFlBQVEsSUFBSSxTQUFTO0FBRXJCLFVBQU0sVUFBVSxHQUFHLGFBQWEsV0FBVyxPQUFPO0FBQ2xELFVBQU0sUUFBUSxRQUFRLE1BQU0sUUFBUTtBQUNwQyxZQUFRLElBQUksS0FBSztBQUFBLEVBQ25CO0FBQ0Y7QUFFTyxJQUFNLFVBQVU7QUFBQSxFQUNyQixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1o7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sdUJBQWEsTUFBTSxzQkFBc0I7QUFBQSxRQUNqRDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQSxFQUFFLE1BQU0sa0NBQVMsTUFBTSx3QkFBd0I7QUFBQSxRQUMvQztBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxV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
