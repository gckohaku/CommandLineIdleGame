import type { I18nMessages } from "./I18nMessages";

export interface I18nSetting {
	locale: string;
	name: string;
	messages: I18nMessages;
}