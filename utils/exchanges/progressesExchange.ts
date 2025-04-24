export function progressVoidExchange(exchangeValue: number) {
	const userStatus = userStatusStore();

	const exchangeRate = 10;

	const maxExchange = Math.floor(userStatus.materials / exchangeRate);
	const exchangeableValue = Math.min(exchangeValue, maxExchange);

	if (!checkExchangeable(exchangeableValue * exchangeRate, userStatus.materials)) {
		viewCannotExchangeError({"exchangeable value": exchangeValue, "exchange rate": exchangeRate, "materials": userStatus.materials});

		return;
	}

	userStatus.progresses.void += exchangeableValue;
	userStatus.materials -= exchangeableValue * exchangeRate;
}

export function progressHitPointExchange(exchangeValue: number) {
	const userStatus = userStatusStore();
	const progresses = userStatus.progresses;

	let count = 0;
	let necessary = 0;
	let currentRate = progresses.increaseHitPoint;

	while (necessary + currentRate + 1 <= progresses.void && count < exchangeValue) {
		necessary += ++currentRate;
		count++;
	}

	const actualExchangeValue = Math.min(count, exchangeValue);

	if (!checkExchangeable(actualExchangeValue, progresses.void)) {
		viewCannotExchangeError({"start rate": progresses.increaseHitPoint + 1, "exchangeable value": exchangeValue, count: count, "progress void": progresses.void});

		return;
	}

	progresses.void -= necessary;
	progresses.increaseHitPoint += actualExchangeValue;
}

export function progressAttackExchange(exchangeValue: number) {
	const userStatus = userStatusStore();
	const progresses = userStatus.progresses;

	let count = 0;
	let necessary = 0;
	let currentRate = progresses.powerUpOfAttack;

	while (necessary + currentRate + 1 <= progresses.void && count < exchangeValue) {
		necessary += ++currentRate;
		count++;
	}

	console.log(necessary, currentRate, count);

	const actualExchangeValue = Math.min(count, exchangeValue);

	if (!checkExchangeable(actualExchangeValue, progresses.void)) {
		viewCannotExchangeError({"start rate": progresses.powerUpOfAttack + 1, "exchangeable value": exchangeValue, count: count, "progress void": progresses.void});

		return;
	}

	progresses.void -= necessary;
	progresses.powerUpOfAttack += actualExchangeValue;
}

export function progressDefenseExchange(exchangeValue: number) {
	const userStatus = userStatusStore();
	const progresses = userStatus.progresses;

	let count = 0;
	let necessary = 0;
	let currentRate = progresses.strongerDefense;

	while (necessary + currentRate + 1 <= progresses.void && count < exchangeValue) {
		necessary += ++currentRate;
		count++;
	}

	const actualExchangeValue = Math.min(count, exchangeValue);

	if (!checkExchangeable(actualExchangeValue, progresses.void)) {
		viewCannotExchangeError({"start rate": progresses.strongerDefense + 1, "exchangeable value": exchangeValue, count: count, "progress void": progresses.void});

		return;
	}

	progresses.void -= necessary;
	progresses.strongerDefense += actualExchangeValue;
}

export function progressAgilityExchange(exchangeValue: number) {
	const userStatus = userStatusStore();
	const progresses = userStatus.progresses;
	let count = 0;
	let necessary = 0;
	let currentRate = progresses.moreQuickly;
	while (necessary + currentRate + 1 <= progresses.void && count < exchangeValue) {
		necessary += ++currentRate;
		count++;
	}
	const actualExchangeValue = Math.min(count, exchangeValue);
	if (!checkExchangeable(actualExchangeValue, progresses.void)) {
		viewCannotExchangeError({"start rate": progresses.moreQuickly + 1, "exchangeable value": exchangeValue, count: count, "progress void": progresses.void});
		return;
	}
	progresses.void -= necessary;
	progresses.moreQuickly += actualExchangeValue;
}

/**
 * 交換可能であるか
 * @param necessary 必要な素材量
 * @param remain 実際に残っている素材量
 * @returns 交換可能なら true, そうでないなら false
 */
function checkExchangeable(necessary: number, remain: number): boolean {
	return necessary <= remain;
}

function viewCannotExchangeError(displayValues: { [key: string]: number }): void {
	const cmdScreen = commandScreenStore();

	cmdScreen.writeLine("ERROR DETECTED");
	cmdScreen.writeLine("that's cannot exchange");

	for (const key in displayValues) {
		cmdScreen.writeLine(`${key}: ${displayValues[key]}`);
	}

	cmdScreen.writeLine("");
	cmdScreen.writeLine("process is stopped");
}
