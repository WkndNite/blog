import { getThemeConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
	footer: {
		version: false,
		copyright: "MIT License | 周末晚",
		icpRecord: {
			name: "晋ICP备2024052317号",
			link: "https://beian.miit.gov.cn/",
		},
	},

	themeColor: "vp-default",
	recommend:false,
	author: "周末晚",
	friend: [
		{
			nickname: "粥里有勺糖",
			des: "你的指尖用于改变世界的力量",
			avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
			url: "https://sugarat.top",
		},
		{
			nickname: "Vitepress",
			des: "Vite & Vue Powered Static Site Generator",
			avatar: "https://vitepress.dev/vitepress-logo-large.webp",
			url: "https://vitepress.dev/",
		},
	],
	article: {
		readingTime: true,
		readingTimePosition: "newLine",
		hiddenCover: true,
	},
	hotArticle: {
		title: "🔥 精选文章",
		nextText: "换一组",
		pageSize: 9,
		empty: "暂无精选内容",
	},
	comment: {
        repo: 'wkndnite/blog',
        repoId: 'R_kgDONpNMDQ=',
        category: 'Announcements',
        categoryId: '"DIC_kwDONpNMDc4Cl8hW"',
        inputPosition: 'top'
    }
});

export { blogTheme };
