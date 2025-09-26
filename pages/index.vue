<template>
  <main class="main-page">
    <HeaderMain />
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
</style>
