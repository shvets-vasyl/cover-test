<template>
  <div class="gallery">
   <div class="info">
		123
	 </div>
	 <div class="videos">
		<div v-for="{video}, i in projects" :key="i" class="item">
			<video
				class="video-element inner-video"
				:src="video"
				preload="auto"
				playsinline
				loop
				muted
				autoplay
			/>
		</div>
	 </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "@/data/projects"

onMounted(() => {
	initAnim()
})

const initAnim = () => {
	const item = document.querySelectorAll(".gallery .item")


	item.forEach((el, i) => {

		const tl = gsap.timeline({
			defaults: {
				ease: "none"
			},
			scrollTrigger: {
				trigger: el,
				start: "top bottom",
				end: "center center",
				scrub: true,
			}
		})

		tl.from(el, {
			scale: 0,
		})


		// const tl2 = gsap.timeline({
		// 	defaults: {
		// 		ease: "none"
		// 	},
		// 	scrollTrigger: {
		// 		trigger: el,
		// 		start: "100px center",
		// 		end: "bottom center",
		// 		scrub: true,
		// 		markers: true,
		// 	}
		// })


		// tl2.to(el, {
		// 	scale: 0.5,
		// })



	})
}
</script>

<style scoped lang="scss">
.gallery {
	display: grid;
	grid-template-columns: 1fr  52.25rem;
	padding: 0 1.5rem 2rem;
}
.videos {
	padding-top: 13.8125rem;
}
.item {
	position: relative;
	width: 100%;
	height: 29.3125rem;
	transform-origin: top right;
}
.info {
	height: calc(29.3125rem + 13.8125rem);
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	align-self: start;
	padding-top: 13.8125rem;
	display: flex;
	align-items: center;
}
</style>
