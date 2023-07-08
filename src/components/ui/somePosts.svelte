<script lang="ts">
	import type { SomePostsProps } from "$lib/types";
	export let props: SomePostsProps;
</script>

<main>
	<h2>
		<div class="title">Latest Posts</div>
		<a class="btn" href="/blog">View all</a>
	</h2>
	<div class="post">
		{#each props as post}
			<h3>
				<a href="/blog/{post.slug}">
					{post.title}
					<p>{post.timestamp} · {post.time2read} min read</p>
				</a>
			</h3>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		h2 {
			font-family: var(--font-sans);
			color: white;

			justify-content: space-between;
			margin: 32px 0;
			display: flex;

			.title {
				font-size: 32px;
			}
			.btn {
				padding: 12px 19px;

				font-size: 16px;
				font-weight: normal;

				color: white;

				border-radius: 6px;
				border: 1px solid #3f3f4666;

				background-color: #27272a;
				text-decoration: none;
				&:hover {
					background-color: #27272a80;
					border-color: transparent;
				}
			}
		}

		h3 {
			border-bottom: 1px solid #3f3f4666;

			&:last-of-type {
				border-width: 0;
			}
			a {
				font-family: var(--font-sans);
				text-decoration: none;
				color: white;

				p {
					font-weight: normal;
					font-size: 14px;
					color: #71717a;

					margin-top: 5px;
				}
			}
		}
	}
</style>
