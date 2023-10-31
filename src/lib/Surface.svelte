<script lang="ts">
	import {swallow} from '@grogarden/util/dom.js';

	// TODO this was copypasted from another project and is broken for this usecase
	// because it's designed to intercept - be the surface for - all pointer interactions.
	// But for the Mural we want individual SVG elements to be interactive at the API level.

	// TODO probably add events
	export let scale = 1; // makes the pointer position calculations transform-scale-aware
	export let pointing: boolean | undefined = undefined;
	export let pointer_down: boolean | undefined = undefined;
	export let pointer_x: number | undefined = undefined;
	export let pointer_y: number | undefined = undefined;
	export let cancel_on_leave = true;

	const update_pointer_position = (clientX: number, clientY: number): void => {
		const rect = el.getBoundingClientRect();
		pointer_x = (clientX - rect.left) / scale;
		pointer_y = (clientY - rect.top) / scale;
	};

	const on_pointerdown = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey || e.button >= 3) return; // TODO how else to avoid breaking mouse back button on Chrome? doesn't happen on Firefox
		swallow(e);
		update_pointer_position(e.clientX, e.clientY);
		pointer_down = true;
		focus();
	};
	const on_pointerup = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey || e.button >= 3) return; // TODO how else to avoid breaking mouse back button on Chrome? doesn't happen on Firefox
		swallow(e);
		update_pointer_position(e.clientX, e.clientY);
		pointer_down = false;
	};
	const on_pointermove = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey) return;
		swallow(e);
		update_pointer_position(e.clientX, e.clientY);
	};
	const on_pointerenter = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey) return;
		swallow(e);
		update_pointer_position(e.clientX, e.clientY);
		pointing = true;
	};
	const on_pointerleave = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey) return;
		swallow(e);
		update_pointer_position(e.clientX, e.clientY);
		pointing = false;
		if (cancel_on_leave && pointer_down) {
			pointer_down = false;
			unfocus();
		}
	};
	const on_pointercancel = (e: PointerEvent & {currentTarget: EventTarget & HTMLDivElement}) => {
		if (e.shiftKey) return;
		swallow(e);
		if (pointer_down) {
			pointer_down = false;
			unfocus();
		}
	};

	let el: HTMLDivElement;

	const focus = (): void => {
		if (document.activeElement !== el) {
			el.focus();
		}
	};
	const unfocus = (): void => {
		if (document.activeElement === el) {
			el.blur();
		}
	};
</script>

<div
	class="surface"
	tabindex="0"
	role="button"
	bind:this={el}
	on:pointerdown={on_pointerdown}
	on:pointerup={on_pointerup}
	on:pointermove={on_pointermove}
	on:pointerenter={on_pointerenter}
	on:pointerleave={on_pointerleave}
	on:pointercancel={on_pointercancel}
>
	<slot />
</div>

<style>
	.surface {
		position: relative;
		width: var(--width, 100%);
		height: var(--height, 100%);
		-webkit-user-select: none;
		user-select: none;
		touch-action: none;
	}
</style>
