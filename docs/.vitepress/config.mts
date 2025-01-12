import { defineConfig } from "vitepress";
import { blogTheme } from "./blog-theme";
import {SponsorPlugin} from "vitepress-plugin-sponsor";

export default defineConfig({
	cleanUrls: true,
	markdown: {
		image: {
			lazyLoading: true,
		},
	},
	extends: blogTheme,
	lang: "zh-cn",
	title: "周末晚的岛屿",
	description: "基于粥里有勺糖提供主题所搭建的周末晚的博客",
	lastUpdated: true,
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "stylesheet", href: "https://chinese-fonts-cdn.deno.dev/packages/lywkpmydb/dist/LXGWWenKaiMonoScreen/result.css" }],
	],
	themeConfig: {
		outline: {
			level: [2, 3],
			label: "目录",
		},
		returnToTopLabel: "回到顶部",
		sidebarMenuLabel: "相关文章",
		lastUpdatedText: "上次更新于",

		logo: "/logo.png",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Wkndnite",
			},
		],
		nav: [
			{ text: "首页", link: "/" },
			{ text: "CS 基础", link: "/CS/" },
			{ text: "前端学习", link: "/Frontend/" },
			{ text: "开发技巧", link: "/DevTips/" },
			{ text: "项目记录", link: "/Projects/" },
			{ text: "实战工具", link: "/Tools/" },
			{ text: "生活随笔", link: "/Life/" },
		],
		sidebar: {
			"/CS/": [{ text: "操作系统", items: [{ text: "..." }] }],
			"/Frontend/": [
				{
					text: "CSS",
					collapsed: false,
					items: [
						{ text: "CSS 计算属性", link: "/Frontend/CSS/computed" },
						{ text: "视觉格式化模型", link: "/Frontend/CSS/visual-formatting-model" },
					],
				},
				{ text: "JavaScript", collapsed: false, items: [{ text: "一些或大或小的坑", link: "/Frontend/Javascript/some-details" }] },
				{ text: "Vue", collapsed: false, items: [{ text: "Vue3 里的ref和reactive", link: "/Frontend/Vue/ref-reactive" }] },
			],
			"/DevTips/": [
				{ text: "Commit 规范", link: "/DevTips/commit" },
				{ text: "Git 新旧命令", link: "/DevTips/git-command-new" },
				{ text: "设计模式", link: "/DevTips/design-patterns" },
				{ text: "设计原则", link: "/DevTips/design-principles" },
			],
			"/Projects/": [
				{
					text: "Astro Starlight",
					collapsed: false,
					items: [
						{ text: "简介", link: "/Projects/astro-starlight/index" },
						{ text: "项目初始化", link: "/Projects/astro-starlight/init" },
						{ text: "一条简单的配置", link: "/Projects/astro-starlight/simple-config" },
					],
				},
			],
			"/Tools/": [
				{
					text: "Docker",
					collapsed: false,
					items: [
						{ text: "Docker 存在的必要性", link: "/Tools/docker/preview" },
						{ text: "简短的介绍", link: "/Tools/docker/intro" },
						{ text: "一些常用命令", link: "/Tools/docker/command" },
						{ text: "Docker 通信", link: "/Tools/docker/communication" },
					],
				},
			],
			"/Life/": [{ text: "菊次郎的夏天", link: "/Life/菊次郎的夏天" }],
		},
	},
	vite: {
        plugins: [
            // 打赏插件
            SponsorPlugin({
                /**
                 * 打赏模块样式
                 */
                type: 'simple',
                aliPayQR: '/aliPayQR.jpg',
                weChatQR: '/weChatPayQR.jpg',
            })
        ]
    }
});
