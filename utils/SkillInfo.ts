import type { SkillType } from "./skills/SkillType";
import type { Attribute } from "./types/Attribute";
import type { SkillAction } from "./types/SkillAction";
import type { SkillMultiplyBySlot } from "./types/SkillMultiplyBySlot";

export interface SkillInfo {
	readonly title: string;
	readonly description: string;
	readonly type: SkillType;
	readonly count: number;
	readonly necessaryAgility: number;
	readonly attribute: Attribute;
	readonly action: SkillAction;
	readonly multiplyBySlot: SkillMultiplyBySlot;
}