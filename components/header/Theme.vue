<template>
	<div class="theme-switcher">
		<button
			class="theme-btn"
			:class="{ active: theme === 'dark' }"
			@click="setTheme('dark')"
		/>
		<button
			class="theme-btn"
			:class="{ active: theme === 'light' }"
			@click="setTheme('light')"
		/>
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
}
.theme-btn {
  width: .6875rem;
  height: .6875rem;
  border-radius: 100%;
  opacity: 0.3;
  background: var(--c-accent);
	transition: opacity .5s ease;
}
.theme-btn.active {
  opacity: 1;
}
@include hover {
	.theme-btn:hover {
		opacity: 0.5;
	}
}
</style>
