<template>
  <div class="layout">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
type view = 'gallery' | 'list'

useState('transition-done', () => true);
useState('preloader-done', () => true);
useState<view>('view-type', () => 'gallery');
</script>
<style lang="scss" scoped></style>
