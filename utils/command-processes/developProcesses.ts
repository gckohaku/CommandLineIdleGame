import { commandLineStateStore } from "~/stores/commandLineState"

export const developProcesses = {
	battle: battleTest,
}

function battleTest(): void {
	const commandLineState = commandLineStateStore();

	commandLineState.state = "battle";
}