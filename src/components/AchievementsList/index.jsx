import PropTypes from 'prop-types';
import achievementPropType from '../PropTypes/achievement.js';

import SpoilerWarning from '../SpoilerWarning';

import './index.css';

const RARITY_THRESOLD = 10;

export default function AchievementsList({ achievements, t }) {
	return (
		<div className="achievement-list">
			<SpoilerWarning t={t} />
			
			{achievements.map((currentAchievement) => {
				let rarityClass = 'achievement-list-rarity';
				if(currentAchievement.percent < RARITY_THRESOLD) {
					rarityClass += ' achievement-list-rarity-rare';
				}

				return (
					<div key={currentAchievement.index} className="achievement-list-item">
						<img src={currentAchievement.picture} width="50" height="50" alt={currentAchievement.name} />
						<div className="achievement-list-item-body">
							<div className="achievement-list-item-title">
								{currentAchievement.name}
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
