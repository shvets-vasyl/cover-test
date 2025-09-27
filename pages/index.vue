<template>
  <main class="main-page">
		<CommonBlur />

    <HeaderMain />
		<MainProjects />
		<TheFooter />
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.main-page {
	overflow: hidden;
	position: relative;
	opacity: 0;
}
.main-page:deep(.blur) {
	position: fixed;
}
</style>
