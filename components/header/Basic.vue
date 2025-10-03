<template>
	<header class="header" :class="{open: openMenuState}">
		<nuxt-link to="/" class="logo-wrap">
			<SvgNormalLogo class="desk" />
			<SvgLongLogo class="mob" />
		</nuxt-link>
		<div class="burger-wrap mob">
			<HeaderBurger />
		</div>
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
const openMenuState = useState<boolean>("open-menu")
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
	@include mobile {
		padding: 1rem 1rem 0;
		flex-wrap: wrap;
	}
}
.header.open {
	--c-accent: var(--c-dark);
}
.burger-wrap {
	@include mobile {
		display: flex;
		justify-content: center;
		width: 100%;
		padding-top: 0.5rem;
	}
}
.logo-wrap {
	flex: 0 0 13.6875rem;
	margin-right: 3.625rem;
	@include mobile {
		flex: 0 0 100%;
		margin-right: 0;
	}
}
.all-works {
	margin-right: 22.6875rem;
}
.right-side {
	margin-left: auto;
	display: flex;
	@include mobile {
		display: none;
	}
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
.nav-wrap {
	@include mobile {
		display: none;
	}
}
</style>