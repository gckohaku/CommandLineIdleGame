export interface EnemiesJson {
	[key: string]: {
		hitPoint: number;
		attack: number;
		defense: number;
		agility: number;
		attribute: number;
		skills: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			7: string;
			8: string;
			9: string;
			0?: string;
		}
	}
}