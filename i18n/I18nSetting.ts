import type { i18nMessages } from "./I18nMessages";

export interface I18nSetting {
	locale: string;
	name: string;
	messages: i18nMessages;
}