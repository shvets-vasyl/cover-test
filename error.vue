<template>
	<div class="error-page">
		<p class="title">404</p>
		<a href="/">
			<CommonLinkTemplate text="Back to Home" />
		</a>
	</div>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.error-page {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.title {
	font-size: 12.5rem;
	line-height: 120%;
	@include mobile {
		font-size: 8rem;
	}
}
</style>