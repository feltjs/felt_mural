<script lang="ts">
	import {get, writable, type Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';

	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import MuralItem from '$lib/MuralItem.svelte';
	import MuralItemList from '$lib/MuralItemList.svelte';
	import {
		createCircle,
		createPolyline,
		DEFAULT_POLYLINE_STROKE,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		parsers,
		toPointsData,
		updateItemData,
		type ItemId,
		type SvgItem,
		type MuralAction,
	} from '$lib/item';

	const dispatch = createEventDispatcher<{action: MuralAction}>();

	export let items: Array<Writable<SvgItem>> = [];
	export let width: number;
	export let height: number;
	// TODO see `Surface` file comments,
	// its design is fundamentally broken and this inherited API
	// will either have to change or its values set in this component with custom logic,
	// because we'll switch to SVG elements receiving the interaction events -
	// unless we can use bubbling to do this automatically for us?
	export let pointing: boolean | undefined = undefined;
	export let pointerDown: boolean | undefined = undefined;
	export let pointerX: number | undefined = undefined;
	export let pointerY: number | undefined = undefined;
	export let scale: number | undefined = undefined;

	const createItem = (): SvgItem | null => {
		const itemData =
			selectedBrush === 'pen' || selectedBrush === 'polyline'
				? createPolyline()
				: selectedBrush === 'circle'
				? createCircle(pointerX, pointerY)
				: null;
		if (!itemData) return null;
		return itemData;
	};

	// hooks that can be overridden or externally bound for calling
	export let addItem: (
		list: Array<Writable<SvgItem>>,
		item: Writable<SvgItem>,
		id: ItemId,
	) => Array<Writable<SvgItem>> = (list, item) => list.concat(item);
	export let updateItem: <TItem extends SvgItem>(
		item: Writable<TItem>,
		data: Partial<TItem>,
	) => void = (item, data) => updateItemData(item, data as any); // TODO type hack
	export let selectItemToDraw: (list: Array<Writable<SvgItem>>) => Writable<SvgItem> | undefined = (
		list,
	) => $itemSelection || list.at(-1);
	export let removeItem: (
		list: Array<Writable<SvgItem>>,
		item: Writable<SvgItem>,
		id: ItemId,
	) => Array<Writable<SvgItem>> = (list, item): Array<Writable<SvgItem>> =>
		list.filter((e) => e !== item);
	export let removeAllItems: (list: Array<Writable<SvgItem>>) => Array<Writable<SvgItem>> = (
		_list,
	) => [];

	const itemsById = new Map<string, Writable<SvgItem>>();

	export const handleAction = (action: MuralAction): void => {
		switch (action.type) {
			case 'addItem': {
				const item = writable(action.item);
				itemsById.set(action.item.id, item);
				items = addItem(items, item, action.item.id);
				break;
			}
			case 'updateItem': {
				const item = itemsById.get(action.id);
				if (!item) return;
				updateItem(item, action.data);
				break;
			}
			case 'removeItem': {
				const item = itemsById.get(action.id);
				if (!item) return;
				itemsById.delete(action.id);
				items = removeItem(items, item, action.id);
				break;
			}
			case 'removeAllItems': {
				itemsById.clear();
				items = removeAllItems(items);
				break;
			}
		}
	};

	const act = (action: MuralAction): any => {
		dispatch('action', action);
		handleAction(action);
	};

	// TODO where does this belog? might need to add `mural.ts`
	type BrushType = 'pen' | 'polyline' | 'circle';

	// other options
	export let brushes: BrushType[] = ['pen', 'polyline', 'circle'];
	export let selectedBrush: BrushType = brushes[0];
	export let itemSelection: Writable<Writable<SvgItem> | null> = writable(null);

	$: if (pointerDown) {
		startDrawing();
	} else if (pointerDown === false) {
		// ignore `undefined`
		stopDrawing();
	}
	let drawing = false;
	const startDrawing = () => {
		if (drawing) return;
		// TODO these probably won't stay simple, but if they do we could bind `pointerDown` directly to `drawing`
		drawing = true;
		if ($itemSelection) return;
		const item = createItem();
		if (!item) return;
		act({type: 'addItem', item});
		// TODO refactor this, very gross
		if (selectedBrush === 'polyline') {
			$itemSelection = items.find((e) => get(e).id === item.id) || null;
		}
	};
	const stopDrawing = () => {
		if (!drawing) return;
		drawing = false;
	};

	$: if (drawing && pointerX !== undefined && pointerY !== undefined) drawAt(pointerX, pointerY);
	const drawAt = (x: number, y: number) => {
		const item = selectItemToDraw(items);
		if (!item) return; // we expect an item but just in case
		const {id, type} = get(item);
		// TODO seems like this belongs in `updateItem`
		if (type === 'polyline') {
			act({
				type: 'updateItem',
				id,
				data: {appendPoints: [parsers.x(x), parsers.y(y)]},
			});
			// TODO ideally wouldn't have to cast the type here or use `get` above
		} // else unhandled type
	};

	$: enableBrushes = $itemSelection === null;

	$: selectedItem = $itemSelection;
	$: selectedPolylinePointsData =
		$selectedItem?.type === 'polyline' ? toPointsData($selectedItem) : undefined;
</script>

<div class="mural" class:active={pointerDown} style:--width="{width}px" style:--height="{height}px">
	<div class="content">
		<Scaled {width} {height} bind:scale>
			<!-- TODO see `Surface` file comments, its design is fundamentally broken -->
			<Surface
				bind:pointing
				bind:pointerDown
				bind:pointerX
				bind:pointerY
				{scale}
				cancelOnLeave={false}
			>
				<!-- TODO maybe extract `MuralContent` or `MuralItemList` or similar -->
				<!-- TODO maybe should be `SvgItem` instead? and `SvgItems`? -->
				<svg>
					{#each items as item (item)}
						<MuralItem {item} />
					{/each}
					{#if pointing && !pointerDown && selectedBrush === 'polyline' && $selectedItem?.type === 'polyline' && selectedPolylinePointsData?.length}
						<line
							x1={selectedPolylinePointsData.at(-2)}
							y1={selectedPolylinePointsData.at(-1)}
							x2={pointerX}
							y2={pointerY}
							stroke={$selectedItem.stroke ?? DEFAULT_POLYLINE_STROKE}
							stroke-width={$selectedItem.strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
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
					class:selected={enableBrushes && selectedBrush === brush}
					on:click={() => {
						$itemSelection = null;
						selectedBrush = brush;
					}}
				>
					{brush}
				</button>
			{/each}
		</div>
		<button
			on:click={() => {
				$itemSelection = null;
				act({type: 'removeAllItems'});
			}}
			disabled={!items.length}
		>
			clear all
		</button>
	</div>
	<MuralItemList {items} on:action={(e) => act(e.detail)} {itemSelection} />
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
