import type { I18nMessages } from "~/i18n/I18nMessages";

type JoinObjectKey<CurrentPath extends string, AppendKey extends string> = CurrentPath extends ""
	? AppendKey
	: `${CurrentPath}.${AppendKey}`;

export type ObjectKeyPaths<T extends object, CurrentPath extends string = ""> = T extends unknown[]
	? unknown
	: {
			[K in keyof T]: K extends string
				?
						| JoinObjectKey<CurrentPath, K>
						| (T[K] extends object ? ObjectKeyPaths<T[K], JoinObjectKey<CurrentPath, K>> : never)
				: never;
		}[keyof T];
