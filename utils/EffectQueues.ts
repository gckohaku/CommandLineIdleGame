import type { SkillQueueInfo } from "#imports";

export interface EffectQueues {
	increaseMaxHpQueue: SkillQueueInfo[];
	attackAddSubQueue: SkillQueueInfo[];
	attackMultiplyQueue: SkillQueueInfo[];
	defenseAddSubQueue: SkillQueueInfo[];
	defenseMultiplyQueue: SkillQueueInfo[];
	agilityAddSubQueue: SkillQueueInfo[];
	agilityMultiplyQueue: SkillQueueInfo[];
}

export const makeDefaultEffectQueues = (init: Partial<EffectQueues> = {}): EffectQueues => {
	return withDefaultValues(init, {
		increaseMaxHpQueue: [],
		attackAddSubQueue: [],
		attackMultiplyQueue: [],
		defenseAddSubQueue: [],
		defenseMultiplyQueue: [],
		agilityAddSubQueue: [],
		agilityMultiplyQueue: [],
	});
};
