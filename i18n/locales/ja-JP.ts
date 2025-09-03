import type { I18nMessages } from "../I18nMessages";

export const messagesJaJp: I18nMessages = {
	test: "テスト",
	embedTest: "これはテストです、{name}さん",
	progresses: {
		void: "進捗「無」",
		increaseHitPoint: "進捗「体力増加」",
		powerUpOfAttack: "進捗「攻撃を強く」",
		strongerDefense: "進捗「防御を固く」",
		moreQuickly: "進捗「もっと素早く」",
	},
	skills: {
		attackAddSub001_smallEnergy: {
			title: "少しの力",
			description: "攻撃力を X 増加させる",
		},
		attack001_normal: {
			title: "通常攻撃",
			description: "攻撃力等倍の無属性の攻撃",
		}
	}
}
