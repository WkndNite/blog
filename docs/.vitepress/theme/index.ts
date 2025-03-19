import BlogTheme from '@sugarat/theme';
import { ShareButton } from '@theojs/lumen';
import { useData } from 'vitepress';
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
    // if (inBrowser) {
    //   const lenis = new Lenis();
    //   const lenisInit = (time: number) => {
    //     lenis.raf(time);
    //     requestAnimationFrame(lenisInit);
    //   };
    //   lenis.on('scroll', () => {
    //     if (
    //       window.scrollY + window.innerHeight >=
    //       document.documentElement.scrollHeight
    //     ) {
    //       lenis.stop();
    //       lenis.start();
    //     }
    //   });

    //   requestAnimationFrame(lenisInit);
    // }
  }
};
