<script lang="ts">
	import {base} from '$app/paths';

	import FeltFooter from '$routes/FeltFooter.svelte';
</script>

<!-- <h1>@feltjs/felt-ui</h1> -->
<!-- TODO publish and link the above to npm -->

<div class="width_md">
	<section>
		<blockquote>
			<code
				>npm i -D&nbsp;<a href="https://npmjs.com/package/@feltjs/felt-ui">@feltjs/felt-ui</a></code
			>
		</blockquote>
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
	code {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: var(--size_xl);
	}
	.panel {
		padding: var(--spacing_xl2);
		font-size: var(--size_xl);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_xl3);
	}
</style>
