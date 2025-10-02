<template>
  <div class="gallery">
		<div class="info">
			<div class="swiper swiper-text">
				<div class="swiper-wrapper">
					<div
						v-for="{name, link}, i in projects"
						:key="i"
						class="swiper-slide"
					>
						<nuxt-link :to="link" class="text h6">
							<CommonLinkTemplate :text="name" />
						</nuxt-link>
					</div>
				</div>
			</div>

			<div class="swiper swiper-detail">
				<div class="swiper-wrapper">
					<div
						v-for="{year, type}, i in projects"
						:key="i"
						class="swiper-slide"
					>
						<div class="detail p1">
							<span>{{ year }}</span>
							<span>{{ type }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="videos">
			<div class="swiper swiper-gallery">
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
	</div>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { Mousewheel,Controller } from 'swiper/modules'
import { projects } from "@/data/projects"

onMounted(() => {
	initSwiper()
	window.addEventListener("wheel", (e) => e.preventDefault(), { passive: false })
})

function updateClasses(swiper: Swiper) {
  swiper.slides.forEach((slide, i) => {
    slide.classList.remove('is-prev', 'is-next', 'is-active')
    if (i < swiper.activeIndex) {
      slide.classList.add('is-prev')
    } else if (i > swiper.activeIndex) {
      slide.classList.add('is-next')
    } else {
      slide.classList.add('is-active')
    }
  })
}

const initSwiper = () => {
  const gallerySwiper = new Swiper('.swiper-gallery', {
    modules: [Mousewheel, Controller],
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 0,
    mousewheel: { enabled: true, forceToAxis: true, releaseOnEdges: true, sensitivity: 2.5, thresholdDelta: 5 },
    speed: 600,
    watchSlidesProgress: true,
		allowTouchMove: false,
		on: {
			init(swiper) {
				updateClasses(swiper)
			},
			slideChange(swiper) {
				const activeSlide = document.querySelector(".swiper-gallery .swiper-slide-active .item")
				const prev = swiper.previousIndex
				const current = swiper.activeIndex

				if (current > prev) {
					activeSlide?.classList.add("trOgBot")
				} else if (current < prev) {
					activeSlide?.classList.remove("trOgBot")
				}

				updateClasses(swiper)
			}
		}
  });

  const textSwiper = new Swiper('.swiper-text', {
		modules: [Controller],
		direction: 'vertical',
		slidesPerView: 3,
		spaceBetween: 0,
		speed: 500,
		watchSlidesProgress: true,
		centeredSlides: true,
		allowTouchMove: false
	})

	const detailSwiper = new Swiper('.swiper-detail', {
		modules: [Controller],
		direction: 'vertical',
		slidesPerView: 3,
		spaceBetween: 0,
		speed: 500,
		watchSlidesProgress: true,
		centeredSlides: true,
		allowTouchMove: false
	})

	gallerySwiper.controller.control = [textSwiper, detailSwiper]
};
</script>

<style scoped lang="scss">
.gallery {
	display: grid;
	grid-template-columns: 1fr 52.25rem;
	padding: 0 1.5rem;
}
.swiper-gallery {
  height: 100vh;
	padding-top: 13.8125rem;
	padding-bottom: 5rem;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.swiper-gallery .swiper-wrapper {
	transition-timing-function: ease;
	align-items: flex-end;
}
.swiper-gallery .swiper-slide {
	height: 100%;
	width: 52.25rem;
}
.swiper-gallery .swiper-slide.is-prev .item {
	transform: scale(0.5);
	transform-origin: bottom right;
}

.item {
	display: block;
	position: relative;
	width: 100%;
	height: 100%;
	position: relative;

	overflow: hidden;
	transition: transform .5s ease;
	transform: scale(0.3);
	transform-origin: top right;
}
.item video {
	transition: transform .5s ease;
}
.swiper-gallery .swiper-slide-active .item.trOgBot {
	transform-origin: bottom right;
}
.swiper-gallery .swiper-slide-active .item {
	transform: scale(1);
}
@include hover {
	.item:hover video {
		transform: scale(1.05);
	}
}
.info {
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	position: relative;
	padding-top: 13.8125rem;
	padding-bottom: 5rem;
	z-index: 2;
	pointer-events: none;
}


.swiper-text, .swiper-detail {
	height: 18.75rem;
	padding-bottom: 6.25rem;
	padding-top: 6.25rem;
	max-height: 100%;

	margin: 0;
}
.swiper-text {
	padding-right: 1rem;
}
.swiper-text .swiper-slide .text,
.swiper-detail .swiper-slide .detail {
	opacity: 0;
	transition: opacity .5s ease;
	pointer-events: none;
}
.swiper-text .swiper-slide-active .text,
.swiper-detail .swiper-slide-active .detail {
	opacity: 1;
	pointer-events: auto;
}
.swiper-text .swiper-slide-prev .text,
.swiper-text .swiper-slide-next .text {
	opacity: 0.3;
}

.swiper-detail .swiper-slide-prev .detail,
.swiper-detail .swiper-slide-next .detail {
	opacity: 0;
}

.detail {
	display: grid;
	grid-template-columns: 2.75rem 1fr;
	padding-top: .375rem;
}
.swiper-detail .swiper-wrapper {
	align-items: flex-start;
}
.swiper-detail .swiper-slide {
	width: auto;
}
</style>
