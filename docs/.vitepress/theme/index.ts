import BlogTheme from "@sugarat/theme";
import { ShareButton } from "@theojs/lumen";
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
import { Fireworks, MNavLinks, VideoPlayer } from "./components";
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
      return h(BlogTheme.Layout as Component, props, {
        "layout-top": () => h(Fireworks),
        "nav-bar-content-after": () =>
          h(ShareButton, {
            buttonText: " ",
            copiedText: " ",
            buttonIcon: "noto:link",
            copiedIcon: "noto:check-mark",
          }),
      });
    }

    return null;
  },
  enhanceApp(ctx: EnhanceAppContext) {
    BlogTheme?.enhanceApp?.(ctx);
    ctx.app.component("MNavLinks", MNavLinks);
    ctx.app.component("Fireworks", Fireworks);
    ctx.app.component("ShareButton", ShareButton);
    ctx.app.component("VideoPlayer", VideoPlayer);
    // @ts-expect-error: bypass vue version mismatch temporarily
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
