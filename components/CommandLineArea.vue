<script lang="ts" setup>

const focusZone = ref<InstanceType<typeof HTMLDialogElement> | null>(null);
const infoScreen = ref<InstanceType<typeof HTMLDialogElement> | null>(null);

const cmdState = commandLineStateStore();
const cmdScreen = commandScreenStore();
const userStatus = userStatusStore();

const onCmdDisplayClick = () => {
	console.log("click");

	if (focusZone.value) {
		const commandDom = focusZone.value;
		commandDom.focus();
	}
}

const onCommandEnter = (e: Event) => {
	e.preventDefault();

	if (focusZone.value && infoScreen.value) {
		const commandDom = focusZone.value;
		const command = commandDom.innerText;
		commandDom.innerText = "";
		cmdScreen.writeLine(command);

		const args: string[] = command.split(" ");
		const currentCommands = commands.get(cmdState.state);

		if (currentCommands && args[0] in currentCommands) {
			currentCommands[args[0]](args);
		}
		else {
			cmdScreen.writeLine(`<br>command of "${args[0]}" is not found.`);
		}
	}
}

onMounted(async () => {
	await indexedDbPreparation();
	const beforePlayDataId = await getBeforePlayDataId();

	if (focusZone.value) {
		focusZone.value.focus();
	}
	console.log(userStatus.battleStatusLevels);
	cmdScreen.writeLine(userStatus);
	cmdScreen.writeLine(beforePlayDataId);
});
</script>

<template>
	<!-- めも
		flag で上位素材を買う
		その上位素材を利用して「進捗『無』」を獲得する
		進捗を利用してバトル用ステータスを上昇させる -->
	<div class="command-line-area" @click="onCmdDisplayClick">
		<div ref="infoScreen" v-html="cmdScreen.screen"></div>
		<div contenteditable="true" class="editable-command-aria" ref="focusZone" @keydown.enter="e => onCommandEnter(e)"></div>
	</div>
</template>

<style>
.command-line-area {
	background-color: #1c1c1c;
	height: 100%;
	color: lightgreen;
	padding: .5rem;
	overflow-y: scroll;
	box-sizing: border-box;

	.editable-command-aria {
		outline: none;
	}
}
</style>