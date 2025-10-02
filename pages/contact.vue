<template>
  <main class="contact-page">
    <HeaderBasic />
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
.contact-page {
	position: relative;
}
</style>
