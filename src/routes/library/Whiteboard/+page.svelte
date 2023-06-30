<script lang="ts">
	import {writable, type Writable} from 'svelte/store';
	import {round} from '@feltjs/util/maths.js';

	import {createCircle, type SvgEntity} from '$lib/entity';
	import Whiteboard from '$lib/Whiteboard.svelte';
	import CodeExample from '$routes/library/CodeExample.svelte';
	import LibraryItem from '$routes/library/LibraryItem.svelte';
	import LibraryVocab from '../LibraryVocab.svelte';

	// TODO fix responsive width

	const LIBRARY_ITEM_NAME = 'Whiteboard';

	// user options
	const WIDTH = 750;
	const HEIGHT = 512;
	const WHITEBOARD_BG = '#ffffff';
	let width = WIDTH;
	let height = HEIGHT;
	let whiteboard_bg = WHITEBOARD_BG;

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
		whiteboard_bg = WHITEBOARD_BG;
	};

	let entities: Array<Writable<SvgEntity>> = [
		createCircle(300, 300, 20, '#00bb91'),
		createCircle(50, 50, 10),
	].map((e) => writable(e));
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<div class="box width_full" style:--whiteboard_bg={whiteboard_bg}>
		<div class="prose width_sm">
			<aside>
				The <LibraryVocab name="Whiteboard" /> is currently a proof of concept, and in the future it
				will be extracted into a standalone library.
			</aside>
		</div>
		<br />
		<Whiteboard
			bind:entities
			{width}
			{height}
			bind:scale
			bind:pointerDown
			bind:pointerX
			bind:pointerY
		/>
		<section>
			<CodeExample
				code={`<Whiteboard
	width="${width}px"
	height="${height}px"
	scale={${scale && round(scale, 3)}}
	pointerX={${pointerX && round(pointerX, 1)}}
	pointerY={${pointerY && round(pointerY, 1)}}
	pointerDown={${pointerDown}}
>
	<WhiteboardEntityList
		entities={[ ... ]}
	/>
</Whiteboard>`}
			/>
		</section>
		<section class="markup">
			<form>
				<fieldset>
					<label>
						<div class="title"><code>--whiteboard_bg</code></div>
						<input type="color" bind:value={whiteboard_bg} />
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
							whiteboard_bg === WHITEBOARD_BG}>reset settings</button
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
