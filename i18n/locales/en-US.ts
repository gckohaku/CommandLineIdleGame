import type { I18nMessages } from "../I18nMessages";

export const messagesEnUs: I18nMessages = {
	test: "test",
	embedTest: "embed test {name} ok?",
	progresses: {
		void: "Progress \"Void\"",
		increaseHitPoint: "Progress \"Increase Hit Point\"",
		powerUpOfAttack: "Progress \"Power Up of Attack\"",
		strongerDefense: "Progress \"Stronger Defense\"",
		moreQuickly: "Progress \"More Quickly\"",
	},
	skills: {
		attackAddSub001_smallEnergy: {
			title: "Small Energy",
			description: "Attack power is increased by X",
		},
		attack001_normal: {
			title: "Normal Attack",
			description: "1x the attack power of non-attribute attack",
		}
	}
}
