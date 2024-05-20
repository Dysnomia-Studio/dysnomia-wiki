import PropTypes from 'prop-types';
import achievementPropType from '../PropTypes/achievement.js';

import { neededItems, neededIngredients } from '/src/business/alchemistry_neededItems.js';

export default function AlchemistryAchievementDescription({ achievement, t, translatePath }) {
	return (
		<div>
			{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${achievement.index}_DESC`).replace('N/A', '')}
			{neededItems[achievement.name] && <details>
				<summary>{t(`alchemistry:wiki:achievement-item-needed`)}</summary>
				{t(`alchemistry:wiki:achievement-item-description-need`)} <a href={translatePath(`/items/${neededItems[achievement.name]}`)}>
					{t(`alchemistry:items:${neededItems[achievement.name]}`)}
				</a>{neededIngredients[achievement.name] && <> {t(`alchemistry:wiki:achievement-item-description-from`)} <a href={translatePath(`/items/${neededIngredients[achievement.name]}`)}>
					{t(`alchemistry:items:${neededIngredients[achievement.name]}`)}
					</a>.
				</>}
			</details>}
		</div>
	);
}

AlchemistryAchievementDescription.propTypes = {
	achievements: PropTypes.exact(achievementPropType).isRequired,
	t: PropTypes.func.isRequired,
	translatePath: PropTypes.func.isRequired,
};
