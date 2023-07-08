<script lang="ts">
	import type { IntroCardProps } from "$lib/types";
	import { icons } from "$lib/icons";
	import site from "$lib/site";

	export let props: IntroCardProps;

	const icon: { [index: string]: any } = {
		discord: icons.discord,
		devto: icons.devto,
		github: icons.github,
		mail: icons.mail
	};
</script>

<main>
	<h1>{props.title}</h1>
	<p>{props.body} <span class="wave">👋</span></p>
	<div class="icons">
		{#each props.profiles as profile}
			<a href={site.userLinks[profile]}>
				<svelte:component this={icon[profile]} width="24" height="24" fill="#a1a1aa" />
			</a>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		padding-top: 80px;
		padding-bottom: 48px;
		max-width: 672px;

		h1 {
			margin: 0;

			font-family: var(--font-sans);
			font-size: 48px;

			line-height: 56px;
			color: white;
		}
		p {
			margin-top: 24px;
			margin-bottom: 0;

			font-family: var(--font-sans);
			font-size: 16px;

			line-height: 28px;
			color: #a1a1aa;

			@keyframes wave-animate {
				0% {
					transform: rotate(0deg);
				}
				10% {
					transform: rotate(14deg);
				}
				20% {
					transform: rotate(-8deg);
				}
				30% {
					transform: rotate(14deg);
				}
				40% {
					transform: rotate(-4deg);
				}
				50% {
					transform: rotate(10deg);
				}
				60%,
				100% {
					transform: rotate(0deg);
				}
			}
			.wave {
				display: inline-block;
				text-align: center;

				animation: 2.5s ease 0s 1 normal none running wave-animate;
				transform-origin: 70% 70%;

				&:hover {
					animation-iteration-count: infinite;
				}
			}
		}
		.icons {
			margin-top: 24px;

			display: flex;
			gap: 24px;

			:global(.svg-icons) {
				transition: fill 0.2s;
				&:hover {
					fill: #d4d4d8;
				}
			}
		}
	}
</style>
