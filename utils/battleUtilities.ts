import type { BattleSceneStatus } from "./BattleSceneStatus";

export function calcDamage(attacker: BattleSceneStatus, defender: BattleSceneStatus): number {
	const attack = attacker.currentAttack;
	const defense = defender.currentDefense;
	const attributeMultiply = getDamageMultiplyByAttribute(attacker.attribute, defender.attribute);
	
	return attack * (attack / (attack + defense)) * getRandomDamageMultiply() * attributeMultiply;
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