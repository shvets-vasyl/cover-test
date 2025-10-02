<template>
	<div class="project-page">
		<HeaderBasic project-page />

		<div class="wrap">
			<div class="video-wrap">
				<ClientOnly>
					<ProjectVideo :src="project.video" />
				</ClientOnly>
			</div>
			<div class="content-wrap">
				<div class="top">
					<p class="name h6">{{ project.name }}</p>
					<p class="type p1">{{ project.type }}</p>
				</div>
				<div class="body">
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
import { ProjectVideo } from "#components"
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
}
.content-wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 0 1.5rem 5.125rem;
}
.name, .about {
	margin-bottom: .5rem;
}
</style>