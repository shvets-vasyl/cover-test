<template>
  <div class="gallery-mob" ref="wrap">
		<nuxt-link
			v-for="({ video, link, name, year, type }, i) in projects"
			:key="i"
			:to="link"
			class="item"
		>
			<div class="item-media">
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

			<h6 class="item-title h6">{{ name }}</h6>
			<div class="item-info p1">
				<span>{{ year }}</span>
				<span>{{ type }}</span>
			</div>
		</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { projects } from "@/data/projects";
</script>

<style scoped lang="scss">
.gallery-mob {
  display: none;
  @include mobile {
    display: block;
		padding: 5rem 1rem 2.5rem;
  }
}
.item {
	display: block;
	margin-bottom: 5.625rem;
	text-align: center;
}
.item-media {
	height: 12rem;
	position: relative;
	margin-bottom: 1rem;
}
.item-info {
	display: flex;
	gap: .5rem;
	justify-content: center;
	margin-top: 0.25rem;
}
</style>
