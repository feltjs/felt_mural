<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';
	import {round} from '@feltjs/util/maths.js';

	import {
		type SvgItem,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		DEFAULT_POLYLINE_FILL,
		DEFAULT_POLYLINE_FILL_2,
		type MuralAction,
		toPointsData,
	} from '$lib/item';

	export let item: Writable<SvgItem>;
	export let itemSelection: Writable<Writable<SvgItem> | null>;

	$: selected = $itemSelection === item;

	const dispatch = createEventDispatcher<{action: MuralAction}>();

	$: ({enableFill, fill, hidden, opacity} = $item);
	$: finalFill = enableFill ? fill ?? DEFAULT_POLYLINE_FILL : undefined;
	$: finalOpacity = opacity ?? 1;

	// TOD clean up the copypasta below
</script>

<li
	class="mural-item-list-item selectable"
	class:hidden
	class:selected
	aria-hidden
	on:click={() => ($itemSelection = item)}
>
	<button
		class="icon_button plain"
		class:selected={hidden}
		on:click={() =>
			dispatch('action', {
				type: 'updateItem',
				id: $item.id,
				data: {hidden: !$item.hidden},
			})}
		>{#if hidden}•{:else}👁{/if}</button
	>
	<div class="type">{$item.type}</div>
	<label>
		<input
			class="item-input"
			type="range"
			min={0}
			max={1}
			step={0.01}
			value={finalOpacity}
			on:input={(e) =>
				dispatch('action', {
					type: 'updateItem',
					id: $item.id,
					data: {opacity: Number(e.currentTarget.value)},
				})}
			title="modify the {$item.type}'s opacity"
		/>
		<small>opacity: {round(finalOpacity, 2)}</small>
	</label>
	<!-- TODO `pathLength` input (maybe a range?) -->
	{#if $item.type === 'circle'}
		<label title="modify the {$item.type}'s x position">
			<input
				class="item-input"
				type="number"
				value={$item.cx}
				on:input={(e) =>
					dispatch('action', {
						type: 'updateItem',
						id: $item.id,
						data: {cx: Number(e.currentTarget.value)},
					})}
			/>
			<small>x</small>
		</label>
		<label title="modify the {$item.type}'s y position">
			<input
				class="item-input"
				type="number"
				value={$item.cy}
				on:input={(e) =>
					dispatch('action', {
						type: 'updateItem',
						id: $item.id,
						data: {cy: Number(e.currentTarget.value)},
					})}
			/>
			<small>y</small>
		</label>
		<label title="modify the {$item.type}'s radius">
			<input
				class="item-input"
				type="number"
				value={$item.r}
				on:input={(e) =>
					dispatch('action', {
						type: 'updateItem',
						id: $item.id,
						data: {r: Number(e.currentTarget.value)},
					})}
			/>
			<small>radius</small>
		</label>
		<div style:flex="1" />
		<div class="togglable">
			<div class="togglable-checkbox-wrapper">
				<input
					type="checkbox"
					checked={enableFill}
					on:input={(e) =>
						dispatch('action', {
							type: 'updateItem',
							id: $item.id,
							data: {enableFill: e.currentTarget.checked},
						})}
					title="the {$item.type}'s fill is {$item.enableFill ? 'enabled' : 'disabled'}"
				/>
			</div>
			<label>
				<input
					class="item-input"
					type="color"
					disabled={!enableFill}
					value={finalFill === 'none' ? '#000000' : finalFill}
					on:input={(e) =>
						dispatch('action', {
							type: 'updateItem',
							id: $item.id,
							data: {fill: e.currentTarget.value},
						})}
				/>
				<small
					>{#if !enableFill || finalFill === 'none'}no {/if}fill</small
				>
			</label>
		</div>
	{:else if $item.type === 'polyline'}
		<label>
			<input
				class="item-input"
				type="number"
				value={$item.strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
				on:input={(e) =>
					dispatch('action', {
						type: 'updateItem',
						id: $item.id,
						data: {strokeWidth: Number(e.currentTarget.value)},
					})}
			/>
			<small>stroke-width</small>
		</label>
		<span class="content">
			{toPointsData($item).length}
			<br />
			<small>points</small>
		</span>
		<div class="togglable">
			<div class="togglable-checkbox-wrapper">
				<input
					type="checkbox"
					checked={enableFill}
					on:input={(e) =>
						dispatch('action', {
							type: 'updateItem',
							id: $item.id,
							data: {
								enableFill: e.currentTarget.checked,
								fill: fill ?? (e.currentTarget.checked ? DEFAULT_POLYLINE_FILL_2 : undefined),
							},
						})}
					title="the {$item.type}'s fill is {$item.enableFill ? 'enabled' : 'disabled'}"
				/>
			</div>
			<label title="modify the {$item.type}'s fill color">
				<input
					class="item-input"
					type="color"
					disabled={!enableFill}
					value={finalFill === 'none' ? '#000000' : finalFill}
					on:input={(e) =>
						dispatch('action', {
							type: 'updateItem',
							id: $item.id,
							data: {fill: e.currentTarget.value},
						})}
				/>
				<small
					>{#if !enableFill || finalFill === 'none'}no {/if}fill</small
				>
			</label>
		</div>
	{/if}
	<button
		class="icon_button plain"
		on:click={() => dispatch('action', {type: 'removeItem', id: $item.id})}>🗙</button
	>
</li>

<style>
	.mural-item-list-item {
		border-radius: var(--border_radius);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.hidden {
		opacity: var(--faded_2);
	}
	.type {
		width: 8rem;
	}
	.item-input {
		width: 8rem;
		min-width: 8rem;
	}
	.content {
		padding: 0 var(--spacing_md);
		flex: 1;
	}
	.togglable {
		padding: 0 var(--spacing_md);
		display: flex;
	}
	/* TODO play with different checkbox characters ⦿•● */
	.togglable input[type='checkbox'] {
		--content: '•';
	}
	.togglable-checkbox-wrapper {
		height: var(--input_height);
		display: flex;
		align-items: center;
	}
	label {
		padding-bottom: var(--spacing_xs);
	}
</style>
