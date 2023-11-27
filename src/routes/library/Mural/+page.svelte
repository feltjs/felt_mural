<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {round} from '@grogarden/util/maths.js';
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import Code from '@fuz.dev/fuz_code/Code.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';

	import type {Svg_Item} from '$lib/item.js';
	import Mural from '$lib/Mural.svelte';

	// TODO fix responsive width

	const LIBRARY_ITEM_NAME = 'Mural';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	// user options
	const WIDTH = 750;
	const HEIGHT = 512;
	const MURAL_BG = 'var(--bg)';
	let width = WIDTH;
	let height = HEIGHT;
	let mural_bg: string | undefined;

	// surface props
	let scale: number; // computed from the layout
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
		mural_bg = undefined;
	};

	let items: Array<Writable<Svg_Item>> = [];
</script>

<Tome_Detail {tome}>
	<div class="box width_full" style:--mural_bg={MURAL_BG}>
		<div class="spaced">
			<Mural
				bind:items
				{width}
				{height}
				bind:scale
				bind:pointer_down
				bind:pointer_x
				bind:pointer_y
			/>
		</div>
		<section>
			<Code
				content={`<Mural
	width="${width}px"
	height="${height}px"
	scale={${scale && round(scale, 3)}}
	pointer_x={${pointer_x && round(pointer_x, 1)}}
	pointer_y={${pointer_y && round(pointer_y, 1)}}
	pointer_down={${pointer_down}}
>
	<Mural_Item_List
		items={[ ... ]}
	/>
</Mural>`}
			/>
		</section>
		<section class="markup">
			<form>
				<fieldset>
					<label>
						<div class="title"><code>--mural_bg</code></div>
						<input type="color" bind:value={mural_bg} />
					</label>
					<label>
						<div class="title">width <code>{round(width, 1)}px</code></div>
						<input type="range" min={0} max={WIDTH * 2} bind:value={width} />
					</label>
					<label>
						<div class="title">height <code>{round(height, 1)}px</code></div>
						<input type="range" min={0} max={HEIGHT} bind:value={height} />
					</label>
					<button
						type="button"
						on:click={reset}
						disabled={pointer_down === undefined &&
							pointer_x === undefined &&
							pointer_y === undefined &&
							width === WIDTH &&
							height === HEIGHT &&
							mural_bg === undefined}>reset settings</button
					>
				</fieldset>
			</form>
		</section>
	</div>
</Tome_Detail>

<style>
	button {
		width: 100%;
	}
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
