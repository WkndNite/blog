import BlogTheme from "@sugarat/theme";
import ElementPlus from "element-plus";
import "nprogress-v2/dist/index.css";
import { NProgress } from "nprogress-v2/dist/index.js";
import {
  type EnhanceAppContext,
  inBrowser,
  type Route,
  useData,
} from "vitepress";
import { type Component, h } from "vue";
import { MNavLinks, VideoPlayer } from "./components";
import "./styles/theme.scss";

interface LayoutProps {
  route: Route;
  class?: string;
}

export default {
  ...BlogTheme,
  Layout: (props: LayoutProps) => {
    const { frontmatter } = useData();
    if (BlogTheme.Layout) {
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }
      return h(BlogTheme.Layout as Component, props);
    }

    return null;
  },
  enhanceApp(ctx: EnhanceAppContext) {
    BlogTheme?.enhanceApp?.(ctx);
    ctx.app.component("MNavLinks", MNavLinks);
    ctx.app.component("VideoPlayer", VideoPlayer);
    ctx.app.use(ElementPlus);
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      ctx.router.onBeforePageLoad = () => {
        NProgress.start();
      };
      ctx.router.onAfterPageLoad = () => {
        NProgress.done();
      };
    }
  },
};
