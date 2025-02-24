import { defineStore } from "pinia"

export const cmdScreenStore = defineStore('cmdScreenStore', () => {
	const screen: Ref<string> = ref("");

	function clear() {
		screen.value = "";
	}

	return { screen, clear };
});
