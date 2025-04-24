export function materialExchange(exchangeValue: number) {
	const userStatus = userStatusStore();
	const materialRateManager = materialRateManagerStore();

	const maxExchange = Math.floor(userStatus.fragments / materialRateManager.rate);
	const exchangeableValue = Math.min(exchangeValue, maxExchange);

	if (exchangeableValue * materialRateManager.rate > userStatus.fragments) {
		const cmdScreen = commandScreenStore();

		cmdScreen.writeLine("ERROR DETECTED");
		cmdScreen.writeLine("that's cannot exchange");
		cmdScreen.writeLine(`exchangeable value: ${exchangeableValue}`);
		cmdScreen.writeLine(`material rate: ${materialRateManager.rate}`);
		cmdScreen.writeLine(`fragments: ${userStatus.fragments}`);
		cmdScreen.writeLine("");
		cmdScreen.writeLine("process is stopped");

		return;
	}

	userStatus.materials += exchangeableValue;
	userStatus.fragments -= exchangeableValue * materialRateManager.rate;
}
