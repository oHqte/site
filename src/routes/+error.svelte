<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="wrap1">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}.</p>
</div>

<style lang="scss">
	.wrap1 {
		margin-top: 96px;
		padding-bottom: 24.5vh;

		h1 {
			font-family: var(--font-sans);
			color: white;
			font-weight: 700;
			font-size: 48px;
			margin: 0;
		}
		p {
			margin-top: 24px;
			color: white;
			font-weight: 500;
			font-family: var(--font-sans);
		}
	}
</style>
