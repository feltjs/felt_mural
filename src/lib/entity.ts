import type {Flavored} from '@feltjs/util';
import {round} from '@feltjs/util/maths.js';
import type {Writable} from 'svelte/store';

// TODO merge with felt-server (eventually, probably a core shared lib)
export type SvgEntity = SvgPolylineEntity | SvgCircleEntity;

export type EntityId = Flavored<string, 'Entity'>;

export interface SvgBaseEntity {
	id: EntityId;
	type: string;
	fill?: string;
	enableFill?: boolean;
	hidden?: boolean;
	opacity?: number;
}

export interface SvgPolylineEntity extends SvgBaseEntity {
	type: 'polyline';
	points: string;
	pointsData?: number[];
	pathLength?: number;
	stroke?: string;
	strokeWidth?: number;
}

export interface SvgCircleEntity extends SvgBaseEntity {
	type: 'circle';
	cx: number;
	cy: number;
	r: number;
	pathLength?: number;
	// TODO would be nice to have `enableFill` default to true for 'circle' but still not 'polyline'
}

export const parseEntityPointsData = (points: string): number[] => {
	const data: number[] = [];
	let char: string;
	let processingX = true;
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
				processingX = true;
			} else {
				x = '';
				y = '';
			}
		} else if (char === ',') processingX = false;
		else if (processingX) x += char;
		else y += char;
	}
	if (x && y) {
		data.push(Number(x), Number(y));
	}
	return data;
};

export const toPointsData = (entity: SvgPolylineEntity): number[] =>
	entity.pointsData || (entity.pointsData = parseEntityPointsData(entity.points));

// TODO refactor these, maybe remove altogether
export const DEFAULT_POLYLINE_STROKE = '#000000';
export const DEFAULT_POLYLINE_STROKE_WIDTH = 3;
export const DEFAULT_POLYLINE_FILL = 'none';
export const DEFAULT_POLYLINE_FILL_2 = '#ddbeef';
export const DEFAULT_CIRCLE_FILL = '#00a1ff';

export const createPolyline = (): SvgPolylineEntity => ({
	id: crypto.randomUUID(),
	type: 'polyline',
	points: '',
});

export const createCircle = (
	cx = 0,
	cy = 0,
	r = 25,
	fill = DEFAULT_CIRCLE_FILL,
): SvgCircleEntity => ({
	id: crypto.randomUUID(),
	type: 'circle',
	cx,
	cy,
	r,
	enableFill: true,
	fill,
});

// TODO refactor
export const parsers = {
	x: (value: number): number => round(value, 1),
	y: (value: number): number => round(value, 1),
};

export const updateEntityData = (entity: Writable<SvgEntity>, partial: UpdateEntityData): void =>
	entity.update(($e) => {
		const updated = {...$e};
		for (const key in partial) {
			const value = (partial as any)[key];
			if (value === undefined) continue;
			const parser = (parsers as any)[key];
			const parsed = parser ? parser(value) : value;
			if (parsed !== undefined) {
				// TODO refactor - reuse parsers? maybe return an object with a symbol key to process each key instead of the whole value
				// pull off all non-standard action-only properties like `appendPoints`,
				// and generically pass through all others
				if (key === 'appendPoints') {
					const u = updated as SvgPolylineEntity;
					for (let i = 0; i < value.length; i += 2) {
						u.points += ' ' + value[i] + ',' + value[i + 1];
						u.pointsData?.push(value[i], value[i + 1]);
					}
				} else {
					(updated as any)[key] = parsed;
				}
			}
		}
		return updated;
	});

// TODO where do these belong? should they be more generic than `Mural`?
export type MuralAction = AddEntity | UpdateEntity | RemoveEntity | RemoveAllEntities;
export interface MuralBaseAction {
	type: string;
}
export interface AddEntity extends MuralBaseAction {
	type: 'addEntity';
	entity: SvgEntity;
}
export interface UpdateEntity extends MuralBaseAction {
	type: 'updateEntity';
	id: EntityId;
	data: UpdateEntityData;
}
export interface RemoveEntity extends MuralBaseAction {
	type: 'removeEntity';
	id: EntityId;
}
export interface RemoveAllEntities extends MuralBaseAction {
	type: 'removeAllEntities';
}

export type UpdateEntityData =
	| Partial<Exclude<SvgEntity, SvgPolylineEntity>>
	| (Partial<SvgPolylineEntity> & {appendPoints?: number[]});
