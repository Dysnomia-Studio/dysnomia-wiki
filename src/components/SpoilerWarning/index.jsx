import PropTypes from 'prop-types';

import './index.css';

export default function SpoilerWarning({ t }) {
	return (
		<div className="spoiler-warning">
			{t(`wiki:spoiler:spoiler-first-line`)}<br />
			{t(`wiki:spoiler:spoiler-second-line`)}
		</div>
	);
}

SpoilerWarning.propTypes = {
	t: PropTypes.func.isRequired,
};
