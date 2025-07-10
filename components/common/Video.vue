<template>
  <div class="video-wrap">
		<div class="logo">
			<IconsLogo />
		</div>

    <video
      ref="videoElement"
      class="video-element"
      :src="src"
      preload="auto"
      playsinline
      loop
      @loadedmetadata="loadedData"
      @timeupdate="timeUpdate"
			@click="togglePlayback"
    />

    <button class="close" @click="close">
      <CommonButtonTemplate text="Close" />
    </button>

    <div class="time">
      {{ currentTime }}
    </div>

		<div ref="lineRef"  class="line" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
}>();

const showLeftVideo = useState("show-left", () => false);
const showRightVideo = useState("show-right", () => false);

const close = () => {
  if (showLeftVideo.value) {
    showLeftVideo.value = false;
    gsap.to(".video-left", { autoAlpha: 0, duration: 0.3 });
  }
  if (showRightVideo.value) {
    showRightVideo.value = false;
    gsap.to(".video-right", { autoAlpha: 0, duration: 0.3 });
  }
};

const videoElement = ref<HTMLVideoElement | null>(null);
const currentTime = ref("00:00");

const lineRef = ref<HTMLDivElement | null>(null)

const timeUpdate = () => {
  if (!videoElement.value || !lineRef.value) return

  const duration = videoElement.value.duration
  const current = videoElement.value.currentTime
  const remaining = Math.floor(duration - current)

  // оновлення часу
  const min = String(Math.floor(remaining / 60)).padStart(2, "0")
  const sec = String(remaining % 60).padStart(2, "0")
  currentTime.value = `${min}:${sec}`

  // оновлення лінії
  const progress = (current / duration) * 100
	gsap.to(lineRef.value, {
		left: progress + "%",
		duration: 0.3,
		ease: "none"
	})
}


const togglePlayback = () => {
  if (!videoElement.value) return
  if (videoElement.value.paused) {
    videoElement.value.play()
  } else {
    videoElement.value.pause()
  }
}

const loadedData = () => {
  currentTime.value = "00:00";
};

watch(showLeftVideo, async (val) => {
  const video = document.querySelector(
    ".video-left .video-element"
  ) as HTMLVideoElement;

  if (val) {
    video.play();
  } else {
    video.pause();
  }
});

watch(showRightVideo, (val) => {
  const video = document.querySelector(
    ".video-right .video-element"
  ) as HTMLVideoElement;
  if (val) {
    video.play();
  } else {
    video.pause();
  }
});
</script>
<style scoped lang="scss">
.video-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.close {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 2;
}
.time {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  pointer-events: none;
}
.line {
	position: absolute;
	height: 100%;
	width: .0625rem;
	background: var(--c-accent);
	top: 0;
	left: 0;
	pointer-events: none;

	@include mobile {
		width: 1px;
	}
}
.logo {
	display: none;
	@include mobile {
		display: block;
		width: 12rem;
		z-index: 100;
		position: fixed;
		top: 1.25rem;
		left: 1.25rem;
	}
}
</style>
