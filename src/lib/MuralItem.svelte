<script lang="ts">
	import type {Readable} from 'svelte/store';

	import {
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		type SvgItem,
		DEFAULT_POLYLINE_STROKE,
	} from '$lib/item';

	export let item: Readable<SvgItem>;

	$: ({hidden, pathLength, enableFill, fill, opacity} = $item);
</script>

{#if !hidden}
	{#if $item.type === 'circle'}
		{@const {cx, cy, r} = $item}
		<circle {cx} {cy} {r} {pathLength} fill={enableFill ? fill || 'red' : 'none'} {opacity} />
	{:else if $item.type === 'polyline'}
		{@const {points, stroke, strokeWidth} = $item}
		<!-- TODO is `pathLength` useful? -->
		<!-- TODO for perfomance, consider making `points` a string and parsing the point array only when needed -->
		<polyline
			{points}
			{pathLength}
			fill={enableFill ? fill ?? DEFAULT_POLYLINE_FILL : 'none'}
			{opacity}
			stroke={stroke ?? DEFAULT_POLYLINE_STROKE}
			stroke-width={strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
		/>
	{:else}
		<!-- TODO -->
	{/if}
{/if}
