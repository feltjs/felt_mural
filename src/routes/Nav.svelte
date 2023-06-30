<script lang="ts">
	import {page} from '$app/stores';
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	// TODO rename? `PageNav`? `SiteNav`? `Breadcrumbs`?

	// TODO this could be a prop passed by `Breadcrumbs`, is commonly needed
	$: root = $page.url.pathname === '/';
</script>

<!-- TODO probably change to ul/li once styles are right -->

<nav class:root>
	<Breadcrumbs>
		{#if root}
			<span>@feltjs/felt-mural</span>
		{:else}
			<span class="heart">💚</span>
		{/if}
	</Breadcrumbs>
</nav>

<style>
	nav {
		font-size: var(--size_xl);
	}
	.root {
		--text_decoration_selected: none;
	}
	.heart {
		font-size: var(--size_md);
	}
</style>
