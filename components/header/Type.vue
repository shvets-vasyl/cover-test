<template>
  <div class="type p1">
		<button
			class="type-btn"
			:class="{ active: viewType === 'gallery' }"
			@click="initClick('gallery')"
		>
			<CommonLinkTemplate text="Gallery" />
		</button>
		<span>/</span>
		<button
			class="type-btn"
			:class="{ active: viewType === 'list' }"
			@click="initClick('list')"
		>
			<CommonLinkTemplate text="List" />
		</button>
	</div>
</template>

<script setup lang="ts">
type view = 'gallery' | 'list'
const viewType = useState<view>('view-type')
const animate = ref(false)

const initClick = (view: view) => {
	if(viewType.value === view || animate.value) return

	animate.value = true

	const tl = gsap.timeline({
		onComplete() {
			animate.value = false
		}
	})
	tl.to(".main-wrap", {
		opacity: 0,
	})
	tl.add(() => {
		useScrollTo(0, { immediate: true })
		viewType.value = view
	})
	tl.to(".main-wrap", {
		opacity: 1,
	})
}

watch(viewType, () => {
	ScrollTrigger.killAll()
})
</script>

<style scoped lang="scss">
.type {
  display: flex;
  gap: .5rem;
	align-items: center;
}
.type-btn {
	opacity: 0.3;
	transition: opacity .5s ease;
}
.type-btn.active {
  opacity: 1;
}
</style>
