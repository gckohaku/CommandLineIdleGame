import * as i18n from "@/i18n";

export const normalCommands: { [key: string]: (args: CommandArgs) => void } = {
	help: helpCommand,
	mine: mineCommand,
	status: statusCommand,
	list: listCommand,
	buy: exchangeCommand,
	exchange: exchangeCommand,
	rate: rateCommand,
};

if (import.meta.env.DEV) {
	normalCommands.debug = debugCommand;
}

function helpCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();

	cmdScreen.writeLine("まだコマンド全然ないよ～<br>いまがんばって開発中だからまってね");
}

function mineCommand(area: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const gameDataManager = gameDataManagerStore();

	const userStatus = userStatusStore();
	const value: number = Math.floor(Math.random() * 10);

	const fragment = getFragments(value);
	userStatus.fragments += fragment;

	cmdScreen.write(`You got ${fragment} fragment`);

	if (fragment !== 1) {
		cmdScreen.write("s");
	}

	cmdScreen.writeLine(".");

	gameDataManager.save();
}

function statusCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const userStatus = userStatusStore();

	cmdScreen.writeLine(`fragments: ${userStatus.fragments}`);
	cmdScreen.writeLine(`materials: ${userStatus.materials}`);
	cmdScreen.writeLine("progresses:");
	cmdScreen.writeLine(`&nbsp;&nbsp;${i18n.getCurrentLocaleMessages().progresses.void}: ${userStatus.progresses.void}`);
	cmdScreen.writeLine(`&nbsp;&nbsp;${i18n.getCurrentLocaleMessages().progresses.increaseHitPoint}: ${userStatus.progresses.increaseHitPoint}`);
	cmdScreen.writeLine(`&nbsp;&nbsp;${i18n.getCurrentLocaleMessages().progresses.powerUpOfAttack}: ${userStatus.progresses.powerUpOfAttack}`);
	cmdScreen.writeLine(`&nbsp;&nbsp;${i18n.getCurrentLocaleMessages().progresses.strongerDefense}: ${userStatus.progresses.strongerDefense}`);
	cmdScreen.writeLine(`&nbsp;&nbsp;${i18n.getCurrentLocaleMessages().progresses.moreQuickly}: ${userStatus.progresses.moreQuickly}`);
}

function listCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const i18nMessages = i18n.getCurrentLocaleMessages();

	const target = args[1];

	if (target === "progress" || target === "prog") {
		cmdScreen.writeLine(`0: ${i18nMessages.progresses.void}`);
		cmdScreen.writeLine(`1: ${i18nMessages.progresses.increaseHitPoint}`);
		cmdScreen.writeLine(`2: ${i18nMessages.progresses.powerUpOfAttack}`);
		cmdScreen.writeLine(`3: ${i18nMessages.progresses.strongerDefense}`);
		cmdScreen.writeLine(`4: ${i18nMessages.progresses.moreQuickly}`);
	}
}

function exchangeCommand(args: CommandArgs): void {
	const userStatus = userStatusStore();
	const MaterialRateManager = materialRateManagerStore();
	const cmdScreen = commandScreenStore();
	const gameDataManager = gameDataManagerStore();

	const exchangeTarget = args[1];

	if (exchangeTarget === "material" || exchangeTarget === "mtr") {
		materialExchange(Number(args[2]));
	} else if (exchangeTarget === "progress" || exchangeTarget === "prog") {
		const progressTarget = args[2];

		if (progressTarget === "0" || progressTarget === "void") {
			progressVoidExchange(Number(args[3]));
		}
		else if (progressTarget === "1") {
			progressHitPointExchange(Number(args[3]));
		}
		else if (progressTarget === "2") {
			progressAttackExchange(Number(args[3]));
		}
		else if (progressTarget === "3") {
			progressDefenseExchange(Number(args[3]));
		}
		else if (progressTarget === "4") {
			progressAgilityExchange(Number(args[3]));
		}
	}

	gameDataManager.save();
}

function rateCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const MaterialRateManager = materialRateManagerStore();

	cmdScreen.writeLine(`Material Rate: ${MaterialRateManager.rate}`);
}

function battleCommand(args: CommandArgs): void {}

function debugCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const cmdStatus = commandLineStateStore();
	const battleSceneManager = battleSceneManagerStore();
	const userStatus = userStatusStore();

	const debugContent = args[1];

	if (debugContent === "battle") {
		battleSceneManager.initializeStatus();
		cmdStatus.state = "battle";
	} else if (debugContent === "setstatus") {
		const target = args[2];
		if (target === "fragment" || target === "frag") {
			userStatus.fragments = Number(args[3]);
		} else if (target === "material" || target === "mtr") {
			userStatus.materials = Number(args[3]);
		} else if (target === "progress" || target === "prog") {
			const progressTarget = args[3];

			if (progressTarget === "void" || progressTarget === "0") {
				userStatus.progresses.void = Number(args[4]);
			}
			else if (progressTarget === "1") {
				userStatus.progresses.increaseHitPoint = Number(args[4]);
			}
			else if (progressTarget === "2") {
				userStatus.progresses.powerUpOfAttack = Number(args[4]);
			}
			else if (progressTarget === "3") {
				userStatus.progresses.strongerDefense = Number(args[4]);
			}
			else if (progressTarget === "4") {
				userStatus.progresses.moreQuickly = Number(args[4]);
			}
			else {
				cmdScreen.writeLine("not found progress");
			}
		}
		else {
			cmdScreen.writeLine("not found target");
		}
	} else {
		cmdScreen.writeLine(`not found debug command of ${debugContent}`);
	}

	gameDataManagerStore().save();
}

function getFragments(value: number): number {
	if (value <= 3) {
		return 1;
	}
	if (value <= 6) {
		return 2;
	}
	if (value <= 8) {
		return 3;
	}
	return 4;
}
