export interface BattleSceneStatus {
	readonly defaultHitPoint: number;
	currentHitPoint: number;
	maxHitPoint: number;
	readonly defaultAttack: number;
	currentAttack: number;
	readonly defaultDefense: number;
	currentDefense: number;
	readonly defaultAgility: number;
	currentAgility: number;
	attribute: Attribute;
	skillFormation: SkillFormation;
	currentSkill: keyof SkillFormation["slots"];
}