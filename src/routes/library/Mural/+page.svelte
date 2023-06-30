<script lang="ts">
	import {writable, type Writable} from 'svelte/store';
	import {round} from '@feltjs/util/maths.js';

	import {createCircle, type SvgEntity} from '$lib/entity';
	import Mural from '$lib/Mural.svelte';
	import CodeExample from '$routes/library/CodeExample.svelte';
	import LibraryItem from '$routes/library/LibraryItem.svelte';
	import LibraryVocab from '../LibraryVocab.svelte';

	// TODO fix responsive width

	const LIBRARY_ITEM_NAME = 'Mural';

	// user options
	const WIDTH = 750;
	const HEIGHT = 512;
	const WHITEBOARD_BG = '#ffffff';
	let width = WIDTH;
	let height = HEIGHT;
	let mural_bg = WHITEBOARD_BG;

	// surface props
	let scale: number; // computed from the layout
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
		mural_bg = WHITEBOARD_BG;
	};

	let entities: Array<Writable<SvgEntity>> = [
		createCircle(300, 300, 20, '#00bb91'),
		createCircle(50, 50, 10),
	].map((e) => writable(e));
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="box width_full" style:--mural_bg={mural_bg}>
		<Mural bind:entities {width} {height} bind:scale bind:pointerDown bind:pointerX bind:pointerY />
		<section>
			<CodeExample
				code={`<Mural
	width="${width}px"
	height="${height}px"
	scale={${scale && round(scale, 3)}}
	pointerX={${pointerX && round(pointerX, 1)}}
	pointerY={${pointerY && round(pointerY, 1)}}
	pointerDown={${pointerDown}}
>
	<MuralEntityList
		entities={[ ... ]}
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
						disabled={pointerDown === undefined &&
							pointerX === undefined &&
							pointerY === undefined &&
							width === WIDTH &&
							height === HEIGHT &&
							mural_bg === WHITEBOARD_BG}>reset settings</button
					>
				</fieldset>
			</form>
		</section>
	</div>
</LibraryItem>

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
