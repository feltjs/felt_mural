import type {ComponentType} from 'svelte';

import Surface from '$routes/library/Surface/+page.svelte';
import Whiteboard from '$routes/library/Whiteboard/+page.svelte';
import Scaled from '$routes/library/Scaled/+page.svelte';

// TODO dynamic import

export interface MenuItem {
	slug: string;
	pathname: string;
	name: string;
	category: string;
	related?: string[];
}

export type MenuItemWithComponent = MenuItem & {component: ComponentType};

export const libraryItemsByName: Map<string, MenuItemWithComponent> = new Map(
	[
		{
			name: 'Scaled',
			slug: 'Scaled',
			pathname: '',
			category: 'components',
			component: Scaled,
			related: ['Surface', 'Whiteboard'],
		},
		{
			name: 'Surface',
			slug: 'Surface',
			pathname: '',
			category: 'components',
			component: Surface,
			related: ['Scaled', 'Whiteboard'],
		},
		{
			name: 'Whiteboard',
			slug: 'Whiteboard',
			pathname: '',
			category: 'components',
			component: Whiteboard,
			related: ['Surface', 'Scaled'],
		},
	].map((item) => {
		item.pathname = `/library/${item.slug}`;
		return [item.name, item];
	}),
);

export const libraryItems: MenuItemWithComponent[] = Array.from(libraryItemsByName.values());
