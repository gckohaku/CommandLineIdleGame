export interface BattleSceneStatus {
	defaultStatus: Readonly<BattleStatus>;
	currentStatus: BattleStatus;
	maxHitPoint: number;
	attribute: Attribute;
	skillFormation: SkillFormation;
	currentSkill: keyof SkillFormation["slots"];
	effectQueues: EffectQueues;
}