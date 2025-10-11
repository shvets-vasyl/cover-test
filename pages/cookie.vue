<template>
	<ThePolicy class="cookie-page" :data="data" />
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const data = {
	title: "Cookie Policy",
	update: {
		title: "Last updated: 2025",
		text: [
			"This Cookie Policy explains how DOGADOGA (“we”, “us”, “our”) uses cookies and similar technologies on dogadoga.agency.",
			"By continuing to browse our site, or by clicking “Accept all”, you agree to the use of cookies as described below.",
			"You can change or withdraw your consent at any time through Cookie Settings in the footer."
		]
	},
	block: [
		{
			title: "1. What Are Cookies",
			text: [
				`
					<p>Cookies are small text files stored on your device that help websites function and improve your experience.</p>
					<p>They may store preferences, track performance, and allow certain features (like video playback or analytics).</p>
				`
			]
		},
		{
			title: "2. Types of Cookies We Use",
			text: [
				`
					<p>Essential Cookies</p>
					<br />
					<p>Required for the site to work properly — for example, to remember your privacy settings or enable secure navigation.
					These cannot be disabled.</p>
					<br />
					<p>Analytics Cookies</p>
					<br />
					<p>Help us understand how visitors use our site — which pages are most visited, how users move through the site, and where traffic comes from.</p>
					<p>Used only with your consent.</p>
					<br />
					<p>Functional Cookies</p>
					<br />
					<p>Enhance functionality and personalization — for example, remembering language preferences or improving video playback performance.</p>
					<br />
					<p>Marketing Cookies</p>
					<br />
					<p>Used (only with consent) to measure engagement or display relevant creative content and ads.</p>
				`
			]
		},
		{
			title: "3. Third-Party Services",
			text: [
				`
					<p>We may use trusted third parties that set their own cookies, such as:</p>
					<br />
					<ul>
						<li>Google Analytics (traffic insights)</li>
						<li>Vimeo / YouTube (embedded video playback)</li>
						<li>Instagram / Meta / LinkedIn (social integrations)</li>
					</ul>
					<br />
					<p>Each provider has its own privacy policy.</p>
				`
			]
		},
		{
			title: "4. Managing Cookies",
			text: [
				`
					<p>On your first visit, you’ll see a cookie banner asking for consent.
You can accept, reject, or customize settings anytime by clicking “Cookie Settings” at the bottom of the page.</p>
<br />
					<p>You can also adjust cookie preferences through your browser settings.</p>
					<p>Please note: disabling some cookies may affect site performance or functionality.</p>
				`
			]
		},
		{
			title: "5. Indemnification",
			text: [
				`
					<p>We may update this Cookie Policy periodically to reflect new legal or technical requirements.</p>
					<p>The latest version will always be available at dogadoga.agency/cookies.</p>
				`
			]
		},
		{
			title: "6. Contact",
			text: [
				`
					<p>If you have any questions about our cookie practices, contact us at:</p>
					<p>📧 info@dogadoga.agency</p>
					<p>🌍 dogadoga.agency</p>
				`
			]
		}
	]
}
</script>
<style scoped lang="scss">
</style>
