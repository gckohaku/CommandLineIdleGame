import type { i18nMessages } from "./I18nMessages";
import type { I18nSetting } from "./I18nSetting";
import { messagesEnUs } from "./locales/en-US";
import { messagesJaJp } from "./locales/ja-JP";

export const messages: {[key: string]: I18nSetting} = {
	ja: {locale: "ja-JP", name: "日本語",  messages: messagesJaJp},
	en: {locale: "en-US", name: "English (US)",  messages: messagesEnUs},
}

