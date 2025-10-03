<template>
	<button class="burger" :class="{ open: openMenuState }" @click="useToggleMenu">
		<div class="burger-wrap">
			<span /><span />
		</div>
	</button>
</template>
<script setup lang='ts'>
const openMenuState = useState<boolean>("open-menu")
</script>
<style scoped lang='scss'>
.burger {
	padding: 1rem;
}
.burger-wrap {
	width: 2.75rem;
	height: .5rem;
	position: relative;
}
.burger-wrap span {
	width: 100%;
	height: .125rem;
	position: absolute;
	top: 50%;
	left: 50%;
	background: var(--c-accent);
	transform-origin: center center;
	transition: all .6s var(--default-ease);
}
.burger-wrap span:nth-child(1) {
	transform: translate(-50%, calc(-50% - .1875rem));
}
.burger-wrap span:nth-child(2) {
	transform: translate(-50%, calc(-50% + .1875rem));
}
.burger.open .burger-wrap span:nth-child(1) {
	transform: translate(-50%, -50%) rotate(-30deg);
}
.burger.open .burger-wrap span:nth-child(2) {
	transform: translate(-50%, -50%) rotate(30deg);
}
</style>