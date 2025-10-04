<template>
  <div class="gallery-mob">
		<div class="swiper swiper-gallery-mob">
			<div class="swiper-wrapper">
				<div
					v-for="{video, link}, i in projects"
					:key="i"
					class="swiper-slide"
				>
					<nuxt-link :to="link" class="item">
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
		</div>
	</div>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { EffectFade } from 'swiper/modules'
import { projects } from "@/data/projects"

const { isDesktop } = useViewport()

onMounted(() => {
	if (isDesktop.value) return

	initSwiper()
})

const initSwiper = () => {
  new Swiper('.swiper-gallery-mob', {
    modules: [EffectFade],
    direction: 'vertical',
    slidesPerView: 1,
    speed: 1,
		effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
};
</script>

<style scoped lang="scss">
.gallery-mob {
	display: none;
	@include mobile {
		display: block;
	}
}
.swiper-gallery-mob {
	width: 15.75rem;
	height: 18.0625rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 1rem;
}
.item {
	height: 100%;
	width: 100%;
	position: relative;
	display: block;
}
</style>
