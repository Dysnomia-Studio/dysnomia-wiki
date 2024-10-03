import getGameNameByGroupId from '/src/business/getGameNameByGroupId';

export default function ManufacturIncContractObjective({ objective, t, translatePath }) {
	switch(objective.objective_type) {
		case 'follow_game':
			return (<li>{t('manufacturinc:contracts:follow_game').replace('%game_name%', getGameNameByGroupId(objective.group_id))}</li>);
		case 'equipment':
			const equipment_text = t(`manufacturinc:contracts:objective_equipment_${objective.requirement_type}`).replace('%amount%', objective.amount).split('%equipment_type%');
			return (
				<li>{equipment_text[0]}
					<a href={translatePath(`/manufactur-inc/equipment/${objective.equipment_type}`)}>
						{t(`manufacturinc:equipments:${objective.equipment_type}`)}
					</a>{equipment_text[1]}
				</li>
			);
		case 'resource':
			const resource_text = t(`manufacturinc:contracts:objective_resource_${objective.requirement_type}`).replace('%amount%', objective.amount).split('%resource_type%');
			return (
				<li>{resource_text[0]}
					<a href={translatePath(`/manufactur-inc/item/${objective.resource_type}`)}>
						{t(`manufacturinc:resources:${objective.resource_type}`)}
					</a>{resource_text[1]}
				</li>
			);
		default:
			throw new Error(`Unknown objective_type! ${objective.objective_type}`);
	}
}