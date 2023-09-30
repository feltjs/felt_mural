<script lang="ts">
	import {base} from '$app/paths';

	import Description from '$routes/Description.svelte';
	import FeltFooter from '$routes/FeltFooter.svelte';
</script>

<main>
	<div class="width_md">
		<section class="prose">
			<h1>felt-mural</h1>
			<div class="panel padded_md">
				<Description />
			</div>
		</section>
		<section>
			<a class="library-link panel" href="{base}/library">library</a>
		</section>
		<section>
			<FeltFooter />
		</section>
	</div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
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
