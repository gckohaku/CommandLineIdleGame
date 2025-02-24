import { defineStore } from "pinia"

export const dataNamesStore = defineStore('dataNamesStore', () => {
	const saveDataName: Ref<string> = ref("");

	return { saveDataName };
});
