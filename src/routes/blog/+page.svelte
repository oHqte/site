<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { shortcut } from "@svelte-put/shortcut";
</script>

<svelte:window
	use:shortcut={{
		trigger: {
			key: "i",
			modifier: ["alt"],
			callback: () => {
				goto("/auth/signin");
			}
		}
	}}
/>

<br/><br/>
{#if $page.data.session}
	<p class="auth_test">signed in as <code>{$page.data.session.user?.email}</code></p>
{:else}
	<p class="auth_test">signed in as <code>foobar@example.com</code></p>
{/if}
<ul>
	<li class="auth_test"><a href="/auth/signin">sign-in</a></li>
	<br />
	<li class="auth_test"><a href="auth/signout"> sign-out</a></li>
</ul>

<style lang="scss">
	.auth_test {
		color: white;
		font-weight: 600;
		a {
			text-decoration-thickness: 0.5px;
			color: white;

			&:hover {
				opacity:0.8;
			}
		}

		code {
			font-size: 16px;
			font-family: var(--font-mono);

			color:white;
			background-color: rgba(0, 0, 0, 0.2);

			padding: 3.2px 4.8px;
			margin-left: 4.8px;
			border: 1px solid #3f3f4666;
			border-radius: 4px;
		}
	}
</style>
