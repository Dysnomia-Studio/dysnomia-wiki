import PropTypes from 'prop-types';

const achievement = {
	description: PropTypes.element.isRequired,
	index: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	percent: PropTypes.number.isRequired,
};
export default achievement;
