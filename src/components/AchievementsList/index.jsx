import './index.css';

export default function AchievementsList({ achievements, t }) {
	return (
		<div class="achievement-list">
			{achievements.map((currentAchievement) => {
				return (
					<div class="achievement-list-item">
						<img src={`/img/alchemistry/achievements/${currentAchievement.name}_ok.png`} />
						<div class="achievement-list-item-body">
							<div class="achievement-list-item-title">
								{t(`alchemistry:achievements:NEW_ACHIEVEMENT_1_${currentAchievement.index}_NAME`)}
							</div>
							<span class={'achievement-list-rarity' + ((currentAchievement.percent < 10) ? ' achievement-list-rarity-rare' : '')}>
								{Math.floor(currentAchievement.percent)}%
							</span>
							<div class="achievement-list-item-description">
								{currentAchievement.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}