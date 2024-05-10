export default async function getAchievementsPercentagesForGame(id) {
	try {
		const res = await fetch(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${id}`);
		if(!res.ok) {
			return [];
		}

		const responseData = await res.json();
		const outputData =  responseData?.achievementpercentages?.achievements || [];
		outputData.sort((a, b) => b.percent - a.percent);

		return outputData;
	} catch {
		return [];
	}
}