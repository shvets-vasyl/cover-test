<template>
  <div class="video-wrap" :class="{ fullscreen }">
    <SvgNormalLogo v-if="fullscreen" class="logo" />

    <button v-if="fullscreen" class="close p1" @click="fullscreen = false">
      <span>Close</span>
      <IconsClose />
    </button>

    <div
      class="video-box"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <video
        ref="videoEl"
        class="video-element inner-video"
        :src="src"
        preload="auto"
        playsinline
        @click="toggle"
      />
      <button
        class="play-overlay"
        :style="isDesktop && overlayStyle"
        :class="{ visible: showOverlay }"
				@click="toggle"
      >
        <IconsPlay v-if="!isPlaying" />
        <IconsPause v-else />
      </button>

      <div class="video-controls" :class="{ visible: showControls }">
        <div class="progress">
          <div
            class="progress-line"
						:style="{ width: progressPercent + '%' }"
          />
        </div>
        <div class="video-info p1">
          <p class="time">{{ remainingFormatted }}</p>

          <div class="info-right">
            <button
              v-if="!fullscreen"
              class="fullscreen"
              @click="fullscreen = true"
            >
              Fullscreen
            </button>
            <button class="sound" @click="toggleMute">
              S: {{ muted ? "Off" : "On" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="thumbs" :class="{ loading: !thumbsReady }">
      <button
        v-for="(t, i) in times"
        :key="i"
        class="thumb"
        :style="thumbStyle(i)"
        @click="seek(t)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ src: string }>();

const { isDesktop } = useViewport()

// vars
const videoEl = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
const times = ref<number[]>(Array.from({ length: 16 }, () => 0));
const thumbs = ref<(string | null)[]>(Array.from({ length: 16 }, () => null));
const currentTime = ref(0);
const duration = ref(0);
const muted = ref(false);
const showOverlay = ref(false);
const overlayX = ref(0);
const overlayY = ref(0);
const showControls = ref(false);
const fullscreen = ref(false);
let hideTimeout: ReturnType<typeof setTimeout> | null = null;

// mount
onMounted(async () => {
  const v = videoEl.value!;
  await waitEvent(v, "loadedmetadata");
  const dur = Math.max(v.duration, 0.001);
  const eps = Math.min(0.25, dur / 200);
  times.value = Array.from({ length: 16 }, (_, i) =>
    i === 15 ? Math.max(0, dur - eps) : (i * dur) / 15
  );
  duration.value = v.duration;

	if (isDesktop.value) {
		try {
			await generateThumbnails(props.src, times.value, thumbs.value);
		} catch {}
	}

  v.addEventListener("play", () => (isPlaying.value = true));
  v.addEventListener("pause", () => (isPlaying.value = false));
  v.addEventListener("timeupdate", () => (currentTime.value = v.currentTime));
});

// computed
const thumbsReady = computed(() => thumbs.value.every(Boolean));
const progressPercent = computed(() =>
  duration.value ? (currentTime.value / duration.value) * 100 : 0
);
const remainingFormatted = computed(() =>
  formatTime(Math.max(0, duration.value - currentTime.value))
);
const overlayStyle = computed(() => ({
  transform: `translate(${overlayX.value}px, ${overlayY.value}px)`,
}));

// func

function handleMouseMove(e: MouseEvent) {
  moveOverlay(e);
  toggleControls();
}

function handleMouseEnter() {
  showOverlay.value = true;
  showControls.value = true;
}

function handleMouseLeave() {
  showOverlay.value = false;
  showControls.value = false;
}

function toggleControls() {
  showControls.value = true;
  showOverlay.value = true;
  if (hideTimeout) clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    showControls.value = false;
    showOverlay.value = false;
  }, 2000);
}

function moveOverlay(e: MouseEvent) {
  overlayX.value = e.clientX;
  overlayY.value = e.clientY;
}

function toggle() {
  const v = videoEl.value!;
  if (v.paused) {
    v.play();
    isPlaying.value = true;
  } else {
    v.pause();
    isPlaying.value = false;
  }
}

