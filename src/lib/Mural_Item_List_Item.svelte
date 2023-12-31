<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';
	import {GR_2i, GR_i} from '@grogarden/util/maths.js';

	import {
		type Svg_Item,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		DEFAULT_POLYLINE_FILL_2,
		type Mural_Action,
		to_points_data,
	} from '$lib/item.js';

	export let item: Writable<Svg_Item>;
	export let item_selection: Writable<Writable<Svg_Item> | null>;
	export let width: number;
	export let height: number;

	$: selected = $item_selection === item;

	const dispatch = createEventDispatcher<{action: Mural_Action}>();

	$: ({enable_fill, fill, hidden, opacity} = $item);
	$: final_fill = enable_fill ? fill ?? DEFAULT_POLYLINE_FILL : 'none';
	$: final_opacity = opacity ?? 1;

	// TOD clean up the copypasta below

	$: min_dimension = Math.min(width, height);
	$: max_stroke_width = Math.round(min_dimension * GR_2i);

	$: min_x = $item.type === 'circle' ? 0 : width / -2;
	$: max_x = $item.type === 'circle' ? width : width / 2;
	$: min_y = $item.type === 'circle' ? 0 : height / -2;
	$: max_y = $item.type === 'circle' ? height : height / 2;
</script>

<li
	class="mural_item_list_item selectable"
	class:hidden
	class:selected
	aria-hidden
	on:click={() => ($item_selection = item)}
>
	<button
		type="button"
		class="icon_button plain deselectable"
		class:selected={hidden}
		on:click={() =>
			dispatch('action', {
				type: 'update_item',
				id: $item.id,
				data: {hidden: !$item.hidden},
			})}
		>{#if hidden}●{:else}👁{/if}</button
	>
	<div class="controls">
		<div class="type">
			<div class="spaced">{$item.type}</div>
			{#if $item.type === 'polyline'}
				<div>
					{to_points_data($item).length} <small>points</small>
				</div>
			{/if}
		</div>
		<label>
			<small class="title">opacity</small>
			<input
				class="item_input"
				type="range"
				min={0}
				max={1}
				step={0.01}
				value={final_opacity}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {opacity: Number(e.currentTarget.value)},
					})}
				title="modify the {$item.type}'s opacity"
			/>
			<input
				class="item_input"
				type="number"
				min={0}
				max={1}
				step={0.01}
				value={final_opacity}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {opacity: Number(e.currentTarget.value)},
					})}
				title="modify the {$item.type}'s opacity"
			/>
		</label>
		<label title="modify the {$item.type}'s fill color">
			<small class="title"
				>{#if !enable_fill || final_fill === 'none'}no
				{/if}fill</small
			>
			<input
				type="checkbox"
				checked={enable_fill}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {
							enable_fill: e.currentTarget.checked,
							fill: fill ?? (e.currentTarget.checked ? DEFAULT_POLYLINE_FILL_2 : undefined),
						},
					})}
				title="the {$item.type}'s fill is {$item.enable_fill ? 'enabled' : 'disabled'}"
			/>
			<input
				class="item_input"
				type="color"
				disabled={!enable_fill}
				value={final_fill === 'none' ? '#000000' : final_fill}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {fill: e.currentTarget.value},
					})}
			/>
		</label>
		<label title="modify the {$item.type}'s stroke color">
			<small class="title">stroke color</small>
			<input
				class="item_input"
				type="color"
				value={$item.stroke ?? '#000000'}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {stroke: e.currentTarget.value},
					})}
			/>
		</label>
		<label>
			<small class="title">stroke width</small>
			<input
				class="item_input"
				type="range"
				value={$item.stroke_width ?? DEFAULT_POLYLINE_STROKE_WIDTH}
				min={0}
				max={max_stroke_width}
				step={1}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {stroke_width: Number(e.currentTarget.value)},
					})}
			/>
			<input
				class="item_input"
				type="number"
				value={$item.stroke_width ?? DEFAULT_POLYLINE_STROKE_WIDTH}
				step={1}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {stroke_width: Number(e.currentTarget.value)},
					})}
			/>
		</label>
		<label title="modify the {$item.type}'s x position">
			<small class="title">x</small>
			<input
				class="item_input"
				type="range"
				value={$item.x}
				min={min_x}
				max={max_x}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {x: Number(e.currentTarget.value)},
					})}
			/>
			<input
				class="item_input"
				type="number"
				value={$item.x}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {x: Number(e.currentTarget.value)},
					})}
			/>
		</label>
		<label title="modify the {$item.type}'s y position">
			<small class="title">y</small>
			<input
				class="item_input"
				type="range"
				value={$item.y}
				min={min_y}
				max={max_y}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {y: Number(e.currentTarget.value)},
					})}
			/>
			<input
				class="item_input"
				type="number"
				value={$item.y}
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {y: Number(e.currentTarget.value)},
					})}
			/>
		</label>
		<!-- TODO `path_length` input (maybe a range?) -->
		{#if $item.type === 'circle'}
			<label title="modify the {$item.type}'s radius">
				<small class="title">radius</small>
				<input
					class="item_input"
					type="range"
					value={$item.radius}
					min={1}
					max={Math.round(min_dimension * GR_i)}
					step={1}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {radius: Number(e.currentTarget.value)},
						})}
				/>
				<input
					class="item_input"
					type="number"
					value={$item.radius}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {radius: Number(e.currentTarget.value)},
						})}
				/>
			</label>
		{/if}
	</div>
	<button
		type="button"
		class="icon_button plain"
		on:click={() => dispatch('action', {type: 'remove_item', id: $item.id})}>🗙</button
	>
</li>

<style>
	.mural_item_list_item {
		border-radius: var(--border_radius);
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.hidden {
		opacity: var(--faded_2);
	}
	.type {
		padding-top: var(--spacing_xs);
		padding-left: var(--spacing_xs);
		width: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
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
		--content: '●';
	}
	label {
		padding-bottom: var(--spacing_xs);
	}
</style>
