import BlogTheme from '@sugarat/theme';
import Fireworks from './components/Fireworks.vue';
import './style.scss';
import { h } from 'vue';

export default {
  ...BlogTheme,
  Layout: (props: any) => {
    if (BlogTheme.Layout) {
      return h(BlogTheme.Layout, props, {
        'layout-top': () => h(Fireworks),
      });
    }
    return null;
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Fireworks', Fireworks);
  },
};
