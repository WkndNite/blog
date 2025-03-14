<template>
  <div class="video-container">
    <!-- 本地视频 -->
    <video v-if="isLocal" controls :poster="poster">
      <source :src="source" type="video/mp4" />
      您的浏览器不支持视频播放
    </video>

    <!-- 平台嵌入视频 -->
    <iframe v-else :src="platformUrl" frameborder="0" allowfullscreen :width="width" :height="height"></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: { type: String, required: true }, // 视频路径或ID
    platform: { type: String, default: '' }, // 平台标识：bilibili/youtube/local
    width: { type: String, default: '100%' }, // 宽度
    height: { type: String, default: '400' }, // 高度
    poster: { type: String, default: '' }, // 本地视频封面
  },
  computed: {
    isLocal() {
      return this.platform === 'local';
    },
    platformUrl() {
      const map = {
        bilibili: `https://player.bilibili.com/player.html?bvid=${this.src}&autoplay=0`,
        youtube: `https://www.youtube.com/embed/${this.src}`,
      };
      return map[this.platform];
    },
    source() {
      return this.src.startsWith('/') ? this.src : `/${this.src}`;
    },
  },
};
</script>

<style scoped>
.video-container {
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

video {
  width: 100%;
  height: auto;
}
</style>
