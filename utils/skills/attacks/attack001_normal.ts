export const attack001_normal: SkillQueueInfo = {
	title: "通常攻撃",
	description: "攻撃力 X 倍の無属性の攻撃",
	type: skillType.attack,
	count: 0,
	necessaryAgility: 1.0,
	attribute: attribute.none,
	action(arg) {
		return arg;
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
		}
	}
}