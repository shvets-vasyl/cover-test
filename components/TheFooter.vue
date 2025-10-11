<template>
  <footer class="footer">
    <div class="copy">
      <IconsCopy />
      <p class="p1">
        {{ new Date().getFullYear() }} DOGADOGA<br />All Rights Reserved
      </p>
    </div>

    <div class="docs">
      <nuxt-link
        v-for="({ label, href }, i) in docs"
        :key="i"
        :to="href"
        class="link p1"
      >
        <CommonLinkTemplate :text="label" />
      </nuxt-link>
    </div>
  </footer>
</template>
<script setup lang="ts">
const docs = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Cookie Policy",
    href: "/cookie",
  },
	{
    label: "Terms of Use",
    href: "/terms",
  },
];
</script>
<style scoped lang="scss">
.footer {
  padding: 0 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
	@include mobile {
		padding: 0 1rem 1rem;
		position: relative;
		margin-top: 2rem;
	}
}
.copy {
  display: flex;
  gap: 0.1875rem;
  align-items: flex-start;
	@include mobile {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 3rem;
	}
}
.copy:deep(svg) {
  width: 0.75rem;
  margin-top: 0.1875rem;
}
.docs {
  display: flex;
  gap: 1.5rem;
	@include mobile {
		justify-content: space-between;
		gap: 0;
		width: 100%;
	}
}
</style>
