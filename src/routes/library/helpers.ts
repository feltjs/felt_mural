import {base} from '$app/paths';

export const LIBRARY_PATH = '/library/';

export const toLibraryPathInfo = (
	name: string,
	pathname: string,
): {path: string; pathIsActive: boolean; pathSegment: string | undefined} => {
	const pathSegment = pathname.split('/').at(-1);
	const path = base + LIBRARY_PATH + name;
	const pathIsActive = pathSegment === name; // messy but works
	return {
		path,
		pathIsActive,
		pathSegment,
	};
};
