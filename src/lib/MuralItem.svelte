<script lang="ts">
	import type {Readable} from 'svelte/store';
	import {
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		type SvgItem,
		DEFAULT_POLYLINE_STROKE,
	} from '$lib/item';

	export let item: Readable<SvgItem>;

	$: ({hidden} = $item);
</script>

{#if !hidden}
	{#if $item.type === 'circle'}
		<circle
			cx={$item.cx}
			cy={$item.cy}
			r={$item.r}
			pathLength={$item.pathLength}
			fill={$item.enableFill ? $item.fill || 'red' : 'none'}
			opacity={$item.opacity}
		/>
	{:else if $item.type === 'polyline'}
		<!-- TODO is `pathLength` useful? -->
		<!-- TODO for perfomance, consider making `points` a string and parsing the point array only when needed -->
		<polyline
			points={$item.points}
			pathLength={$item.pathLength}
			fill={$item.enableFill ? $item.fill ?? DEFAULT_POLYLINE_FILL : 'none'}
			opacity={$item.opacity}
			stroke={$item.stroke ?? DEFAULT_POLYLINE_STROKE}
			stroke-width={$item.strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
		/>
	{:else}
		<!-- TODO -->
	{/if}
{/if}
