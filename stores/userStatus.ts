import type { BattleStatus, BattleStatusLevels } from "~/utils/BattleStatus";
import { progressesWithDefault } from "~/utils/Progresses";

export const userStatusStore = defineStore('userStatusStore', () => {
	const fragments: Ref<number> = ref(0);
	const materials: Ref<number> = ref(0);
	const battleStatusLevels: Ref<BattleStatusLevels> = ref(battleStatusLevelsWithDefault());
	const battleStatus: Ref<BattleStatus> = ref(battleStatusWithDefault());
	const progresses: Ref<Progresses> = ref(progressesWithDefault());

	function calcBattleStatus() {
		const hpLevel = battleStatusLevels.value.hitPointLevel;
		battleStatus.value.hitPoint = 100 + (hpLevel - 1) * 30;

		const attackLevel = battleStatusLevels.value.attackLevel;
		battleStatus.value.attack = 10 * attackLevel;

		const defenseLevel = battleStatusLevels.value.defenseLevel;
		battleStatus.value.defense = 10 * defenseLevel;

		const agilityLevel = battleStatusLevels.value.agilityLevel;
		battleStatus.value.agility = 1 + 0.01 * (agilityLevel - 1);
	}

	return { fragments, materials, battleStatusLevels, battleStatus, progresses, calcBattleStatus };
});
