export const wander = (s,t) => {
	const player = s.find(e => e.find(c => c.type === 'tag' && c.name === 'player'));
	const playerMaterial = player.find(c => c.type === 'material');
	playerMaterial.position = [
		playerMaterial.position[0] + 1,
		playerMaterial.position[1] + 0,
	];
};

