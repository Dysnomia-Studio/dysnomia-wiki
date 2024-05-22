import PropTypes from 'prop-types';
import achievementPropType from '../PropTypes/achievement.js';

import { neededItems, neededIngredients } from '/src/business/alchemistry_neededItems.js';

export default function AlchemistryAchievementDescription({ achievement, t, translatePath }) {
	return (
		<div>
			{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${achievement.index}_DESC`).replace('N/A', '')}
			{neededItems[achievement.key] && <details>
				<summary>{t(`alchemistry:wiki:achievement-item-needed`)}</summary>
				{t(`alchemistry:wiki:achievement-item-description-need`)} <a href={translatePath(`/alchemistry/item/${neededItems[achievement.key]}`)}>
					{t(`alchemistry:items:${neededItems[achievement.key]}`)}
				</a>{neededIngredients[achievement.key] && <> {t(`alchemistry:wiki:achievement-item-description-from`)} <a href={translatePath(`/alchemistry/item/${neededIngredients[achievement.key]}`)}>
					{t(`alchemistry:items:${neededIngredients[achievement.key]}`)}
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
