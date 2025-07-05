<template>
  <main class="main-page">
    <div class="left">
			<img src="/images/1.png" class="inner-img" alt="">

			<div class="logo">
				<IconsLogo />
			</div>
			<div class="info desk">
				<p>E: <a href="mailto:info@dogadoga.agency" class="hover-fade">info@dogadoga.agency</a></p>
				<p>I: <a class="hover-fade" href="https://www.instagram.com/dogadoga.agency?igsh=dGJubm0wbjE3b3Fz" target="_blank">@dogadoga.studio</a></p>
			</div>

			<div class="top mob">
				<span>WE’RE DOGADOGA, a creative agency built for brands ready to leave a mark.</span> We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects.
			</div>
		</div>
    <div class="right">
			<img src="/images/2.png" class="inner-img" alt="">

			<div class="info mob">
				<p>E: <a href="mailto:info@dogadoga.agency" class="hover-fade">info@dogadoga.agency</a></p>
				<p>I: <a class="hover-fade" href="https://www.instagram.com/dogadoga.agency?igsh=dGJubm0wbjE3b3Fz" target="_blank">@dogadoga.studio</a></p>
			</div>

			<div class="top desk">
				<span>WE’RE DOGADOGA, a creative agency built for brands ready to leave a mark.</span> We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects.
			</div>

			<div class="bot">
				Website’s in the works. (It asked for some space.)
			</div>
		</div>
  </main>
</template>
<script setup lang="ts">


onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.main-page {
	height: 100vh;
	height: 100dvh;
	overflow: hidden;
	position: relative;
	opacity: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	color: var(--c-accent);
	@include mobile {
		grid-template-columns: 1fr;
		font-size: .875rem;
	}

}
.left, .right {
	position: relative;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.top, .bot {
	position: relative;
	z-index: 2;
}
.top {
	text-indent: 15.625rem;
	@include mobile {
		text-indent: 8.5rem;
	}
}
.top span {
	text-transform: uppercase;
}
.logo {
	width: 12rem;
	z-index: 2;
	position: relative;
}
.info {
	position: relative;
	z-index: 2;
}
</style>
