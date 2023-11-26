<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';

	import {
		type Svg_Item,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		DEFAULT_POLYLINE_FILL_2,
		type Mural_Action,
		to_points_data,
	} from '$lib/item';

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
</script>

<li
	class="mural_item_list_item selectable"
	class:hidden
	class:selected
	aria-hidden
	on:click={() => ($item_selection = item)}
>
	<button
		class="icon_button plain"
		class:selected={hidden}
		on:click={() =>
			dispatch('action', {
				type: 'update_item',
				id: $item.id,
				data: {hidden: !$item.hidden},
			})}
		>{#if hidden}•{:else}👁{/if}</button
	>
	<div class="controls">
		<div class="type">{$item.type}</div>
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
				on:input={(e) =>
					dispatch('action', {
						type: 'update_item',
						id: $item.id,
						data: {stroke_width: Number(e.currentTarget.value)},
					})}
			/>
		</label>
		<!-- TODO `path_length` input (maybe a range?) -->
		{#if $item.type === 'circle'}
			<label title="modify the {$item.type}'s x position">
				<small class="title">x</small>
				<input
					class="item_input"
					type="range"
					value={$item.cx}
					min={0}
					max={width}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {cx: Number(e.currentTarget.value)},
						})}
				/>
				<input
					class="item_input"
					type="number"
					value={$item.cx}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {cx: Number(e.currentTarget.value)},
						})}
				/>
			</label>
			<label title="modify the {$item.type}'s y position">
				<small class="title">y</small>
				<input
					class="item_input"
					type="range"
					value={$item.cy}
					min={0}
					max={height}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {cy: Number(e.currentTarget.value)},
						})}
				/>
				<input
					class="item_input"
					type="number"
					value={$item.cy}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {cy: Number(e.currentTarget.value)},
						})}
				/>
			</label>
			<label title="modify the {$item.type}'s radius">
				<small class="title">radius</small>
				<input
					class="item_input"
					type="range"
					value={$item.r}
					min={1}
					max={200}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {r: Number(e.currentTarget.value)},
						})}
				/>
				<input
					class="item_input"
					type="number"
					value={$item.r}
					on:input={(e) =>
						dispatch('action', {
							type: 'update_item',
							id: $item.id,
							data: {r: Number(e.currentTarget.value)},
						})}
				/>
			</label>
		{:else if $item.type === 'polyline'}
			<span class="content">
				{to_points_data($item).length}
				<br />
				<small>points</small>
			</span>
		{/if}
	</div>
	<button
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
		width: 8rem;
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
	.content {
		padding: 0 var(--spacing_md);
		flex: 1;
	}
	/* TODO play with different checkbox characters ⦿•● (and improve the API - maybe upstream rename to `--checkbox_content`) */
	input[type='checkbox'] {
		--content: '•';
	}
	label {
		padding-bottom: var(--spacing_xs);
	}
</style>
