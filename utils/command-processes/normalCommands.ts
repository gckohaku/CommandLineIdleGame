export const normalCommands: { [key: string]: (args: CommandArgs) => void } = {
	help: helpCommand,
	mine: mineCommand,
	status: statusCommand,
	rate: rateCommand,
}

function helpCommand(args: CommandArgs): void {
	const cmdScreen = cmdScreenStore();

	cmdScreen.screen = "まだコマンド全然ないよ～<br>いまがんばって開発中だからまってね";
}

function mineCommand(area: CommandArgs): void {
	const cmdScreen = cmdScreenStore();

	const userStatus = userStatusStore();
	const value: number = Math.floor(Math.random() * 10);

	const fragment = getFragments(value);
	userStatus.fragments += fragment;

	cmdScreen.screen = `You got ${fragment} fragment`;

	if (fragment !== 1) {
		cmdScreen.screen += "s";
	}

	cmdScreen.screen += ".";
}

function statusCommand(args: CommandArgs): void {
	const cmdScreen = cmdScreenStore();
	const userStatus = userStatusStore();

	cmdScreen.screen = `fragments: ${userStatus.fragments}`;
}

function rateCommand(args: CommandArgs): void {
	const cmdScreen = cmdScreenStore();
	const MaterialRateManager = materialRateManagerStore();

	cmdScreen.screen = `Material Rate: ${MaterialRateManager.rate}`;
}

function battleCommand(args: CommandArgs): void {

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