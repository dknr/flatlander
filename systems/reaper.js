export const reaper = (s) => [
	...s.filter(e => e.fate === undefined),
	...s.filter(e => e.fate && e.fate.ttl > 0).map(e => ({
		...e,
		fate: {
			ttl: e.fate.ttl - 1,
		}
	})),
];
