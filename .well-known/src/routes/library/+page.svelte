<script lang="ts">
	import Library from '@fuz.dev/fuz_library/Library.svelte';
	import {get_tomes} from '@fuz.dev/fuz_library/tome.js';

	const tomes = get_tomes();
</script>

<Library tomes={Array.from(tomes.values())} />
