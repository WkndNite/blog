<template>
  <div class="video-container">
    <!-- 本地视频 -->
    <video v-if="isLocal" controls :poster="poster" preload="metadata">
      <source :src type="video/mp4" />
      您的浏览器不支持视频播放
    </video>

    <!-- 平台嵌入视频 -->
    <iframe v-else :src="platformUrl" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    src: { type: String, required: true },
    platform: { type: String, default: "" },
    poster: { type: String, default: "" },
    episode: { type: Number, default: 1 },
    time: { type: Number, default: 0 },
  },
  computed: {
    isLocal() {
      return this.platform === "local";
    },
    platformUrl() {
      const map = {
        bilibili: `https://player.bilibili.com/player.html?bvid=${this.src}&t=${this.time}&p=${this.episode}&autoplay=0`,
        youtube: `https://www.youtube.com/embed/${this.src}`,
      };
      return map[this.platform];
    },
  },
};
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
}


/* iframe 视频：保持 16:9 容器，让平台播放器正常展示 */
iframe {
  aspect-ratio: 16 / 9;
  border: none;
}
</style>
