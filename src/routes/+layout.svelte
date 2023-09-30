<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '@fuz.dev/fuz_code/prism.css'; // TODO maybe import from Code?
	import 'prismjs'; // TODO shouldn't be needed
	import 'prism-svelte'; // TODO shouldn't be needed
	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import Dialog from '@fuz.dev/fuz_dialog/Dialog.svelte';
	import Contextmenu from '@fuz.dev/fuz_contextmenu/Contextmenu.svelte';
	import {create_contextmenu} from '@fuz.dev/fuz_contextmenu/contextmenu.js';

	import Nav from '$routes/Nav.svelte';
	import Settings from '$routes/Settings.svelte';

	const contextmenu = create_contextmenu();

	let showSettings = false;
</script>

<svelte:head>
	<title>@feltjs/felt-mural</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={{
		content: 'Settings',
		icon: '?',
		run: () => {
			showSettings = true;
		},
	}}
/>

<Themed>
	<main>
		<Nav />
		<slot />
	</main>
	<Contextmenu {contextmenu} />
	{#if showSettings}
		<Dialog on:close={() => (showSettings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
