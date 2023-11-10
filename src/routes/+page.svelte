<script lang="ts">
	import {base} from '$app/paths';
	import Library_Header from '@fuz.dev/fuz_library/Library_Header.svelte';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import {package_json, src_json} from '$lib/package.js';

	// TODO cache in context
	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section class="box">
			<Library_Header {pkg} />
		</section>
		<section class="prose">
			<blockquote class="width_sm text_align_center">
				this is a demo not a polished library,<br />see
				<a href="https://github.com/feltjs/felt_mural">the readme</a> for details
			</blockquote>
		</section>
		<section>
			<menu>
				<a class="library_link panel" href="{base}/library">library</a>
			</menu>
		</section>
		<section class="box"><a class="chip" href="{base}/about">about</a></section>
		<section>
			<Library_Footer {pkg} />
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
