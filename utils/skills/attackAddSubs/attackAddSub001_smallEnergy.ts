import type { SkillInfo } from "~/utils/SkillInfo";

export const attackAddSub_smallEnergy: SkillInfo = {
	title: "少しの力",
	description: "攻撃力を X 増加させる",
	type: "attackAddSub",
	count: 3,
	necessaryAgility: 1.2,
	attribute: attribute.none,
	action(slotNumber, active, passive) {
		const addValue = this.multiplyBySlot.X[slotNumber];
		active.effectQueues.attackAddSubQueue.push({
			skillInfo: this,
			value: this.multiplyBySlot.X[slotNumber],
			slotNumber: slotNumber,
			remainCount: this.count,
		});
	},
	multiplyBySlot: {
		X: {
			1: 50,
			2: 50,
			3: 50,
			4: 30,
			5: 30,
			6: 30,
			7: 15,
			8: 15,
			9: 15,
		},
	},
};
