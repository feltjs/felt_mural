<script lang="ts">
	import {page} from '$app/stores';
	import 'prismjs/themes/prism.min.css';
	import {setContext} from 'svelte';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import LibraryMenu from '@fuz.dev/fuz_library/LibraryMenu.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';
	import LibraryPanel from '@fuz.dev/fuz_library/LibraryPanel.svelte';

	import FeltFooter from '$routes/FeltFooter.svelte';
	import Description from '$routes/Description.svelte';

	libraryItemsByName;
	libraryItems;
	set_tomes();

	$: selectedItem = libraryItems.find((c) => c.pathname === $page.url.pathname);
	$: itemsRelatedToSelected = selectedItem?.related?.map((r) => libraryItemsByName.get(r)!);

	// TODO this code needs to be moved into `Library`

	// TODO hacky to avoid a circular dependency problem
	setContext('libraryItemsByName', libraryItemsByName);

	// TODO BLOCK what of this can be extracted?
</script>

<div class="layout width_md">
	<div class="menu-wrapper">
		<div class="menu width_sm">
			<LibraryMenu items={libraryItems} />
			{#if itemsRelatedToSelected}
				<LibraryMenu items={itemsRelatedToSelected} let:category>
					<h6>related {category}</h6>
				</LibraryMenu>
			{/if}
		</div>
	</div>
	<LibraryPanel>
		<Description />
	</LibraryPanel>
	<slot />
	<section class="box">
		<FeltFooter />
	</section>
	<section class="box">
		<Breadcrumb>💚</Breadcrumb>
	</section>
</div>

<style>
	.layout {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: var(--spacing_xl5);
	}
	.menu-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		transform: translate3d(calc(-100% - var(--spacing_sm)), 0, 0);
	}
	.menu {
		position: sticky;
		top: 0;
	}
	@media (max-width: 1200px) {
		.menu-wrapper {
			position: relative;
			transform: none;
			margin-bottom: var(--spacing_xl3);
		}
	}
	section {
		padding: var(--spacing_xl2);
	}
	h6 {
		margin-bottom: var(--spacing_md);
		margin-top: var(--spacing_xl3);
	}
	h6:first-child {
		margin-top: 0;
	}
</style>
