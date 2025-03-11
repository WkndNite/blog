<script setup lang="ts"></script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
            />
          </svg>
          <span class="text">
            <span id="busuanzi_value_site_pv" class="font-bold"></span> 次</span
          >
        </div>

        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a7.5 7.5 0 0115 0"
            />
          </svg>
          <span class="text">
            <span id="busuanzi_value_site_uv" class="font-bold"></span>
            人次</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
}

.container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  width: 100%;
  min-height: 40px;
  max-width: 1152px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
}

.item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 20px;
  height: 20px;
  color: var(--vp-c-text-2);
}

.text {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>
