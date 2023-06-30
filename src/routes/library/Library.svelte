<script lang="ts">
	import {libraryItems, type MenuItemWithComponent} from '$routes/library/items';

	export let items: MenuItemWithComponent[] = libraryItems;
</script>

<div class="library">
	{#each items as item (item)}
		<svelte:component this={item.component} />
	{/each}
</div>

<style>
	.library {
		width: 100%;
	}
	.library :global(.library_item) {
		margin-bottom: var(--spacing_xl9) !important;
	}
</style>
