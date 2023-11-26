import type {Flavored} from '@grogarden/util/types.js';
import {round} from '@grogarden/util/maths.js';
import type {Writable} from 'svelte/store';

// TODO merge with felt (eventually, probably a core shared lib)
export type Svg_Item = Svg_Polyline_Item | Svg_Circle_Item;

export type Item_Id = Flavored<string, 'Item'>;

export interface Svg_Base_Item {
	id: Item_Id;
	type: string;
	fill?: string;
	enable_fill?: boolean;
	hidden?: boolean;
	opacity?: number;
	stroke?: string;
	stroke_width?: number;
}

export interface Svg_Polyline_Item extends Svg_Base_Item {
	type: 'polyline';
	points: string;
	points_data?: number[];
	path_length?: number;
}

export interface Svg_Circle_Item extends Svg_Base_Item {
	type: 'circle';
	cx: number;
	cy: number;
	r: number;
	path_length?: number;
	// TODO would be nice to have `enable_fill` default to true for 'circle' but still not 'polyline'
}

export const parse_item_points_data = (points: string): number[] => {
	const data: number[] = [];
	let char: string;
	let processing_x = true;
	let x = '';
	let y = '';
	const len = points.length;
	for (let i = 0; i < len; i++) {
		char = points[i];
		if (char === ' ') {
			if (x && y) {
				data.push(Number(x), Number(y));
				x = '';
				y = '';
				processing_x = true;
			} else {
				x = '';
				y = '';
			}
		} else if (char === ',') processing_x = false;
		else if (processing_x) x += char;
		else y += char;
	}
	if (x && y) {
		data.push(Number(x), Number(y));
	}
	return data;
};

export const to_points_data = (item: Svg_Polyline_Item): number[] =>
	item.points_data || (item.points_data = parse_item_points_data(item.points));

// TODO refactor these, maybe remove altogether
export const DEFAULT_POLYLINE_STROKE = '#666666';
export const DEFAULT_POLYLINE_STROKE_WIDTH = 3;
export const DEFAULT_POLYLINE_FILL = 'none';
export const DEFAULT_POLYLINE_FILL_2 = '#c7beef';
export const DEFAULT_CIRCLE_FILL = '#75a6d7';

export const create_polyline = (): Svg_Polyline_Item => ({
	id: crypto.randomUUID(),
	type: 'polyline',
	points: '',
});

export const create_circle = (
	cx = 0,
	cy = 0,
	r = 62,
	fill = DEFAULT_CIRCLE_FILL,
): Svg_Circle_Item => ({
	id: crypto.randomUUID(),
	type: 'circle',
	cx,
	cy,
	r,
	enable_fill: true,
	fill,
});

// TODO refactor
export const parsers = {
	x: (value: number): number => round(value, 1),
	y: (value: number): number => round(value, 1),
};

export const update_item_data = (item: Writable<Svg_Item>, partial: Update_Item_Data): void =>
	item.update(($e) => {
		const updated = {...$e};
		for (const key in partial) {
			const value = (partial as any)[key];
			if (value === undefined) continue;
			const parser = (parsers as any)[key];
			const parsed = parser ? parser(value) : value;
			if (parsed !== undefined) {
				// TODO refactor - reuse parsers? maybe return an object with a symbol key to process each key instead of the whole value
				// pull off all non-standard action-only properties like `append_points`,
				// and generically pass through all others
				if (key === 'append_points') {
					const u = updated as Svg_Polyline_Item;
					for (let i = 0; i < value.length; i += 2) {
						u.points += ' ' + value[i] + ',' + value[i + 1];
						u.points_data?.push(value[i], value[i + 1]);
					}
				} else {
					(updated as any)[key] = parsed;
				}
			}
		}
		return updated;
	});

// TODO where do these belong? should they be more generic than `Mural`?
export type Mural_Action = Add_Item | Update_Item | Remove_Item | Remove_All_Items;
export interface Mural_Base_Action {
	type: string;
}
export interface Add_Item extends Mural_Base_Action {
	type: 'add_item';
	item: Svg_Item;
}
export interface Update_Item extends Mural_Base_Action {
	type: 'update_item';
	id: Item_Id;
	data: Update_Item_Data;
}
export interface Remove_Item extends Mural_Base_Action {
	type: 'remove_item';
	id: Item_Id;
}
export interface Remove_All_Items extends Mural_Base_Action {
	type: 'remove_all_items';
}

export type Update_Item_Data =
	| Partial<Exclude<Svg_Item, Svg_Polyline_Item>>
	| (Partial<Svg_Polyline_Item> & {append_points?: number[]});
