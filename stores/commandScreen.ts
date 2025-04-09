import { defineStore } from "pinia";

export const commandScreenStore = defineStore("commandScreenStore", () => {
	const screen: Ref<string> = ref("");

	function clear() {
		screen.value = "";
	}

	function write(...text: unknown[]): void {
		for (const data of text) {
			const dataType = typeof data;
			if (dataType === "string" || dataType === "number" || dataType === "boolean") {
				screen.value += data;
			}
			else {
				screen.value += JSON.stringify(data, null, "  ").replaceAll("\n", "<br>").replaceAll(" ", "&nbsp;");
			}
			screen.value += " ";
		}
	}

	function writeLine(...text: unknown[]): void {
		write(...text);
		write("<br>");
	}

	return { screen, clear, write, writeLine };
});
