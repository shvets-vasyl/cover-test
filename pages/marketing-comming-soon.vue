<template>
  <main class="marketing-page" :class="{list: viewType === 'list'}">
		<CommonBlur class="top-blur" />
		<HeaderBasic />
		<HeaderMenu />
		<HeaderType class="marketing-type" />

		<div class="story">
			<p class="story-title h6">Marketing Story</p>
			<p class="p1">We’ve mastered the art of production — now we’re amplifying it with strategy. From powerful campaigns to digital storytelling, we connect your brand to the right audience, on the right platforms, at the right moment. </p>
		</div>

		<div class="main-wrap">
			<MainList v-if="viewType === 'list'" />
			<MainListMob v-if="viewType === 'list'" />
			<MainGallery v-if="viewType === 'gallery'" />
			<MainGalleryMob2 v-if="viewType === 'gallery'" />
		</div>

		<div class="mob-type">
			<CommonBlur class="footer-blur" />
			<HeaderType />
		</div>
		<div class="main-footer">
			<TheFooter />
		</div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

type view = 'gallery' | 'list'
const viewType = useState<view>('view-type');
</script>
<style scoped lang="scss">
.marketing-page {
	position: relative;
	@include mobile {
		min-height: 100dvh;
	}
}
.marketing-page:deep(.blur) {
	position: fixed;
}
.mob-type {
	display: none;
	@include mobile {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 1rem;
		width: 100%;
		left: 0;
		z-index: var(--z-footer);
	}
}
.footer-blur {
	top: auto;
	bottom: 0;
	transform: rotate(180deg) translateY(-50%);
}
.main-footer {
	position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
	z-index: var(--z-footer);
	@include mobile {
		display: none;
	}
}
.story {
	position: fixed;
	top: 10rem;
	left: 1.5rem;
	width: 28.3125rem;
	@include mobile {
		width: 100%;
		position: static;
		margin-top: 7.5rem;
		text-align: center;
		padding-left: 1rem;
		padding-right: 1rem;

	}
}
.story-title {
	margin-bottom: 0.5rem;
}
.marketing-type {
	position: fixed;
	top: 1rem;
	right: 25rem;
	z-index: var(--z-header);
	@include mobile {
		display: none;
	}
}
.marketing-page .list {
	margin-top: 15.75rem;
}
.marketing-page.list .story {
	position: relative;
	@include mobile {
		position: static;
	}
}
</style>
