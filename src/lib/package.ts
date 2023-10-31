// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@feltjs/felt_mural',
	description: 'a proof-of-concept Svelte component for collaborative drawing using Felt',
	version: '0.5.0',
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
		'@fuz.dev/fuz': '^0.77.1',
		'@fuz.dev/fuz_code': '^0.4.2',
		'@fuz.dev/fuz_contextmenu': '^0.5.1',
		'@fuz.dev/fuz_dialog': '^0.4.2',
		'@fuz.dev/fuz_library': '^0.17.1',
		'@grogarden/gro': '^0.98.1',
		'@grogarden/util': '^0.15.4',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@types/prismjs': '^1.26.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
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
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
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
	modules: {
		'./item.js': {
			path: 'item.ts',
			declarations: [
				{name: 'Svg_Item', kind: 'TypeAliasDeclaration'},
				{name: 'Item_Id', kind: 'TypeAliasDeclaration'},
				{name: 'Svg_Base_Item', kind: 'InterfaceDeclaration'},
				{name: 'Svg_Polyline_Item', kind: 'InterfaceDeclaration'},
				{name: 'Svg_Circle_Item', kind: 'InterfaceDeclaration'},
				{name: 'parse_item_points_data', kind: 'VariableDeclaration'},
				{name: 'to_points_data', kind: 'VariableDeclaration'},
				{name: 'DEFAULT_POLYLINE_STROKE', kind: 'VariableDeclaration'},
				{name: 'DEFAULT_POLYLINE_STROKE_WIDTH', kind: 'VariableDeclaration'},
				{name: 'DEFAULT_POLYLINE_FILL', kind: 'VariableDeclaration'},
				{name: 'DEFAULT_POLYLINE_FILL_2', kind: 'VariableDeclaration'},
				{name: 'DEFAULT_CIRCLE_FILL', kind: 'VariableDeclaration'},
				{name: 'create_polyline', kind: 'VariableDeclaration'},
				{name: 'create_circle', kind: 'VariableDeclaration'},
				{name: 'parsers', kind: 'VariableDeclaration'},
				{name: 'update_item_data', kind: 'VariableDeclaration'},
				{name: 'Mural_Action', kind: 'TypeAliasDeclaration'},
				{name: 'Mural_Base_Action', kind: 'InterfaceDeclaration'},
				{name: 'Add_Item', kind: 'InterfaceDeclaration'},
				{name: 'Update_Item', kind: 'InterfaceDeclaration'},
				{name: 'Remove_Item', kind: 'InterfaceDeclaration'},
				{name: 'Remove_All_Items', kind: 'InterfaceDeclaration'},
				{name: 'Update_Item_Data', kind: 'TypeAliasDeclaration'},
			],
		},
		'./Mural_Item_List_Item.svelte': {path: 'Mural_Item_List_Item.svelte', declarations: []},
		'./Mural_Item_List.svelte': {path: 'Mural_Item_List.svelte', declarations: []},
		'./Mural_Item.svelte': {path: 'Mural_Item.svelte', declarations: []},
		'./Mural.svelte': {path: 'Mural.svelte', declarations: []},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
		'./Scaled.svelte': {path: 'Scaled.svelte', declarations: []},
		'./Surface.svelte': {path: 'Surface.svelte', declarations: []},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
