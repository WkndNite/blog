<template>
  <div class="video-container">
    <!-- 本地视频 -->
    <video v-if="isLocal" controls :poster="poster">
      <source :src="source" type="video/mp4" />
      您的浏览器不支持视频播放
    </video>

    <!-- 平台嵌入视频 -->
    <iframe
      v-else
      :src="platformUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: { type: String, required: true }, // 视频路径或ID
    platform: { type: String, default: '' }, // 平台标识：bilibili/youtube/local
    poster: { type: String, default: '' }, // 本地视频封面
    episode: { type: Number, default: 1 }, // 章节信息
    time: { type: Number, default: 0 } // 视频时间
  },
  computed: {
    isLocal() {
      return this.platform === 'local';
    },
    platformUrl() {
      const map = {
        bilibili: `https://player.bilibili.com/player.html?bvid=${this.src}&t=${this.time}&p=${this.episode}&autoplay=0`,
        youtube: `https://www.youtube.com/embed/${this.src}`
      };
      return map[this.platform];
    },
    source() {
      return this.src.startsWith('/') ? this.src : `/${this.src}`;
    }
  }
};
</script>

<style scoped>

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

iframe,
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
