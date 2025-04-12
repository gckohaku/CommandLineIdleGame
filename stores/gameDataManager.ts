import { defineStore } from "pinia"

export const gameDataManagerStore = defineStore('gameDataManagerStore', () => {
	const userStatus = userStatusStore();
	const materialRateManager = materialRateManagerStore();

	const saveDataName: Ref<string> = ref("");

	async function save() {
		const saveData: SaveData = {
			version: 0.01,
			fragments: userStatus.fragments,
			materials: userStatus.materials,
			rateOfMaterials: materialRateManager.rate,
			progresses: JSON.parse(JSON.stringify(userStatus.progresses)),
			battleStatusLevels: JSON.parse(JSON.stringify(userStatus.battleStatusLevels)),
		}

		console.log(saveData);

		await storeSaveData(saveData, saveDataName.value);
	}

	async function getSaveDataFromIndexedDb() {
		await getSaveData(saveDataName.value);
	}

	return { saveDataName, save, getSaveDataFromIndexedDb };
});