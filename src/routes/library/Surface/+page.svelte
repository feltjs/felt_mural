<script lang="ts">
	import {writable, type Writable} from 'svelte/store';
	import {round} from '@feltjs/util/maths.js';

	import {createCircle, updateEntityData, type SvgEntity} from '$lib/entity';
	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import WhiteboardEntity from '$lib/WhiteboardEntity.svelte';
	import CodeExample from '$routes/library/CodeExample.svelte';
	import LibraryItem from '$routes/library//LibraryItem.svelte';

	const LIBRARY_ITEM_NAME = 'Surface';

	// user options
	const WIDTH = 512;
	const HEIGHT = 512;
	const SHADOW = '0 0 50px #0002, 0 0 20px #0001';
	let width = WIDTH;
	let height = HEIGHT;
	let shadow = SHADOW;

	// surface props
	let scale: number; // computed from the layout
	let pointing: boolean | undefined;
	let pointerDown: boolean | undefined;
	let pointerX: number | undefined;
	let pointerY: number | undefined;

	const reset = () => {
		// reset surface props
		pointerDown = undefined;
		pointerX = undefined;
		pointerY = undefined;
		// dont set scale, it's computed from the layout

		// reset user options
		width = WIDTH;
		height = HEIGHT;
		shadow = SHADOW;
	};

	const entities: Array<Writable<SvgEntity>> = [createCircle(0, 0, 10, '#7f7166')].map((e) =>
		writable(e),
	);

	// TODO attach springs to the following entities

	$: updateEntities(pointerDown, pointerX, pointerY);

	const updateEntities = (
		pointerDown: boolean | undefined,
		pointerX: number | undefined,
		pointerY: number | undefined,
	) => {
		const entity = entities[0];
		updateEntityData(entity, {
			cx: pointerX,
			cy: pointerY,
			fill: pointerDown ? '#397fc6' : '#7f7166',
		});
	};
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="prose">
		<Scaled {width} {height} bind:scale>
			<div
				class="surface-wrapper"
				style:--width="{width}px"
				style:--height="{height}px"
				style:box-shadow={shadow}
			>
				<Surface
					{scale}
					bind:pointing
					bind:pointerDown
					bind:pointerX
					bind:pointerY
					cancelOnLeave={false}
				>
					<!-- TODO if we want pointer-interactive elements, should they be children of `Surface`? -->
					{#if pointerX !== undefined && pointerY !== undefined}
						<svg>
							{#each entities as entity (entity)}
								<WhiteboardEntity {entity} />
							{/each}
						</svg>
					{/if}
				</Surface>
			</div>
		</Scaled>
		<section>
			<CodeExample
				code={`<Scaled
	width="${width}px"
	height="${height}px"
>
	<Surface
		scale={${scale && round(scale, 3)}}
		pointing={${pointing}}
		pointerDown={${pointerDown}}
		pointerX={${pointerX && round(pointerX, 1)}}
		pointerY={${pointerY && round(pointerY, 1)}}
	/>
</Scaled>`}
			/>

			<button
				on:click={reset}
				disabled={pointerDown === undefined &&
					pointerX === undefined &&
					pointerY === undefined &&
					width === WIDTH &&
					height === HEIGHT &&
					shadow === SHADOW}>reset state</button
			>
		</section>
		<section>
			<label>
				<div class="title">width <code>{round(width, 1)}px</code></div>
				<input type="range" min={0} max={WIDTH * 4} bind:value={width} />
			</label>
			<label>
				<div class="title">height <code>{round(height, 1)}px</code></div>
				<input type="range" min={0} max={HEIGHT} bind:value={height} />
			</label>
			<label>
				<div class="title">box shadow</div>
				<input bind:value={shadow} />
			</label>
		</section>
	</div>
</LibraryItem>

<style>
	.surface-wrapper {
		position: relative;
		background-color: var(--bg);
		width: var(--width);
		height: var(--height);
	}
	svg {
		width: var(--width);
		height: var(--height);
	}
	button {
		width: 100%;
	}
</style>
