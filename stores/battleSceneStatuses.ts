import type { BattleSceneStatus } from "~/utils/BattleSceneStatus";

export const battleSceneManagerStore = defineStore("battleSceneManagerStore", () => {
	const userStatus = userStatusStore();

	const userBattleStatus: Ref<BattleSceneStatus | null> = ref(null);
	const enemyBattleStatus: Ref<BattleSceneStatus[]> = ref([]);

	function initializeStatus() {
		userStatus.calcBattleStatus();
		const defaultUserStatus: Readonly<BattleStatus> = battleStatusWithDefault(userStatus.battleStatus);

		userBattleStatus.value = {
			defaultStatus: defaultUserStatus,
			currentStatus: structuredClone(defaultUserStatus),
			maxHitPoint: defaultUserStatus.hitPoint,
			attribute: attribute.none,
			skillFormation: defaultSkillFormations[0],
			currentSkill: 1,
			effectQueues: makeDefaultEffectQueues(),
		}

		enemyBattleStatus.value.splice(0);
		enemyBattleStatus.value.push({
			defaultStatus: alpha.status,
			currentStatus: structuredClone(alpha.status),
			maxHitPoint: alpha.status.hitPoint,
			attribute: alpha.attribute,
			skillFormation: defaultSkillFormations[0],
			currentSkill: 1,
			effectQueues: makeDefaultEffectQueues(),
		});
	}

	function userSkill(skillNumber: keyof SkillFormation["slots"]) {
		const userStatus = userBattleStatus.value;

		if (userStatus) {
			const skill = userStatus.skillFormation.slots[skillNumber];
			if (skill) {
				skill.action(skillNumber, userStatus, enemyBattleStatus.value[0]);
			}
		}
	}

	function enemySkill(skillNumber: keyof SkillFormation["slots"]) {
		if (!userBattleStatus.value) {
			throw new Error("user battle status is null");
		}

		const enemyStatus = enemyBattleStatus.value[0];

		if (enemyStatus) {
			const skill = enemyStatus.skillFormation.slots[skillNumber];
			if (skill) {
				skill.action(skillNumber, enemyStatus, userBattleStatus.value);
			}
		}
	}

	function viewStatus() {
		if (!userBattleStatus.value) {
			throw new Error("user battle status is null");
		}

		const cmdScreen = commandScreenStore();
		cmdScreen.writeLine("player");
		cmdScreen.writeLine(`${JSON.stringify(userBattleStatus.value.currentStatus)}`);
		cmdScreen.writeLine("enemy");
		cmdScreen.writeLine(`${JSON.stringify(enemyBattleStatus.value[0].currentStatus)}`);
	}

	function playTurn() {

	}

	return { userBattleStatus, enemyBattleStatus, initializeStatus, userSkill, enemySkill, viewStatus, playTurn };
});
