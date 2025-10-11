<template>
  <main class="contact-page">
		<CommonBlur />
    <HeaderBasic />
    <HeaderMenu />

    <div class="content">
      <div class="contact">
        <div class="mail">
          <p class="mail-title p1">Email</p>
          <a href="mailto:info@dogadoga.agency" class="mail-link h5">
            <CommonLinkTemplate text="info@dogadoga.agency" />
          </a>
        </div>
        <div class="socials">
          <p class="socials-title p1">Social Media</p>
          <span v-for="({ link, text }, i) in socials" :key="i">
						<a
							:href="link"
							class="mail-link h5"
							target="_blank"
							rel="noopener"
						>
							<CommonLinkTemplate :text="text" />
						</a>
						<span v-if="i !== socials.length - 1">, </span>
					</span>
        </div>
      </div>

			<p class="title h2">
				Let’s DOGADOGA
			</p>

			<div class="form-wrap">
				<Form />
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
});

const socials = [
  {
    text: "Instagram",
    link: "#",
  },
  {
    text: "Youtube",
    link: "#",
  },
  {
    text: "Vimeo",
    link: "#",
  },
];
</script>
<style scoped lang="scss">
.contact-page {
  position: relative;
  min-height: 100vh;
	display: flex;
  flex-direction: column;
	@include mobile {
		text-align: center;
		display: flex;
	}
}
.content {
	padding: 12.5rem 1.5rem 1.5rem;
	display: grid;
	grid-template-columns: 17.5rem 26.875rem 1fr;
	align-items: flex-end;
	flex: 1;
	height: 100%;

	@include mobile {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 7.75rem 1rem 1rem;
		flex: 1 1 auto;
	}
}
.mail-title, .socials-title  {
	margin-bottom: .25rem;
}
.mail {
	margin-bottom: 1rem;
	@include mobile {
		margin-bottom: 1.5rem;
	}
}
.title {
	padding-bottom: 14.1875rem;
	@include mobile {
		padding-bottom: 0;
		order: 1;
	}
}
.contact {
	@include mobile {
		order: 2;
		padding-top: 2rem;
		padding-bottom: 2rem;
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
.form-wrap {
	@include mobile {
		order: 3;
	}
}
.mail-link {
	@include mobile {
		font-size: 1.25rem;
	}
}
</style>
