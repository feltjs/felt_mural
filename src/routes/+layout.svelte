<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '@feltjs/felt-ui/theme.css';
	import Themed from '@feltjs/felt-ui/Themed.svelte';

	import Nav from '$routes/Nav.svelte';
</script>

<svelte:head>
	<link rel="shortcut icon" href="/favicon.png" />
</svelte:head>

<Themed>
	<main>
		<Nav />
		<slot />
	</main>
</Themed>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
