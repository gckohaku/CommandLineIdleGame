export const skillType = {
	attack: "attack",
	avoid: "avoid",
	heal: "heal",
	increaseMaxHp: "increaseMaxHp",
	strengtheningAttack: "strengtheningAttack",
	tougheningDefense: "tougheningDefense",
	weakenedAttack: "weakenedAttack",
	weakenedDefense: "weakenedDefense",
	quickeningAgility: "quickeningAgility",
	slowedAgility: "slowedAgility"
} as const;

export type SkillType = (typeof skillType)[keyof typeof skillType];