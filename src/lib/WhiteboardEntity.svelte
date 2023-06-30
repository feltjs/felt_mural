<script lang="ts">
	import type {Readable} from 'svelte/store';
	import {
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		type SvgEntity,
		DEFAULT_POLYLINE_STROKE,
	} from '$lib/entity';

	export let entity: Readable<SvgEntity>;

	$: ({hidden} = $entity);
</script>

{#if !hidden}
	{#if $entity.type === 'circle'}
		<circle
			cx={$entity.cx}
			cy={$entity.cy}
			r={$entity.r}
			pathLength={$entity.pathLength}
			fill={$entity.enableFill ? $entity.fill || 'red' : 'none'}
			opacity={$entity.opacity}
		/>
	{:else if $entity.type === 'polyline'}
		<!-- TODO is `pathLength` useful? -->
		<!-- TODO for perfomance, consider making `points` a string and parsing the point array only when needed -->
		<polyline
			points={$entity.points}
			pathLength={$entity.pathLength}
			fill={$entity.enableFill ? $entity.fill ?? DEFAULT_POLYLINE_FILL : 'none'}
			opacity={$entity.opacity}
			stroke={$entity.stroke ?? DEFAULT_POLYLINE_STROKE}
			stroke-width={$entity.strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
		/>
	{:else}
		<!-- TODO -->
	{/if}
{/if}
