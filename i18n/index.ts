import type { i18nMessages } from "./I18nMessages";
import type { I18nSetting } from "./I18nSetting";
import { messagesEnUs } from "./locales/en-US";
import { messagesJaJp } from "./locales/ja-JP";

export const locales: {[key: string]: I18nSetting} = {
	ja: {locale: "ja-JP", name: "日本語",  messages: messagesJaJp},
	en: {locale: "en-US", name: "English (US)",  messages: messagesEnUs},
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

export function getCurrentLocaleMessages(): i18nMessages {
	return locales[currentLocale].messages;
}