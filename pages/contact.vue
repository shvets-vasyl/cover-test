<template>
  <main class="contact-page">
		<CommonBlur />

    <HeaderBasic />
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".contact-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.contact-page {
	position: relative;
	opacity: 0;
}
</style>
