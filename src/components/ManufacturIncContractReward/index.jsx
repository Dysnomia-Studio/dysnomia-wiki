export default function ManufacturIncContractReward({ reward,  t, translatePath }) {
	const text = t(`manufacturinc:contracts:generic_unlocks`).split('%name%');

	switch(reward.reward_type) {
		case 'equipment':
			return (
				<li>{text[0]}
					<a href={translatePath(`/manufactur-inc/equipment/${reward.equipment_type}`)}>
						{t(`manufacturinc:equipments:${reward.equipment_type}`)}
					</a>{text[1]}
				</li>
			);
		case 'resource':
			if(reward.amount === 0) {
				return (
					<li>{text[0]}
						<a href={translatePath(`/manufactur-inc/item/${reward.resource_type}`)}>
							{t(`manufacturinc:resources:${reward.resource_type}`)}
						</a>{text[1]}
					</li>
				);
			}

			return (
				<li>{reward.amount} x <a href={translatePath(`/manufactur-inc/item/${reward.resource_type}`)}>
						{t(`manufacturinc:resources:${reward.resource_type}`)}
					</a>
				</li>
			);
		default:
			throw new Error(`Unknown reward_type! ${reward.reward_type}`);
	}
}