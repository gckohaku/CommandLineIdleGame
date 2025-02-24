export interface Progresses {
	void: number;
	increaseHitPoint: number
	powerUpOfAttack: number;
	strongerDefense: number;
	moreQuickly: number;
}

export const progressesWithDefault = (init: Partial<Progresses> = {}) =>
	withDefaultValues(init, {
		void: 0,
		increaseHitPoint: 0,
		powerUpOfAttack: 0,
		strongerDefense: 0,
		moreQuickly: 0,
	});