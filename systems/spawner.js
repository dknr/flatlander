export const spawner = (s, t) => [
	...s,
	...s.filter(e => e.spawn).flatMap(e => {
		return [
			e.spawn.archetype,
		];
	}),
]

