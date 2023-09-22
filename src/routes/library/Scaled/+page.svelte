<script lang="ts">
	import {round} from '@grogarden/util/maths.js';

	import Scaled from '$lib/Scaled.svelte';
	import CodeExample from '@fuz.dev/library/CodeExample.svelte';
	import LibraryItem from '@fuz.dev/library/LibraryItem.svelte';

	const LIBRARY_ITEM_NAME = 'Scaled'; // TODO should be item, from context?

	// user options
	const MAX_WIDTH = 1280;
	const WIDTH = 1024;
	const MAX_HEIGHT = 1280;
	const INITIAL_HEIGHT = 128;
	const SHADOW = '0 0 50px #0002, 0 0 20px #0001';
	let width = WIDTH;
	let height = INITIAL_HEIGHT;
	let shadow = SHADOW;

	// surface props
	let scale: number; // computed from the layout

	const reset = () => {
		// reset user options
		width = WIDTH;
		height = INITIAL_HEIGHT;
		shadow = SHADOW;
	};

	const EXAMPLE_SIZE = 300;
</script>

<LibraryItem name={LIBRARY_ITEM_NAME}>
	<section>
		<CodeExample
			code={`<Scaled
	width={${width}}
	height={${height}}
>
	...
</Scaled>`}
		/>
	</section>
	<section class="small-examples">
		<div
			class="panel small-example-1"
			style:width="{EXAMPLE_SIZE}px"
			style:height="{EXAMPLE_SIZE}px"
		>
			<Scaled {width} {height}>
				<div
					class="surface-wrapper"
					style:--width="{width}px"
					style:--height="{height}px"
					style:box-shadow={shadow}
				>
					{width}x{height}
				</div>
			</Scaled>
		</div>
		<div
			class="panel small-example-2"
			style:width="{EXAMPLE_SIZE}px"
			style:height="{EXAMPLE_SIZE}px"
		>
			<Scaled width={height} height={width}>
				<div
					class="surface-wrapper"
					style:--width="{height}px"
					style:--height="{width}px"
					style:box-shadow={shadow}
				>
					{height}x{width}
				</div>
			</Scaled>
		</div>
	</section>
	<section class="interactive panel">
		<Scaled {width} {height} bind:scale>
			<div
				class="surface-wrapper"
				style:--width="{width}px"
				style:--height="{height}px"
				style:box-shadow={shadow}
			>
				{round(width, 1)}x{round(height, 1)}
			</div>
		</Scaled>
	</section>
	<form>
		<label>
			<div class="title">width <code>{round(width, 1)}px</code></div>
			<input type="range" min={0} max={MAX_WIDTH} bind:value={width} />
		</label>
		<label>
			<div class="title">height <code>{round(height, 1)}px</code></div>
			<input type="range" min={0} max={MAX_HEIGHT} bind:value={height} />
		</label>
		<label>
			<div class="title">box shadow</div>
			<input bind:value={shadow} />
		</label>
		<button
			type="button"
			on:click={reset}
			disabled={width === WIDTH && height === INITIAL_HEIGHT && shadow === SHADOW}
			>reset state</button
		>
	</form>
</LibraryItem>

<style>
	.surface-wrapper {
		position: relative;
		background-color: var(--bg);
		width: var(--width);
		height: var(--height);
		font-size: var(--size_xl5);
		font-family: var(--font_family_mono);
		white-space: nowrap;
		/* TODO fix this in the `Scaled` component? it's not needed in the `Surface` example though */
		flex-shrink: 0;
	}
	.small-examples {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.small-example-1,
	.small-example-2 {
		margin: var(--spacing_lg);
	}
	.small-example-2 {
		flex-direction: column;
	}
	.interactive {
		width: 100%;
		display: flex;
		justify-content: center;
		height: 256px;
	}
</style>
