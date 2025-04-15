import type { BattleSceneStatus } from "./BattleSceneStatus";

export function calcDamage(attackValue: number, attacker: Readonly<BattleSceneStatus>, defender: Readonly<BattleSceneStatus>): number {
	const attack = attacker.currentStatus.attack;
	const defense = defender.currentStatus.defense;
	const attributeMultiply = getDamageMultiplyByAttribute(attacker.attribute, defender.attribute);

	// バフとデバフの適用 バフとデバフを分けずに適用された順番に処理する
	const attackAddValue = attacker.effectQueues.attackAddSubQueue.reduce<number>((accumulator, current) => accumulator + current.value, 0);
	const attackMultiplyValue = attacker.effectQueues.attackMultiplyQueue.reduce<number>((accumulator, current) => accumulator * current.value, 1);
	const defenseAddValue = defender.effectQueues.defenseAddSubQueue.reduce<number>((accumulator, current) => accumulator + current.value, 0);
	const defenseMultiplyValue = defender.effectQueues.defenseMultiplyQueue.reduce<number>((accumulator, current) => accumulator * current.value, 1);

	const calculatedAttack = (attack + attackAddValue) * attackMultiplyValue;
	const calculatedDefense = (defense + defenseAddValue) * defenseMultiplyValue;

	const denominatorValue = 1 + (calculatedAttack / calculatedDefense) ** 2;

	return calculatedAttack / denominatorValue * getRandomDamageMultiply() * attributeMultiply;
}

export function getDamageMultiplyByAttribute(attackerAttribute: Attribute, defenderAttribute: Attribute): number {
	if ((defenderAttribute - attackerAttribute) % 5 === 2) {
		return 1.2;
	}

	if ((defenderAttribute - attackerAttribute) % 5 === 3) {
		return 0.8;
	}

	return 1;
}

export function getRandomDamageMultiply(): number {
	const randomValue = Math.random();
	return (randomValue - 0.5) ** 3 + 1;
}

export function toSkillSlotNumber(value: number | string): keyof SkillFormation["slots"] | -1 {
	const numValue = Number(value);

	if (Number.isInteger(numValue) && numValue >= 0 && numValue <= 9) {
		// keyof SkillFormation["slots"] は 0 以上 9 以下の整数であるため、この条件分岐と一致する
		return value as keyof SkillFormation["slots"];
	}
	return -1;
}
