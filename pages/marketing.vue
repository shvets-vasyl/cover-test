<template>
  <main class="marketing-page">
		<CommonBlur />

    <HeaderBasic />
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".marketing-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.marketing-page {
	position: relative;
	opacity: 0;
}
</style>
