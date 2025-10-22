<template>
  <main class="main-page" :class="{list: viewType === 'list'}">
		<CommonBlur />

		<div class="main-header">
    	<HeaderMain />
		</div>
		<div class="main-header-mob">
			<HeaderBasic />
		</div>
		<HeaderMenu />

		<ClientOnly>
			<div class="main-wrap">
				<MainList v-if="viewType === 'list' && isDesktop" />
				<MainListMob v-if="viewType === 'list' && !isDesktop" />
				<MainGallery v-if="viewType === 'gallery' && isDesktop" />
				<MainGalleryMob v-if="viewType === 'gallery' && !isDesktop" />
			</div>
		</ClientOnly>

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

const { isDesktop } =useViewport()

const preloaderDone = useState('preloader-done');
watch(preloaderDone, (val) => {
	if(val) {
		viewType.value = 'gallery'
	}
})
</script>
<style scoped lang="scss">
.main-page {
	position: relative;
	@include mobile {
		min-height: 100dvh;
	}
}
.main-page:deep(.blur) {
	position: fixed;
}
.main-header {
	@include mobile {
		display: none;
	}
}
.main-header-mob {
	display: none;
	@include mobile {
		display: block;
	}
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
</style>
