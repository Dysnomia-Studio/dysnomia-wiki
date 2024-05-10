import { neededItems, neededIngredients } from '/src/business/alchemistry_neededItems.js';

export default function AlchemistryAchievementDescription({ achievement, t }) {
	return (
		<div>
			{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${achievement.index}_DESC`).replace('N/A', '')}
			{neededItems[achievement.name] && <details>
				<summary>Item needed</summary>{/* TODO: i18n */}
				You should create <b>{neededItems[achievement.name]}</b>{neededIngredients[achievement.name] && <> using <b>{neededIngredients[achievement.name]}</b>.</>}
			</details>}
		</div>
	);
}