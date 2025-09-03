export const alpha: BattleEntityInfo = {
	status: battleStatusWithDefault({
		hitPoint: 50,
		attack: 10,
		defense: 10,
		agility: 1,
	}),
	attribute: attribute.none,
	skills: {
		1: attack001_normal,
		2: attack001_normal,
		3: attack001_normal,
		4: attack001_normal,
		5: attack001_normal,
		6: attack001_normal,
		7: attack001_normal,
		8: attack001_normal,
		9: attack001_normal,
	},
	effects: makeDefaultEffectQueues(),
};
