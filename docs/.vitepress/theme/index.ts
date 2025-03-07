import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';
import './style.scss';
import { h } from 'vue';
import { ShareButton, DocVideoLink } from '@theojs/lumen';

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
    app.component('Vid', DocVideoLink);
  },
};
