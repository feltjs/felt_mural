<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {SvgItem} from '$lib/item';
	import MuralItemListItem from '$lib/MuralItemListItem.svelte';

	// TODO ideally these aren't writable, but then event handlers have to cast
	export let items: Array<Writable<SvgItem>>;
	export let itemSelection: Writable<Writable<SvgItem> | null>;

	$: sorted = items.slice().reverse();
</script>

<ul class="width_md">
	{#each sorted as item (item)}
		<MuralItemListItem {item} {itemSelection} on:action />
	{/each}
</ul>

<style>
	ul {
		padding: var(--spacing_xl) 0;
	}
</style>
