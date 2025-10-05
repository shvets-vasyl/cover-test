<template>
	<div class="policy">
		<CommonBlur />
    <HeaderBasic />
		<HeaderMenu />

		<div class="content">
			<div class="left">
				<h1 class="title h1">{{ data.title }}</h1>
			</div>
			<div class="right">
				<div class="right-content">
				<div class="update">
					<p class="p1 block-title">{{ data.update.title }}</p>
					<div class="p1 block-text">
						<div v-for="txt in data.update.text" class="block-txt" v-html="txt" />
					</div>
				</div>

				<div v-for="block in data.block" class="block">
					<p class="h6 block-title">{{ block.title }}</p>
					<div class="p1 block-text">
						<div v-for="txt in block.text" class="block-txt" v-html="txt" />
					</div>
				</div>
				</div>
			</div>
		</div>

		<div class="policy-footer">
			<TheFooter />
		</div>
	</div>
</template>
<script setup lang='ts'>
defineProps<{
	data: {
		title: string
		update: {
			title: string
			text: string[]
		}
		block: {
			title: string
			text: string[]
		}[]
	}
}>()
</script>
<style scoped lang='scss'>
.content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: flex-start;
	padding: 0 1.5rem 7.5rem;

	@include mobile {
		display: block;
		padding: 9.625rem 1rem 4.6875rem;
	}
}
.left {
	height: 100vh;
	display: flex;
	align-items: flex-end;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	padding-top: 12.0625rem;
	padding-bottom: 1rem;

	@include mobile {
		height: auto;
		position: static;
		padding-top: 0;
		padding-bottom: 2.5rem;
	}
}
.right {
	padding-top: 12.0625rem;
	@include mobile {
		padding-top: 0;
	}
}
.block:not(:last-child), .update {
	margin-bottom: 3.125rem;
}
.block-title {
	margin-bottom: 1rem;
}
.block-txt {
	text-align: justify;
}
.block-txt:not(:last-child) {
	margin-bottom: 1rem;
}
.right-content {
	width: 35.6875rem;
	@include mobile {
		width: 100%;
	}
}
.block-text:deep(li) {
	padding-left: 1.25rem;
	position: relative;
}
.block-text:deep(li:after) {
	content: "";
	position: absolute;
	top: .4375rem;
	left: .5rem;
	width: .25rem;
	height: .25rem;
	border-radius: 100%;
	background: var(--c-accent);
}
</style>