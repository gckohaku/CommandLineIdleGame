export const normalCommands: { [key: string]: (args: CommandArgs) => void } = {
	help: helpCommand,
	mine: mineCommand,
	status: statusCommand,
	rate: rateCommand,
}

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

	cmdScreen.write(`You got ${fragment} fragment`);;

	if (fragment !== 1) {
		cmdScreen.write("s");
	}

	cmdScreen.writeLine(".");

	gameDataManager.save();
}

function statusCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const userStatus = userStatusStore();

	cmdScreen.writeLine(`fragments: ${userStatus.fragments}`);;
}

function rateCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const MaterialRateManager = materialRateManagerStore();

	cmdScreen.writeLine(`Material Rate: ${MaterialRateManager.rate}`);
}

function battleCommand(args: CommandArgs): void {

}

function debugCommand(args: CommandArgs): void {
	const cmdScreen = commandScreenStore();
	const cmdStatus = commandLineStateStore();
	const battleSceneManager = battleSceneManagerStore();
	
	battleSceneManager.initializeStatus();
	cmdStatus.state = "battle";
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