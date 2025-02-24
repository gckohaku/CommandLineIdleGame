export const cmdLineStateStore = defineStore('cmdLineStateStore', () => {
	const state: Ref<CmdState> = ref("normal");

	return { state };
});
