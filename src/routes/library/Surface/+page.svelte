<script lang="ts">
	import {writable, type Writable} from 'svelte/store';
	import {round} from '@grogarden/util/maths.js';
	import Code from '@fuz.dev/fuz_code/Code.svelte';
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';

	import {create_circle, update_item_data, type Svg_Item} from '$lib/item';
	import Surface from '$lib/Surface.svelte';
	import Scaled from '$lib/Scaled.svelte';
	import Mural_Item from '$lib/Mural_Item.svelte';

	const LIBRARY_ITEM_NAME = 'Surface';
	const tome = get_tome(LIBRARY_ITEM_NAME);

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
	let pointer_down: boolean | undefined;
	let pointer_x: number | undefined;
	let pointer_y: number | undefined;

	const reset = () => {
		// reset surface props
		pointer_down = undefined;
		pointer_x = undefined;
		pointer_y = undefined;
		// dont set scale, it's computed from the layout

		// reset user options
		width = WIDTH;
		height = HEIGHT;
		shadow = SHADOW;
	};

	const items: Array<Writable<Svg_Item>> = [create_circle(0, 0, 10, '#7f7166')].map((e) =>
		writable(e),
	);

	// TODO attach springs to the following items

	$: update_items(pointer_down, pointer_x, pointer_y);

	const update_items = (
		pointer_down: boolean | undefined,
		pointer_x: number | undefined,
		pointer_y: number | undefined,
	) => {
		const item = items[0];
		update_item_data(item, {
			cx: pointer_x,
			cy: pointer_y,
			fill: pointer_down ? '#397fc6' : '#7f7166',
		});
	};
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<div class="box spaced">
			<blockquote>
				⚠️ this is not a good abstraction for this usecase! it's quick and hacky
			</blockquote>
		</div>
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
					bind:pointer_down
					bind:pointer_x
					bind:pointer_y
					cancel_on_leave={false}
				>
					<!-- TODO if we want pointer-interactive elements, should they be children of `Surface`? -->
					{#if pointer_x !== undefined && pointer_y !== undefined}
						<svg>
							{#each items as item (item)}
								<Mural_Item {item} />
							{/each}
						</svg>
					{/if}
				</Surface>
			</div>
		</Scaled>
		<section>
			<Code
				content={`<Scaled
	width="${width}px"
	height="${height}px"
>
	<Surface
		scale={${scale && round(scale, 3)}}
		pointing={${pointing}}
		pointer_down={${pointer_down}}
		pointer_x={${pointer_x && round(pointer_x, 1)}}
		pointer_y={${pointer_y && round(pointer_y, 1)}}
	/>
</Scaled>`}
			/>

			<button
				on:click={reset}
				disabled={pointer_down === undefined &&
					pointer_x === undefined &&
					pointer_y === undefined &&
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
</Tome_Detail>

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
