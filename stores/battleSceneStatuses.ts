import type { BattleSceneStatus } from "~/utils/BattleSceneStatus";

export const battleSceneStatusesStore = defineStore("battleSceneStatusesStore", () => {
	const userStatus = userStatusStore();
	const defaultUserStatus: Readonly<BattleStatus> = battleStatusWithDefault(userStatus.battleStatus);

	const userBattleStatus: Ref<BattleSceneStatus> = ref({
		defaultStatus: defaultUserStatus,
		currentStatus: structuredClone(defaultUserStatus),
		maxHitPoint: defaultUserStatus.hitPoint,
		attribute: attribute.none,
		skillFormation: defaultSkillFormations[0],
		currentSkill: 1,
		effectQueues: makeDefaultEffectQueues(),
	});
	const enemyBattleStatus: Ref<BattleSceneStatus[]> = ref([]);

	function initializeStatus() {
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
				skill.skillInfo.action(skillNumber, userStatus, enemyBattleStatus.value[0]);
			}
		}
	}

	function enemySkill(skillNumber: keyof SkillFormation["slots"]) {
		const enemyStatus = enemyBattleStatus.value[0];

		if (enemyStatus) {
			const skill = enemyStatus.skillFormation.slots[skillNumber];
			if (skill) {
				skill.skillInfo.action(skillNumber, enemyStatus, userBattleStatus.value);
			}
		}
	}

	function viewStatus() {
		const cmdScreen = commandScreenStore();
		cmdScreen.writeLine(`${JSON.stringify(userBattleStatus.value.currentStatus)}\n`);
		cmdScreen.writeLine(`${JSON.stringify(enemyBattleStatus.value[0].currentStatus)}\n`);
	}

	return { userBattleStatus, enemyBattleStatus, initializeStatus, userSkill, enemySkill };
});
