import BlogTheme from '@sugarat/theme';
import { ShareButton } from '@theojs/lumen';
import 'nprogress-v2/dist/index.css';
import { NProgress } from 'nprogress-v2/dist/index.js';
import { inBrowser, useData } from 'vitepress';
import { h } from 'vue';
import Fireworks from './components/Fireworks.vue';
import MNavLinks from './components/MNavLinks.vue';
import VideoPlayer from './components/VideoPlayer.vue';
import './style.scss';

export default {
  ...BlogTheme,
  Layout: (props: any) => {
    const { frontmatter } = useData();
    if (BlogTheme.Layout) {
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }
      return h(BlogTheme.Layout as any, props, {
        'layout-top': () => h(Fireworks),
        'nav-bar-content-after': () =>
          h(ShareButton, {
            buttonText: ' ',
            copiedText: ' ',
            buttonIcon: 'noto:link',
            copiedIcon: 'noto:check-mark-button'
          })
      });
    }

    return null;
  },
  enhanceApp(ctx: any) {
    BlogTheme?.enhanceApp?.(ctx);
    ctx.app.component('MNavLinks', MNavLinks);
    ctx.app.component('Fireworks', Fireworks);
    ctx.app.component('ShareButton', ShareButton);
    ctx.app.component('VideoPlayer', VideoPlayer);
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      ctx.router.onBeforePageLoad = () => {
        NProgress.start();
      };
      ctx.router.onAfterPageLoad = () => {
        NProgress.done();
      };
    }
  }
};
