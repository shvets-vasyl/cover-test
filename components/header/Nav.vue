<template>
	<ul class="nav">
		<li v-for="({href, label}, index) in nav" :key="index" class="item p1">
			<nuxt-link :to="href">
				<CommonLinkTemplate :text="label" />
			</nuxt-link>
		</li>
	</ul>
</template>
<script setup lang='ts'>
const nav = [
	{
		label: 'About Us',
		href: '/about'
	},
	// {
	// 	label: 'Marketing',
	// 	href: '/marketing'
	// },
	{
		label: 'Contact Us',
		href: '/contact'
	}
]
</script>
<style scoped lang='scss'>
.nav {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	@include mobile {
		flex-direction: column;
		gap: 1rem;
	}
}
.item {
	position: relative;
	color: var(--c-accent);
	@include mobile {
		font-size: 1.25rem;
	}
}
.item:after {
	content: "";
	position: absolute;
	top: .4375rem;
	left: -0.625rem;
	width: .25rem;
	height: .25rem;
	border-radius: 100%;
	background: var(--c-accent);
	opacity: 0;
	@include mobile {
		top: .625rem;
		width: .5rem;
		height: .5rem;
		left: -.75rem;
	}
}
.item:has(.router-link-active):after {
	opacity: 1;
}
</style>