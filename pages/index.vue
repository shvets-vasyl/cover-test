<template>
  <main class="main-page" :class="{list: viewType === 'list'}">
		<CommonBlur />


    <HeaderMain />
		<MainList v-if="viewType === 'list'" />
		<MainGallery v-if="viewType === 'gallery'" />
		<TheFooter />
  </main>
</template>
<script setup lang="ts">
type view = 'gallery' | 'list'
const viewType = useState<view>('view-type')

onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.main-page {
	position: relative;
	opacity: 0;
}
.main-page:deep(.blur) {
	position: fixed;
}
</style>
