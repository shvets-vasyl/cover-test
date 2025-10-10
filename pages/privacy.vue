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
		title: "Last updated: 2025",
		text: [
			`This Privacy Policy explains how DOGADOGA (“we”, “us”, “our”) collects, uses, and protects personal data when you visit dogadoga.agency, contact us, or collaborate with us on creative projects — including film, music videos, branded campaigns, CGI and AI-driven productions.
			<br />
			<br />
			If you have any questions, please contact us at info@dogadoga.agency.
			`
		]
	},
	block: [
		{
			title: "1. Who We Are",
			text: [
				`
					DOGADOGA is a creative agency and production collective based in Europe.
					<br />
					We work globally with brands, artists, and partners across film, music, and digital culture.
					<br />
					We follow the General Data Protection Regulation (GDPR) and other applicable data protection laws in the European Union.
				`
			]
		},
		{
			title: "2. Scope",
			text: [
				`
					<p>This policy applies to:</p>
					<ul>
						<li>Our website and any pages under dogadoga.agency</li>
						<li>Contact forms and communication through email or social media</li>
						<li>Project collaborations and creative submissions</li>
						<li>Analytics, cookies, and integrated services (e.g., Vimeo, YouTube, Google)</li>
					</ul>
					<br />
					<p>It does not cover third-party websites we link to.</p>
				`
			]
		},
		{
			title: "3. Data We Collect",
			text: [
				`
					<p>a) Data You Provide</p>
					<br />
					<ul>
						<li>Contact information (name, email, phone, company, role)</li>
						<li>Project or collaboration details</li>
						<li>Payment and billing information (when applicable)</li>
						<li>Application materials (portfolio, social links, CV)</li>
						<li>Any messages or attachments you send us</li>
					</ul>
					<br />
					<p>b) Data Collected Automatically</p>
					<br />
					<ul>
						<li>IP address, browser type, device, and activity logs</li>
						<li>Analytics data (page visits, interaction time, source)</li>
						<li>Cookies and similar technologies</li>
					</ul>
					<br />
					<p>c) From Trusted Partners</p>
					<br />
					<ul>
						<li>Publicly available social or professional information</li>
						<li>Collaboration partners or artist management (for coordination)</li>
					</ul>

					<br />
					<p>We do not intentionally collect sensitive personal data.</p>
				`
			]
		},
		{
			title: "4. How We Use Your Data",
			text: [
				`
					<p>We process personal data to:</p>
					<br />
					<ul>
						<li>Respond to inquiries and communicate with you</li>
						<li>Plan, execute, and deliver creative projects</li>
						<li>Manage clients, vendors, and collaborators</li>
						<li>Maintain our website and improve user experience</li>
						<li>Showcase work (with your consent) in our portfolio or showreel</li>
						<li>Send occasional updates, if you’ve subscribed or shown interest</li>
					</ul>
					<br />
					<p>We rely on legitimate interest, contract performance, consent, and legal obligations as our lawful bases under GDPR.</p>
				`
			]
		},
		{
			title: "5. Cookies & Analytics",
			text: [
				`
					<p>We process personal data to:</p>
					<p>You can manage preferences via “Cookie Settings” in the footer.</p>
					<br />
					<p>Types of cookies we may use:</p>
					<br />
					<ul>
						<li>Essential: for security and basic site functions</li>
						<li>Analytics: to understand traffic and performance</li>
						<li>Functional: to remember preferences (like language or video player settings)</li>
						<li>Marketing: only if you consent to them</li>
					</ul>
					<br />
					<p>We may use Google Analytics, Plausible, or similar tools.</p>
				`
			]
		},
		{
			title: "6. CGI & AI Transparency",
			text: [
				`
					<p>For CGI and AI projects, we may process creative materials such as:</p>
					<br />
					<ul>
						<li>Images, logos, footage, and audio you provide</li>
						<li>Prompts, references, or scripts used to guide AI/CGI tools</li>
						<li>Output renders generated for project delivery</li>
					</ul>
					<br />
					<p>We do not use your confidential materials to train AI models. When we work with third-party render or AI partners, we ensure they follow strict confidentiality and data protection standards.</p>
				`
			]
		},
		{
			title: "7. Sharing & Disclosure",
			text: [
				`
					<p>We share data only when necessary:</p>
					<br />
					<ul>
						<li>With trusted service providers (hosting, email, analytics, storage)</li>
						<li>With creative collaborators (under NDA or equivalent confidentiality terms)</li>
						<li>When legally required to comply with obligations or protect rights</li>
					</ul>
					<br />
					<p>We do not sell or trade personal data.</p>
				`
			]
		},
		{
			title: "8. International Data Transfers",
			text: [
				`
					<p>Our partners and vendors may be located in different countries.
					Whenever data is transferred outside the EU/EEA, we ensure appropriate safeguards, such as Standard Contractual Clauses or equivalent protection mechanisms.</p>
				`
			]
		},
		{
			title: "9. Data Retention",
			text: [
				`
					<p>We keep data only as long as needed:</p>
					<br />
					<ul>
						<li>Project and client data — for the duration of collaboration and standard retention periods</li>
						<li>Marketing contact data — until you unsubscribe or withdraw consent</li>
						<li>Application materials — up to 12 months, unless otherwise agreed</li>
					</ul>
				`
			]
		},
		{
			title: "10. Security",
			text: [
				`
					<p>We take reasonable technical and organizational measures to protect your data — including encryption, access controls, and secure storage.</p>
					<br />
					<p>While no system is perfectly secure, we continuously work to prevent unauthorized access or disclosure.</p>
				`
			]
		},
		{
			title: "11. Your Rights",
			text: [
				`
					<p>Under GDPR, you have the right to:</p>
					<br />
					<ul>
						<li>Access, correct, or delete your personal data</li>
						<li>Object to or restrict processing</li>
						<li>Withdraw consent</li>
						<li>Request data portability</li>
					</ul>
					<br />
					<p>To exercise these rights, contact info@dogadoga.agency.</p>
					<br />
					<p>You also have the right to lodge a complaint with your local data protection authority within the EU.</p>
				`
			]
		},
		{
			title: "12. Marketing & Communication",
			text: [
				`
					<p>We only send updates or newsletters with your explicit consent.
					You can unsubscribe anytime by using the link in the email or by contacting us.</p>
				`
			]
		},
		{
			title: "13. Portfolio Use",
			text: [
				`
					<p>We value confidentiality.</p>
					<p>We showcase projects in our portfolio only when mutually agreed, respecting your brand, music, or artistic identity.</p>
				`
			]
		},
		{
			title: "14. Changes to This Policy",
			text: [
				`
					<p>We may update this policy periodically to reflect legal or operational changes.</p>
					<p>The latest version will always be available at dogadoga.agency/privacy.</p>
				`
			]
		},
		{
			title: "15. Contact Us",
			text: [
				`
					<p>If you have any questions or requests regarding this Privacy Policy or how we handle your data:</p>
					<br />
					<p>📧 info@dogadoga.agency</p>
					<p>🌍 dogadoga.agency</p>
				`
			]
		},
	]
}
</script>
<style scoped lang="scss">
</style>
