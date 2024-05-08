import { translations, defaultLang, languageList } from './constants';

export function getLangFromUrl(url) {
	const [, lang] = url.pathname.split('/');
	if(languageList.includes(lang)) {
		return lang;
	}
	return defaultLang;
}

export function useTranslations(lang) {
	return function t(key) {
		const [gameName, type, tKey] = key.split(':');

		return translations[gameName][type][lang][tKey] || translations[gameName][type][defaultLang][tKey];
	}
}