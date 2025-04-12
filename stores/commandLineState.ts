export const commandLineStateStore = defineStore('commandLineStateStore', () => {
	const state: Ref<CommandState> = ref("normal");

	return { state };
});
