export const alpha: BattleEntityInfo = {
	status: battleStatusWithDefault({
		hitPoint: 50,
		attack: 10,
		defense: 10,
		agility: 1,
	}),
	agility: 1,
	attribute: attribute.none,
	effects: makeDefaultEffectQueues(),
}