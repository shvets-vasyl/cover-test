<template>
  <span class="btn-template">
    {{ text }}
    <svg v-if="icon" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 4.25H0.5V4.75H1V4.25ZM21 4.25L16 1.36325V7.13675L21 4.25ZM1 4.25V4.75H16.5V4.25V3.75H1V4.25ZM1 4.25H1.5V0.75H1H0.5V4.25H1Z"
        fill="#191919"
      />
    </svg>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  text: string;
	icon?: boolean
}>();
</script>
<style scoped lang="scss">
.btn-template {
  display: inline-flex;
  align-items: center;
  height: 1.9375rem;
  padding: 0.3125rem 0.75rem;
  background: var(--c-accent);
  color: var(--c-black);
	gap: .5rem;
	transition: all .3s ease;
}
@include hover {
	.btn-template:hover {
		background: var(--c-black);
		color: var(--c-accent);
	}
	.btn-template:hover svg path {
		fill: var(--c-accent);
	}
}
.btn-template svg {
  width: 1.3125rem;
}
.btn-template svg path {
	transition: all .3s ease;
}
</style>
