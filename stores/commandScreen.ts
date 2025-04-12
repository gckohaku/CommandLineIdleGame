import { defineStore } from "pinia";

export const commandScreenStore = defineStore("commandScreenStore", () => {
	const screen: Ref<string> = ref("");

	function clear() {
		screen.value = "";
	}

	function write(...data: unknown[]): void {
		for (let i = 0; i < data.length; i++) {
			const dataType = typeof data[i];
			if (dataType === "string" || dataType === "number" || dataType === "boolean") {
				screen.value += data[i];
			} else {
				screen.value += JSON.stringify(data[i], null, "  ").replaceAll("\n", "<br>").replaceAll(" ", "&nbsp;");
			}
			if (i < data.length - 1) {
				screen.value += " ";
			}
		}
	}

	function writeLine(...data: unknown[]): void {
		write(...data);
		write("<br>");
	}

	return { screen, clear, write, writeLine };
});
