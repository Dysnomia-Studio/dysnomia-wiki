export const defaultLang = 'en';
export const languageList = ['ar', 'de', 'en', 'fr', 'nl', 'ru', 'sv', 'zh-cn'];
export const languageDictionary = {
	'ar': 'العربية',
	'de': 'Deutsch',
	'en': 'English',
	'fr': 'Francais',
	'nl': 'Nederlands',
	'ru': 'Русский',
	'sv': 'Svenska',
	'zh-cn': '简体中文',
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
	extortion: [
		'achievements',
		'wiki',
	],
	manufacturinc: [
		'achievements',
		'contracts',
		'durations',
		'equipments',
		'features',
		'menu',
		'resources',
		'store',
		'wiki',
	],
	'wiki': [
		'spoiler',
	]
};

const translationsList = {};
async function loadTranslations() {
	for (const gameName in types) {
		translationsList[gameName] = {};
		for (const type of types[gameName]) {
			translationsList[gameName][type] = {};

			for (const language of languageList) {
				try {
					translationsList[gameName][type][language] = (await import(`./${gameName}/${type}/${language}.json`)).default;
				} catch (e) {
					//console.error(e);
					translationsList[gameName][type][language] = {};
				}
			}
		}
	}
}
loadTranslations();

export const translations = translationsList;