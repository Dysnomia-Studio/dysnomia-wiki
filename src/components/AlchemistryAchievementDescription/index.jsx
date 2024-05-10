import { neededItems, neededIngredients } from '/src/business/alchemistry_neededItems.js';

export default function AlchemistryAchievementDescription({ achievement, t, translatePath }) {
	return (
		<div>
			{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${achievement.index}_DESC`).replace('N/A', '')}
			{neededItems[achievement.name] && <details>
				<summary>Item needed</summary>{/* TODO: i18n */}
				You should create <a href={translatePath(`/items/${neededItems[achievement.name]}`)}>
					{t(`alchemistry:items:${neededItems[achievement.name]}`)}
				</a>{neededIngredients[achievement.name] && <> from <a href={translatePath(`/items/${neededIngredients[achievement.name]}`)}>
					{t(`alchemistry:items:${neededIngredients[achievement.name]}`)}
					</a>.
				</>}
			</details>}
		</div>
	);
}