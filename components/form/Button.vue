<template>
	<button class="btn h5 hover-fade">{{ text }}</button>
</template>
<script setup lang='ts'>
defineProps<{text: string}>()
</script>
<style scoped lang='scss'>
.btn {
	width: 100%;
	height: 3.125rem;
	background: var(--c-accent);
	color: var(--c-dark);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>