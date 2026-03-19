<template>
  <main v-if="data" class="about-page">
    <CommonBlur />
    <HeaderBasic />
		<HeaderMenu />

		<video
			class="about-bg"
			src="/video/about.mp4"
			preload="auto"
			playsinline
			loop
			muted
			autoplay
		/>

    <p class="scroll-down p1">Scroll Down</p>

    <div class="content">
      <h1 class="title">
        <span class="h1">About DOGADOGA</span>
        <SvgR class="title-r" />
      </h1>

      <div class="about">
        <p class="about-title h6">About Us</p>
        <div class="about-descr pre-line p1">
					{{ data.about_us }}
				</div>
      </div>

      <div class="info">
        <p class="info-title info-title-1 h6">Est</p>
        <div class="mission">
          <p class="mission-title h6">Our Mission</p>
          <p class="mission-descr pre-line p1">
            {{ data.our_mission }}
          </p>
        </div>

        <div class="vision">
          <p class="vision-title h6">Our Vision</p>
          <p class="vision-descr pre-line p1">
            {{ data.our_vision }}
          </p>
        </div>

        <p class="info-title info-title-2 h6">2025</p>
      </div>

      <div class="services">
        <p class="services-title h6">Services</p>
        <div class="services-descr pre-line p1">
          {{ data.services }}
        </div>
      </div>

      <div class="get-in-touch">
        <nuxt-link to="/contact" class="h6 get-in-touch-link">
          <CommonLinkTemplate text="Get in Touch" />
        </nuxt-link>
      </div>

      <div class="footer">
        <div class="col">
          <a href="mailto:info@dogadoga.agency" class="mail p1">
            <CommonLinkTemplate text="info@dogadoga.agency" />
          </a>
        </div>
        <div class="col">
          <button class="p1" @click="useScrollTo(0)">
            <CommonLinkTemplate text="Back to Top" />
          </button>
        </div>
        <div class="col">
          <a href="https://www.instagram.com/dogadoga.agency/" class="mail p1" target="_blank">
            <CommonLinkTemplate text="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const nuxtApp = useNuxtApp()

const { data } = await useAsyncData<any>(
  () => "about",
  () => $fetch("/api/about"),
  {
    server: true,
    lazy: false,
    getCachedData: (key) =>
      nuxtApp.payload.data[key] || nuxtApp.static.data[key],
  }
)

if (!data.value) {
  throw showError({
    statusCode: 404,
    statusMessage: "About not found",
  })
}

onMounted(() => {
  scrollToggle();
});

const scrollToggle = () => {
  gsap.to(".scroll-down", {
    scrollTrigger: {
      trigger: ".about-page",
      start: "200px top",
      end: "200px top",
      toggleActions: "play none reverse none",
    },
    autoAlpha: 0,
    duration: 0.3,
  });
};
</script>
<style scoped lang="scss">
.about-page {
  position: relative;
}
.about-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.content {
  text-align: center;
	padding-top: 100vh;
  padding-top: 100dvh;
  position: relative;
  z-index: 2;
  margin-top: -7rem;
  color: var(--c-accent);
	@include mobile {
		margin-top: -10rem;
	}
}
.title {
  display: flex;
  justify-content: center;
	@include mobile {
		position: relative;
	}
}
.title-r {
  margin-top: -1.5rem;
	@include mobile {
		margin-top: 0;
		position: absolute;
		right: 1rem;
		top: 2.5rem;
	}
}
.scroll-down {
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  z-index: 2;
  color: var(--c-accent);
	@include mobile {
		display: none;
	}
}
.about,
.services {
  margin: 4.625rem auto 0;
  width: 24.1875rem;
	@include mobile {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
}
.mission,
.vision {
  width: 24.1875rem;
  flex: 0 0 24.1875rem;
	@include mobile {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-top: 4.625rem;
	}
}
.about-title,
.mission-title,
.vision-title,
.services-title {
  margin-bottom: 1rem;
}
.info {
  display: flex;
  gap: 5rem;
  justify-content: center;
  position: relative;
  margin-top: 4.625rem;
	@include mobile {
		display: block;
		margin-top: 0;
	}
}
.info-title {
  position: absolute;
  top: 0;
	@include mobile {
		display: none;
	}
}
.info-title-1 {
  left: 1.5rem;
}
.info-title-2 {
  right: 1.5rem;
}
.get-in-touch {
  margin-top: 8.625rem;
	@include mobile {
		margin-top: 4.625rem;
	}
}
.get-in-touch-link {
  position: relative;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}
.get-in-touch-link:after, .get-in-touch-link:before {
  content: "";
  position: absolute;
  top: 0.8125rem;
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 100%;
  background: var(--c-accent);
}
.get-in-touch-link:before {
	left: 0;
}
.get-in-touch-link:after {
	right: 0;
}
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
	margin-top: 8.625rem;
	padding: 0 1.5rem 1rem;
	@include mobile {
		padding: 0 1rem 1rem;
		display: flex;
		flex-direction: column;
		margin-top: 4.625rem;
		align-items: center;
		gap: .5rem;
	}
}
.col {
  display: flex;
}
.col:nth-child(2) {
  justify-content: center;
	@include mobile {
		display: none;
	}
}
.col:nth-child(3) {
  justify-content: flex-end;
	@include mobile {
		justify-content: center;
	}
}
</style>
