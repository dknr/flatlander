export const physics = (s) => [
	...s.filter(e => e.intent === undefined || e.material === undefined),
	...s.filter(e => e.intent && e.material).map(e => ({
		...e,
		intent: undefined,
		material: {
			...e.material,
			position: [
				e.material.position[0] + e.intent[0],
				e.material.position[1] + e.intent[1],
				e.material.position[2],
			],
		}
	}))
];
