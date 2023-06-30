<script lang="ts">
	import {base} from '$app/paths';

	import Description from '$routes/Description.svelte';
	import FeltFooter from '$routes/FeltFooter.svelte';
</script>

<!-- <h1>@feltjs/felt-ui</h1> -->
<!-- TODO publish and link the above to npm -->

<div class="width_md">
	<section class="panel">
		<Description />
	</section>
	<section>
		<a class="library-link panel" href="{base}/library">library</a>
	</section>
	<section>
		<FeltFooter />
	</section>
</div>

<style>
	section {
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a.panel {
		padding: var(--spacing_xl2);
	}
	.library-link {
		font-size: var(--size_xl3);
	}
</style>
