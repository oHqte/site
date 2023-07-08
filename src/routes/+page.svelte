<script lang="ts">
	import { IntroCard, SomePosts } from "$components/ui";
	import site from "$lib/site";
</script>

<svelte:head>
	<title>{site.info.name} | Home</title>

	<meta content="{site.info.name} | Home" property="og:title" />
	<!-- <meta content={config.siteImage} property="og:image" /> -->
	<meta content={site.info.url} property="og:url" />
	<meta content={site.info.desc} property="og:description" />
	<meta content={site.info.name} property="og:site_name" />

	<!-- <meta content="summary_large_image" name="twitter:card" /> -->
	<meta content="{site.info.name} | Home" name="twitter:title" />
	<meta content={site.info.desc} name="twitter:description" />
	<!-- <meta content={config.siteImage} name="twitter:image" /> -->
</svelte:head>

<main>
	<IntroCard
		props={{
			title: "Hey, I'm ohqte!",
			body:
				"I'm ohqte – a Full-Stack Developer who is passionate about Data Science \
				& currently pursuing a degree in CS from Lorem Ipsum University. Have a good read!",

			profiles: ["discord", "devto", "github", "mail"]
		}}
	/>
	<SomePosts
		props={[
			{
				title: "Undo a `git push -f`",
				timestamp: "Jan 1, 2023",
				time2read: 0,
				slug: "git-push-force"
			},
			{
				title: "Setting-up github codespaces",
				timestamp: "Jan 1, 2023",
				time2read: 0,
				slug: "setup-gh-vm"
			},
			{
				title: "Web3: overhyped.",
				timestamp: "Jan 1, 2023",
				time2read: 0,
				slug: "web3-overhyped"
			}
		]}
	/>
</main>
