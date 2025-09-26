<template>
	<header class="header">
		<div class="logo">
			<SvgLongLogo />
		</div>
		<div class="content">
			<HeaderNav />
			<HeaderType />
			<HeaderTheme />
		</div>
	</header>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.header {
	padding: 1rem 1.5rem 0;
}
.content {
	display: flex;
	align-items: center;
	margin-top: 1.5rem;
}
.header:deep(.type) {
	margin-left: auto;
	margin-right: 21.6rem;
}
</style>