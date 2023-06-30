<script lang="ts">
	import LibraryItemTitle from '$routes/library/LibraryItemTitle.svelte';
	import LibraryPanel from '$routes/library/LibraryPanel.svelte';

	export let name: string;
</script>

<LibraryPanel classes="library_item">
	<header>
		<LibraryItemTitle {name} />
		<slot name="header" />
	</header>
	<slot />
</LibraryPanel>

<style>
	header {
		margin-bottom: var(--spacing_xl3);
	}
</style>
