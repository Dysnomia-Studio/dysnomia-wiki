import { defaultLang, languageList, translations } from './constants';

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

		const localizedText = translations[gameName][type][lang][tKey];
		if(localizedText && localizedText !== '?') {
			return localizedText;
		}

		return translations[gameName][type][defaultLang][tKey];
	}
}

export function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    if(!path.startsWith('/')) {
    	path = '/' + path;
    }

    if(l === defaultLang) {
    	return path;
    }

    return `/${l}${path}`;
  }
}

export function cleanPath(path) {
	console.log(path);
	if(path.startsWith('/')) {
		path = path.substring(1);
	}

console.log(path);
	for(const language of languageList) {
		console.log(language);
	  if(path.startsWith(language)) {
	    path = path.substring(language.length);
	    break;
	  }
	}

console.log(path);
	return path;
}
