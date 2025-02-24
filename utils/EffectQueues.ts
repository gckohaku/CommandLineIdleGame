export interface EffectQueues {
	hpEffectQueue: SkillQueueInfo[];
	attackEffectQueue: SkillQueueInfo[];
	defenseEffectQueue: SkillQueueInfo[];
	agilityEffectQueue: SkillQueueInfo[];
}

export const makeDefaultEffectQueues = (init: Partial<EffectQueues> = {}): EffectQueues => {
	return withDefaultValues(init, {
		hpEffectQueue: [],
		attackEffectQueue: [],
		defenseEffectQueue: [],
		agilityEffectQueue: [],
	});
}