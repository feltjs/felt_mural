<script lang="ts">
	export let scale = 0;
	export let width: number;
	export let height: number;

	let clientWidth: number | null = null;
	let clientHeight: number | null = null;

	$: x_ratio = clientWidth === null ? null : clientWidth / width;
	$: y_ratio = clientHeight === null ? null : clientHeight / height;
	$: scale = x_ratio === null ? 0 : Math.min(1, Math.min(x_ratio, y_ratio!));
	$: transform = `scale3d(${scale}, ${scale}, ${scale})`;
</script>

<div class="scaled" bind:clientWidth bind:clientHeight style:transform>
	<slot {scale} />
</div>

<style>
	.scaled {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		/* TODO maybe set to the css variables? */
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		transform-origin: center;
	}
</style>
