<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';
	import {base} from '$app/paths';

	import type {MenuItem} from '$routes/library/items';
	import LibraryPanel from '$routes/library/LibraryPanel.svelte';

	// itemsMenu floats alongside the docs, showing scrolled item as active
	export let items: MenuItem[];

	let itemsByCategory: Record<string, MenuItem[]>;
	$: itemsByCategory = items.reduce(
		(result, c) => {
			if (!(c.category in result)) result[c.category] = [];
			result[c.category].push(c);
			return result;
		},
		{} as Record<string, MenuItem[]>,
	);
</script>

{#each Object.entries(itemsByCategory) as [category, items] (category)}
	<div transition:slide>
		<LibraryPanel>
			<div class="library-menu">
				<slot {category}>
					<h6>{category}</h6>
				</slot>
				<menu>
					{#each items as item (item.slug)}
						<li role="none" transition:slide>
							<a
								href="{base}/library/{item.slug}"
								class:selected={item.pathname === $page.url.pathname}>{item.name}</a
							>
						</li>
					{/each}
				</menu>
			</div>
		</LibraryPanel>
	</div>
{/each}

<style>
	.library-menu,
	menu {
		width: 100%;
	}
	h6 {
		padding-bottom: var(--spacing_sm);
	}
	h6:not(:first-child) {
		margin-top: var(--spacing_xl);
	}
</style>
