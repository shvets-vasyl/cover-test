<template>
	<ThePolicy class="privacy-page" :data="data" />
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
})

const data = {
	title: "Privacy Policy",
	update: {
		title: "Update: 25 Nov, 2025",
		text: [
			"This website is operated by L'Étude and OUTSTANDING CONTRIBUTION TO THE MODERN MOVEMENT LLC. Throughout the site, the terms “we”, “us” and “our” refer to L'Étude. By accessing or using this website, you agree to be bound by these Terms of Use (“Terms”). If you do not agree, you may not use the website.",
			"We may update these Terms at any time by posting changes on this page. Your continued use of the site constitutes acceptance of those changes."
		]
	},
	block: [
		{
			title: "1. Use of the Website",
			text: [
				`
					<p>This site is provided for informational and creative purposes only.</p>
					<p>You agree not to:</p>
					<ul>
						<li>Use the site for any unlawful, harmful, or infringing activity.</li>
						<li>Upload or transmit any viruses, malware, or other harmful code.</li>
						<li>Attempt to disrupt or gain unauthorized access to the site.</li>
					</ul>
				`
			]
		},
		{
			title: "2. Intellectual Property",
			text: [
				`
					<p>This site may contain links to third-party websites. We are not responsible for the content, accuracy, or policies of any third-party site. Your interactions with third-party sites are at your own risk.</p>
				`
			]
		},
		{
			title: "4. Accuracy of Information",
			text: [
				`
					<p>The information provided on this site is for general purposes only. While we aim to keep it accurate and current, we make no guarantees regarding its completeness, reliability, or timeliness.</p>
					<p>You acknowledge that reliance on the information is at your own risk.</p>
				`
			]
		},
		{
			title: "5. Disclaimer of Warranties & Limitation of Liability",
			text: [
				`
					<p>This site is provided “as is” and “as available” without warranties of any kind, either express or implied.</p>
					<p>We do not guarantee that the site will be uninterrupted, secure, or error-free.</p>
					<p>To the fullest extent permitted by law, L'Étude and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the site.</p>
				`
			]
		},
		{
			title: "6. Indemnification",
			text: [
				`
					<p>You agree to indemnify and hold harmless L'Étude, its affiliates, and team members from any claims or demands made by third parties due to or arising out of your violation of these Terms or your misuse of the site.</p>
				`
			]
		}
	]
}
</script>
<style scoped lang="scss">
</style>
