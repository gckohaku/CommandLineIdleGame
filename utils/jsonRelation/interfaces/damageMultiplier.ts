export type DamageMultiplierJson = {
	[active in Attribute]: { [passive in Attribute]: number };
};
