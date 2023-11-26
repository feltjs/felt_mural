<script lang="ts">
	import {get, writable, type Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';

	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import Mural_Item from '$lib/Mural_Item.svelte';
	import Mural_Item_List from '$lib/Mural_Item_List.svelte';
	import {
		create_circle,
		create_polyline,
		DEFAULT_POLYLINE_STROKE,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		parsers,
		to_points_data,
		update_item_data,
		type Item_Id,
		type Svg_Item,
		type Mural_Action,
	} from '$lib/item';

	const dispatch = createEventDispatcher<{action: Mural_Action}>();

	export let items: Array<Writable<Svg_Item>> = [];
	export let width: number;
	export let height: number;
	// TODO see `Surface` file comments,
	// its design is fundamentally broken and this inherited API
	// will either have to change or its values set in this component with custom logic,
	// because we'll switch to SVG elements receiving the interaction events -
	// unless we can use bubbling to do this automatically for us?
	export let pointing: boolean | undefined = undefined;
	export let pointer_down: boolean | undefined = undefined;
	export let pointer_x: number | undefined = undefined;
	export let pointer_y: number | undefined = undefined;
	export let scale: number | undefined = undefined;

	const create_item = (): Svg_Item | null => {
		const item_data =
			selected_brush === 'pen' || selected_brush === 'polyline'
				? create_polyline()
				: selected_brush === 'circle'
				  ? create_circle(pointer_x, pointer_y)
				  : null;
		if (!item_data) return null;
		return item_data;
	};

	// hooks that can be overridden or externally bound for calling
	export let add_item: (
		list: Array<Writable<Svg_Item>>,
		item: Writable<Svg_Item>,
		id: Item_Id,
	) => Array<Writable<Svg_Item>> = (list, item) => list.concat(item);
	export let update_item: <TItem extends Svg_Item>(
		item: Writable<TItem>,
		data: Partial<TItem>,
	) => void = (item, data) => update_item_data(item, data as any); // TODO type hack
	export let select_item_to_draw: (
		list: Array<Writable<Svg_Item>>,
	) => Writable<Svg_Item> | undefined = (list) => $item_selection || list.at(-1);
	export let remove_item: (
		list: Array<Writable<Svg_Item>>,
		item: Writable<Svg_Item>,
		id: Item_Id,
	) => Array<Writable<Svg_Item>> = (list, item): Array<Writable<Svg_Item>> =>
		list.filter((e) => e !== item);
	export let remove_all_items: (list: Array<Writable<Svg_Item>>) => Array<Writable<Svg_Item>> = (
		_list,
	) => [];

	const items_by_id = new Map<string, Writable<Svg_Item>>();

	export const handle_action = (action: Mural_Action): void => {
		switch (action.type) {
			case 'add_item': {
				const item = writable(action.item);
				items_by_id.set(action.item.id, item);
				items = add_item(items, item, action.item.id);
				break;
			}
			case 'update_item': {
				const item = items_by_id.get(action.id);
				if (!item) return;
				update_item(item, action.data);
				break;
			}
			case 'remove_item': {
				const item = items_by_id.get(action.id);
				if (!item) return;
				items_by_id.delete(action.id);
				items = remove_item(items, item, action.id);
				break;
			}
			case 'remove_all_items': {
				items_by_id.clear();
				items = remove_all_items(items);
				break;
			}
		}
	};

	const act = (action: Mural_Action): any => {
		dispatch('action', action);
		handle_action(action);
	};

	// TODO where does this belog? might need to add `mural.ts`
	type Brush_Type = 'pen' | 'polyline' | 'circle';

	// other options
	export let brushes: Brush_Type[] = ['pen', 'polyline', 'circle'];
	export let selected_brush: Brush_Type = brushes[0];
	export let item_selection: Writable<Writable<Svg_Item> | null> = writable(null);

	$: if (pointer_down) {
		start_drawing();
	} else if (pointer_down === false) {
		// ignore `undefined`
		stop_drawing();
	}
	let drawing = false;
	const start_drawing = () => {
		if (drawing) return;
		// TODO these probably won't stay simple, but if they do we could bind `pointer_down` directly to `drawing`
		drawing = true;
		if ($item_selection) return;
		const item = create_item();
		if (!item) return;
		act({type: 'add_item', item});
		// TODO refactor this, very gross
		if (selected_brush === 'polyline') {
			$item_selection = items.find((e) => get(e).id === item.id) || null;
		}
	};
	const stop_drawing = () => {
		if (!drawing) return;
		drawing = false;
	};

	$: if (drawing && pointer_x !== undefined && pointer_y !== undefined)
		draw_at(pointer_x, pointer_y);
	const draw_at = (x: number, y: number) => {
		const item = select_item_to_draw(items);
		if (!item) return; // we expect an item but just in case
		const {id, type} = get(item);
		// TODO seems like this belongs in `update_item`
		if (type === 'polyline') {
			act({
				type: 'update_item',
				id,
				data: {append_points: [parsers.x(x), parsers.y(y)]},
			});
			// TODO ideally wouldn't have to cast the type here or use `get` above
		} // else unhandled type
	};

	$: enable_brushes = $item_selection === null;

	$: selected_item = $item_selection;
	$: selected_polyline_points_data =
		$selected_item?.type === 'polyline' ? to_points_data($selected_item) : undefined;
</script>

<div
	class="mural"
	class:active={pointer_down}
	style:--width="{width}px"
	style:--height="{height}px"
>
	<div class="content">
		<Scaled {width} {height} bind:scale>
			<!-- TODO see `Surface` file comments, its design is fundamentally broken -->
			<Surface
				bind:pointing
				bind:pointer_down
				bind:pointer_x
				bind:pointer_y
				{scale}
				cancel_on_leave={false}
			>
				<!-- TODO maybe extract `MuralContent` or `Mural_Item_List` or similar -->
				<!-- TODO maybe should be `Svg_Item` instead? and `Svg_Items`? -->
				<svg>
					{#each items as item (item)}
						<Mural_Item {item} />
					{/each}
					{#if pointing && !pointer_down && selected_brush === 'polyline' && $selected_item?.type === 'polyline' && selected_polyline_points_data?.length}
						<line
							x1={selected_polyline_points_data.at(-2)}
							y1={selected_polyline_points_data.at(-1)}
							x2={pointer_x}
							y2={pointer_y}
							stroke={$selected_item.stroke ?? DEFAULT_POLYLINE_STROKE}
							stroke-width={$selected_item.stroke_width ?? DEFAULT_POLYLINE_STROKE_WIDTH}
						/>
					{/if}
				</svg>
			</Surface>
		</Scaled>
	</div>
	<div class="controls">
		<div class="row">
			{#each brushes as brush (brush)}
				<button
					class:selected={enable_brushes && selected_brush === brush}
					on:click={() => {
						$item_selection = null;
						selected_brush = brush;
					}}
				>
					{brush}
				</button>
			{/each}
		</div>
		<button
			on:click={() => {
				$item_selection = null;
				act({type: 'remove_all_items'});
			}}
			disabled={!items.length}
		>
			clear all
		</button>
	</div>
	<Mural_Item_List {items} on:action={(e) => act(e.detail)} {item_selection} {width} {height} />
</div>

<style>
	.mural {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
	}
	.content {
		width: var(--width);
		max-width: 100%;
		height: var(--height);
	}
	.controls {
		width: 100%;
		max-width: var(--width);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--spacing_md);
	}
	svg {
		display: block;
		width: var(--width);
		height: var(--height);
		background: var(--mural_bg, transparent);
	}
</style>
