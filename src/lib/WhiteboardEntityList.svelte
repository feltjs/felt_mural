<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {SvgEntity} from '$lib/entity';
	import WhiteboardEntityListItem from '$lib/WhiteboardEntityListItem.svelte';

	// TODO ideally these aren't writable, but then event handlers have to cast
	export let entities: Array<Writable<SvgEntity>>;
	export let entitySelection: Writable<Writable<SvgEntity> | null>;
</script>

<ul class="width_md">
	{#each entities as entity (entity)}
		<WhiteboardEntityListItem {entity} {entitySelection} on:action />
	{/each}
</ul>

<style>
	ul {
		padding: var(--spacing_xl) 0;
	}
</style>
