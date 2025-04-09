import * as BattleUtilities from "@/utils/battleUtilities";

export const attack001_normal: SkillInfo = {
	title: "通常攻撃",
	description: "攻撃力等倍の無属性の攻撃",
	type: skillType.attack,
	count: 0,
	necessaryAgility: 1.0,
	attribute: attribute.none,
	action(slotNumber, active, passive) {
		const attackValue = active.currentStatus.attack * this.multiplyBySlot.X[slotNumber];
		const damage = BattleUtilities.calcDamage(attackValue, active, passive);
		passive.currentStatus.hitPoint -= damage;
	},
	multiplyBySlot: {
		X: {
			1: 1.0,
			2: 1.0,
			3: 1.0,
			4: 1.0,
			5: 1.0,
			6: 1.0,
			7: 1.0,
			8: 1.0,
			9: 1.0,
		},
	},
};
