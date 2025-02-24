export const attribute = {
	none: -1,
	wood: 0,
	fire: 1,
	earth: 2,
	metal: 3,
	water: 4,
} as const;

export type Attribute = (typeof attribute)[keyof typeof attribute];