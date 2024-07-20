import PropTypes from 'prop-types';

import './index.css';

export default function Menu({ t, translatePath }) {
	return (
		<>
			<a href="#menu" className="mobile-menu-button">☰</a>
			<nav id="menu" className="menu">
				<a href="#" className="mobile-menu-quit">X</a>
				<a href="/"><img src="/dysnomia.webp" alt="Dysnomia's logo" /></a>
				<span className="menu-item">
					<span className="menu-item-title">Alchemistry</span>
					<span className="submenu">
						<a href={translatePath('/alchemistry/achievements')}>{t(`alchemistry:wiki:achievement-page-title`)}</a><br/>
						<a href={translatePath('/alchemistry/challenges')}>{t(`alchemistry:wiki:challenges-page-title`)}</a><br/>
						<a href={translatePath('/alchemistry/items')}>{t(`alchemistry:wiki:items-page-title`)}</a><br/>
					</span>
				</span>
				<a className="menu-item" href={translatePath('/extortion')}>Extortion</a>
				<a className="menu-item" href={translatePath('/galactae')}>Galactae</a>
				<span className="menu-item">
					<span className="menu-item-title">Manufactur'inc</span>
					<span className="submenu">
						<a href={translatePath('/manufactur-inc/achievements')}>{t(`manufacturinc:wiki:achievement-page-title`)}</a><br/>
						<a href={translatePath('/manufactur-inc/contracts')}>{t(`manufacturinc:wiki:contracts-page-title`)}</a><br/>
						<a href={translatePath('/manufactur-inc/equipments')}>{t(`manufacturinc:wiki:equipments-page-title`)}</a><br/>
						<a href={translatePath('/manufactur-inc/items')}>{t(`manufacturinc:wiki:items-page-title`)}</a><br/>
					</span>
				</span>
			</nav>
		</>
	);
}

Menu.propType = {
	t: PropTypes.func.isRequired
};
