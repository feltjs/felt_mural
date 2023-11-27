<script lang="ts">
	import type {Readable} from 'svelte/store';

	import {
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		type Svg_Item,
		DEFAULT_POLYLINE_STROKE,
	} from '$lib/item.js';

	export let item: Readable<Svg_Item>;

	$: ({hidden, path_length, enable_fill, fill, opacity, stroke, stroke_width} = $item);
</script>

{#if !hidden}
	{#if $item.type === 'circle'}
		<circle
			cx={$item.x}
			cy={$item.y}
			r={$item.radius}
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
			transform={$item.x || $item.y ? `translate(${$item.x} ${$item.y})` : undefined}
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
