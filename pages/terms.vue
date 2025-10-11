<template>
	<ThePolicy class="terms-page" :data="data" />
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const data = {
	title: "Terms of Use",
	update: {
		title: "Last updated: 2025",
		text: [
			"Welcome to dogadoga.agency, operated by DOGADOGA (“we”, “us”, “our”).",
			"By using our website, viewing our content, or contacting us, you agree to these Terms of Use.",
			"Please read them carefully before proceeding."
		]
	},
	block: [
		{
			title: "1. Purpose of the Site",
			text: [
				`
					<p>The website dogadoga.agency is designed to present the creative work, philosophy, and services of DOGADOGA.</p>
					<p>Its content is for general informational purposes and may evolve over time.</p>
					<p>We reserve the right to modify or update any part of the site without prior notice.</p>
				`
			]
		},
		{
			title: "2. Intellectual Property",
			text: [
				`
					<p>All materials on this site — including text, design, images, video, audio, and logos — are the intellectual property of DOGADOGA or our collaborators, unless otherwise stated.</p>
					<p>You may not copy, modify, reproduce, distribute, or use any part of the site for commercial purposes without written permission from DOGADOGA.</p>
					<br />
					<p>If you are featured in a project and wish to discuss usage rights, contact us at info@dogadoga.agency.</p>
				`
			]
		},
		{
			title: "3. Portfolio & Third-Party Credits",
			text: [
				`
					<p>Our portfolio includes collaborative works with artists, brands, and partners.</p>
					<p>Credits, trademarks, and music remain the property of their respective owners.</p>
					<p>We use these materials strictly to present creative work that DOGADOGA participated in, always respecting original rights and agreements.</p>
				`
			]
		},
		{
			title: "4. Use of the Website",
			text: [
				`
					<p>You agree to use this website lawfully, ethically, and without attempting to:</p>
					<br />
					<ul>
						<li>Access data without authorization</li>
						<li>Interfere with the website’s functionality or security</li>
						<li>Distribute malicious software or spam</li>
						<li>Misrepresent DOGADOGA or its collaborators</li>
					</ul>
					<br />
					<p>Any misuse may result in restricted access or legal action if necessary.</p>
				`
			]
		},
		{
			title: "5. Links to Other Websites",
			text: [
				`
					<p>Our website may contain links to third-party sites (e.g., Vimeo, YouTube, Instagram).</p>
					<p>We are not responsible for the content, privacy practices, or accuracy of external websites.</p>
					<p>Visiting external sites is at your own discretion and governed by their own terms.</p>
				`
			]
		},
		{
			title: "6. Limitation of Liability",
			text: [
				`
					<p>We aim to provide accurate and up-to-date information but make no guarantees that the content is free from errors or interruptions.</p>
					<p>DOGADOGA is not liable for any damages resulting from your use of or inability to access this website.</p>
				`
			]
		},
		{
			title: "7. Data Protection",
			text: [
				`
					<p>Your privacy matters to us.</p>
					<p>Personal data collected through the site is handled according to our <a href="/privacy">Privacy Policy</a> and <a href="/cookie">Cookie Policy</a>.</p>
				`
			]
		},
		{
			title: "8. Changes to These Terms",
			text: [
				`
					<p>We may update these Terms to reflect operational, legal, or design changes.</p>
					<p>The latest version will always be available at dogadoga.agency/terms.</p>
				`
			]
		},
		{
			title: "9. Governing Law",
			text: [
				`
					<p>These Terms are governed by applicable data protection and consumer laws within the European Union.</p>
					<p>Any disputes shall be resolved fairly and in good faith.</p>
				`
			]
		},
		{
			title: "10. Contact",
			text: [
				`
					<p>For questions or concerns regarding these Terms:</p>
					<br />
					<p>DOGADOGA</p>
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
