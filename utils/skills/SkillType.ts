export const skillType = {
	attack: "attack",
	avoid: "avoid",
	heal: "heal",
	increaseMaxHp: "increaseMaxHp",
	attackAddSub: "attackAddSub",
	attackMultiply: "attackMultiply",
	defenseAddSub: "defenseAddSub",
	defenseMultiply: "defenseMultiply",
	agilityAddSub: "agilityAddSub",
	agilityMultiply: "agilityMultiply",
} as const;

export type SkillType = (typeof skillType)[keyof typeof skillType];