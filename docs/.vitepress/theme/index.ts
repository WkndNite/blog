import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';

// 自定义样式重载
import './style.scss';

// 自定义主题色
// import './user-theme.css'
import { h } from 'vue';

export default {
  ...BlogTheme,
  Layout: (props: any) => {
    if (BlogTheme.Layout) {
      return h(BlogTheme.Layout, props, {
        'layout-top': () => h(Fireworks), // 在 layout-top 插槽中渲染 Fireworks 组件
      });
    }
    // 如果 BlogTheme.Layout 是 undefined，可以选择不渲染任何内容或其他处理
    return null; // 或者其他逻辑
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Fireworks', Fireworks); // 注册 Fireworks 组件
  },
};
