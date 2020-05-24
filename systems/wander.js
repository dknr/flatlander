const strategies = {
	'move-right': () => ({intent: [1,0]}),
	'move-down': () => ({intent: [1,0]}),
}
export const wander = (s,t) => [
	...s.filter(e => e.strategy === undefined),
	...s.filter(e => e.strategy).map(e => ({
		...e,
		...strategies[e.strategy](e),
	})),
];

