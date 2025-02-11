import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';
import './style.scss';
import { h } from 'vue';
import { ShareButton } from '@theojs/lumen';

export default {
  ...BlogTheme,
  Layout: (props: any) => {
    if (BlogTheme.Layout) {
      return h(BlogTheme.Layout, props, {
        'layout-top': () => h(Fireworks),
        'nav-bar-content-after': () => h(ShareButton,{
          copiedText: '链接已复制',
        }),
      });
    }
    return null;
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Fireworks', Fireworks);
    app.component('ShareButton', ShareButton);
  },
};
