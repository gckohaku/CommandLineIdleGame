import type { SkillType } from "./skills/SkillType";
import type { Attribute } from "./types/Attribute";
import type { SkillMultiplyBySlot } from "./types/SkillMultiplyBySlot";

export interface SkillQueueInfo {
	title: string;
	description: string;
	type: SkillType;
	count: number;
	necessaryAgility: number;
	attribute: Attribute;
	action: (arg: number) => number;
	multiplyBySlot: SkillMultiplyBySlot;
}