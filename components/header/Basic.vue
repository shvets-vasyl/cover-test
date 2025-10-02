<template>
	<header class="header">
		<nuxt-link to="/" class="logo-wrap">
			<SvgNormalLogo />
		</nuxt-link>
		<div class="nav-wrap">
			<HeaderNav />
		</div>
		<div class="right-side">
			<div v-if="projectPage" class="all-works">
				<nuxt-link to="/" class="p1">
					<CommonLinkTemplate text="All Works" />
				</nuxt-link>
			</div>
			<div class="theme-wrap">
				<HeaderTheme />
			</div>
		</div>
	</header>
</template>
<script setup lang='ts'>
defineProps<{ projectPage?: boolean }>()
</script>
<style scoped lang='scss'>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 1.5rem 0;
	z-index: var(--z-header);
	display: flex;
}
.logo-wrap {
	flex: 0 0 13.6875rem;
	margin-right: 3.625rem;
}
.all-works {
	margin-right: 22.6875rem;
}
.right-side {
	margin-left: auto;
	display: flex;
}
.all-works {
	padding-left: .5rem;
	position: relative;
}
.all-works:after {
	content: "";
	position: absolute;
	top: .5625rem;
	left: 0;
	width: .25rem;
	height: .25rem;
	border-radius: 100%;
	background: var(--c-accent);
}
</style>