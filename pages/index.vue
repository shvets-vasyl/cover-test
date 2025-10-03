<template>
  <main class="main-page" :class="{list: viewType === 'list'}">
		<CommonBlur />

    <HeaderMain />
		<HeaderMenu />

		<div class="main-wrap">
			<MainList v-if="viewType === 'list'" />
			<MainGallery v-if="viewType === 'gallery'" />
		</div>

		<TheFooter />
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
.main-page {
	position: relative;
}
.main-page:deep(.blur) {
	position: fixed;
}
</style>
