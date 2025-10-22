<template>
  <div class="gallery-mob" ref="wrap">
    <div class="info">
			<div
				v-for="({ name, type, year }, i) in projects"
				:key="i"
				class="detail"
				:class="{
					prev3: i + 3 === active,
					prev2: i + 2 === active,
					prev: i + 1 === active,
					active: i === active,
					next: i - 1 === active,
					next2: i - 2 === active,
					next3: i - 3 === active,
				}"
			>
				<p class="name">{{ name }}</p>
				<p class="type p1">
					<span>{{ year }}</span>
					<span>{{ type }}</span>
				</p>
				<p class="more">
					More info
				</p>
			</div>
    </div>

    <div class="videos">
      <nuxt-link
        v-for="({ video, link }, i) in projects"
        :key="i"
        :to="link"
        class="item"
        :class="{ active: i === active }"
      >
        <video
          class="video-element inner-video"
          :src="video"
					muted
          preload="auto"
          playsinline
          loop
          autoplay
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { projects } from "@/data/projects";
const { isDesktop } = useViewport();

const wrap = ref<HTMLElement | null>(null);
const active = ref(0);
let startY = 0;

const onTouchStart = (e: TouchEvent) => {
  startY = e.touches[0].clientY;
};
const onTouchEnd = (e: TouchEvent) => {
  const dy = e.changedTouches[0].clientY - startY;
  if (Math.abs(dy) < 6) return;
  const last = projects.length - 1;
  if (dy < 0 && active.value < last) active.value++;
  else if (dy > 0 && active.value > 0) active.value--;
};

onMounted(() => {
  if (isDesktop.value) return;
  const el = wrap.value;
  if (!el) return;
  el.addEventListener("touchstart", onTouchStart, { passive: true });
  el.addEventListener("touchend", onTouchEnd, { passive: true });
});
onBeforeUnmount(() => {
  const el = wrap.value;
  if (!el) return;
  el.removeEventListener("touchstart", onTouchStart as EventListener);
  el.removeEventListener("touchend", onTouchEnd as EventListener);
});
onMounted(() => {
  const videos = document.querySelectorAll<HTMLVideoElement>(".video-element")

  videos.forEach((video) => {
    video.muted = true
    video.playsInline = true

    const playVideo = () => video.play().catch(() => {})
    if (video.readyState >= 3) playVideo()
    else video.addEventListener("loadeddata", playVideo, { once: true })
  })
})
</script>

<style scoped lang="scss">
.gallery-mob {
  display: none;
  @include mobile {
    display: block;
    height: 100dvh;
    touch-action: none;
  }
}
.videos {
  position: absolute;
  inset: 0;
}
.item {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: 15.75rem;
  height: 18.0625rem;
  opacity: 0;
  pointer-events: none;
}
.item.active {
  opacity: 1;
  pointer-events: auto;
}

.info {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.detail {
  opacity: 0;
	white-space: nowrap;
	transition: all .4s ease;

	position: absolute;
	top: 50%;
	left: 1rem;
	transform: translateY(-50%);
	width: 6.25rem;
}
.detail.active {
  opacity: 1;
}
.name, .more {
	font-size: 1rem;
	letter-spacing: -0.07em;
}
.name {
	margin-bottom: 0.5rem;
}
.type {
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
}
.more {
	position: relative;
	display: inline-flex;
	padding-right: 1rem;
	opacity: 0;
	transition: all .4s ease;
}
.more:after {
	content: "";
  position: absolute;
  top: 0.5rem;
  right: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  background: var(--c-accent);
}
.detail.active .more {
	opacity: 1;
}


.detail.next {
	opacity: 0.2;
	transform: translateY(calc(-50% + 10rem)) translateX(3rem) rotate(-30deg);
}
.detail.next2 {
	opacity: 0.2;
	transform: translateY(calc(-50% + 15rem)) translateX(10rem) rotate(-60deg);
	filter: blur(2px);
}
.detail.next3 {
	opacity: 0;
	transform: translateY(calc(-50% + 15rem)) translateX(18rem) rotate(-90deg);
}
.detail.prev {
	opacity: 0.2;
	transform: translateY(calc(-50% - 10rem)) translateX(3rem) rotate(30deg);
}
.detail.prev2 {
	opacity: 0.2;
	transform: translateY(calc(-50% - 15rem)) translateX(10rem) rotate(60deg);
	filter: blur(2px);
}
.detail.prev3 {
	opacity: 0;
	transform: translateY(calc(-50% - 15rem)) translateX(18rem) rotate(90deg);
}

</style>
