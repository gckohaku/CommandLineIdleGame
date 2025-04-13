import * as BattleUtilities from "@/utils/battleUtilities";

export const battleCommands: { [key: string]: (args: CommandArgs) => void } = {
	skill: skillCommand,
	info: infoCommand
};

function skillCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const battleSceneStatuses = battleSceneManagerStore();

	if (args.length <= 0) {
		cmdScreen.writeLine("スキルのスロット番号を指定してください");
		return;
	}

	const slotNumber = BattleUtilities.toSkillSlotNumber(args[1]);

	if (slotNumber === -1) {
		cmdScreen.writeLine("スロット番号は 1～9 の整数である必要があります");
		cmdScreen.writeLine(args[1]);
		return;
	}

	battleSceneStatuses.userSkill(slotNumber);

	battleSceneStatuses.enemySkill(1);
}

function infoCommand(args: CommandArgs): void {
	const battleSceneStatuses = battleSceneManagerStore();

	battleSceneStatuses.viewStatus();
}