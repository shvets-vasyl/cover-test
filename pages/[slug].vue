<template>
	<div class="one-project">
		<h6>PROJECT PAGE - {{ route.params.slug }}</h6>
	</div>
</template>
<script setup lang='ts'>
const route = useRoute()
</script>
<style scoped lang='scss'>
.one-project {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>