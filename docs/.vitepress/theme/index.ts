import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';
import './style.scss';
import { h } from 'vue';
import { ShareButton } from '@theojs/lumen';
import VideoPlayer from './components/VideoPlayer.vue';
import { useData } from 'vitepress';
import MNavLinks from './components/MNavLinks.vue';

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
            copiedIcon: 'noto:check-mark-button',
          }),
      });
    }

    return null;
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MNavLinks', MNavLinks);
    app.component('Fireworks', Fireworks);
    app.component('ShareButton', ShareButton);
    app.component('VideoPlayer', VideoPlayer);
  },
};
