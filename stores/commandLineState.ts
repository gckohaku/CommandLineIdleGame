export const commandLineStateStore = defineStore('commandLineStateStore', () => {
	const state: Ref<CmdState> = ref("normal");

	return { state };
});
