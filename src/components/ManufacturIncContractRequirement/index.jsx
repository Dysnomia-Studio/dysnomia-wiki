import getGameNameByGroupId from '/src/business/getGameNameByGroupId';

export default function ManufacturIncContractRequirement({ requirement, lang, t, translatePath }) {
	switch(requirement.requirement_type) {
		case 'dates':
			return (
				<li>{t('manufacturinc:contracts:requirements-date').replace(
						'%begin%', formatLocalDateWithTime(requirement.min_date, lang)
					).replace(
						'%end%', formatLocalDateWithTime(requirement.max_date, lang)
					)
				}</li>
			);
		case 'follow_game':
			return (<li>{t('manufacturinc:contracts:follow_game').replace('%game_name%', getGameNameByGroupId(requirement.group_id))}</li>);
		case 'contract':
			const text = t('manufacturinc:contracts:requirement_contract').split('%contractName%');
			return (<li>{text[0]}<a href={translatePath(`/manufactur-inc/contract/${requirement.required_contract_id}`)}>{t(`manufacturinc:contracts:${requirement.required_contract_id}-title`)}</a>{text[1]}</li>);
		default:
			throw new Error(`Unknown requirement_type! ${requirement.requirement_type}`);
	}
}