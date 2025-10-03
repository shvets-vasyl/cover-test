<template>
	<div class="project-page">
		<HeaderBasic project-page />
		<HeaderMenu />

		<div class="wrap">
			<div class="all-works-mob">
				<nuxt-link to="/">All Works</nuxt-link>
			</div>
			<div class="video-wrap">
				<ClientOnly>
					<ProjectVideo :src="project.video" />
				</ClientOnly>
				<div class="top mob">
					<p class="name h6">{{ project.name }}</p>
				</div>
				<div class="body mob">
					<p class="year p1">{{ project.year }}</p>
					<p class="type p1">{{ project.type }}</p>
				</div>
			</div>
			<div class="content-wrap">
				<div class="top desk">
					<p class="name h6">{{ project.name }}</p>
					<p class="type p1">{{ project.type }}</p>
				</div>
				<div class="body desk">
					<p class="year p1">{{ project.year }}</p>
				</div>
				<div class="foot">
					<p class="about p1">About Project</p>
					<p class="descr p2">{{ project.descr }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang='ts'>
import { projects } from "@/data/projects"

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const route = useRoute()
const project = projects.filter(el => el.link === route.fullPath)[0]
</script>
<style scoped lang='scss'>
.project-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.wrap {
	padding: 7.5rem 0 1rem 1.5rem;
	display: grid;
	grid-template-columns: 1fr 23.5rem;
	width: 100%;
	height: 100%;

	@include mobile {
		display: flex;
		flex-direction: column;
		padding: 11.75rem 1rem 2.5rem;
		justify-content: space-between;
		align-items: center;
	}
}
.content-wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 0 1.5rem 5.125rem;
	@include mobile {
		padding: 0;
		display: block;
		height: auto;
	}
}
.name, .about {
	margin-bottom: .5rem;
}
.all-works-mob {
	display: none;
	@include mobile {
		display: block;
		position: relative;
	}
}
.all-works-mob:after {
	content: "";
	position: absolute;
	top: .5625rem;
	width: .25rem;
	height: .25rem;
	left: -0.625rem;
	border-radius: 100%;
	background: var(--c-accent);
}
.top {
	@include mobile {
		margin-top: 1rem;
	}
}
.video-wrap {
	@include mobile {
		width: 100%;
	}
}
.video-wrap .top, .video-wrap .body {
	@include mobile {
		text-align: center;
	}
}
.video-wrap .body {
	@include mobile {
		display: flex;
		gap: .5rem;
		justify-content: center;
	}
}
</style>