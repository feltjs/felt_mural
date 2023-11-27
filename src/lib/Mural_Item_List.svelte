<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {Svg_Item} from '$lib/item.js';
	import Mural_Item_List_Item from '$lib/Mural_Item_List_Item.svelte';

	// TODO ideally these aren't writable, but then event handlers have to cast
	export let items: Array<Writable<Svg_Item>>;
	export let item_selection: Writable<Writable<Svg_Item> | null>;
	export let width: number;
	export let height: number;

	$: sorted = items.slice().reverse();
</script>

<ul class="width_md">
	{#each sorted as item (item)}
		<Mural_Item_List_Item {item} {item_selection} {width} {height} on:action />
	{/each}
</ul>

<style>
	ul {
		padding: var(--spacing_1) 0;
	}
</style>
