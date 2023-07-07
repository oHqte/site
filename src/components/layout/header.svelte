<script lang="ts">
	import {Command} from "$lib/icons";
	import type { headerPropsType } from "$lib/types";
	export let props: headerPropsType;
</script>

<main>
	<header>
		<nav>
			{#each props.links as link}
				<div>
					<a href="/{link.toLowerCase()}">{link}</a>
				</div>
			{/each}
		</nav>

		<div class="cmd-picker">
			<button title="coming soon...">
				<Command width="20" height="20"/>
			</button>
		</div>
	</header>
</main>

<style lang="scss">
	main {
		position: relative;
		box-sizing: border-box;
		padding-top: 32px;
		header {
			justify-content: space-between;
			display: flex;
			flex-direction: row;
			align-items: center;

			nav {
				justify-content: space-between;
				align-items: center;
				display: flex;

				gap: 34px;
				div {
					align-items: center;
					display: flex;

					a {
						text-decoration: none;
						font-family: var(--font-mono);
						font-size: 16.8px;
						color: white;
						opacity: 0.8;

						transition: opacity 0.2s;
						&:hover {
							opacity: 1;
						}
					}
				}
			}

			.cmd-picker {
				button {
					float: right;
					padding: 8px;

					background-color: #27272a;
					border: 1px solid #3f3f4666;
					border-radius: 6px;

					&:hover {
						background-color: #27272a80;
						border-color: transparent;
					}
				}
			}
		}
	}
</style>
