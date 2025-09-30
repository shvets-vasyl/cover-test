<template>
  <div class="animation-container">
    <div
      ref="link"
      class="link"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      <div class="link-text">{{ text }}</div>
      <div class="link-text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = {
  duration: 200,
  easing: "0.83, 0, 0.17, 1",
  delay: 0,
}

defineProps<{ text: string }>()

const { isMobile } = useViewport()

const link = ref<HTMLElement | null>(null)
let split: SplitText | null = null;

let tl: GSAPTimeline

onMounted(() => {
  if (!link.value || isMobile.value) return

  split = new SplitText(link.value.querySelectorAll(".link-text"), { type: "chars" })

  tl = gsap.timeline({ paused: true })
  tl.to(split.chars, {
    y: "-105%",
    duration: options.duration / 1000,
    stagger: { each: (options.duration / split.chars.length) / 2000, axis: "x" },
    ease: `cubic-bezier(${options.easing})`,
    force3D: true,
  })

  if (!split) {
    split = new SplitText(link.value, { type: 'chars, words' });
  }
})

const onEnter = () => tl?.play()
const onLeave = () => tl?.reverse()

defineExpose({ onEnter, onLeave })

onBeforeUnmount(() => {
  if (split) {
    split.revert();
    split = null;
  }
})
</script>

<style scoped lang="scss">
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.link {
  position: relative;
  overflow: hidden;
  @include mobile {
    overflow: visible;
  }
}

.link-text:nth-child(2) {
  position: absolute;
  top: 100%;
  left: 0;
  @include mobile {
    display: none;
  }
}

</style>
