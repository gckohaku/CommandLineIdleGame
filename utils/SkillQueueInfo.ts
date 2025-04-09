import type { SkillInfo } from "./SkillInfo";

export interface SkillQueueInfo {
	skillInfo: SkillInfo;
	value: number;
	slotNumber: number;
	remainCount: number;
}