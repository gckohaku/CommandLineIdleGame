export interface SkillFormation {
	name: string;
	description: string;
	slots: {
		0?: SkillInfo;
		1: SkillInfo;
		2: SkillInfo;
		3: SkillInfo;
		4: SkillInfo;
		5: SkillInfo;
		6: SkillInfo;
		7: SkillInfo;
		8: SkillInfo;
		9: SkillInfo;
	};
	necessaryAgility: number;
}

const defaultSkillFormationUnit: SkillFormation = {
	name: "",
	description: "",
	slots: {
		1: attack001_normal,
		2: attack001_normal,
		3: attack001_normal,
		4: attack001_normal,
		5: attack001_normal,
		6: attack001_normal,
		7: attack001_normal,
		8: attack001_normal,
		9: attack001_normal,
	},
	necessaryAgility: 1.0,
};

export const defaultSkillFormations: SkillFormation[] = [
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
	defaultSkillFormationUnit,
];

for (const [index, unit] of defaultSkillFormations.entries()) {
	unit.name = `formation ${index}`;
}