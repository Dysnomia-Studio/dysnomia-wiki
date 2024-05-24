import PropTypes from 'prop-types';

import './index.css';

export default function Menu({ t }) {
	return (
		<>
			<a href="#menu" className="mobile-menu-button">☰</a>
			<nav id="menu" className="menu">
				<a href="#" className="mobile-menu-quit">X</a>
				<a href="/"><img src="/dysnomia.webp" alt="Dysnomia's logo" /></a>
				<span className="menu-item">
					<span className="menu-item-title">Alchemistry</span>
					<span className="submenu">
						<a href="/alchemistry/achievements">{t(`alchemistry:wiki:achievement-page-title`)}</a><br/>
						<a href="/alchemistry/challenges">{t(`alchemistry:wiki:challenges-page-title`)}</a><br/>
						<a href="/alchemistry/items">{t(`alchemistry:wiki:items-page-title`)}</a><br/>
					</span>
				</span>
				<a className="menu-item" href="/extortion">Extortion</a>
				<a className="menu-item" href="/galactae">Galactae</a>
				<a className="menu-item" href="/manufactur-inc">Manufactur'inc</a>
			</nav>
		</>
	);
}

Menu.propType = {
	t: PropTypes.func.isRequired
};
