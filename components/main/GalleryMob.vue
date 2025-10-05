<template>
  <div class="gallery-mob" ref="wrap">
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
          preload="auto"
          playsinline
          loop
          muted
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
  const endY = e.changedTouches[0].clientY;
  const dy = endY - startY;
  const TH = 6;
  if (Math.abs(dy) < TH) return;

  const last = projects.length - 1;

  if (dy < 0 && active.value < last) {
    active.value++;
  } else if (dy > 0 && active.value > 0) {
    active.value--;
  }
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
</style>
