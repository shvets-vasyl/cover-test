<template>
  <main class="about-page">
		<CommonBlur />

    <HeaderBasic />
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".about-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.about-page {
	position: relative;
	opacity: 0;
}
</style>
