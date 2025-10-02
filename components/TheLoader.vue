<template>
	<div class="loader" />
</template>
<script setup lang='ts'>
onMounted(() => {
	gsap.to(".loader", {
		autoAlpha: 0,
		duration: 0.6,
		delay: 0.4,
	})
})
</script>
<style scoped lang='scss'>
.loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--c-dark);
	z-index: var(--z-loader);
	pointer-events: none;
}
</style>