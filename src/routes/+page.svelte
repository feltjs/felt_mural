<script lang="ts">
	import {base} from '$app/paths';
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import {package_json} from '$lib/package.js';

	// TODO cache in context
	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section class="box">
			<LibraryHeader {pkg} />
		</section>
		<section class="prose">
			<blockquote class="width_sm text_align_center">
				this is a demo not a polished library,<br />see
				<a href="https://github.com/feltjs/felt-mural">the readme</a> for details
			</blockquote>
		</section>
		<section>
			<menu>
				<a class="library_link panel" href="{base}/library">library</a>
			</menu>
		</section>
		<section class="box"><a class="chip" href="{base}/about">about</a></section>
		<section>
			<LibraryFooter {pkg} />
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
		padding: var(--spacing_2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a.panel {
		padding: var(--spacing_2);
	}
	.library_link {
		font-size: var(--size_3);
	}
</style>
