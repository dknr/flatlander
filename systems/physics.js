const applyIntent = (intent, material) => {
	const newPosition = [
		(material.position[0] + intent[0]) % 64,
		(material.position[1] + intent[1]) % 64,
		material.position[2],
	];
	if (newPosition[0] < 0 || newPosition[1] < 0)
		return material.position;
	return newPosition;
}

export const physics = (s) => [
	...s.filter(e => e.intent === undefined || e.material === undefined),
	...s.filter(e => e.intent && e.material).map(e => ({
		...e,
		intent: undefined,
		material: {
			...e.material,
			position: applyIntent(e.intent, e.material),
		}
	}))
];
