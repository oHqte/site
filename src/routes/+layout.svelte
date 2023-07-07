<script lang="ts">
	import "$styles/styles.scss";
	import { Header, Footer } from "$components/layout";
	import { page } from "$app/stores";
</script>

<main>
	<div class="con1">
		<div class="con2">
			<div class="con3" />
		</div>
	</div>
	<div class="wrap1">
		<div class="wrap2">
			<div class="wrap3">
				<div class="wrap4">
					<div class="wrap5">
						<Header
							props={{
								icon: "/favicon.png",
								links: ["Home", "Blog", "Projects", "Connect"]
							}}
						/>
						<slot />
					</div>
					<Footer
						props={{
							links: ["Home", "Blog", "Projects", "Connect"]
						}}
					/>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	:global(html, body) {
		height: 100%;
	}
	:global(body) {
		background: black;
		flex-direction: column;
		display: flex;
	}

	.wrap1 {
		position: relative;

		.wrap2 {
			@media (min-width: 640px) {
				padding: 0 32px;
			}
			.wrap3 {
				@media (min-width: 1024px) {
					padding: 0 32px;
				}
				margin: 0 auto;
				max-width: 1280px;

				.wrap4 {
					@media (min-width: 1024px) {
						padding: 48px;
					}
					@media (min-width: 640px) {
						padding: 0 32px;
					}
					padding: 0 16px;

					.wrap5 {
						@media (min-width: 1024px) {
							max-width: 1024px;
						}
						margin: 0 auto;
					}
				}
			}
		}
	}
	.con1 {
		@media (min-width: 640px) {
			padding: 0 32px;
		}
		justify-content: center;
		display: flex;
		inset: 0;
		position: fixed;

		.con2 {
			@media (min-width: 1024px) {
				padding: 0 32px;
			}
			max-width: 1280px;
			width: 100%;
			box-sizing: border-box;
			display: flex;

			.con3 {
				background-color: #18181b;
				width: 100%;
				box-sizing: border-box;
				box-shadow: white 0px 0px 0px 0px, #d4d4d833 0px 0px 0px 1px, black 0px 0px 0px 0px;
			}
		}
	}
</style>
