export default function formatLocalDateWithTime(date, lang) {
	const localDate = new Date(date);

	return localDate.toLocaleDateString(lang) + ' ' + localDate.toLocaleTimeString(lang);
}