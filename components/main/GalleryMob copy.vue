<template>
  <div class="gallery-mob">
		<div class="swiper swiper-text-mob">
			<div class="swiper-wrapper">
				<div
					v-for="{name, type, year}, i in projects"
					:key="i"
					class="swiper-slide"
				>
					<div class="text-content">
						<p class="name">{{ name }}</p>
						<div class="info p1">
							<p class="year">{{ year }}</p>
							<p class="type">{{ type }}</p>
						</div>
						<div class="more">
							More info
						</div>
					</div>
				</div>
			</div>
		</div>

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
import { EffectFade, Controller } from 'swiper/modules'
import { projects } from "@/data/projects"

const { isDesktop } = useViewport()

onMounted(() => {
	if (isDesktop.value) return

	initSwiper()
})

function updateClasses(swiper: Swiper) {
  swiper.slides.forEach((slide, i) => {
    slide.classList.remove('is-prev', 'is-next', 'is-active')
    if (i < swiper.activeIndex) {
      slide.classList.add('is-prev')
    } else if (i > swiper.activeIndex) {
      slide.classList.add('is-next')
    }
  })
}

const initSwiper = () => {
  const gallerySwiper = new Swiper('.swiper-gallery-mob', {
    modules: [EffectFade, Controller],
    direction: 'vertical',
    slidesPerView: 1,
    speed: 600,
		effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
		touchRatio: 10,
  });

	const textSwiper = new Swiper('.swiper-text-mob', {
		modules: [Controller],
		direction: 'vertical',
		slidesPerView: 5,
		spaceBetween: 0,
		speed: 600,
		watchSlidesProgress: true,
		centeredSlides: true,
		allowTouchMove: false,
		on: {
			init(swiper) {
				updateClasses(swiper)
			},
			slideChange(swiper) {
				updateClasses(swiper)
			}
		}
	})

	gallerySwiper.controller.control = textSwiper
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
	width: 100%;
	padding-left: 6.625rem;
	padding-right: 1rem;
	height: 100dvh;
	position: absolute;
	top: 0;
	right: 0;
	opacity: 0.6;
}
.swiper-gallery-mob .swiper-slide {
	display: flex;
	align-items: center;
}
.item {
	width: 15.75rem;
	height: 18.0625rem;
	position: relative;
	display: block;
}
.name, .more {
	font-size: 1rem;
	margin-bottom: .5rem;
	letter-spacing: -0.07em;
	display: inline-flex;
}
.more {
	position: relative;
	padding-right: 1rem;
	opacity: 0;
	transition: all .3s ease;
}
.more:after {
	content: "";
  position: absolute;
  top: 0.4375rem;
  right: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  background: var(--c-dark);
}
.info {
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
}
.swiper-text-mob {
	position: absolute;
	top: 0;
	left: 0;
	padding-left: 1rem;
	height: 100dvh;
	width: auto;
	margin: 0;
	pointer-events: none;
	color: var(--c-accent);
	width: 100%;
	z-index: 2;
}
.gallery-mob .swiper-slide {
	display: flex;
	align-items: center;
}
.gallery-mob .swiper-slide-active .more {
	opacity: 1;
}
.text-content {
	transition: all .6s ease;
	width: 100%;
}
.swiper-text-mob .swiper-slide-active .text-content {
	filter: blur(0);
	opacity: 1;
}
.swiper-text-mob .is-prev .text-content,
.swiper-text-mob .is-next .text-content {
	opacity: 0.5;
	filter: blur(4px);
}
.swiper-text-mob .is-prev .text-content {
	transform: rotate(60deg) translateX(8rem);
}
.swiper-text-mob .is-next .text-content {
	transform: rotate(-60deg) translateX(8rem);
}
.swiper-text-mob .swiper-slide-prev.is-prev .text-content,
.swiper-text-mob .swiper-slide-next.is-next .text-content {
	filter: blur(0);
	opacity: 0.15;
}
.swiper-text-mob .swiper-slide-prev.is-prev .text-content {
	transform: rotate(30deg) translateX(1rem);
}
.swiper-text-mob .swiper-slide-next.is-next .text-content {
	transform: rotate(-30deg) translateX(1rem);
}
</style>
