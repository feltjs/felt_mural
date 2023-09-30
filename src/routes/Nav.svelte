<script lang="ts">
	import {page} from '$app/stores';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	// TODO rename? `PageNav`? `SiteNav`? `Breadcrumb`?

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	$: root = $page.url.pathname === '/';
</script>

<!-- TODO probably change to ul/li once styles are right -->

<nav class:root>
	<Breadcrumb>
		{#if root}
			<span>@feltjs/felt-mural</span>
		{:else}
			<span class="heart">💚</span>
		{/if}
	</Breadcrumb>
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
