<script lang="ts">
	import {get, writable, type Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';
	import Copy_To_Clipboard from '@fuz.dev/fuz_library/Copy_To_Clipboard.svelte';
	import Dialog from '@fuz.dev/fuz_dialog/Dialog.svelte';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';

	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import Mural_Item from '$lib/Mural_Item.svelte';
	import Mural_Controls from '$lib/Mural_Controls.svelte';
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
	} from '$lib/item.js';

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
		const item =
			selected_brush === 'pen' || selected_brush === 'polyline'
				? create_polyline(
						selected_fill,
						selected_enable_fill,
						selected_stroke,
						selected_stroke_width,
						selected_opacity,
				  )
				: selected_brush === 'circle'
				  ? create_circle(
							pointer_x,
							pointer_y,
							selected_radius,
							selected_fill,
							selected_enable_fill,
							selected_stroke,
							selected_stroke_width,
							selected_opacity,
				    )
				  : null;
		if (!item) return null;
		update_selected_values(item);
		return item;
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

	// drawing options history
	export let selected_opacity: number | undefined = undefined;
	export let selected_fill: string | undefined = undefined;
	export let selected_enable_fill: boolean | undefined = undefined;
	export let selected_stroke: string | undefined = undefined;
	export let selected_stroke_width: number | undefined = undefined;
	export let selected_radius: number | undefined = undefined;

	const update_selected_values = (item: Svg_Item) => {
		selected_opacity = item.opacity;
		selected_fill = item.fill;
		selected_enable_fill = item.enable_fill;
		selected_stroke = item.stroke;
		selected_stroke_width = item.stroke_width;
		if (item.type === 'circle') {
			selected_radius = item.radius;
		}
	};

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

	const serialize_data = () => {
		return JSON.stringify(items.map((item) => get(item)));
	};

	let serialized: string | undefined;
	let serialized_el: HTMLTextAreaElement | undefined;

	let importing_data = false;
	let import_error_message: string | undefined;

	const start_importing_data = () => {
		serialized = serialize_data();
		importing_data = true;
	};
	const import_data = (str: string) => {
		if (!str) return;
		import_error_message = undefined;
		let parsed: any[]; // TODO type, use Zod
		try {
			parsed = JSON.parse(str);
		} catch (_) {
			// TODO improve message with zod
			import_error_message = 'failed to parse the data, is there a typo?';
			if (serialized_el) {
				serialized_el.focus();
				serialized_el.select();
			}
			return;
		}
		act({type: 'remove_all_items'});
		for (const item of parsed) {
			act({type: 'add_item', item});
		}
		importing_data = false;
	};

	$: enable_brushes = $item_selection === null;

	$: selected_item = $item_selection;
	$: selected_polyline_points_data =
		$selected_item?.type === 'polyline' ? to_points_data($selected_item) : undefined;

	$: $selected_item && update_selected_values($selected_item);
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
	<form>
		<fieldset>
			{#each brushes as brush (brush)}
				<button
					type="button"
					class:selected={enable_brushes && selected_brush === brush}
					on:click={() => {
						$item_selection = null;
						selected_brush = brush;
					}}
				>
					{brush}
				</button>
			{/each}
		</fieldset>
		<Mural_Controls
			{width}
			{height}
			bind:opacity={selected_opacity}
			bind:fill={selected_fill}
			bind:enable_fill={selected_enable_fill}
			bind:stroke={selected_stroke}
			bind:stroke_width={selected_stroke_width}
			bind:radius={selected_radius}
		/>
		<fieldset>
			<button type="button" on:click={start_importing_data}>import data</button>
			<button
				type="button"
				on:click={() => {
					$item_selection = null;
					act({type: 'remove_all_items'});
				}}
				disabled={!items.length}
			>
				clear all
			</button>
		</fieldset>
	</form>
	<Mural_Item_List {items} on:action={(e) => act(e.detail)} {item_selection} {width} {height} />
</div>
{#if importing_data}
	<Dialog
		on:close={() => {
			importing_data = false;
			import_error_message = undefined;
		}}
	>
		<div class="pane padded_md prose">
			<p>Copy and paste this data to save and share your murals:</p>
			<textarea
				bind:this={serialized_el}
				bind:value={serialized}
				on:focus={(e) => {
					e.currentTarget.select();
				}}
			/>
			<div class="row">
				<button
					type="button"
					class="spaced_hz"
					disabled={!serialized || serialized === '[]'}
					on:click={() => serialized && import_data(serialized)}>import data</button
				>
				{#if serialized && serialized !== '[]'}
					<div class="spaced_hz">
						<Copy_To_Clipboard text={serialized} />
					</div>
					{serialized.length} characters
				{/if}
			</div>
			{#if import_error_message}
				<Alert status="error">{import_error_message}</Alert>
			{/if}
		</div>
	</Dialog>
{/if}

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
	form {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding-top: var(--spacing_md);
	}
	svg {
		display: block;
		width: var(--width);
		height: var(--height);
		background: var(--mural_bg, transparent);
	}
	fieldset {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
