<script lang="ts">
	import {page} from '$app/stores';

	import {toLibraryPathInfo} from '$routes/library/helpers';
	import {getContext} from 'svelte';

	export let name: string;

	// TODO hacky to avoid a circular dependency problem
	const libraryItemsByName = getContext('libraryItemsByName') as any;
	$: libraryItem = libraryItemsByName.get(name)!;

	$: ({path, pathIsActive} = toLibraryPathInfo(libraryItem.slug, $page.url.pathname));
</script>

<h2 class="box" id={name}>
	{#if pathIsActive}{name}{:else}<a href={path}>{name}</a>{/if}
</h2>
