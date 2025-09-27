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
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 1.5rem 0;
	z-index: var(--z-header);
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