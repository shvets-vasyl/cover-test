<template>
  <div class="video-wrap">
    <div class="video-box">
      <video
        ref="videoEl"
        class="video-element"
        :src="src"
        preload="auto"
        playsinline
        @click="toggle"
      />
      <button class="play-overlay" v-if="!isPlaying" @click.stop="toggle" aria-label="Play"></button>
    </div>

    <div class="thumbs" :class="{ loading: !thumbsReady }">
      <button
        v-for="(t, i) in times"
        :key="i"
        class="thumb"
        :style="thumbStyle(i)"
        :aria-label="`Jump to ${(t).toFixed(2)}s`"
        @click="seek(t)"
        :title="`${i+1}/16 • ${t.toFixed(2)}s`"
      >
        <span v-if="!thumbs[i]" class="idx">{{ i + 1 }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{ src: string }>()

const videoEl = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)
const times = ref<number[]>(Array.from({ length: 16 }, () => 0))
const thumbs = ref<(string | null)[]>(Array.from({ length: 16 }, () => null))
const thumbsReady = computed(() => thumbs.value.every(Boolean))

function toggle() {
  const v = videoEl.value!
  if (v.paused) {
    v.play()
    isPlaying.value = true
  } else {
    v.pause()
    isPlaying.value = false
  }
}

function seek(t: number) {
  const v = videoEl.value!
  v.currentTime = t
  if (v.paused) v.play().then(() => (isPlaying.value = true)).catch(() => {})
}

onMounted(async () => {
  const v = videoEl.value!
  await waitEvent(v, 'loadedmetadata')
  // 16 рівних відрізків по всій довжині (включно з 0 і майже кінець)
  const dur = Math.max(v.duration, 0.001)
  const eps = Math.min(0.25, dur / 200) // трошки не доходити до самого кінця
  times.value = Array.from({ length: 16 }, (_, i) =>
    i === 15 ? Math.max(0, dur - eps) : (i * dur) / 15
  )

  // Генерація мініатюр у прихованому відео, щоб не заважати основному
  try {
    await generateThumbnails(props.src, times.value, thumbs.value)
  } catch {
    // Якщо CORS блокує або інша помилка — просто залишаємо числові індекси
  }

  // Синхронізація статусу відтворення
  v.addEventListener('play', () => (isPlaying.value = true))
  v.addEventListener('pause', () => (isPlaying.value = false))
})

function thumbStyle(i: number) {
  return thumbs.value[i]
    ? { backgroundImage: `url(${thumbs.value[i]})` }
    : {}
}

// ——— Helpers ———
function waitEvent<T extends HTMLElement | HTMLMediaElement>(el: T, name: string) {
  return new Promise<void>((res) => {
    const fn = () => {
      el.removeEventListener(name, fn as EventListener)
      res()
    }
    el.addEventListener(name, fn as EventListener, { once: true })
  })
}

async function generateThumbnails(src: string, stamps: number[], out: (string | null)[]) {
  const hv = document.createElement('video')
  hv.src = src
  hv.crossOrigin = 'anonymous'
  hv.muted = true
  hv.playsInline = true
  hv.preload = 'auto'
  hv.style.position = 'fixed'
  hv.style.opacity = '0'
  hv.style.pointerEvents = 'none'
  hv.style.width = '1px'
  hv.style.height = '1px'
  document.body.appendChild(hv)

  await waitEvent(hv, 'loadedmetadata')
  // Канва з пропорціями відео (невеликий розмір для швидкості)
  const w = 160
  const h = Math.max(1, Math.round((w * hv.videoHeight) / hv.videoWidth))
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!

  for (let i = 0; i < stamps.length; i++) {
    hv.currentTime = stamps[i]
    await waitEvent(hv, 'seeked')
    ctx.drawImage(hv, 0, 0, w, h)
    try {
      out[i] = canvas.toDataURL('image/jpeg', 0.7)
    } catch {
      out[i] = null // CORS або інше — пропускаємо
    }
  }
  document.body.removeChild(hv)
}
</script>

<style scoped lang="scss">
.video-wrap {
  display: grid;
  gap: .75rem;
}

.video-box {
  position: relative;
  background: #000;
  overflow: hidden;
}

.video-element {
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
}

.play-overlay {
  position: absolute;
  inset: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.thumbs {
  display: grid;
  grid-template-columns: repeat(16, minmax(0, 1fr));
  gap: .375rem;
  overflow-x: auto;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  border: 0;
  background: #111 center/cover no-repeat;
  cursor: pointer;
  overflow: hidden;
}

// .thumb:focus-visible { outline: 2px solid #888; }

.idx {
  position: absolute;
  inset: auto .4rem .3rem auto;
  font-size: .75rem;
  color: #fff;
  background: rgba(0,0,0,.45);
  padding: .15rem .35rem;
  line-height: 1;
  pointer-events: none;
}

/* Невеликий адаптив на вузьких екранах */
@media (max-width: 980px) {
  .thumbs { grid-template-columns: repeat(8, minmax(0, 1fr)); }
}
</style>
