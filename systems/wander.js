const consider = (strategy, material) => {
	switch (strategy) {
		case 'move-right':
			return [1,0];
		case 'move-down':
			return [0,1];
		case 'random-walk':
			return [1,0];
		default:
			console.log('missing stragegy', {strategy, material});
			return [0,0];
	}
}
export const wander = (s,t) => {
	const wanderers = s.filter(e => e.strategy);
	wanderers.forEach((wanderer) => {
		const wandererMaterial = wanderer.material;
		const wandererStrategy = wanderer.strategy;
		const [x,y] = consider(wandererStrategy, wandererMaterial);
		wandererMaterial.position = [
			wandererMaterial.position[0] + x,
			wandererMaterial.position[1] + y,
		];
	});
}

