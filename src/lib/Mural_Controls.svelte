<script lang="ts">
	import {GR_2i, GR_i} from '@grogarden/util/maths.js';

	export let opacity: number | undefined = undefined;
	export let fill: string | undefined = undefined;
	export let enable_fill: boolean | undefined = undefined;
	export let stroke: string | undefined = undefined;
	export let stroke_width: number | undefined = undefined;
	export let radius: number | undefined = undefined;

	export let width: number;
	export let height: number;

	// TOD clean up the copypasta below

	$: min_dimension = Math.min(width, height);
	$: max_stroke_width = Math.round(min_dimension * GR_2i);
</script>

<div class="controls">
	<label>
		<small class="title">opacity</small>
		<input
			class="item_input"
			type="range"
			min={0}
			max={1}
			step={0.01}
			bind:value={opacity}
			title="modify the current opacity"
		/>
		<input
			class="item_input"
			type="number"
			min={0}
			max={1}
			step={0.01}
			bind:value={opacity}
			title="modify the current opacity"
		/>
	</label>
	<label title="modify the current fill color">
		<small class="title"
			>{#if !enable_fill || fill === 'none'}no
			{/if}fill</small
		>
		<!-- checked={enable_fill} -->
		<input
			type="checkbox"
			bind:checked={enable_fill}
			title="the current fill is {enable_fill ? 'enabled' : 'disabled'}"
		/>
		<input class="item_input" type="color" disabled={!enable_fill} bind:value={fill} />
	</label>
	<label title="modify the current stroke color">
		<small class="title">stroke color</small>
		<input class="item_input" type="color" bind:value={stroke} />
	</label>
	<label>
		<small class="title">stroke width</small>
		<input
			class="item_input"
			type="range"
			bind:value={stroke_width}
			min={0}
			max={max_stroke_width}
			step={1}
		/>
		<input class="item_input" type="number" bind:value={stroke_width} step={1} />
	</label>
	<label title="modify the current radius">
		<small class="title">radius</small>
		<input
			class="item_input"
			type="range"
			bind:value={radius}
			min={1}
			max={Math.round(min_dimension * GR_i)}
			step={1}
		/>
		<input class="item_input" type="number" bind:value={radius} />
	</label>
</div>

<style>
	.item_input {
		width: 8rem;
		min-width: 8rem;
	}
	.controls {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		align-items: flex-start;
	}
	/* TODO play with different checkbox characters ⦿•● (and improve the API - maybe upstream rename to `--checkbox_content`) */
	input[type='checkbox'] {
		--content: '•';
	}
	label {
		padding-bottom: var(--spacing_xs);
	}
</style>
