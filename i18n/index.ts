import type { I18nMessages } from "./I18nMessages";
import type { I18nSetting } from "./I18nSetting";
import { messagesEnUs } from "./locales/en-US";
import { messagesJaJp } from "./locales/ja-JP";

export const locales: { [key: string]: I18nSetting } = {
	ja: { locale: "ja-JP", name: "日本語", messages: messagesJaJp },
	en: { locale: "en-US", name: "English (US)", messages: messagesEnUs },
};

let currentLocale = "ja";

export function changeLocale(locale: string) {
	currentLocale = locale;
}

export function embed(messageContent: string, embeds: { [key: string]: string | number }): string {
	let message = messageContent;

	for (const targetName in embeds) {
		const regex = new RegExp(`(?<!\\\\)\\{${targetName}\\}`, "g");
		message = message.replaceAll(regex, embeds[targetName].toString());
	}

	return message;
}

export function getCurrentLocaleMessages(): I18nMessages {
	return locales[currentLocale].messages;
}

export function replaceFromKeyString(keyText: string): string {
	const splitText = keyText.split(".");

	const messages = getCurrentLocaleMessages();

	const value = recursiveGetValueFromObject(messages, splitText);

	if (value === "returnKeyString" || typeof value !== "string") {
		return `{${keyText}}`
	}

	return value;
}

function recursiveGetValueFromObject(messages: object, keys: string[]): string {
	if (keys.length === 0 || typeof messages !== "object" || messages === null) {
		return "returnKeyString";
	}

	const key = keys[0];
	const remainingKeys = keys.slice(1);

	if (key in messages) {
		const value = messages[key as keyof typeof messages];
		if (typeof value === "object" && value !== null) {
			return recursiveGetValueFromObject(value, remainingKeys);
		}
	}

	return "returnKeyString";
}
