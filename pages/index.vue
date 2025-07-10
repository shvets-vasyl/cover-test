<template>
  <main class="main-page">
    <div class="left">
			<img src="/images/1.png" class="inner-img" alt="">

			<button class="left-btn" @click="showLeft">
				<CommonButtonTemplate text="Showreel" icon />
			</button>

			<div class="logo">
				<IconsLogo />
			</div>
			<div class="info desk">
				<p>Email: <a href="mailto:info@dogadoga.agency" class="hover-fade">info@dogadoga.agency</a></p>
				<p>Instagram: <a class="hover-fade" href="https://www.instagram.com/dogadoga.agency?igsh=dGJubm0wbjE3b3Fz" target="_blank">@dogadoga.agency</a></p>
			</div>

			<div class="top mob">
				<span>WE’RE DOGADOGA, a creative agency built for brands ready to leave a mark.</span> We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects.
			</div>
		</div>
    <div class="right">
			<button class="right-btn" @click="showRight">
				<CommonButtonTemplate text="AI showreel" icon />
			</button>

			<video
				class="inner-img"
				loop
				autoplay
				muted
				preload="auto"
				playsinline
				disablePictureInPicture
				src="/images/video.mp4"
			/>

			<div class="info mob">
				<p>E: <a href="mailto:info@dogadoga.agency" class="hover-fade">info@dogadoga.agency</a></p>
				<p>I: <a class="hover-fade" href="https://www.instagram.com/dogadoga.agency?igsh=dGJubm0wbjE3b3Fz" target="_blank">@dogadoga.agency</a></p>
			</div>

			<div class="top desk">
				<span>WE’RE DOGADOGA, a creative agency built for brands ready to leave a mark.</span> We work across strategy, campaigns, video production, design, and generative AI to deliver bold, purposeful content. Clear ideas, sharp storytelling, and work that connects.
			</div>

			<div class="bot">
				Website’s in the works. (It asked for some space)
			</div>
		</div>

		<ClientOnly>
			<div class="video-left">
				<CommonVideo src="/video/showreel.mp4" />
			</div>

			<div class="video-right">
				<CommonVideo src="/video/ai-showreel.mp4" />
			</div>
		</ClientOnly>
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})

const showLeftVideo = useState("show-left", () => false)
const showRightVideo = useState("show-right", () => false)

const showLeft = () => {
  showLeftVideo.value = true
  gsap.to(".video-left", { autoAlpha: 1, duration: 0.3 })
}
const showRight = () => {
  showRightVideo.value = true
  gsap.to(".video-right", { autoAlpha: 1, duration: 0.3 })
}
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
		font-size: .75rem;
		line-height: 1.1;
		height: auto;
	}

}
.left, .right {
	position: relative;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@include mobile {
		height: 29.875rem;
		padding: 1.25rem;
	}
}
.top, .bot {
	position: relative;
	z-index: 2;
}
.top {
	text-indent: 15.625rem;
	text-align: justify;
	@include mobile {
		text-indent: 8.5rem;
	}
}
.top span {
	text-transform: uppercase;
}
.logo {
	width: 12rem;
	z-index: 100;
	position: relative;
}
.info {
	position: relative;
	z-index: 2;
}
.left-btn, .right-btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;

	@include mobile {
		font-size: .875rem;
	}
}
.video-left, .video-right {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
  opacity: 0;
	visibility: hidden;
  transition: all .3s ease;
	@include mobile {
		height: 100vh;
		height: 100dvh;
		position: fixed;
	}
}
</style>
