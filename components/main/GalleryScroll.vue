<template>
  <div class="gallery">
		<div class="info">
			<div class="texts-wrap">
				<div class="texts">
					<nuxt-link v-for="{name, link}, i in projects" :key="i" :to="link" class="text h6">
						<CommonLinkTemplate :text="name" />
					</nuxt-link>
				</div>
			</div>
			<div class="details">
				<div v-for="{year, type}, i in projects" :key="i" class="detail p1">
					<span>{{ year }}</span>
					<span>{{ type }}</span>
				</div>
			</div>
		</div>
		<div class="videos">
			<nuxt-link v-for="{video, link}, i in projects" :key="i" :to="link" class="item">
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
import { projects } from "@/data/projects"

let ctx: gsap.Context

onMounted(() => {
  initAnim()
})

onBeforeUnmount(() => {
  ctx?.revert()
})

const initAnim = () => {
	ctx = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>(".gallery .item")
    const texts = gsap.utils.toArray<HTMLElement>(".gallery .text")

    items.forEach((el, i) => {
      const tl = gsap.timeline({
        defaults: {
					ease: "none",
					immediateRender: false
				},
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

			tl.to(el, {
				keyframes: [
					{ scale: 0, duration: 0, transformOrigin: "top right" },
					{ scale: 1, duration: 0.8, transformOrigin: "top right" },
					{ scale: 0.5, duration: 1, transformOrigin: "bottom right" }
				]
			}, 0)

			if (texts[i]) {
        tl.to(texts,
          {
						yPercent: -(i * 100),
					},

          0 // коли item доходить до scale:1
        )
      }
    })
  })

}
</script>

<style scoped lang="scss">
.gallery {
	display: grid;
	grid-template-columns: 1fr 52.25rem;
	padding: 0 1.5rem 4rem;
}
.videos {
	padding-top: 13.8125rem;
}
.item {
	position: relative;
	width: 100%;
	height: 31.25rem;
	width: 100%;
	position: relative;
	transform-origin: top right;
	overflow: hidden;
}
.item video {
	transition: transform .5s ease;
}
@include hover {
	.item:hover video {
		transform: scale(1.05);
	}
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
	display: grid;
	grid-template-columns: 18.375rem 1fr;
}
.text {
	padding: 0.5rem 0;
}
.texts {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-right: 1rem;
}
.details {
	display: none;
}
.detail {
	display: grid;
	grid-template-columns: 2.75rem 1fr;
	padding: 0.5rem 0;
}

.texts-wrap {
	height: 100%;
	position: relative;
	top: 50%;
	position: absolute;
	left: 0;
}
</style>
