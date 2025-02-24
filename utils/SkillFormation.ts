export interface SkillFormation {
	name: string;
	description: string;
	slots: {
		1: SkillQueueInfo;
		2: SkillQueueInfo;
		3: SkillQueueInfo;
		4: SkillQueueInfo;
		5: SkillQueueInfo;
		6: SkillQueueInfo;
		7: SkillQueueInfo;
		8: SkillQueueInfo;
		9: SkillQueueInfo;
	}
	agility: number;

	// これいる？
	queueData: SkillQueueInfo[];
}