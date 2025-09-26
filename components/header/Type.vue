<template>
  <div class="type p1">
		<button
			class="type-btn hover-fade"
			:class="{ active: viewType === 'gallery' }"
			@click="viewType = 'gallery'"
		>
			Gallery
		</button>
		<span>/</span>
		<button
			class="type-btn hover-fade"
			:class="{ active: viewType === 'list' }"
			@click="viewType = 'list'"
		>
			List
		</button>
	</div>
</template>

<script setup lang="ts">
type view = 'gallery' | 'list'
const viewType = useState<view>('view-type', () => 'gallery')
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
@include hover {
	.type-btn:hover {
		opacity: 0.5;
	}
}
</style>
