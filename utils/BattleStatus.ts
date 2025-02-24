export interface BattleStatusLevels {
	hitPointLevel: number;
	attackLevel: number;
	defenseLevel: number;
	agilityLevel: number;
}

export const battleStatusLevelsWithDefault = (init: Partial<BattleStatusLevels> = {}) =>
	withDefaultValues(init, {
		hitPointLevel: 1,
		attackLevel: 1,
		defenseLevel: 1,
		agilityLevel: 1,
	});

export interface BattleStatus {
	hitPoint: number;
	attack: number;
	defense: number;
	agility: number;
}

export const battleStatusWithDefault = (init: Partial<BattleStatus> = {}) =>
	withDefaultValues(init, {
		hitPoint: 0,
		attack: 0,
		defense: 0,
		agility: 0,
	});