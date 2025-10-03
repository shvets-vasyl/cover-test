<template>
  <main class="marketing-page">
		<CommonBlur />

    <HeaderBasic />
		<HeaderMenu />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})
</script>
<style scoped lang="scss">
.marketing-page {
	position: relative;
}
</style>
