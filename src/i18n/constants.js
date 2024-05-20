export const defaultLang = 'en';
export const languageList = ['de', 'en', 'fr', 'nl', 'ru', 'sv'];
export const languageDictionary = {
	'de': 'Deutsch',
	'en': 'English',
	'fr': 'Francais',
	'nl': 'Nederlands',
	'ru': 'Русский',
	'sv': 'Svenska',
};
export const types = {
	alchemistry: [
		'achievements',
		'game',
		'guides',
		'items',
		'store',
		'ui',
		'wiki',
	],
	'wiki': [
		'spoiler',
	]
};

const translationsList = {};
async function loadTranslations() {
	for(const gameName in types) {
		translationsList[gameName] = {};
		for(const type of types[gameName]) {
			translationsList[gameName][type] = {};

			for(const language of languageList) {
				try {
					translationsList[gameName][type][language] = (await import(`./${gameName}/${type}/${language}.json`)).default;
				} catch(e) {
					console.error(e);
					translationsList[gameName][type][language] = {};
				}
			}
		}
	}
}
loadTranslations();

export const translations = translationsList;