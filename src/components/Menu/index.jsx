import './index.css';

export default function Menu() {
	return (
		<nav className="menu">
			<a href="https://dysnomia.studio" target="_blank"><img src="/dysnomia.webp" alt="Dysnomia's logo" /></a>
			<span className="menu-item">
				<span className="menu-item-title">Alchemistry</span>
				<span className="submenu">
					<a href="/alchemistry/achievements">Achievements</a><br/>
					<a href="/alchemistry/challenges">Challenges</a><br/>
					<a href="/alchemistry/items">Items</a><br/>
				</span>
			</span>
			<a href="/extortion">Extortion</a>
			<a href="/galactae">Galactae</a>
			<a href="/manufactur-inc">Manufactur'inc</a>
		</nav>
	);
}