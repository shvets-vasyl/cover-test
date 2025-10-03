<template>
	<div class="theme-switcher-wrap">
		<div class="theme-switcher">
			<button
				class="theme-btn"
				:class="{ active: theme === 'dark' }"
				@click="setTheme('dark')"
			>
				<span />
			</button>
			<button
				class="theme-btn"
				:class="{ active: theme === 'light' }"
				@click="setTheme('light')"
			>
				<span />
			</button>
		</div>
		<p class="theme-text p1">Dark/Light mode</p>
	</div>
</template>

<script setup lang="ts">
type Theme = 'light' | 'dark'

const theme = useState<Theme>('theme', () => 'dark')

const setTheme = (value: Theme) => {
	theme.value = value
	document.documentElement.setAttribute('data-theme', value)
	localStorage.setItem("theme", value)
}

onMounted(() => {
	setTheme(localStorage.getItem("theme") as Theme || 'dark')
})
</script>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  gap: .3125rem;
	@include mobile {
		gap: .75rem;
		justify-content: center;
		margin-top: 3.125rem;
	}
}
.theme-btn {
	position: relative;
	display: flex;
	transition: transform .5s ease;

}
.theme-btn span {
	width: .6875rem;
  height: .6875rem;
  border-radius: 100%;
  opacity: 0.3;
  background: var(--c-accent);
	transition: transform .5s ease;

	@include mobile {
		width: 1.1875rem;
		height: 1.1875rem;
	}
}
.theme-btn:after {
	position: absolute;
	top: 100%;
	margin-top: 0.5rem;
	right: 0;
	white-space: nowrap;

	background: var(--c-accent);
	color: var(--c-dark);
	padding: .125rem 0.5rem;
	font-size: .625rem;
	pointer-events: none;
	opacity: 0;

	@include mobile {
		display: none;
	}
}
.theme-btn:nth-child(1):after {
	content: "Switch to dark theme"
}
.theme-btn:nth-child(2):after {
	content: "Switch to light theme"
}
.theme-btn.active span {
  opacity: 1;
}
@include hover {
	.theme-btn:hover {
		transform: scale(1.2);
	}
	.theme-btn:hover:after {
		opacity: 1;
	}
}
.theme-text {
	display: none;
	@include mobile {
		display: block;
		text-align: center;
		margin-top: 1rem;
		color: var(--c-accent);
	}
}
</style>
