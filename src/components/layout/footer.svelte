<script lang="ts">
	import type { footerPropType } from "$lib/types";
	export let props: footerPropType;
</script>

<hr />
<footer>
	<div class="links">
		{#each props.links as link}
			<div class="link">
				<a href={link.toLowerCase()}>{link}</a>
			</div>
		{/each}
	</div>
	<div class="credits">
		<p>Made with ♥️ by ohqte</p>
	</div>
</footer>

<style lang="scss">
	hr {
		margin-top: 128px;
		color: #3f3f4666;
	}
	footer {
		@media (min-width: 1024px) {
			max-width: 1024px;
		}
		padding: 40px 0;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;

		.links {
			display: flex;
			flex-direction: row;
			float: left;

			gap: 10px;

			.link {
				&::after {
					content: "·";

					font-family: var(--font-mono);
					font-size: 16.8px;

					color: #71717a;
				}

				&:last-of-type::after {
					content: "";
				}
				a {
					font-family: var(--font-mono);
					font-size: 16.8px;

					text-decoration: none;
					color: white;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		.credits {
			float: right;
			text-align: center;

			p {
				color: white;
				font-family: var(--font-mono);
				margin: 0;
			}
		}
	}
</style>
