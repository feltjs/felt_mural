<script lang="ts">
	import {page} from '$app/stores';
	import 'prismjs/themes/prism.min.css';
	import {setContext} from 'svelte';

	import LibraryMenu from '$routes/library/LibraryMenu.svelte';
	import {libraryItemsByName, libraryItems} from '$routes/library/items';
	import FeltFooter from '$routes/FeltFooter.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import LibraryPanel from '$routes/library/LibraryPanel.svelte';

	$: selectedItem = libraryItems.find((c) => c.pathname === $page.url.pathname);
	$: itemsRelatedToSelected = selectedItem?.related?.map((r) => libraryItemsByName.get(r)!);

	// TODO hacky to avoid a circular dependency problem
	setContext('libraryItemsByName', libraryItemsByName);
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
		<div class="prose box">
			<blockquote>
				styles and UI components for <a href="https://svelte.dev/">Svelte</a>
				and <a href="https://kit.svelte.dev/">SvelteKit</a>
			</blockquote>
			<blockquote class="box">
				<code
					>npm i -D <a href="https://www.npmjs.com/package/@feltjs/felt-ui">@feltjs/felt-ui</a
					></code
				>
			</blockquote>
			<blockquote class="box">
				<a href="https://github.com/feltjs/felt-ui">github.com/feltjs/felt-ui</a>
			</blockquote>
		</div>
	</LibraryPanel>
	<slot />
	<section class="box">
		<FeltFooter />
	</section>
	<section class="box">
		<Breadcrumbs>💚</Breadcrumbs>
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
