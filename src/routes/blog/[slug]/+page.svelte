<script lang="ts">
	import "$styles/blog.scss";
	import type { PostProps } from "$lib/types";
	export let data: PostProps;
</script>

{#if data}
	<div class="grid">
		<div class="post">
			{@html data.body}
		</div>
		<div class="sidebar">
			<div class="post-info">
				<h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M4 7v12h15v2H4c-2 0-2-2-2-2V7h2m17.3-4H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M8 5h5v6H8V5m13 10H8v-2h13v2m0-4h-6V9h6v2m0-4h-6V5h6v2Z"
						/></svg
					>
					post details
				</h2>
				<ul>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5Z"
							/></svg
						>
						{data.timestamp}
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z"
							/></svg
						>
						{data.time2read} min read
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
							/></svg
						>
						{data.views} views
					</li>
				</ul>
				<h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42Z"
						/></svg
					>
					tags
				</h2>
				<div class="tags">
					{#each data.tags as tag}
						<a href="/tag/{tag}" class="tag">{tag}</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
