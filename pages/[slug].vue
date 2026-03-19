<template>
	<div v-if="data" class="project-page">
		<HeaderBasic project-page />
		<HeaderMenu />
		<CommonBlur />

		<div class="wrap">
			<div class="all-works-mob">
				<nuxt-link to="/">All Works</nuxt-link>
			</div>
			<div class="video-wrap">
				<ClientOnly>
					<ProjectVideo :src="data.file_url" />
				</ClientOnly>
				<div class="top mob">
					<p class="name h6">{{ data.title }}</p>
				</div>
				<div class="body mob">
					<p class="year p1">{{ data.year }}</p>
					<p class="type p1">{{ data.category.category_name }}</p>
				</div>
			</div>
			<div class="content-wrap">
				<div class="top desk">
					<p class="name h6">{{ data.title }}</p>
					<p class="type p1">{{ data.category.category_name }}</p>
				</div>
				<div class="body desk">
					<p class="year p1">{{ data.year }}</p>
				</div>
				<div class="foot">
					<p class="about p1">About Project</p>
					<div class="descr p2 pre-line">
						{{ data.description }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang='ts'>
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const route = useRoute()
const slug = computed(() => String(route.params.slug || ""))
const nuxtApp = useNuxtApp()

const { data } = await useAsyncData<any>(
  () => `project:${slug.value}`,
  () =>
    $fetch(`/api/projects/${slug.value}`),
  {
    server: true,
    lazy: false,
    watch: [slug],
    getCachedData: (key) =>
      nuxtApp.payload.data[key] || nuxtApp.static.data[key],
  }
)


if (!data.value) {
  throw showError({
    statusCode: 404,
    statusMessage: "Project not found",
  })
}
</script>
<style scoped lang='scss'>
.project-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	@include mobile {
		height: auto;
		min-height: 100vh;
		flex-direction: column;
	}
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
		padding: 7rem 1rem 2.5rem;
		justify-content: space-between;
		align-items: center;
		flex: 1 1 auto;
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
		margin-bottom: 1.5rem;
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
.foot {
	@include mobile {
		margin-top: 1.5rem;
	}
}
</style>