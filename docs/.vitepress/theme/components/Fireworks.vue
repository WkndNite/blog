<template>
  <canvas class="fireworks"></canvas>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import anime from 'animejs';

interface MinMax {
  min: number;
  max: number;
}

interface FireworksConfig {
  colors: string[];
  numberOfParticles: number;
  orbitRadius: MinMax;
  circleRadius: MinMax;
  diffuseRadius: MinMax;
  animeDuration: MinMax;
}

interface Particle {
  x: number;
  y: number;
  color?: string;
  radius?: number;
  alpha?: number;
  angle?: number;
  lineWidth?: number;
  endPos?: { x: number; y: number };
  draw?: () => void;
}

function createFireworks() {
  // 增加蓝色元素，减少紫色，突出蓝紫色系的配色
  const defaultColors = [
    '0, 191, 255', // 深蓝色
    '30, 144, 255', // 湄南蓝色
    '100, 149, 237', // 天空蓝
    '72, 61, 139', // 暗蓝色
    '138, 43, 226' // 紫色
  ];
  const defaultConfig: FireworksConfig = {
    colors: defaultColors,
    numberOfParticles: 25, // 增加粒子数量，效果更显眼
    orbitRadius: { min: 60, max: 100 }, // 增大扩散半径
    circleRadius: { min: 7, max: 12 }, // 增大圆圈的半径
    diffuseRadius: { min: 80, max: 150 }, // 扩大粒子扩散范围
    animeDuration: { min: 800, max: 1800 } // 动画时长适中
  };

  let pointerX = 0;
  let pointerY = 0;
  const colors = defaultConfig.colors;

  const canvasEl = document.querySelector('.fireworks') as HTMLCanvasElement;
  const ctx = canvasEl.getContext('2d')!;

  function setCanvasSize(canvasEl: HTMLCanvasElement) {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    canvasEl.style.width = `${window.innerWidth}px`;
    canvasEl.style.height = `${window.innerHeight}px`;
  }

  function updateCoords(e: MouseEvent | TouchEvent) {
    pointerX = e instanceof MouseEvent ? e.clientX : e.touches[0]?.clientX || e.changedTouches[0]?.clientX;
    pointerY = e instanceof MouseEvent ? e.clientY : e.touches[0]?.clientY || e.changedTouches[0]?.clientY;
  }

  function setParticleDirection(p: Particle) {
    const angle = (anime.random(0, 360) * Math.PI) / 180;
    const value = anime.random(defaultConfig.diffuseRadius.min, defaultConfig.diffuseRadius.max);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle)
    };
  }

  function createParticle(x: number, y: number): Particle {
    const p: Particle = {
      x,
      y,
      color: `rgba(${colors[anime.random(0, colors.length - 1)]},${anime.random(0.6, 0.9)})`, // 增加蓝色元素
      radius: anime.random(defaultConfig.circleRadius.min, defaultConfig.circleRadius.max),
      angle: anime.random(0, 360),
      endPos: setParticleDirection({ x, y }),
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, -this.radius!);
        ctx.lineTo(this.radius! * Math.sin(Math.PI / 3), this.radius! * Math.cos(Math.PI / 3));
        ctx.lineTo(-this.radius! * Math.sin(Math.PI / 3), this.radius! * Math.cos(Math.PI / 3));
        ctx.closePath();
        ctx.fillStyle = this.color!;
        ctx.fill();
        ctx.restore();
      }
    };
    return p;
  }

  function createCircle(x: number, y: number): Particle {
    const p: Particle = {
      x,
      y,
      color: 'rgba(0, 191, 255, 0.4)', // 使用蓝色系的透明圆圈
      radius: 0.1,
      alpha: 0.4,
      lineWidth: 4,
      draw() {
        ctx.globalAlpha = this.alpha!;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius!, 0, 2 * Math.PI, true);
        ctx.lineWidth = this.lineWidth!;
        ctx.strokeStyle = this.color!;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };
    return p;
  }

  function renderParticle(anim: anime.AnimeInstance) {
    anim.animatables.forEach((animatable) => {
      const target = animatable.target as unknown as Particle;
      if (typeof target.draw === 'function') {
        target.draw();
      }
    });
  }

  function animateParticles(x: number, y: number) {
    const circle = createCircle(x, y);
    const particles: Particle[] = Array.from({ length: defaultConfig.numberOfParticles }, () => createParticle(x, y));

    anime
      .timeline()
      .add({
        targets: particles,
        x(p: Particle) {
          return p.endPos!.x;
        },
        y(p: Particle) {
          return p.endPos!.y;
        },
        radius: 0,
        duration: anime.random(defaultConfig.animeDuration.min, defaultConfig.animeDuration.max),
        easing: 'easeOutExpo',
        update: renderParticle
      })
      .add(
        {
          targets: circle,
          radius: anime.random(defaultConfig.orbitRadius.min, defaultConfig.orbitRadius.max),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: 'linear',
            duration: anime.random(600, 800)
          },
          duration: anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: renderParticle
        },
        0
      );
  }

  const render = anime({
    duration: Number.POSITIVE_INFINITY,
    update: () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  document.addEventListener('mousedown', (e) => {
    render.play();
    updateCoords(e);
    animateParticles(pointerX, pointerY);
  });

  setCanvasSize(canvasEl);
  window.addEventListener('resize', () => setCanvasSize(canvasEl));
}

onMounted(() => {
  createFireworks();
});
</script>

<style scoped>
.fireworks {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  pointer-events: none;
}
</style>
