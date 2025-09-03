export interface SkillsJson {
	[key: string]: {canBeDuplicated: boolean;
	isUltimate: boolean;
	title: string;
	description: string;
	type: SkillType;
	count: number;
	necessaryAgility: number;
	attribute: Attribute;}
}