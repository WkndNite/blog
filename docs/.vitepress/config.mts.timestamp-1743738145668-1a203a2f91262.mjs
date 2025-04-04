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
function getTitle(content) {
  const match = content.match(/# (.+)/);
  return match
    ? match[0].replace('# ', '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    : '\u6807\u9898\u663E\u793A\u9519\u8BEF';
}
function getList(content) {
  const match = content.match(/- (.+)/g);
  return match
    ? match.map((item) => item.replace(/- /g, ''))
    : '\u5217\u8868\u663E\u793A\u9519\u8BEF';
}
var docsPath = path.resolve(__vite_injected_original_dirname, '../..');
var filteredPathArray = ['index.md', '.vitepress', 'Nav', 'Works', 'public'];
var categories = fs
  .readdirSync(docsPath)
  .filter((category) => !filteredPathArray.includes(category));
var sidebar = {};
for (const category of categories) {
  const categoryPath = path.join(docsPath, category);
  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file !== 'index.md');
  const categoryItems = [];
  for (const file of files) {
    const indexPath = path.join(categoryPath, file, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    const title = getTitle(content);
    const list = getList(content);
    const obj = list.map((item) => ({
      text: item.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      link: `/${category}/${file}/${item.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$2')}`
    }));
    console.log(obj);
    const subFiles = fs
      .readdirSync(path.join(categoryPath, file))
      .filter((subFile) => subFile !== 'index.md' && subFile.endsWith('.md'))
      .map((subFile) => ({
        text: getTitle(
          fs.readFileSync(path.join(categoryPath, file, subFile), 'utf-8')
        ),
        link: `/${category}/${file}/${subFile.replace('.md', '')}`
      }));
    categoryItems.push({
      text: title,
      collapsed: false,
      items: subFiles
    });
  }
  sidebar[`/${category}/`] = categoryItems;
}

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvbmF2LnRzIiwgImRvY3MvLnZpdGVwcmVzcy9kYXRhL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGVub3ZvL0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBBbm5vdW5jZW1lbnRQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLWFubm91bmNlbWVudCc7XG5pbXBvcnQgeyBSU1NPcHRpb25zLCBSc3NQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLXJzcyc7XG5pbXBvcnQgeyBTcG9uc29yUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1zcG9uc29yJztcbmltcG9ydCB7IGJsb2dUaGVtZSB9IGZyb20gJy4vYmxvZy10aGVtZSc7XG5pbXBvcnQgeyBuYXYgfSBmcm9tICcuL2RhdGEvbmF2JztcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL2RhdGEvc2lkZWJhcic7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9ibG9nLndrbmRuaXRlLXRlY2guY24nO1xuY29uc3QgUlNTOiBSU1NPcHRpb25zID0ge1xuICB0aXRsZTogJ1x1NTQ2OFx1NjcyQlx1NjY1QVx1NzY4NFx1NUM5Qlx1NUM3RicsXG4gIGJhc2VVcmwsXG4gIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU1NDY4XHU2NzJCXHU2NjVBJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIG1hcmtkb3duOiB7XG4gICAgbWF0aDogdHJ1ZSxcbiAgICBpbWFnZToge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgdGlwTGFiZWw6ICdcdTYzRDBcdTc5M0EnLFxuICAgICAgd2FybmluZ0xhYmVsOiAnXHU4QjY2XHU1NDRBJyxcbiAgICAgIGRhbmdlckxhYmVsOiAnXHU1MzcxXHU5NjY5JyxcbiAgICAgIGluZm9MYWJlbDogJ1x1NEZFMVx1NjA2RicsXG4gICAgICBkZXRhaWxzTGFiZWw6ICdcdThCRTZcdTdFQzZcdTRGRTFcdTYwNkYnXG4gICAgfSxcbiAgICB0aGVtZTogeyBsaWdodDogJ29uZS1saWdodCcsIGRhcms6ICdkcmFjdWxhJyB9LFxuICAgIGNvZGVDb3B5QnV0dG9uVGl0bGU6ICdcdTU5MERcdTUyMzZcdTRFRTNcdTc4MDEnXG4gIH0sXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgbGFuZzogJ3poLWNuJyxcbiAgdGl0bGU6ICdcdTU0NjhcdTY3MkJcdTY2NUFcdTc2ODRcdTVDOUJcdTVDN0YnLFxuICBkZXNjcmlwdGlvbjogJ1x1NUI4MVx1OUUyM1x1ODAwQ1x1NkI3QiBcdTRFMERcdTlFRDhcdTgwMENcdTc1MUYnLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgaGVhZDogW1xuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2JhaWR1LXNpdGUtdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgY29udGVudDogJ2NvZGV2YS1DeFJBSENLMktNJ1xuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7XG4gICAgICAgIHNyYzogJy8vc2RrLjUxLmxhL2pzLXNkay1wcm8ubWluLmpzJyxcbiAgICAgICAgY2hhcnNldDogJ1VURi04JyxcbiAgICAgICAgaWQ6ICdMQV9DT0xMRUNUJ1xuICAgICAgfVxuICAgIF0sXG4gICAgWydzY3JpcHQnLCB7fSwgJ0xBLmluaXQoe2lkOlwiM0xjUkNGOEdpQVNmaXYzMFwiLGNrOlwiM0xjUkNGOEdpQVNmaXYzMFwifSknXSxcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHtcbiAgICAgICAgYXN5bmM6ICcnLFxuICAgICAgICBzcmM6ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctMDk1Q1lRMlA2QydcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge30sXG4gICAgICBgXG4gICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICBndGFnKCdjb25maWcnLCAnRy0wOTVDWVEyUDZDJyk7XG4gICAgYFxuICAgIF0sXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9sb2dvLnN2ZycgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vY2hpbmVzZS1mb250cy1jZG4uZGVuby5kZXYvcGFja2FnZXMvbW9vbi1zdGFycy1rYWkvZGlzdC9Nb29uU3RhcnNLYWktQm9sZC9yZXN1bHQuY3NzJ1xuICAgICAgfVxuICAgIF1cbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnXG4gICAgfSxcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwJyxcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxuXG4gICAgbG9nbzogJy9sb2dvLnN2ZycsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vV2tuZG5pdGUnXG4gICAgICB9XG4gICAgXSxcbiAgICBuYXY6IG5hdixcbiAgICBzaWRlYmFyOiBzaWRlYmFyXG4gIH0sXG4gIHZpdGU6IHtcbiAgICBzc3I6IHtcbiAgICAgIG5vRXh0ZXJuYWw6IFsnZGF5anMnXVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgUnNzUGx1Z2luKFJTUyksXG4gICAgICBTcG9uc29yUGx1Z2luKHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIGFsaVBheVFSOiAnL2FsaVBheVFSLmpwZycsXG4gICAgICAgIHdlQ2hhdFFSOiAnL3dlQ2hhdFBheVFSLmpwZydcbiAgICAgIH0pLFxuICAgICAgQW5ub3VuY2VtZW50UGx1Z2luKHtcbiAgICAgICAgdGl0bGU6ICdcdTUxNkNcdTU0NEEnLFxuICAgICAgICBib2R5OiBbXG4gICAgICAgICAgeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdcdUQ4M0RcdURDNDcgXHU1RkFFXHU0RkUxIFx1RDgzRFx1REM0NycgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgc3JjOiAnL3dlY2hhdC5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiAnXHU2QjIyXHU4RkNFXHU3OUMxXHU0RkUxXHU0RUE0XHU2RDQxJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZHVyYXRpb246IC0xLFxuICAgICAgICB0d2lua2xlOiB0cnVlLFxuICAgICAgICBtb2JpbGVNaW5pZnk6IHRydWVcbiAgICAgIH0pXG4gICAgXVxuICB9XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJsb2ctdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2xlbm92by9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHNcIjtpbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnO1xuXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XG4gIG1lcm1haWQ6IHRydWUsXG4gIGZvb3Rlcjoge1xuICAgIHZlcnNpb246IGZhbHNlLFxuICAgIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU1NDY4XHU2NzJCXHU2NjVBXHU3Njg0XHU1QzlCXHU1QzdGJyxcbiAgICBpY3BSZWNvcmQ6IHtcbiAgICAgIG5hbWU6ICdcdTY2NEJJQ1BcdTU5MDcyMDI0MDUyMzE3XHU1M0Y3JyxcbiAgICAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcbiAgICB9XG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGJ0blBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcbiAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1N0FFMCcsXG4gICAgZW1wdHlUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwJyxcbiAgICBoZWFkaW5nOiAnXHU1MTcxXHU2MjdFXHU1MjMwIHt7c2VhcmNoUmVzdWx0fX0gXHU3QkM3XHU2NTg3XHU3QUUwJ1xuICB9LFxuICB0aGVtZUNvbG9yOiAnZWwtYmx1ZScsXG4gIHJlY29tbWVuZDogZmFsc2UsXG4gIGF1dGhvcjogJ1x1NTQ2OFx1NjcyQlx1NjY1QScsXG4gIGhvbWU6IHtcbiAgICBsb2dvOiAnL2F2YXRhci5qcGcnXG4gIH0sXG4gIGZyaWVuZDoge1xuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuICAgICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxuICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1ZpdGVwcmVzcycsXG4gICAgICAgIGRlczogJ1ZpdGUgJiBWdWUgUG93ZXJlZCBTdGF0aWMgU2l0ZSBHZW5lcmF0b3InLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1lpb3YnLFxuICAgICAgICBkZXM6ICdWaXRlUHJlc3MgXHU1RkVCXHU5MDFGXHU0RTBBXHU2MjRCXHU0RTJEXHU2NTg3XHU2NTU5XHU3QTBCJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzkwODkzNzkwP3Y9NCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLnlpb3YudG9wLydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnXHU4MkNGXHU2N0Q4JyxcbiAgICAgICAgZGVzOiAnXHU1M0JCXHU1M0QxXHU1MTQ5XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU4OEFCXHU3MTY3XHU0RUFFJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9zdXpoZWxldmVsNi5naXRodWIuaW8vc3V6aGVfYmxvZy90b3V4aWFuZzFNQi5qcGcnLFxuICAgICAgICB1cmw6ICdodHRwczovL3N1emhlbGV2ZWw2LmdpdGh1Yi5pby9zdXpoZV9ibG9nLydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnTHVtZW4nLFxuICAgICAgICBkZXM6ICdcdTk2QzZcdTYyMTAgVnVlIFx1NTI5Rlx1ODBGRFx1N0VDNFx1NEVGNlx1NTQ4Q1x1NEUzQlx1OTg5OFx1N0Y4RVx1NTMxNlx1NzY4NCBWaXRlUHJlc3MgXHU2M0QyXHU0RUY2JyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9sdW1lbi50aGVvanMuY24vTG9nby53ZWJwJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sdW1lbi50aGVvanMuY24vJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTgzMDJcdTgzMDJcdTVCRkNcdTgyMkEnLFxuICAgICAgICBkZXM6ICdcdTU3RkFcdTRFOEUgVml0ZVByZXNzIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTI0RFx1N0FFRlx1NUJGQ1x1ODIyQVx1OTg3NVx1OTc2Mlx1NkEyMVx1Njc3RicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZmUtbmF2Lm5ldGxpZnkuYXBwL2xvZ28ucG5nJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9mZS1uYXYubmV0bGlmeS5hcHAvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICcuSGFuJyxcbiAgICAgICAgZGVzOiAnXHU4RkQwXHU2QzE0XHU2NjJGXHU4QkExXHU1MjEyXHU0RTRCXHU1OTE2XHU3Njg0XHU0RTFDXHU4OTdGJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9xMS5xbG9nby5jbi9nP2I9cXEmbms9MTY1NTQ2NjM4NyZzPTY0MCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnZ2aGFuLmNvbS8nXG4gICAgICB9XG4gICAgXSxcbiAgICByYW5kb206IHRydWUsXG4gICAgbGltaXQ6IDNcbiAgfSxcbiAgYXJ0aWNsZToge1xuICAgIGhpZGRlbkNvdmVyOiB0cnVlLFxuICAgIHJlYWRpbmdUaW1lOiBmYWxzZVxuICB9LFxuICBob3RBcnRpY2xlOiB7XG4gICAgdGl0bGU6ICdcdUQ4M0RcdUREMjUgXHU3Q0JFXHU5MDA5XHU2NTg3XHU3QUUwJyxcbiAgICBuZXh0VGV4dDogJ1x1NjM2Mlx1NEUwMFx1N0VDNCcsXG4gICAgcGFnZVNpemU6IDksXG4gICAgZW1wdHk6ICdcdTY2ODJcdTY1RTBcdTdDQkVcdTkwMDlcdTUxODVcdTVCQjknXG4gIH0sXG4gIGNvbW1lbnQ6IHtcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj48ZyBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI0XCI+PHBhdGggZmlsbD1cIiMyRjg4RkZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTQ0IDhINFYzOEgxOUwyNCA0M0wyOSAzOEg0NFY4WlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yMSAxNUwyMCAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0yOCAxNUwyNyAzMlwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMyAyMEwxNiAyMFwiLz48cGF0aCBzdHJva2U9XCIjZmZmXCIgZD1cIk0zMiAyN0wxNSAyN1wiLz48L2c+PC9zdmc+JyxcbiAgICB0eXBlOiAnZ2lzY3VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICByZXBvOiAnV2tuZE5pdGUvYmxvZycsXG4gICAgICByZXBvSWQ6ICdSX2tnRE9OdFExcEEnLFxuICAgICAgY2F0ZWdvcnk6ICdBbm5vdW5jZW1lbnRzJyxcbiAgICAgIGNhdGVnb3J5SWQ6ICdESUNfa3dET050UTFwTTRDbkVFSicsXG4gICAgICBpbnB1dFBvc2l0aW9uOiAndG9wJ1xuICAgIH0sXG4gICAgbW9iaWxlTWluaWZ5OiB0cnVlXG4gIH0sXG4gIGJhY2tUb1RvcDoge1xuICAgIGljb246ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj48cGF0aCBmaWxsPVwiI0NBMkMzMVwiIGQ9XCJtMy43NyA3MS43M2wxNi4zNC0xNi4xbDI3LjgyLTQuOTNsLTIuNzUgMTQuNTZMNy41NyA3Ni44MmwtMi40My0xLjA1elwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMjIuOTQgNTkuNzZMNS4yIDc1Ljg4bDEzLjA1IDYuMzZsMTkuODEtMTAuMTF2LTQuNzdsNC4wNS0xMC45MnptNDEuOTggMjguMzlsLTguNTcgMy43MmwtOC4wOSAxNy4xNXM3LjEyIDE1Ljc3IDcuNDQgMTUuNzdjLjMyIDAgNC4zNy4zMiA0LjM3LjMybDE0LjQtMTYuMWwzLjY0LTI3LjVsLTEzLjE5IDYuNjR6XCIvPjxwYXRoIGZpbGw9XCIjQ0EyQzMxXCIgZD1cIk01Ni41IDEwMC44NHM0Ljc3LS45NyA4LjE3LTIuNTljMy40LTEuNjIgNy42LTQuMDQgNy42LTQuMDRsLTEuNTQgMTMuNDNsLTE1LjA1IDE3LjEzcy0uNTktLjczLTMuMDktNi4xN2MtMS45OS00LjM0LTIuNjgtNS44OS0yLjY4LTUuODlsNi41OS0xMS44N3pcIi8+PHBhdGggZmlsbD1cIiNGN0Q3NERcIiBkPVwiTTMxLjU4IDgwLjY2cy01Ljc0LS40OC0xMi4wMyA3LjQ3Yy01Ljc0IDcuMjYtOC40MyAxOS4wOC05LjQ3IDIyLjEycy0zLjUzIDMuNjYtMi43IDUuMDVzNC40MiAxLjMxIDguODUuNzZzOC4yMy0xLjk0IDguMjMtMS45NHMtLjE5LjQ4LS44MyAxLjUyYy0uMjMuMzctMS4wMy45LS45NyAxLjQ1Yy4xNCAxLjMxIDExLjM2IDEuMzQgMjAuMzItNy44OGM5LjY4LTkuOTUgNC45OC0xOC4xMSA0Ljk4LTE4LjExTDMxLjU4IDgwLjY2elwiLz48cGF0aCBmaWxsPVwiI0ZCRjBCNFwiIGQ9XCJNMzMuMzEgODUuMjlzLTYuMTkuMzMtMTEuMzEgOC4yOHMtNy41IDE3LjE2LTcuMDEgMTcuNzhjLjQ4LjYyIDEwLjAyLTIuODMgMTIuMzEtMi4xNGMxLjU3LjQ4Ljc2IDIuMDcgMS4xOCAyLjQ5Yy4zNS4zNSA0LjQ5Ljk0IDExLjE5LTYuMzJjNi43MS03LjI2IDUuMTItMTcuNDYgNS4xMi0xNy40NmwtMTEuNDgtMi42M3pcIi8+PHBhdGggZmlsbD1cIiM4NTg1ODVcIiBkPVwiTTM2LjM1IDc0LjQ0cy0zLjExIDIuNzctNC4yMiA0LjM2Yy0xLjExIDEuNTktMS4xMSAxLjczLTEuMDQgMi4yMWMuMDcuNDggMS4yMiA1Ljc1IDYuMDEgMTAuMzdjNS44OCA1LjY3IDExLjEzIDYuNDMgMTEuODkgNi40M2MuNzYgMCA1LjgxLTUuNjcgNS44MS01LjY3bC0xOC40NS0xNy43elwiLz48cGF0aCBmaWxsPVwiIzQzNzY4N1wiIGQ9XCJNNTAuMSA5MS4yNHM1LjA0IDMuMzEgMTMuNDkuNDdjMTEuNTUtMy44OCAyMC4wMi0xMi41NiAzMC41MS0yMy41MmMxMC4xMi0xMC41OCAxOC42MS0yMy43MSAxOC42MS0yMy43MWwtNS45NS0xOS45M0w1MC4xIDkxLjI0elwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJtNjcuOTkgODAuMzNsMS4zOS00LjMybDMuNDguNDlzMi42NSAxLjI1IDQuNiAyLjE2YzEuOTUuOTEgNC40NiAxLjYgNC40NiAxLjZsLTQuOTUgNC4xOHMtMi43LTEuMDItNC42Ny0xLjg4Yy0yLjIyLS45Ny00LjMxLTIuMjMtNC4zMS0yLjIzelwiLz48cGF0aCBmaWxsPVwiIzhEQUZCRlwiIGQ9XCJNODQuMzIgMTYuMTRzLTkuNjIgNS41OC0yMy40MSAxOC42M2MtMTIuNDMgMTEuNzYtMjEuNjQgMjIuNC0yMy44NyAzMS40NWMtMS44NiA3LjU4LS44NyAxMi4xOCAzLjM2IDE3LjE1YzQuNDcgNS4yNiA5LjcxIDcuODcgOS43MSA3Ljg3czMuOTQuMDYgMjAuMzgtMTIuNTlDOTEgNjIuODYgMTA3LjQzIDM2LjQyIDEwNy40MyAzNi40Mkw4NC4zMiAxNi4xNHpcIi8+PHBhdGggZmlsbD1cIiNEODNGMjJcIiBkPVwiTTEwNC4xOCA0MS44NHMtOC4zNy0zLjU3LTE0LjM0LTExLjljLTUuOTMtOC4yNy01LjQ2LTEzLjg2LTUuNDYtMTMuODZzNC45Ni0zLjg5IDE2LjExLTguMzRjNy41LTIuOTkgMTcuNzEtNC41MiAyMS4wNy0yLjAzcy0yLjMgMTQuOTgtMi4zIDE0Ljk4bC0xMC4zMSAxOS45NmwtNC43NyAxLjE5elwiLz48cGF0aCBmaWxsPVwiIzY4OTZBNVwiIGQ9XCJNNjguMTcgODAuNHMtNy4yMy0zLjY5LTExLjgzLTguOTRjLTguNy05LjkxLTEwLjUtMjAuNzktMTAuNS0yMC43OWw0LjM3LTUuMTNTNTEuMyA1Ny4xIDYwLjYzIDY3LjA5YzYuMDggNi41MSAxMi40MyA5LjQ5IDEyLjQzIDkuNDlzLTEuMjcgMS4wNy0yLjYzIDIuMTFjLS44Ny42Ny0yLjI2IDEuNzEtMi4yNiAxLjcxelwiLz48cGF0aCBmaWxsPVwiI0EwMjQyMlwiIGQ9XCJNMTEyLjcxIDQ0LjQ4czQuMzQtNS4yMyA4LjQ1LTE3LjAyYzUuNzQtMTYuNDQuNzQtMjEuNDIuNzQtMjEuNDJzLTEuNjkgNy44Mi03LjU2IDE4LjY5Yy00LjcxIDguNzEtMTAuNDEgMTctMTAuNDEgMTdzMy4xNCAxLjQxIDQuODQgMS45YzIuMTQuNjIgMy45NC44NSAzLjk0Ljg1elwiLz48cGF0aCBmaWxsPVwiI0IzRTFFRVwiIGQ9XCJNMzkuODEgNjkuNjZjMS4zIDEuMjQgMy4yNy0uMDYgNC41Ni0zLjFjMS4zLTMuMDQgMS4yOC00Ljc0LjI4LTUuNDZjLTEuMjQtLjktMy4zMiAxLjA3LTQuMjMgMi44MmMtMSAxLjk0LTEuNTkgNC44LS42MSA1Ljc0em00NS4xNC00OS41M3MtNy42MSA1LjQ3LTE1LjczIDEyLjkxYy03LjQ1IDYuODMtMTIuMzkgMTIuMTctMTMuMDcgMTMuNDFjLS43MiAxLjMzLS43MyAzLjIxLS4xNyA0LjE3czEuOCAxLjQ2IDIuOTMuNjJjMS4xMy0uODUgOS4xOC05Ljc1IDE2LjQ1LTE2LjExYzYuNjUtNS44MiAxMS43OC05LjUxIDExLjc4LTkuNTFzMi4wOC0zLjY4IDEuNzQtNC41MmMtLjM0LS44NS0zLjkzLS45Ny0zLjkzLS45N3pcIi8+PHBhdGggZmlsbD1cIiNFRDZBNjVcIiBkPVwiTTg0Ljk1IDIwLjEzczUuNjItNC4zMSAxMS43NC03LjM0YzUuNjktMi44MiAxMS4zNS01LjE3IDEyLjM3LTMuMTNjLjk3IDEuOTQtNS4zNyA0LjU4LTEwLjk1IDguMTRjLTUuNTggMy41Ni0xMC45NSA3LjgxLTEwLjk1IDcuODFzLS44Mi0xLjUtMS4zNS0yLjg5YTIzLjcgMjMuNyAwIDAgMS0uODYtMi41OXpcIi8+PHBhdGggZmlsbD1cIiNFMUUxRTFcIiBkPVwiTTg5LjU5IDM5LjI1Yy01LjU3LTUuMTMtMTMuMzItMy43NS0xNy4xNC44MWMtMy45MiA0LjctMy42MyAxMS44OCAxIDE2LjJjNC4yMSAzLjkyIDEyLjA0IDQuODEgMTYuNzYtLjY5YzQuMi00Ljg4IDMuOTQtMTIuMTMtLjYyLTE2LjMyelwiLz48cGF0aCBmaWxsPVwiIzNGNTQ1RlwiIGQ9XCJNNzUuMzMgNDEuODdjLTMuMzEgMy4yNS0zLjEzIDkuNjkuODEgMTIuNjNjMy40NCAyLjU3IDguMzIgMi40NCAxMS4zOC0uNjljMy4wNi0zLjEzIDMuMDYtOC44Mi4xOS0xMS43NmMtMy4zLTMuMzctOC41OS0zLjktMTIuMzgtLjE4elwiLz48cGF0aCBmaWxsPVwiI0EwMjUyNFwiIGQ9XCJNNTAgNzYuODlzNi4xOS02LjI4IDYuODctNS42Yy42OC42OC41OSA0LjQ5LTIuMzcgOC43M2MtMi45NyA0LjI0LTkuNSAxMS43OS0xNC42NyAxNi44OGMtNS4xIDUuMDEtMTIuMjkgMTAuNzQtMTIuOTcgMTAuNjRjLS41My0uMDgtMi42OC0xLjE1LTMuNTQtMi4xOWMtLjg0LTEuMDMgMS42Ny01LjkgMi42OC03LjUxYzEuMDItMS42MSAyNC0yMC45NSAyNC0yMC45NXpcIi8+PHBhdGggZmlsbD1cIiNDQTJDMzFcIiBkPVwiTTIxLjIzIDEwMS44NWMtLjA4IDEuNDQgMi4xMiAzLjU0IDIuMTIgMy41NEw1Ni44NyA3MS4zcy0xLjU3LTEuNzctNi4xOSAxLjFjLTQuNjYgMi45LTguNzQgNi4zOC0xNC43NiAxMi4yMWMtOC4zOSA4LjE0LTE0LjYxIDE1LjgtMTQuNjkgMTcuMjR6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xOS4wNiAzNi45NWMtMS4xMSAxLjExLTEuMTYgMi44OS4wOCAzLjkxYzEuMS45MSAyLjg5LjMyIDMuNTYtLjVzLjU5LTIuNi0uMy0zLjQ4Yy0uODktLjg5LTIuNjYtLjYtMy4zNC4wN3pcIi8+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTQxLjAyIDM1LjY1Yy0uODQuOTMtLjU3IDIuMzEuMjEgMi44MnMxLjk1LjQ2IDIuNTItLjI0Yy41MS0uNjMuNTctMS44OS0uMjEtMi42N2MtLjY4LS42Ny0xLjk4LS41MS0yLjUyLjA5elwiIG9wYWNpdHk9XCIuNVwiLz48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNNTUuNTUgMTEuODlzMS4yMi0zLjQ4IDEuOTQtMy41MmMuNzMtLjA0IDEuNzggMy40OCAxLjc4IDMuNDhzMy42MS4wNCAzLjg1LjU3Yy4zMS42OC0yLjMxIDIuOTYtMi4zMSAyLjk2cy44NSAzLjQuNDUgMy44MWMtLjQ1LjQ1LTMuNTYtMS4zNC0zLjU2LTEuMzRzLTMuMiAyLjIzLTMuODkgMS42MmMtLjYtLjUzLjY1LTQuMTMuNjUtNC4xM3MtMy0yLjE5LTIuODQtMi44Yy4yMy0uODYgMy45My0uNjUgMy45My0uNjV6bTQxLjQ2IDgzLjQ0YzEuMjEuNjcgMi43My4yOSAzLjI5LTFjLjUxLTEuMTUtLjQzLTIuNTItMS4yOC0yLjg5Yy0uODUtLjM3LTIuMzQuMTItMi44OCAxLjA5Yy0uNTMuOTYuMTQgMi40Ljg3IDIuOHptMTcuMTgtMjkuNDljLS42OS0xLjA3LTIuMTgtMS40Mi0zLjE1LS41NmMtLjk0Ljg0LS43MSAyLjE2LS4xOCAyLjgzYy41My42NyAxLjk1LjkyIDIuODEuMzdzLjk0LTIgLjUyLTIuNjR6XCIvPjwvc3ZnPidcbiAgfSxcbiAgd29ya3M6IHtcbiAgICB0aXRsZTogJ1x1NEUyQVx1NEVCQVx1NEY1Q1x1NTRDMScsXG4gICAgZGVzY3JpcHRpb246ICdcdThCQjBcdTVGNTVcdTVGMDBcdTUzRDFcdTc2ODRcdTcwQjlcdTcwQjlcdTZFRjRcdTZFRjQnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdcdTk1RUVcdTUzNzdcdTRGNEVcdTc4MDFcdTVGMTVcdTY0Q0UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1RDgzRFx1RENBRCBcdTY3MkNcdTU3MzBcdTUzMTZcdTZDOTlcdTdCQjFcdTc2ODRcdTk1RUVcdTUzNzdcdTc1MUZcdTYyMTBcdTVFNzNcdTUzRjAnLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgc3RhcnQ6ICcyMDI1LzAzLzAxJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbG93Y29kZS5tYW96aS5pbycsXG4gICAgICAgIGNvdmVyOiB7XG4gICAgICAgICAgdXJsczogW1xuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0wOS00MC5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0xMi0xOS5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0yMC0yNC5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy9QaXhQaW5fMjAyNS0wMy0xMl8yMS0yMS0wNC5wbmcnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYXlvdXQ6ICdsaXN0J1xuICAgICAgICB9LFxuICAgICAgICB0YWdzOiBbJ1Z1ZTMnLCAnUGluaWEnLCAnVHlwZVNjcmlwdCddXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0lUIFx1NzdFNVx1OEJDNlx1NUU5M1x1NTI0RFx1NTQwRVx1NTNGMCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHVEODNEXHVEQ0REIENSQSBcdTU0OEMgVW1pIFx1NTNDQ1x1NjdCNlx1Njc4NFx1NTI0RFx1NTQwRVx1NTNGMFx1OTg3OVx1NzZFRScsXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICBzdGFydDogJzIwMjUvMDIvMDcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1drbmROaXRlL2NvZGVyLXN0YXRpb24nLFxuICAgICAgICBjb3Zlcjoge1xuICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICcvd29ya3MvYjQxY2JkNjk5OWY5M2FkYjYxZTVmZDU2YWRmNDBhZi5wbmcnLFxuICAgICAgICAgICAgJy93b3Jrcy85NGNkYmVkMDNmZWVkYmI3OGE5ZWU1ZTI2ODkwMzYwLnBuZydcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxheW91dDogJ2xpc3QnXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnQW50IERlc2lnbiddXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBncm91cEljb246IHtcbiAgICBjdXN0b21JY29uOiB7XG4gICAgICAnLnBocCc6ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXBocCcsXG4gICAgICAnLmpzeCc6ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXJlYWN0anMnLFxuICAgICAgJy5iYWJlbHJjJzogJ3ZzY29kZS1pY29uczpmaWxlLXR5cGUtYmFiZWwnXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9sZW5vdm8vRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9kYXRhL25hdi50c1wiO2V4cG9ydCBjb25zdCBuYXYgPSBbXG4gIHtcbiAgICB0ZXh0OiAnXHU3QUQ5XHU3MEI5XHU1REU1XHU1MTc3JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnXHU1QkZDXHU4MjJBXHU5NkM2XHU5NTI2JywgbGluazogJy9OYXYnIH0sXG4gICAgICB7IHRleHQ6ICdcdTZENDFcdTkxQ0ZcdTdCQTFcdTc0MDYnLCBsaW5rOiAnaHR0cHM6Ly92Ni41MS5sYScgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDUyBcdTU3RkFcdTc4NDAnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMZWV0Q29kZSBIb3QgMTAwJyxcbiAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1JyxcbiAgICAgICAgbGluazogJy9DUy9EU0EnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU0RUUzXHU3ODAxXHU5NjhGXHU2MEYzXHU1RjU1JyxcbiAgICAgICAgbGluazogJy9DUy9wcm9ncmFtbWVyY2FybCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU2RjJCXHU2RTM4JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnQ1NTJywgbGluazogJy9Gcm9udGVuZC9DU1MnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0JyxcbiAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0VTbmV4dCcsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1R5cGVTY3JpcHQnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1R5cGVTY3JpcHQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnV2VicGFjaycsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVERTVcdTdBMEJcdTUzMTYnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Z1ZScsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1JlYWN0JyxcbiAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjgnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0Jyb3dzZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRGVidWcnLFxuICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Byb2plY3RzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1Njc0Mlx1OEMwOCcsXG4gICAgICAgIGxpbms6ICcvRnJvbnRlbmQvT3RoZXJzL3NvbWUnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1OEY2Rlx1NjI4MFx1ODBGRCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dpdCcsXG4gICAgICAgIGxpbms6ICcvRGV2VGlwcy9HaXQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRG9ja2VyJyxcbiAgICAgICAgbGluazogJy9EZXZUaXBzL0RvY2tlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTgzMDNcdTVGMEYnLFxuICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1NURFNVx1NTE3NycsXG4gICAgICAgIGxpbms6ICcvRGV2VGlwcy9PdGhlcnMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjgyMVx1NjJEQlx1NTkwN1x1NjIxOCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1N0Y1MVx1N0VEQycsXG4gICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ1NTJyxcbiAgICAgICAgbGluazogJy9JbnRlcnZpZXcvQ1NTJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0phdmFTY3JpcHQnLFxuICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjI0Qlx1NjQ5NVx1NEVFM1x1NzgwMScsXG4gICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTdCMTRcdTk3NjJcdTdFQ0ZcdTlBOEMnLFxuICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgeyB0ZXh0OiAnXHU0RTJBXHU0RUJBXHU0RjVDXHU1NEMxJywgbGluazogJy9Xb3JrcycgfSxcbiAgeyB0ZXh0OiAnXHU3NTFGXHU2RDNCXHU5NjhGXHU3QjE0JywgbGluazogJy9MaWZlLycgfVxuXTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbGVub3ZvXFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVxcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9sZW5vdm8vRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9kYXRhL3NpZGViYXIudHNcIjsvLyBAdHMtbm9jaGVja1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBnZXRUaXRsZShjb250ZW50KSB7XG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvIyAoLispLyk7XG4gIHJldHVybiBtYXRjaFxuICAgID8gbWF0Y2hbMF0ucmVwbGFjZSgnIyAnLCAnJykucmVwbGFjZSgvXFxbKFteXFxdXSspXFxdXFwoW14pXStcXCkvZywgJyQxJylcbiAgICA6ICdcdTY4MDdcdTk4OThcdTY2M0VcdTc5M0FcdTk1MTlcdThCRUYnO1xufVxuXG5mdW5jdGlvbiBnZXRMaXN0KGNvbnRlbnQpIHtcbiAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKC8tICguKykvZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoLm1hcCgoaXRlbSkgPT4gaXRlbS5yZXBsYWNlKC8tIC9nLCAnJykpIDogJ1x1NTIxN1x1ODg2OFx1NjYzRVx1NzkzQVx1OTUxOVx1OEJFRic7XG59XG5cbmNvbnN0IGRvY3NQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uJyk7XG5jb25zdCBmaWx0ZXJlZFBhdGhBcnJheSA9IFsnaW5kZXgubWQnLCAnLnZpdGVwcmVzcycsICdOYXYnLCAnV29ya3MnLCAncHVibGljJ107XG5jb25zdCBjYXRlZ29yaWVzID0gZnNcbiAgLnJlYWRkaXJTeW5jKGRvY3NQYXRoKVxuICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWZpbHRlcmVkUGF0aEFycmF5LmluY2x1ZGVzKGNhdGVnb3J5KSk7XG5cbmNvbnN0IHNpZGViYXIgPSB7fTtcblxuZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gIGNvbnN0IGNhdGVnb3J5UGF0aCA9IHBhdGguam9pbihkb2NzUGF0aCwgY2F0ZWdvcnkpO1xuICBjb25zdCBmaWxlcyA9IGZzXG4gICAgLnJlYWRkaXJTeW5jKGNhdGVnb3J5UGF0aClcbiAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlICE9PSAnaW5kZXgubWQnKTtcbiAgY29uc3QgY2F0ZWdvcnlJdGVtcyA9IFtdO1xuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBpbmRleFBhdGggPSBwYXRoLmpvaW4oY2F0ZWdvcnlQYXRoLCBmaWxlLCAnaW5kZXgubWQnKTtcbiAgICAvLyBcdTRFQ0VpbmRleC5tZFx1NEUyRFx1OEJGQlx1NTNENlx1NjgwN1x1OTg5OFxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoaW5kZXhQYXRoLCAndXRmLTgnKTtcbiAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKGNvbnRlbnQpO1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGNvbnRlbnQpO1xuICAgIGNvbnN0IG9iaiA9IGxpc3QubWFwKChpdGVtKSA9PiAoe1xuICAgICAgdGV4dDogaXRlbS5yZXBsYWNlKC9cXFsoW15cXF1dKylcXF1cXChbXildK1xcKS9nLCAnJDEnKSxcbiAgICAgIGxpbms6IGAvJHtjYXRlZ29yeX0vJHtmaWxlfS8ke2l0ZW0ucmVwbGFjZSgvXFxbKFteXFxdXSspXFxdXFwoKFteKV0rKVxcKS9nLCAnJDInKX1gXG4gICAgfSkpO1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICBjb25zdCBzdWJGaWxlcyA9IGZzXG4gICAgICAucmVhZGRpclN5bmMocGF0aC5qb2luKGNhdGVnb3J5UGF0aCwgZmlsZSkpXG4gICAgICAuZmlsdGVyKChzdWJGaWxlKSA9PiBzdWJGaWxlICE9PSAnaW5kZXgubWQnICYmIHN1YkZpbGUuZW5kc1dpdGgoJy5tZCcpKVxuICAgICAgLm1hcCgoc3ViRmlsZSkgPT4gKHtcbiAgICAgICAgdGV4dDogZ2V0VGl0bGUoXG4gICAgICAgICAgZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihjYXRlZ29yeVBhdGgsIGZpbGUsIHN1YkZpbGUpLCAndXRmLTgnKVxuICAgICAgICApLFxuICAgICAgICBsaW5rOiBgLyR7Y2F0ZWdvcnl9LyR7ZmlsZX0vJHtzdWJGaWxlLnJlcGxhY2UoJy5tZCcsICcnKX1gXG4gICAgICB9KSk7XG5cbiAgICBjYXRlZ29yeUl0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogdGl0bGUsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IHN1YkZpbGVzXG4gICAgfSk7XG4gIH1cbiAgc2lkZWJhcltgLyR7Y2F0ZWdvcnl9L2BdID0gY2F0ZWdvcnlJdGVtcztcbn1cblxuLy8gY29uc3Qgc2lkZWJhciA9IHtcbi8vICAgJy9DUy8nOiBbXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ0xlZXRDb2RlIEhvdCAxMDAnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTU0QzhcdTVFMEMnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2hhc2gnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTUzQ0NcdTYzMDdcdTk0ODgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3R3by1wb2ludGVyJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU2NjZFXHU5MDFBXHU2NTcwXHU3RUM0Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9hcnJheSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NzdFOVx1OTYzNScsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvbWF0cml4J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0hvdC0xMDAgXHU5NEZFXHU4ODY4Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL0xlZXRDb2RlLTEwMC9saW5rbGlzdCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NEU4Q1x1NTNDOVx1NjgxMScsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvdHJlZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NTZGRVx1OEJCQScsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvZ3JhcGgnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTU2REVcdTZFQUYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2JhY2t0cmFja2luZydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NEU4Q1x1NTIwNlx1NjdFNVx1NjI3RScsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvYmluYXJ5LXNlYXJjaCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NjgwOCcsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvc3RhY2snXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTU4MDYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2hlYXAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdThEMkFcdTVGQzNcdTdCOTdcdTZDRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL2dyZWVkeSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdIb3QtMTAwIFx1NTJBOFx1NjAwMVx1ODlDNFx1NTIxMicsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9MZWV0Q29kZS0xMDAvZHAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG90LTEwMCBcdTYyODBcdTVERTcnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvTGVldENvZGUtMTAwL3RlY2huaXF1ZSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENScsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTVGQzVcdTRGMUFcdTdCOTdcdTZDRDVcdUZGMDhcdTRFMDBcdUZGMDknLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvRFNBL2Zyb250ZW5kLTEnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1RkM1XHU0RjFBXHU3Qjk3XHU2Q0Q1XHVGRjA4XHU0RThDXHVGRjA5Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL0RTQS9mcm9udGVuZC0yJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NUZDNVx1NEYxQVx1N0I5N1x1NkNENVx1RkYwOFx1NEUwOVx1RkYwOScsXG4vLyAgICAgICAgICAgbGluazogJy9DUy9EU0EvZnJvbnRlbmQtMydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTYzOTJcdTVFOEZcdTdCOTdcdTZDRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvQ1MvRFNBL3NvcnQnXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdcdTRFRTNcdTc4MDFcdTk2OEZcdTYwRjNcdTVGNTUnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU5NEZFXHU4ODY4Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL3Byb2dyYW1tZXJjYXJsL2xpbmtlZExpc3QnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU0RThDXHU1M0M5XHU2ODExJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL3Byb2dyYW1tZXJjYXJsL3RyZWUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0NTL3Byb2dyYW1tZXJjYXJsL2RwJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfVxuLy8gICBdLFxuLy8gICAnL0Zyb250ZW5kLyc6IFtcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnQ1NTJyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NTc1N1x1N0VBN1x1NjgzQ1x1NUYwRlx1NTMxNlx1NEUwQVx1NEUwQlx1NjU4NycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvYmxvY2stZm9ybWF0dGluZy1jb250ZXh0J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0NTUyBcdThCQTFcdTdCOTdcdTVDNUVcdTYwMjcnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvQ1NTL2NvbXB1dGVkJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1ODlDNlx1ODlDOVx1NjgzQ1x1NUYwRlx1NTMxNlx1NkEyMVx1NTc4QicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvdmlzdWFsLWZvcm1hdHRpbmctbW9kZWwnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1QzQyXHU1M0UwXHU0RTBBXHU0RTBCXHU2NTg3Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0NTUy9zdGFja2luZy1jb250ZXh0J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NzNCMFx1NEVFM1x1NTMxNiBDU1MgXHU0RTJEXHU3Njg0IGJvcmRlcicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvbW9kZXJuLWJvcmRlcidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRFMDBcdTY1ODdcdTY0MUVcdTYxQzIgZmxleCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9DU1MvbW9kZXJuLWZsZXgnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU3NkQ4XHU3MEI5IENTUyBHcmlkJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0NTUy9ncmlkJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCcsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NEUyRFx1NjU3MFx1NUI1N1x1NzY4NFx1NUI1OFx1NTBBOCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0L251bWJlci1zdG9yYWdlJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NEUwMFx1NEU5Qlx1NjIxNlx1NTkyN1x1NjIxNlx1NUMwRlx1NzY4NFx1NTc1MScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9KYXZhU2NyaXB0L3NvbWUtZGV0YWlscydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRGNERcdThGRDBcdTdCOTcnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvSmF2YVNjcmlwdC9iaXQtb3BlcmF0aW9uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0phdmFTY3JpcHQgXHU0RjVDXHU3NTI4XHU1N0RGXHU0RTBFXHU5NUVEXHU1MzA1Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0phdmFTY3JpcHQvc2NvcGUtY2xvc3VyZSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ0VTbmV4dCcsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdFUzYrIFx1NEUwMFx1NEU5Qlx1OTZGNlx1Nzg4RVx1NzY4NFx1NjUzOVx1NTJBOCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FU25leHQvc29tZS1jaGFuZ2VzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0VTNiBcdTRFMkRcdTY1NzBcdTdFQzRcdTc2ODRcdTY1MzlcdTUyQTgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0L2FycmF5J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0VTNiBcdTRFMkRcdTVCRjlcdThDNjFcdTc2ODRcdTY1MzlcdTUyQTgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0L29iamVjdCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdQcm9taXNlJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VTbmV4dC9wcm9taXNlJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0VTbmV4dCBcdTcyNzlcdTYwMjdcdTRFMDBcdTg5QzgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRVNuZXh0L292ZXJ2aWV3J1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnVHlwZVNjcmlwdCcsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTVCNTdcdTgyODIgXHUwMEI3IFx1NkRGMVx1NTE2NVx1NkQ0NVx1NTFGQSBUeXBlU2NyaXB0Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1R5cGVTY3JpcHQvYnl0ZS10cydcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1dlYnBhY2snLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTUxNjVcdTk1RTgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9pbnRybydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTZBMjFcdTU3NTdcdTUzMTZcdTUxN0NcdTVCQjlcdTYwMjcnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9tb2R1bGUtY29tcGF0aWJpbGl0eSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1NEUyRFx1NzY4NFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2NvbmZpZydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1N0YxNlx1OEJEMVx1OEZDN1x1N0EwQicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2NvbXBpbGUtcHJvY2Vzcydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTUxNjVcdTUzRTNcdTRFMEVcdTUxRkFcdTUzRTNcdTkxNERcdTdGNkUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9lbnRyeS1vdXRwdXQnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnTG9hZGVycyBcdTRFMEUgUGx1Z2lucycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2xvYWRlcnMtcGx1Z2lucydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdXZWJwYWNrIFx1NTk4Mlx1NEY1NVx1NTMzQVx1NTIwNlx1NzNBRlx1NTg4M1x1RkYxRicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2Vudidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRFMDBcdTRFOUJcdTdFQzZcdTgyODJcdTkxNERcdTdGNkVcdTg4NjVcdTUxNDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9kZXRhaWxzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1dlYnBhY2sgXHU1RTM4XHU3NTI4XHU2MjY5XHU1QzU1Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1dlYnBhY2svZXh0ZW5zaW9uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9XZWJwYWNrL2Rldi1zZXJ2ZXInXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnV2VicGFjayBcdTUxODVcdTdGNkVcdTYzRDJcdTRFRjYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvV2VicGFjay9idWlsdGluLXBsdWdpbnMnXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTVERTVcdTdBMEJcdTUzMTYnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnQ1NTIFx1NURFNVx1N0EwQlx1NTMxNlx1Njk4Mlx1OEZGMCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FbmdpbmVlcmluZy9DU1MtRW5naW5lZXJpbmcnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MjI5XHU3NTI4IFdlYnBhY2sgXHU2MkM2XHU1MjA2IENTUycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9FbmdpbmVlcmluZy9XZWJwYWNrLVNwbGl0LUNTUydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTg5RTNcdTUxQjNcdTdDN0JcdTU0MERcdTUxQjJcdTdBODEnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRW5naW5lZXJpbmcvQ1NTLU5hbWUtQ29uZmxpY3QnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4OUUzXHU1MUIzXHU5MUNEXHU1OTBEXHU2ODM3XHU1RjBGXHU3Njg0XHU5NUVFXHU5ODk4Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL0NTUy1SZXBlYXQnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4QzA4XHU0RTAwXHU4QzA4IFBvc3QgQ1NTJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL1Bvc3RDU1MnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1OTgyXHU0RjU1XHU2MkJEXHU3OUJCIENTUyBcdTY1ODdcdTRFRjYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRW5naW5lZXJpbmcvQ1NTLUV4dHJhY3QnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnQmFiZWwnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvRW5naW5lZXJpbmcvQmFiZWwnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0VuZ2luZWVyaW5nL1BlcmZvcm1hbmNlLU9wdGltaXphdGlvbidcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1Z1ZScsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdWdWUzIFx1OTFDQ1x1NzY4NCByZWYgXHU1NDhDIHJlYWN0aXZlJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Z1ZS9yZWYtcmVhY3RpdmUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4QzA4XHU0RTAwXHU4QzA4IFZ1ZTMgXHU0RTJEXHU3Njg0XHU4NjVBXHU2MkRGIERPTScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvdmlydHVhbC1kb20nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnVnVlMyBcdTRFMkRcdTZBMjFcdTY3N0ZcdTc2ODRcdTY3MkNcdThEMjgnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvVnVlL25hdHVyZS1vZi10ZW1wbGF0ZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTY4MTFcdTU0OENcdTg2NUFcdTYyREYgRE9NIFx1NjgxMScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvY29tcG9uZW50LXRyZWUtYW5kLXZpcnR1YWwtZG9tLXRyZWUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnVnVlIFx1NEUyRFx1NjU3MFx1NjM2RVx1NjJFNlx1NjIyQVx1NzY4NFx1NjcyQ1x1OEQyOCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvZGF0YS1pbnRlcmNlcHRpb24nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnVnVlIFx1NEUyRFx1NTRDRFx1NUU5NFx1NUYwRlx1NjU3MFx1NjM2RVx1NzY4NFx1NjcyQ1x1OEQyOCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9WdWUvcmVhY3RpdmUtZGF0YSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1JlYWN0Jyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NUI1N1x1ODI4MiBcdTAwQjcgXHU1NENEXHU1RTk0XHU1RjBGXHU3Q0ZCXHU3RURGXHU0RTBFIFJlYWN0Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2J5dGUtcmVhY3QnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU2ODM4XHU1RkMzXHU2OTgyXHU1RkY1XHVGRjA4XHU0RTAwXHVGRjA5Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2NvcmUtY29uY2VwdHMtb25lJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NjgzOFx1NUZDM1x1Njk4Mlx1NUZGNVx1RkYwOFx1NEU4Q1x1RkYwOScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9jb3JlLWNvbmNlcHRzLXR3bydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdThERUZcdTc1MzEnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3Qvcm91dGVyJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NEUyRFx1NzY4NFx1NzJCNlx1NjAwMVx1N0JBMVx1NzQwNlx1NUU5MycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZWR1eCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTVDNUVcdTYwMjdcdTlFRDhcdThCQTRcdTUwM0NcdTU0OENcdTdDN0JcdTU3OEJcdTY4QzBcdTY3RTUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvcHJvcC10eXBlJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1OUFEOFx1OTYzNlx1N0VDNFx1NEVGNicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9ob2MnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnQ29udGV4dCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9jb250ZXh0J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1JlbmRlciBQcm9wcycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZW5kZXItcHJvcHMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnUG9ydGFscycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9wb3J0YWxzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1OTUxOVx1OEJFRlx1OEZCOVx1NzU0QycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9lcnJvci1ib3VuZGFyaWVzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1JlZicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZWYnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHU2NUY2XHU3Njg0XHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3BlcmZvcm1hbmNlJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1Njg0Nlx1NjdCNlx1NzY4NFx1NzQwNlx1ODlFMycsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9mcmFtZXdvcmstY29tcHJlaGVuc2lvbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdSZWFjdCBcdTU0OEMgVnVlIFx1NjNDRlx1OEZGMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTMzQVx1NTIyQicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZWFjdC12cy12dWUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU2ODQ2XHU2N0I2XHU3Njg0XHU1MjA2XHU3QzdCJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L2ZyYW1ld29yay1jbGFzc2lmaWNhdGlvbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTg2NUFcdTYyREYgRE9NJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3ZpcnR1YWwtZG9tJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NjU3NFx1NEY1M1x1NjdCNlx1Njc4NCcsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9yZWFjdC1hcmNoaXRlY3R1cmUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU2RTMyXHU2N0QzXHU2RDQxXHU3QTBCJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3JlbmRlci1wcm9jZXNzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0ZpYmVyIFx1NTNDQ1x1N0YxM1x1NTFCMicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9maWJlci1kb3VibGUtYnVmZmVyJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NTZGRVx1ODlFMyBkaWZmIFx1N0I5N1x1NkNENScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC9kaWZmLWFsZ29yaXRobSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdNZXNzYWdlIENoYW5uZWwnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvbWVzc2FnZS1jaGFubmVsJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1NjaGVkdWxlciBcdThDMDNcdTVFQTZcdTY2NkVcdTkwMUFcdTRFRkJcdTUyQTEnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3Qvc2NoZWR1bGVyLW5vcm1hbC10YXNrJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1NjaGVkdWxlciBcdThDMDNcdTVFQTZcdTVFRjZcdTY1RjZcdTRFRkJcdTUyQTEnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3Qvc2NoZWR1bGVyLXRpbWVvdXQtdGFzaydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTY3MDBcdTVDMEZcdTU4MDYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvbWluLWhlYXAnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSG9vayBcdTUzOUZcdTc0MDYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvaG9vaydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICd1c2VTdGF0ZSBcdTU0OEMgdXNlUmVkdWNlcicsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9SZWFjdC91c2VTdGF0ZS11c2VSZWR1Y2VyJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ2VmZmVjdCBcdTc2RjhcdTUxNzMgSG9va3MnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRnJvbnRlbmQvUmVhY3QvZWZmZWN0LWhvb2tzJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ3VzZUNhbGxiYWNrIFx1NTQ4QyB1c2VNZW1vJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1JlYWN0L3VzZUNhbGxiYWNrLXVzZU1lbW8nXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjgnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU2RDRGXHU4OUM4XHU1NjY4XHU2RTMyXHU2N0QzXHU1MzlGXHU3NDA2Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL0Jyb3dzZXIvcmVuZGVyJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnRGVidWcnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnUmVhY3QgXHU4QkY3XHU2QzQyXHU4RjZDXHU1M0QxXHU0RTBFXHU5RUQ4XHU4QkE0XHU2MjUzXHU1MzA1XHU1MUIyXHU3QTgxJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL1Byb2plY3RzL2NyYS1wYXRoLWNvbmZsaWN0LXByb3h5LXBhY2snXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnUmVhY3QgVG9hc3QgVUkgc291cmNlbWFwIFx1NjJBNVx1OTUxOScsXG4vLyAgICAgICAgICAgbGluazogJy9Gcm9udGVuZC9Qcm9qZWN0cy90b2FzdHVpLXBhcnNlLXNvdXJjZW1hcCdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1x1Njc0Mlx1OEMwOCcsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTUyMkJcdTc3ODVcdTRFODYgXHU1QzMxXHU4RkQ5XHU0RTAwXHU3QkM3Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0Zyb250ZW5kL090aGVycy9zb21lJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfVxuLy8gICBdLFxuLy8gICAnL0RldlRpcHMvJzogW1xuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdHaXQnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHsgdGV4dDogJ0NvbW1pdCBcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL0RldlRpcHMvR2l0L2NvbW1pdCcgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdHaXQgXHU2NUIwXHU2NUU3XHU1NDdEXHU0RUU0Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvR2l0L2dpdC1jb21tYW5kLW5ldydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdHaXQgXHU1OTI3XHU1QzBGXHU1MTk5XHU0RTBEXHU2NTRGXHU2MTFGXHU5NUY5XHU0RTRDXHU5Rjk5Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvR2l0L2dpdC1pZ25vcmVjYXNlJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnRG9ja2VyJyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0RvY2tlciBcdTVCNThcdTU3MjhcdTc2ODRcdTVGQzVcdTg5ODFcdTYwMjcnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRGV2VGlwcy9Eb2NrZXIvcHJldmlldydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgeyB0ZXh0OiAnXHU3QjgwXHU3N0VEXHU3Njg0XHU0RUNCXHU3RUNEJywgbGluazogJy9EZXZUaXBzL0RvY2tlci9pbnRybycgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRFMDBcdTRFOUJcdTVFMzhcdTc1MjhcdTU0N0RcdTRFRTQnLFxuLy8gICAgICAgICAgIGxpbms6ICcvRGV2VGlwcy9Eb2NrZXIvY29tbWFuZCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdEb2NrZXIgXHU5MDFBXHU0RkUxJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRG9ja2VyL2NvbW11bmljYXRpb24nXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTgzMDNcdTVGMEYnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0RldlRpcHMvRGVzaWduL2Rlc2lnbi1wYXR0ZXJucydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdThCQkVcdThCQTFcdTUzOUZcdTUyMTknLFxuLy8gICAgICAgICAgIGxpbms6ICcvRGV2VGlwcy9EZXNpZ24vZGVzaWduLXByaW5jaXBsZXMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGXHU4QkU2XHU4OUUzXHU3QjJDXHU0RTAwXHU2NzFGIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRicsXG4vLyAgICAgICAgICAgbGluazogJy9EZXZUaXBzL0Rlc2lnbi9kZXNpZ24tcGF0dGVybnMtc2luZ2xldG9uJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfVxuLy8gICBdLFxuLy8gICAnL0xpZmUvJzogW1xuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICcyMDIwJyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1ODNDQVx1NkIyMVx1OTBDRVx1NzY4NFx1NTkwRlx1NTkyOScsXG4vLyAgICAgICAgICAgbGluazogJy9MaWZlLzIwMjAva2lrdWppcm8tc3VtbWVyJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnMjAyMScsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTMwMEFcdTUzRjJcdThCQjBcdTAwQjdcdTk4NzlcdTdGQkRcdTY3MkNcdTdFQUFcdTMwMEJcdTc2ODRcdTRFMDBcdTRFOUJcdTc3MEJcdTZDRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvTGlmZS8yMDIxL2hpc3RvcmljYWwtcmVjb3Jkcy14aWFuZ3l1J1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfVxuLy8gICBdLFxuLy8gICAnL0ludGVydmlldy8nOiBbXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ1x1N0Y1MVx1N0VEQycsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRFOTRcdTVDNDJcdTdGNTFcdTdFRENcdTZBMjFcdTU3OEInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvbmV0d29yay1tb2RlbCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTVFMzhcdTg5QzFcdThCRjdcdTZDNDJcdTY1QjlcdTZDRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvcmVxdWVzdC1tZXRob2QnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnQ29va2llJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2Nvb2tpZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdjb29raWUgXHU1NDhDIHN0b3JhZ2UgXHU3Njg0XHU1MzNBXHU1MjJCJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2Nvb2tpZS1zdG9yYWdlLWRpZmZlcmVuY2UnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MkEwXHU1QkM2XHU3Qjk3XHU2Q0Q1Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2VuY3J5cHRpb24nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSldUJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2p3dCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTU0MENcdTZFOTBcdTRFMEVcdThERThcdTU3REYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvc2FtZS1vcmlnaW4tY3Jvc3MtZG9tYWluJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0hUVFAgXHU1NDA0XHU3MjQ4XHU2NzJDJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2h0dHAtdmVyc2lvbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTU3REZcdTU0MERcdTU0OEMgRE5TJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL2RvbWFpbi1kbnMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4RjkzXHU1MTY1IFVSTCBcdTUyMzBcdTk4NzVcdTk3NjJcdTVDNTVcdTc5M0EnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvdXJsLXRvLXBhZ2UnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnU2Vzc2lvbicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9zZXNzaW9uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1RDUCBcdTUzNEZcdThCQUUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvdGNwJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ0NTUkYgXHU1NDhDIFhTUycsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9jc3JmLXhzcydcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdTU0xcdTMwMDFUTFMgXHU1NDhDIEhUVFBTJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3NzbC10bHMtaHR0cHMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU3RjUxXHU3RURDXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9OZXR3b3JrL3BlcmZvcm1hbmNlLW9wdGltaXphdGlvbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdXZWJTb2NrZXQnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L05ldHdvcmsvd2Vic29ja2V0J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1N0YxM1x1NUI1OCcsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvTmV0d29yay9jYWNoZSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGV4dDogJ0NTUycsXG4vLyAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuLy8gICAgICAgaXRlbXM6IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdDU1MgXHU1MzU1XHU0RjREXHU2MDNCXHU3RUQzJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9DU1MvdW5pdCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTVDNDVcdTRFMkRcdTY1QjlcdTVGMEZcdTYwM0JcdTdFRDMnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0NTUy9jZW50ZXInXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0Jyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ2xldCB2YXIgY29uc3QnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvbGV0LXZhci1jb25zdCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0IFx1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4QicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC9kYXRhLXR5cGUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCBcdTRFMkRcdTc2ODRcdTUzMDVcdTg4QzVcdTdDN0JcdTU3OEInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvd3JhcHBlcidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdThGRDBcdTdCOTdcdTdCMjYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvb3BlcmF0b3InXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1MzlGXHU1NzhCXHU1NDhDXHU1MzlGXHU1NzhCXHU5NEZFJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3Byb3RvdHlwZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEJcdTc2ODRcdThGNkNcdTYzNjInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvdHlwZS1jb252ZXJzaW9uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ3RoaXMgXHU2MzA3XHU1NDExJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L3RoaXMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1NzgzXHU1NzNFXHU1NkRFXHU2NTM2XHU0RTBFXHU1MTg1XHU1QjU4XHU2Q0M0XHU2RjBGJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L2djJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NjI2N1x1ODg0Q1x1NjgwOFx1NTQ4Q1x1NjI2N1x1ODg0Q1x1NEUwQVx1NEUwQlx1NjU4NycsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvSmF2YVNjcmlwdC9leGVjdXRpb24tY29udGV4dCdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRGNUNcdTc1MjhcdTU3REZcdTRFMEVcdTRGNUNcdTc1MjhcdTU3REZcdTk0RkUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0phdmFTY3JpcHQvc2NvcGUtY2hhaW4nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU0RThCXHU0RUY2XHU1RkFBXHU3M0FGJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9KYXZhU2NyaXB0L2V2ZW50LWxvb3AnXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6ICdcdTYyNEJcdTY0OTVcdTRFRTNcdTc4MDEnLFxuLy8gICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbi8vICAgICAgIGl0ZW1zOiBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU2MjRCXHU2NDEzIFByb21pc2UgXHU1MTY4XHU3Q0ZCXHU1MjE3Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9kaXkvcHJvbWlzZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTdFQzRcdTY1QjlcdTVGMEZcdTg5RTNcdTY3ODRcdTVCRjlcdThDNjEnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeS9kZXN0cnVjdHVyZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTYyNEJcdTY0OTVcdTRFOEJcdTRFRjZcdTYwM0JcdTdFQkYnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L2RpeS9ldmVudC1idXMnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1OTI3XHU2NTg3XHU0RUY2XHU0RTBBXHU0RjIwJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9kaXkvYmlnLWZpbGUtdXBsb2FkJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1OTYzMlx1NjI5Nlx1NTQ4Q1x1ODI4Mlx1NkQ0MScsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvZGl5L2RlYm91bmNlLXRocm90dGxlJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NTFGRFx1NjU3MFx1NjdFRlx1OTFDQ1x1NTMxNicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvZGl5L2N1cnJ5aW5nJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiAnXHU3QjE0XHU5NzYyXHU3RUNGXHU5QThDJyxcbi8vICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4vLyAgICAgICBpdGVtczogW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NUMwRlx1N0M3M1x1NjVFNVx1NUUzOFx1NUI5RVx1NEU2MFx1NEUwMFx1OTc2MicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMTl4aWFvbWknXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU4MTdFXHU4QkFGXHU5N0YzXHU0RTUwXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU1MjFEXHU4QkQ1Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyMHR4eXknXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU5OTdGXHU0RTg2XHU0RTQ4XHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU3QjE0XHU4QkQ1Jyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyMWVsZSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTdGOEVcdTU2RTJcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTdCMTRcdThCRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzIybWVpdHVhbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTYyRkNcdTU5MUFcdTU5MUFcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTdCMTRcdThCRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzIzcGRkJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1ODE3RVx1OEJBRlx1OTdGM1x1NEU1MFx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1NTkwRFx1OEJENScsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjV0eHl5J1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NUZFQlx1NjI0Qlx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1NEUwMFx1OTc2MicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjZrdWFpc2hvdSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTdGOEVcdTU2RTJcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTUyMURcdThCRDUnLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI2bWVpdHVhbidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTc2N0VcdTVFQTZcdTY1RTVcdTVFMzhcdTVCOUVcdTRFNjBcdTRFMDBcdTk3NjInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI2YmFpZHUnXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0ZXh0OiAnXHU1QjU3XHU4MjgyXHU2NjkxXHU2NzFGXHU1QjlFXHU0RTYwXHU0RTAwXHU5NzYyJyxcbi8vICAgICAgICAgICBsaW5rOiAnL0ludGVydmlldy9FeHBlcmllbmNlLzI1MDMyN2J5dGUnXG4vLyAgICAgICAgIH0sXG5cbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTRGNUNcdTRFMUFcdTVFMkVcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTRFMDBcdTk3NjInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI3enliJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGV4dDogJ1x1NUZFQlx1NjI0Qlx1NjY5MVx1NjcxRlx1NUI5RVx1NEU2MFx1NEU4Q1x1OTc2MicsXG4vLyAgICAgICAgICAgbGluazogJy9JbnRlcnZpZXcvRXhwZXJpZW5jZS8yNTAzMjhrdWFpc2hvdSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRleHQ6ICdcdTdGOEVcdTU2RTJcdTY2OTFcdTY3MUZcdTVCOUVcdTRFNjBcdTRFOENcdTk3NjInLFxuLy8gICAgICAgICAgIGxpbms6ICcvSW50ZXJ2aWV3L0V4cGVyaWVuY2UvMjUwMzI4bWVpdHVhbidcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuLy8gICAgIH1cbi8vICAgXVxuLy8gfTtcblxuZXhwb3J0IHsgc2lkZWJhciB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLG9CQUFvQjtBQUN6VixTQUFTLDBCQUEwQjtBQUNuQyxTQUFxQixpQkFBaUI7QUFDdEMsU0FBUyxxQkFBcUI7OztBQ0hvUyxTQUFTLHNCQUFzQjtBQUVqVyxJQUFNLFlBQVksZUFBZTtBQUFBLEVBQy9CLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFB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
