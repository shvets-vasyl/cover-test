<template>
	<ul class="nav">
		<li v-for="({href, label}, index) in nav" :key="index" class="p1">
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
	{
		label: 'Marketing',
		href: '/marketing'
	},
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
}
</style>