function toggleMute() {
  const v = videoEl.value!;
  v.muted = !v.muted;
  muted.value = v.muted;
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

function seek(t: number) {
  const v = videoEl.value!;
  v.currentTime = t;
  if (v.paused)
    v.play()
      .then(() => (isPlaying.value = true))
      .catch(() => {});
}

function thumbStyle(i: number) {
  return thumbs.value[i] ? { backgroundImage: `url(${thumbs.value[i]})` } : {};
}

function waitEvent<T extends HTMLElement | HTMLMediaElement>(
  el: T,
  name: string
) {
  return new Promise<void>((res) => {
    const fn = () => {
      el.removeEventListener(name, fn as EventListener);
      res();
    };
    el.addEventListener(name, fn as EventListener, { once: true });
  });
}

async function generateThumbnails(
  src: string,
  stamps: number[],
  out: (string | null)[]
) {
  const hv = document.createElement("video");
  hv.src = src;
  hv.crossOrigin = "anonymous";
  hv.muted = true;
  hv.playsInline = true;
  hv.preload = "auto";
  hv.style.position = "fixed";
  hv.style.opacity = "0";
  hv.style.pointerEvents = "none";
  hv.style.width = "1px";
  hv.style.height = "1px";
  document.body.appendChild(hv);

  await waitEvent(hv, "loadedmetadata");
  const w = 160;
  const h = Math.max(1, Math.round((w * hv.videoHeight) / hv.videoWidth));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  for (let i = 0; i < stamps.length; i++) {
    hv.currentTime = stamps[i];
    await waitEvent(hv, "seeked");
    ctx.drawImage(hv, 0, 0, w, h);
    try {
      out[i] = canvas.toDataURL("image/jpeg", 0.7);
    } catch {
      out[i] = null;
    }
  }
  document.body.removeChild(hv);
}
</script>

<style scoped lang="scss">
.video-wrap {
  display: flex;
  gap: 2.875rem;
  height: 100%;
  flex-direction: column;
	@include mobile {
		height: 12rem;
	}
}
.video-wrap.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fullscreen);
  width: 100%;
  height: 100%;
}

.video-box {
  position: relative;
  flex: 1 1 auto;
}

.video-element {
  cursor: pointer;
}

.play-overlay {
  position: absolute;
  width: 3.625rem;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid white;
  pointer-events: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.1s ease;
  top: -6.5rem;
  left: -1.5rem;

	@include mobile {
		opacity: 1;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 2.125rem;
  	height: 2.125rem;
		pointer-events: auto;
		z-index: 2;
	}
}
.video-wrap.fullscreen .play-overlay {
  top: 0.75rem;
  left: 0.25rem;
}

.play-overlay.visible {
  opacity: 1;
}
.video-wrap.fullscreen .play-overlay {
	@include mobile {
		top: auto;
		bottom: 1rem;
		left: 1rem;
		transform: none;
	}
}
.thumbs {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 0.25rem;
  overflow-x: auto;
	@include mobile {
		display: none;
	}
}
.video-wrap.fullscreen .thumbs {
  display: none;
}
.thumb {
  position: relative;
  background: var(--c-dark) center/cover no-repeat;
  height: 2.125rem;
  cursor: pointer;
  overflow: hidden;
  transition: opacity 0.5s ease;
}
@include hover {
  .thumb:hover {
    opacity: 0.4;
  }
}
.video-controls {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0 1.5rem;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 0.3s ease;
	@include mobile {
		opacity: 1;
		top: auto;
		bottom: 0;
		padding: 0 .5rem .5rem;
	}
}
.video-controls.visible {
  opacity: 1;
}
.fullscreen .video-controls {
	@include mobile {
		top: auto;
		bottom: 0;
		left: 0;
		padding: 0 1rem  1rem 4.125rem;
	}
}
.progress {
  width: 100%;
  position: relative;
  height: 1px;
  background: rgba(white, 0.4);
}
.progress-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: white;
	@include mobile {
		height: .1875rem;
	}
}

.video-info {
  color: white;
  display: flex;
  padding-top: 1rem;
	@include mobile {
		padding-top: 0.5rem;
	}
}

.fullscreen {
  margin-right: 1.5rem;
	@include mobile {
		margin-right: 6.6rem;
	}
}
.info-right {
  display: flex;
  margin-left: auto;
}

.logo {
  width: 13.6875rem;
  mix-blend-mode: difference;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  z-index: 3;

	@include mobile {
		display: none;
	}
}
.logo:deep(path) {
  fill: white;
}
.close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
  mix-blend-mode: difference;
  z-index: 3;
	@include mobile {
		top: 1rem;
		right: 1rem;
	}
}
.close:deep(svg) {
  width: 1.125rem;
  position: relative;
  top: 0.125rem;
  transition: all 0.3s ease;
}
@include hover {
  .close:hover:deep(svg) {
    transform: rotate(180deg);
  }
}
</style>
