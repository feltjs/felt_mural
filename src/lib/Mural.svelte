<script lang="ts">
	import {get, writable, type Writable} from 'svelte/store';
	import {createEventDispatcher} from 'svelte';

	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import MuralEntity from '$lib/MuralEntity.svelte';
	import MuralEntityList from '$lib/MuralEntityList.svelte';
	import {
		createCircle,
		createPolyline,
		DEFAULT_POLYLINE_STROKE,
		DEFAULT_POLYLINE_STROKE_WIDTH,
		parsers,
		toPointsData,
		updateEntityData,
		type EntityId,
		type SvgEntity,
		type MuralAction,
	} from '$lib/entity';

	const dispatch = createEventDispatcher<{action: MuralAction}>();

	export let entities: Array<Writable<SvgEntity>> = [];
	export let width: number;
	export let height: number;
	export let pointing: boolean | undefined = undefined;
	export let pointerDown: boolean | undefined = undefined;
	export let pointerX: number | undefined = undefined;
	export let pointerY: number | undefined = undefined;
	export let scale: number | undefined = undefined;

	const createEntity = (): SvgEntity | null => {
		const entityData =
			selectedBrush === 'pen' || selectedBrush === 'polyline'
				? createPolyline()
				: selectedBrush === 'circle'
				? createCircle(pointerX, pointerY)
				: null;
		if (!entityData) return null;
		return entityData;
	};

	// hooks that can be overridden or externally bound for calling
	export let addEntity: (
		list: Array<Writable<SvgEntity>>,
		entity: Writable<SvgEntity>,
		id: EntityId,
	) => Array<Writable<SvgEntity>> = (list, entity) => list.concat(entity);
	export let updateEntity: <TEntity extends SvgEntity>(
		entity: Writable<TEntity>,
		data: Partial<TEntity>,
	) => void = (entity, data) => updateEntityData(entity, data as any); // TODO type hack
	export let selectEntityToDraw: (
		list: Array<Writable<SvgEntity>>,
	) => Writable<SvgEntity> | undefined = (list) => $entitySelection || list.at(-1);
	export let removeEntity: (
		list: Array<Writable<SvgEntity>>,
		entity: Writable<SvgEntity>,
		id: EntityId,
	) => Array<Writable<SvgEntity>> = (list, entity): Array<Writable<SvgEntity>> =>
		list.filter((e) => e !== entity);
	export let removeAllEntities: (list: Array<Writable<SvgEntity>>) => Array<Writable<SvgEntity>> = (
		_list,
	) => [];

	const entitiesById = new Map<string, Writable<SvgEntity>>();

	export const handleAction = (action: MuralAction): void => {
		switch (action.type) {
			case 'addEntity': {
				const entity = writable(action.entity);
				entitiesById.set(action.entity.id, entity);
				entities = addEntity(entities, entity, action.entity.id);
				break;
			}
			case 'updateEntity': {
				const entity = entitiesById.get(action.id);
				if (!entity) return;
				updateEntity(entity, action.data);
				break;
			}
			case 'removeEntity': {
				const entity = entitiesById.get(action.id);
				if (!entity) return;
				entitiesById.delete(action.id);
				entities = removeEntity(entities, entity, action.id);
				break;
			}
			case 'removeAllEntities': {
				entitiesById.clear();
				entities = removeAllEntities(entities);
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
	export let entitySelection: Writable<Writable<SvgEntity> | null> = writable(null);

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
		if ($entitySelection) return;
		const entity = createEntity();
		if (!entity) return;
		act({type: 'addEntity', entity});
		// TODO refactor this, very gross
		if (selectedBrush === 'polyline') {
			$entitySelection = entities.find((e) => get(e).id === entity.id) || null;
		}
	};
	const stopDrawing = () => {
		if (!drawing) return;
		drawing = false;
	};

	$: if (drawing && pointerX !== undefined && pointerY !== undefined) drawAt(pointerX, pointerY);
	const drawAt = (x: number, y: number) => {
		const entity = selectEntityToDraw(entities);
		if (!entity) return; // we expect an entity but just in case
		const {id, type} = get(entity);
		// TODO seems like this belongs in `updateEntity`
		if (type === 'polyline') {
			act({
				type: 'updateEntity',
				id,
				data: {appendPoints: [parsers.x(x), parsers.y(y)]},
			});
			// TODO ideally wouldn't have to cast the type here or use `get` above
		} // else unhandled type
	};

	$: enableBrushes = $entitySelection === null;

	$: selectedEntity = $entitySelection;
	$: selectedPolylinePointsData =
		$selectedEntity?.type === 'polyline' ? toPointsData($selectedEntity) : undefined;
</script>

<div class="mural" class:active={pointerDown} style:--width="{width}px" style:--height="{height}px">
	<div class="content">
		<Scaled {width} {height} bind:scale>
			<Surface
				bind:pointing
				bind:pointerDown
				bind:pointerX
				bind:pointerY
				{scale}
				cancelOnLeave={false}
			>
				<!-- TODO maybe extract `MuralContent` or `MuralEntityList` or similar -->
				<!-- TODO maybe should be `SvgEntity` instead? and `SvgEntities`? -->
				<svg>
					{#each entities as entity (entity)}
						<MuralEntity {entity} />
					{/each}
					{#if pointing && !pointerDown && selectedBrush === 'polyline' && $selectedEntity?.type === 'polyline' && selectedPolylinePointsData?.length}
						<line
							x1={selectedPolylinePointsData.at(-2)}
							y1={selectedPolylinePointsData.at(-1)}
							x2={pointerX}
							y2={pointerY}
							stroke={$selectedEntity.stroke ?? DEFAULT_POLYLINE_STROKE}
							stroke-width={$selectedEntity.strokeWidth ?? DEFAULT_POLYLINE_STROKE_WIDTH}
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
						$entitySelection = null;
						selectedBrush = brush;
					}}
				>
					{brush}
				</button>
			{/each}
		</div>
		<button
			on:click={() => {
				$entitySelection = null;
				act({type: 'removeAllEntities'});
			}}
			disabled={!entities.length}
		>
			clear all
		</button>
	</div>
	<MuralEntityList {entities} on:action={(e) => act(e.detail)} {entitySelection} />
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
		background: var(--mural_bg, var(--fg));
	}
</style>
