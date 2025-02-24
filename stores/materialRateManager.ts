export const materialRateManagerStore = defineStore('materialRateManagerStore', () => {
	const rate: Ref<number> = ref(10);

	function calcRate() {
		const key = 10 + getRateRelativeKey();

		const min =  -(rate.value / 10) * Math.random();
		const max = Math.max(key - rate.value, 1) * Math.random();

		console.log(key, min, max);
		
		rate.value += min + (max - min) * Math.random();
	}
	
	function getRateRelativeKey() {
		const oneHour = 60 * 60 * 1000;

		const now = new Date();
		const unixTime = now.getTime() + (9 * oneHour);

		return Math.sin(2 * Math.PI * unixTime / oneHour / 40);
	} 

	return { rate, calcRate, getRateRelativeKey };
});
