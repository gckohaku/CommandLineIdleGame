export const attribute = {
	none: "none",
	wood: "wood",
	fire: "fire",
	earth: "earth",
	metal: "metal",
	water: "water",
} as const;

export type Attribute = (typeof attribute)[keyof typeof attribute];