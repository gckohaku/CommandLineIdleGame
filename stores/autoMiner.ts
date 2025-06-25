import { defineStore } from "pinia";

export const autoMinerStore = defineStore("autoMinerStore", () => {
	// 1分間に level 分の fragment を獲得する 最大 60
	const level = ref(0);
	const beforeMineTime = ref(0);
	const remainFragment = ref(0);

	function obtainFragment() {
		return level.value;
	}

	function upgrade(upgradeLevel: number) {
		if (upgradeLevel > level.value) {
			level.value = upgradeLevel;
		}
	}

	return { level };
});
