<template>
  <div class="blur">
    <div
      v-for="i in 10"
      :key="i"
      class="layer"
      :class="`layer-${i}`"
      :style="{
        '--start-gradient': `${(i - 1) * 10}%`,
        '--end-gradient': `${i * 10}%`
      }"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.blur {
  position: fixed;
  top: 0;
	left: 0;
  width: 100%;
	height: 13.8125rem;
	z-index: 100;

	pointer-events: none;
  contain: paint;
  transform: translateZ(0);

	@include mobile {
		transform: translateY(-50%) translateZ(0);
	}
}

.layer {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  --blur: blur(2px);

  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  background-color: rgba(0, 0, 0, 0);
  -webkit-mask-image: linear-gradient(
    to top,
    transparent var(--start-gradient),
    #000 var(--end-gradient)
  );
  mask-image: linear-gradient(
    to top,
    transparent var(--start-gradient),
    #000 var(--end-gradient)
  );
  transition: all 1s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.policy .blur, .contact-page .blur {
	transform: translateY(-25%) translateZ(0);
	@include mobile {
		transform: translateY(-50%) translateZ(0);
	}
}
</style>
