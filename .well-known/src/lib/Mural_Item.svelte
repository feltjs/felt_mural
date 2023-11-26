<script lang="ts">
	import type {Readable} from 'svelte/store';

	import {
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		type Svg_Item,
		DEFAULT_POLYLINE_STROKE,
	} from '$lib/item';

	export let item: Readable<Svg_Item>;

	$: ({hidden, path_length, enable_fill, fill, opacity, stroke, stroke_width} = $item);
</script>

{#if !hidden}
	{#if $item.type === 'circle'}
		{@const {cx, cy, radius: r} = $item}
		<circle
			{cx}
			{cy}
			{r}
			pathLength={path_length}
			fill={enable_fill ? fill || 'red' : 'none'}
			{opacity}
			stroke={stroke ?? DEFAULT_POLYLINE_STROKE}
			stroke-width={stroke_width ?? DEFAULT_POLYLINE_STROKE_WIDTH}
		/>
	{:else if $item.type === 'polyline'}
		{@const {points} = $item}
		<!-- TODO is `path_length` useful? -->
		<!-- TODO for perfomance, consider making `points` a string and parsing the point array only when needed -->
		<polyline
			{points}
			pathLength={path_length}
			fill={enable_fill ? fill ?? DEFAULT_POLYLINE_FILL : 'none'}
			{opacity}
			stroke={stroke ?? DEFAULT_POLYLINE_STROKE}
			stroke-width={stroke_width ?? DEFAULT_POLYLINE_STROKE_WIDTH}
		/>
	{:else}
		<!-- TODO -->
	{/if}
{/if}
