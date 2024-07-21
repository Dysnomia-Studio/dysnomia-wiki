import PropTypes from 'prop-types';

function ElementDescription({ t, item, amount, duration, type }) {
	return <span className="element-name">{t(`manufacturinc:${type}:${item}`)} {amount ? `x ${amount}` : ''} {duration ? `(${duration}s)` : ''}</span>;
}

function ManufacturincElementWithLink({ item, t, translatePath, type, amount, duration }) {
	return (
		<div className="item-page-recipe-element">
			<a href={translatePath(`/manufactur-inc/${type === 'resources' ? 'item' : 'equipment'}/${item}`)}>
				<img src={`/img/manufacturinc/${type}/${item}.svg`} alt={t(`manufacturinc:${type}:${item}`)} />
				<ElementDescription t={t} item={item} amount={amount} duration={duration} type={type} />
			</a>
		</div>
	)
}

ManufacturincElementWithLink.propTypes = {
	item: PropTypes.string.isRequired,
	t: PropTypes.func.isRequired,
	translatePath: PropTypes.func.isRequired,
	amount: PropTypes.number,
	duration: PropTypes.number,
};

function ManufacturincElementWithoutLink({ item, t, type, amount, duration }) {
	return (
		<div className="item-page-recipe-element">
			<img src={`/img/manufacturinc/${type}/${item}.svg`} alt={t(`manufacturinc:${type}:${item}`)} />
			<ElementDescription t={t} item={item} amount={amount} duration={duration} type={type} />
		</div>
	)
}

ManufacturincElementWithoutLink.propTypes = {
	item: PropTypes.string.isRequired,
	t: PropTypes.func.isRequired,
	amount: PropTypes.number,
	duration: PropTypes.number,
};


export default function ManufacturincRecipe({ current, recipe, t, translatePath, tools }) {
	function mapResources(x) {
		if(x.resource_type === current) {
			return (
				<ManufacturincElementWithoutLink
					item={x.resource_type}
					t={t}
					type="resources"
					amount={x.amount}
				/>
			);
		}

		return (
			<ManufacturincElementWithLink
				item={x.resource_type}
				t={t}
				translatePath={translatePath}
				type="resources"
				amount={x.amount}
			/>
		);
	}


	return (
        <div className="item-page-recipe">
        	{recipe.ingredients.map(mapResources)}

        	<span className="item-page-recipe-operator"> → </span>

			{current !== recipe.name && (
				<ManufacturincElementWithLink
					item={recipe.name}
					t={t}
					translatePath={translatePath}
					type="equipments"
					duration={tools.find(x => x.id === recipe.name).cycle_duration}
				/>
			)}
			{current === recipe.name && (
				<ManufacturincElementWithoutLink
					item={recipe.name}
					t={t}
					type="equipments"
					duration={tools.find(x => x.id === recipe.name).cycle_duration}
				/>
			)}

			<span className="item-page-recipe-operator"> → </span>

        	{recipe.production.map(mapResources)}
        </div>
	);
}

ManufacturincRecipe.propTypes = {
	current: PropTypes.string.isRequired,
	first: PropTypes.string.isRequired,
	second: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
	t: PropTypes.func.isRequired,
	translatePath: PropTypes.func.isRequired,
};
