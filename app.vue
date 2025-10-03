<template>
  <div class="layout">
		<TheLoader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
type view = 'gallery' | 'list'

useState('transition-done', () => true);
useState('preloader-done', () => true);
useState<view>('view-type', () => 'gallery');
useState<boolean>("open-menu")
</script>
<style lang="scss" scoped></style>
