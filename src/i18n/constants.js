export const defaultLang = 'en';
//const languageList = ['de', 'en', 'fr', 'nl', 'ru', 'sv'];
export const languageList = ['en', 'fr'];
export const types = {
	alchemistry: [
		'achievements',
		'game',
		'guides',
		'items',
		'store',
		'ui',
	]
};

const translationsList = {};
async function loadTranslations() {
	for(const gameName in types) {
		translationsList[gameName] = {};
		for(const type of types[gameName]) {
			translationsList[gameName][type] = {};

			for(const language of languageList) {
				translationsList[gameName][type][language] = (await import(`./${gameName}/${type}/${language}.json`)).default;
			}
		}
	}
}
loadTranslations();

export const translations = translationsList;