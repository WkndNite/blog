import { getThemeConfig } from '@sugarat/theme/node';

const blogTheme = getThemeConfig({
  mermaid: true,
  footer: {
    version: false,
    copyright: 'MIT License | 周末晚的岛屿',
    icpRecord: {
      name: '晋ICP备2024052317号',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  search: {
    btnPlaceholder: '搜索',
    placeholder: '搜索文章',
    emptyText: '没有找到相关文章',
    heading: '共找到 {{searchResult}} 篇文章'
  },
  themeColor: 'el-blue',
  recommend: false,
  author: '周末晚',
  home: {
    logo: '/avatar.jpg'
  },
  friend: {
    list: [
      {
        nickname: '粥里有勺糖',
        des: '你的指尖用于改变世界的力量',
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
        des: 'VitePress 快速上手中文教程',
        avatar: 'https://avatars.githubusercontent.com/u/90893790?v=4',
        url: 'https://vitepress.yiov.top/'
      },
      {
        nickname: '苏柘',
        des: '去发光，而不是被照亮',
        avatar: 'https://suzhelevel6.github.io/suzhe_blog/touxiang1MB.jpg',
        url: 'https://suzhelevel6.github.io/suzhe_blog/'
      },
      {
        nickname: 'Lumen',
        des: '集成 Vue 功能组件和主题美化的 VitePress 插件',
        avatar: 'https://lumen.theojs.cn/Logo.webp',
        url: 'https://lumen.theojs.cn/'
      },
      {
        nickname: '茂茂导航',
        des: '基于 VitePress 的个人前端导航页面模板',
        avatar: 'https://fe-nav.netlify.app/logo.png',
        url: 'https://fe-nav.netlify.app/'
      },
      {
        nickname: '.Han',
        des: '运气是计划之外的东西',
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
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 9,
    empty: '暂无精选内容'
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
    title: '个人作品',
    description: '记录开发的点点滴滴',
    list: [
      {
        title: '问卷低码引擎',
        description: '💭 本地化沙箱的问卷生成平台',
        time: {
          start: '2025/03/01'
        },

        url: 'https://lowcode.maozi.io',
        cover: {
          urls: [
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-12_21-09-40.png',
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-12_21-12-19.png',
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-12_21-20-24.png',
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-12_21-21-04.png'
          ],
          layout: 'swiper'
        },
        tags: ['Vue3', 'Pinia', 'TypeScript']
      },
      {
        title: 'IT 知识库前后台',
        description: '📝 CRA 和 Umi 双架构前后台项目',
        time: {
          start: '2025/02/07'
        },

        url: 'https://github.com/WkndNite/coder-station',
        cover: {
          urls: [
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/b41cbd6999f93adb61e5fd56adf40af.png',
            'https://blog-1328542955.cos.ap-shanghai.myqcloud.com/94cdbed03feedbb78a9ee5e26890360.png'
          ],
          layout: 'swiper'
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

export { blogTheme };
