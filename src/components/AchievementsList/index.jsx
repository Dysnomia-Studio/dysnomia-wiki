import PropTypes from 'prop-types';
import achievementPropType from '../PropTypes/achievement.js';

import './index.css';

const RARITY_THRESOLD = 10;

export default function AchievementsList({ achievements, t }) {
	return (
		<div className="achievement-list">
			{achievements.map((currentAchievement) => {
				let rarityClass = 'achievement-list-rarity';
				if(currentAchievement.percent < RARITY_THRESOLD) {
					rarityClass += ' achievement-list-rarity-rare';
				}

				return (
					<div key={currentAchievement.index} className="achievement-list-item">
						<img src={`/img/alchemistry/achievements/${currentAchievement.name}_ok.png`} width="50" height="50" alt={t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${currentAchievement.index}_NAME`)} />
						<div className="achievement-list-item-body">
							<div className="achievement-list-item-title">
								{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${currentAchievement.index}_NAME`)}
							</div>
							<span className={rarityClass}>
								{Math.floor(currentAchievement.percent)}%
							</span>
							<div className="achievement-list-item-description">
								{currentAchievement.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

AchievementsList.propTypes = {
	achievements: PropTypes.arrayOf(PropTypes.exact(achievementPropType)).isRequired,
	t: PropTypes.func.isRequired,
};
