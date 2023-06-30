<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import Nav from '$routes/Nav.svelte';
	import Themed from '$lib/Themed.svelte';
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
