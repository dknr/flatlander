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
	const wanderers = s.filter(e => e.find(c => c.type === 'wander'));
	console.log(wanderers);
	wanderers.forEach((wanderer) => {
		const wandererMaterial = wanderer.find(c => c.type === 'material');
		const wandererStrategy = wanderer.find(c => c.type === 'wander').strategy;
		const [x,y] = consider(wandererStrategy, wandererMaterial);
		console.log({wanderer, wandererMaterial, wandererStrategy});
		wandererMaterial.position = [
			wandererMaterial.position[0] + x,
			wandererMaterial.position[1] + y,
		];
	});
}

