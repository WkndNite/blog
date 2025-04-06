import { defineConfig } from 'vitepress';
import { AnnouncementPlugin } from 'vitepress-plugin-announcement';
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss';
import { SponsorPlugin } from 'vitepress-plugin-sponsor';
import { blogTheme } from './blog-theme';
import { nav } from './data/nav';
import { sidebar } from './data/sidebar';

const baseUrl = 'https://blog.wkndnite-tech.cn';
const RSS: RSSOptions = {
  title: '周末晚的岛屿',
  baseUrl,
  copyright: 'MIT License | 周末晚'
};

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
  lang: 'en',
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
        href: 'https://chinese-fonts-cdn.deno.dev/packages/moon-stars-kai/dist/MoonStarsKai-Bold/result.css'
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
    nav: nav,
    sidebar: sidebar
  },
  vite: {
    resolve: {
      alias: {
        '@': '/docs'
      }
    },
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
