export default function ManufacturIncContractReward({ reward,  t, translatePath }) {
	const text = t(`manufacturinc:contracts:generic_unlocks`).split('%name%');

	switch(reward.reward_type) {
		case 'equipment':
			return (
				<li>{text[0]}
					<a href={translatePath(`/manufactur-inc/equipment/${objective.equipment_type}`)}>
						{t(`manufacturinc:equipments:${objective.equipment_type}`)}
					</a>{text[1]}
				</li>
			);
		case 'resource':
			return (
				<li>{text[0]}
					<a href={translatePath(`/manufactur-inc/item/${objective.resource_type}`)}>
						{t(`manufacturinc:resources:${objective.resource_type}`)}
					</a>{text[1]}
				</li>
			);
		default:
			throw new Error(`Unknown reward_type! ${objective.reward_type}`);
	}
}