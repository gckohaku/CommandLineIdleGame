export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const withDefault = <T>(init: Partial<T>, dfl: T) =>
	<K extends keyof T>(key: K, deepCopy = false): T[K] => {
		if (init[key] !== undefined) {
			if (!deepCopy) {
				init[key] as T[K]
			}

			return deepCopyValues(init[key]) as T[K];
		}

		return dfl[key];
	}


export const withDefaultValues = <T>(init: Partial<T>, dfl: T) => {
	const retObj: Partial<T> = {};
	for (const key in dfl) {
		if (init[key]) {
			retObj[key] = init[key];
		}
		else {
			retObj[key] = dfl[key];
		}
	}

	return retObj as T;
}

export const isPrimitive = (value: unknown): boolean => {
	switch (typeof value) {
		case "bigint":
		case "boolean":
		case "number":
		case "string":
		case "symbol":
		case "undefined":
			return true;
		default:
			return false;
	}
}

export const deepCopyValues = (source: unknown): unknown => {
	if (isPrimitive(source)) {
		return source;
	}
	if (Array.isArray(source)) {
		return source.map(deepCopyValues);
	}
	return JSON.parse(JSON.stringify(source));
}