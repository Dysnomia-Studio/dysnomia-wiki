import PropTypes from 'prop-types';

const achievement = {
	description: PropTypes.element.isRequired,
	index: PropTypes.number.isRequired,
	key: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	percent: PropTypes.number.isRequired,
	picture: PropTypes.string.isRequired,
};
export default achievement;
