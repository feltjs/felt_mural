import {init_tome, type Tome} from '@fuz.dev/fuz_library/tome.js';

import Mural from '$routes/library/Mural/+page.svelte';
import Scaled from '$routes/library/Scaled/+page.svelte';
import Surface from '$routes/library/Surface/+page.svelte';

export const tomes: Tome[] = [
	{
		name: 'Mural',
		slug: 'Mural',
		pathname: '',
		category: 'components',
		component: Mural,
		related: [],
	},
	{
		name: 'Scaled',
		slug: 'Scaled',
		pathname: '',
		category: 'components',
		component: Scaled,
		related: [],
	},
	{
		name: 'Surface',
		slug: 'Surface',
		pathname: '',
		category: 'components',
		component: Surface,
		related: [],
	},
];

for (const t of tomes) init_tome(t);
