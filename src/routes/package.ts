// generated by src/routes/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@feltjs/felt_mural',
	version: '0.7.3',
	description: 'a proof-of-concept Svelte component for collaborative drawing using Felt',
	icon: '🎨',
	public: true,
	homepage: 'https://mural.felt.dev/',
	license: 'Unlicense',
	repository: {type: 'git', url: 'git+https://github.com/feltjs/felt_mural.git'},
	type: 'module',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'@grogarden/util': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.80.1',
		'@fuz.dev/fuz_code': '^0.4.3',
		'@fuz.dev/fuz_contextmenu': '^0.6.0',
		'@fuz.dev/fuz_dialog': '^0.5.0',
		'@fuz.dev/fuz_library': '^0.21.1',
		'@grogarden/gro': '^0.102.2',
		'@grogarden/util': '^0.16.1',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.6',
		'@sveltejs/package': '^2.2.3',
		'@types/prismjs': '^1.26.3',
		'@typescript-eslint/eslint-plugin': '^6.12.0',
		'@typescript-eslint/parser': '^6.12.0',
		eslint: '^8.54.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.1.0',
		'prettier-plugin-svelte': '^3.1.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.7',
		'svelte-check': '^3.6.2',
		tslib: '^2.6.2',
		typescript: '^5.3.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./item.js': {default: './dist/item.js', types: './dist/item.d.ts'},
		'./Mural_Item_List_Item.svelte': {
			svelte: './dist/Mural_Item_List_Item.svelte',
			default: './dist/Mural_Item_List_Item.svelte',
			types: './dist/Mural_Item_List_Item.svelte.d.ts',
		},
		'./Mural_Item_List.svelte': {
			svelte: './dist/Mural_Item_List.svelte',
			default: './dist/Mural_Item_List.svelte',
			types: './dist/Mural_Item_List.svelte.d.ts',
		},
		'./Mural_Item.svelte': {
			svelte: './dist/Mural_Item.svelte',
			default: './dist/Mural_Item.svelte',
			types: './dist/Mural_Item.svelte.d.ts',
		},
		'./Mural.svelte': {
			svelte: './dist/Mural.svelte',
			default: './dist/Mural.svelte',
			types: './dist/Mural.svelte.d.ts',
		},
		'./Scaled.svelte': {
			svelte: './dist/Scaled.svelte',
			default: './dist/Scaled.svelte',
			types: './dist/Scaled.svelte.d.ts',
		},
		'./Surface.svelte': {
			svelte: './dist/Surface.svelte',
			default: './dist/Surface.svelte',
			types: './dist/Surface.svelte.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@feltjs/felt_mural',
	version: '0.7.3',
	modules: {
		'./item.js': {
			path: 'item.ts',
			declarations: [
				{name: 'Svg_Item', kind: 'type'},
				{name: 'Item_Id', kind: 'type'},
				{name: 'Svg_Base_Item', kind: 'type'},
				{name: 'Svg_Polyline_Item', kind: 'type'},
				{name: 'Svg_Circle_Item', kind: 'type'},
				{name: 'parse_item_points_data', kind: 'function'},
				{name: 'to_points_data', kind: 'function'},
				{name: 'DEFAULT_POLYLINE_STROKE', kind: 'variable'},
				{name: 'DEFAULT_POLYLINE_STROKE_WIDTH', kind: 'variable'},
				{name: 'DEFAULT_POLYLINE_FILL', kind: 'variable'},
				{name: 'DEFAULT_POLYLINE_FILL_2', kind: 'variable'},
				{name: 'DEFAULT_CIRCLE_FILL', kind: 'variable'},
				{name: 'create_polyline', kind: 'function'},
				{name: 'create_circle', kind: 'function'},
				{name: 'parsers', kind: 'variable'},
				{name: 'update_item_data', kind: 'function'},
				{name: 'Mural_Action', kind: 'type'},
				{name: 'Mural_Base_Action', kind: 'type'},
				{name: 'Add_Item', kind: 'type'},
				{name: 'Update_Item', kind: 'type'},
				{name: 'Remove_Item', kind: 'type'},
				{name: 'Remove_All_Items', kind: 'type'},
				{name: 'Update_Item_Data', kind: 'type'},
			],
		},
		'./Mural_Item_List_Item.svelte': {path: 'Mural_Item_List_Item.svelte', declarations: []},
		'./Mural_Item_List.svelte': {path: 'Mural_Item_List.svelte', declarations: []},
		'./Mural_Item.svelte': {path: 'Mural_Item.svelte', declarations: []},
		'./Mural.svelte': {path: 'Mural.svelte', declarations: []},
		'./Scaled.svelte': {path: 'Scaled.svelte', declarations: []},
		'./Surface.svelte': {path: 'Surface.svelte', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
