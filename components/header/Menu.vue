<template>
	<div class="menu-wrap" :class="{open: openMenuState}">
		<div class="menu-bg">
			<div class="bg" />
		</div>
		<menu class="menu">
			<div class="menu-content">
				<div class="menu-nav">
					<HeaderNav />
				</div>

				<div class="menu-theme">
					<HeaderTheme />
				</div>

				<div class="menu-copy">
					<p class="p1">
						2025 DOGADOGA <br>
						All Rights Reserved
					</p>
				</div>

				<div class="menu-footer">
					<div class="footer-item">
						<nuxt-link to="/privacy" class="p1">
							Privacy Policy
						</nuxt-link>
					</div>
					<div class="footer-item">
						<nuxt-link to="/terms" class="p1">
							Terms of Use
						</nuxt-link>
					</div>
					<div class="footer-item">
						<nuxt-link to="/cookie" class="p1">
							Cookie Policy
						</nuxt-link>
					</div>

				</div>
			</div>
		</menu>
	</div>
</template>
<script setup lang='ts'>
const openMenuState = useState<boolean>("open-menu")
</script>
<style scoped lang='scss'>
.menu-wrap {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100lvh;
	z-index: var(--z-menu);
	display: none;
}
.menu-bg {
	position: absolute;
	inset: 0;
	opacity: 0;
	backdrop-filter: blur(5px);
}
.bg {
	background: var(--c-dark);
	opacity: 0.5;
	position: absolute;
	inset: 0;
}
.menu {
	height: 33.8125rem;
	background: var(--c-accent);
}
.menu-content {
	--c-accent: var(--c-dark);
	color: var(--c-accent);
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
}
.menu-footer {
	margin-top: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: flex-end;
	padding: 1rem;
}
.footer-item:nth-child(2) {
	text-align: center;
}
.footer-item:nth-child(3) {
	text-align: right;
}
.menu-copy {
	position: absolute;
	bottom: 3.5rem;
	left: 50%;
	transform: translateX(-50%);
}
</style>