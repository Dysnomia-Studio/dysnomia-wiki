import PropTypes from 'prop-types';

import './index.css';

function AlchemistryRecipeElementWithLink({ item, t, translatePath }) {
	return (
		<div class="item-page-recipe-element">
			<a href={translatePath(`/alchemistry/item/${item}`)}>
				<img src={`/img/alchemistry/elements/${item}.png`} alt={t(`alchemistry:items:${item}`)} />
				<span class="element-name">{t(`alchemistry:items:${item}`)}</span>
			</a>
		</div>
	)
}

function AlchemistryRecipeElementWithoutLink({ item, t }) {
	return (
		<div class="item-page-recipe-element">
			<img src={`/img/alchemistry/elements/${item}.png`} alt={t(`alchemistry:items:${item}`)} />
			<span class="element-name">{t(`alchemistry:items:${item}`)}</span>
		</div>
	)
}

export default function AlchemistryRecipe({ current, first, second, result, t, translatePath }) {
	return (
        <div class="item-page-recipe">
			{current !== first && (
				<AlchemistryRecipeElementWithLink
					item={first}
					t={t}
					translatePath={translatePath}
				/>
			)}
			{current === first && (
				<AlchemistryRecipeElementWithoutLink
					item={first}
					t={t}
				/>
			)}

			<span class="item-page-recipe-operator"> + </span>

			{current !== second && (
				<AlchemistryRecipeElementWithLink
					item={second}
					t={t}
					translatePath={translatePath}
				/>
			)}
			{current === second && (
				<AlchemistryRecipeElementWithoutLink
					item={second}
					t={t}
				/>
			)}

          	<span class="item-page-recipe-operator"> → </span>

			{current !== result && (
				<AlchemistryRecipeElementWithLink
					item={result}
					t={t}
					translatePath={translatePath}
				/>
			)}
			{current === result && (
				<AlchemistryRecipeElementWithoutLink
					item={result}
					t={t}
				/>
			)}
        </div>
	);
}

AlchemistryRecipe.propTypes = {
	current: PropTypes.string.isRequired,
	first: PropTypes.string.isRequired,
	second: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
	t: PropTypes.func.isRequired,
	translatePath: PropTypes.func.isRequired,
};
