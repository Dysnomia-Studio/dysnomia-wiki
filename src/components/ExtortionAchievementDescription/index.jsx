import PropTypes from 'prop-types';
import achievementPropType from '../PropTypes/achievement.js';

export default function ExtortionAchievementDescription({ achievement, t, translatePath }) {
	return (
		<div>
			{achievement.story && <><b>{t(`extortion:wiki:achievement_in_story`)}{' '}</b><br /></>}
			{achievement.exclusive && <>{t(`extortion:wiki:achievement_exclusive_with`).replace('%achievementname%', t(`extortion:achievements:${achievement.exclusive}_NAME`))}{' '}<br /></>}
			{achievement.chapter && <span>({t(`extortion:wiki:chapter_index`).replace('%number%', achievement.chapter)}){' '}</span>}

			<i>{t(`extortion:achievements:${achievement.i18nKeyPrefix}_DESC`) ?? t(`extortion:achievements:${achievement.i18nKeyPrefix}_WIKI`)}</i><br />
			{achievement.server && achievement.file && <><br /><p>Read the file named <i>{achievement.file}</i> on <a href={translatePath(`/extortion/servers#server-${achievement.server}`)}>{achievement.server}</a>.</p></>}
		</div>
	);
}

ExtortionAchievementDescription.propTypes = {
	achievements: PropTypes.exact(achievementPropType).isRequired,
	t: PropTypes.func.isRequired,
	translatePath: PropTypes.func.isRequired,
};
