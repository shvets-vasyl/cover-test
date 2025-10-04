<template>
	<footer class="footer">
		<div class="copy">
			<IconsCopy />
			<p class="p1">{{ new Date().getFullYear() }} DOGADOGA<br />All Rights Reserved</p>
		</div>

		<div class="docs">
			<a v-for="{label, href}, i in docs" :key="i" :href="href" class="link p1" target="_blank">
				<CommonLinkTemplate :text="label" />
			</a>
		</div>
	</footer>
</template>
<script setup lang='ts'>
const docs = [
	{
		label: 'Privacy Policy',
		href: '#'
	},
	{
		label: 'Cookie Policy',
		href: '#'
	}
]
</script>
<style scoped lang='scss'>
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 0 1.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	z-index: var(--z-footer);
	@include mobile {
		display: none;
	}
}
.copy {
	display: flex;
	gap: .1875rem;
	align-items: flex-start;
}
.copy:deep(svg) {
	width: .75rem;
	margin-top: .1875rem;
}
.docs {
	display: flex;
	gap: 1.5rem;
}
</style>