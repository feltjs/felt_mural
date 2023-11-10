<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {Svg_Item} from '$lib/item';
	import Mural_Item_List_Item from '$lib/Mural_Item_List_Item.svelte';

	// TODO ideally these aren't writable, but then event handlers have to cast
	export let items: Array<Writable<Svg_Item>>;
	export let itemSelection: Writable<Writable<Svg_Item> | null>;

	$: sorted = items.slice().reverse();
</script>

<ul class="width_md">
	{#each sorted as item (item)}
		<Mural_Item_List_Item {item} {itemSelection} on:action />
	{/each}
</ul>

<style>
	ul {
		padding: var(--spacing_1) 0;
	}
</style>
