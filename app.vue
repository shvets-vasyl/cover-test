<template>
  <div class="layout">
		<ThePreloader v-if="!preloaderDone" />
		<TheLoader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
type view = 'gallery' | 'list'

const preloaderDone = useState('preloader-done', () => false);
useState('transition-done', () => true);
useState<view>('view-type', () => 'gallery');
useState<boolean>("open-menu")
</script>
<style lang="scss" scoped></style>
