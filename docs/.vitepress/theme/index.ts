import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';
import './style.scss';
import { h } from 'vue';
import { ShareButton } from '@theojs/lumen';
import VideoPlayer from './components/VideoPlayer.vue';
import { inBrowser } from 'vitepress';
import busuanzi from 'busuanzi.pure.js';

export default {
  ...BlogTheme,
  Layout: (props: any) => {
    if (BlogTheme.Layout) {
      return h(BlogTheme.Layout as any, props, {
        'layout-top': () => h(Fireworks),
        'nav-bar-content-after': () =>
          h(ShareButton, {
            buttonText: ' ',
            copiedText: ' ',
            buttonIcon: 'noto:link',
            copiedIcon: 'noto:check-mark-button',
          }),
      });
    }
    return null;
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Fireworks', Fireworks);
    app.component('ShareButton', ShareButton);
    app.component('VideoPlayer', VideoPlayer);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
};
