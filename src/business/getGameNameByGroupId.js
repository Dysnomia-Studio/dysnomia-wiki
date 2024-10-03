export default function getGameNameByGroupId(id) {
	switch(id) {
		case 37856839:
			return 'Extortion';
		case 41229110:
			return 'Alchemistry';
		case 44529211:
			return 'Manufactur\'inc';
		default:
			throw new Error(`Unknown group id! ${id}`);
	}
}