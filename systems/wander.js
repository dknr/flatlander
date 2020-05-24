const strategies = {
	'move-right': () => ({intent: [1,0]}),
	'move-down': () => ({intent: [1,0]}),
	'random-walk': () => {
		const getRandom = () => {
			const random = Math.random();
			return 2*random - 1;
		}
		return ({intent: [
			getRandom(),
			getRandom(),
		]});
	},

}
export const wander = (s,t) => [
	...s.filter(e => e.strategy === undefined),
	...s.filter(e => e.strategy).map(e => ({
		...e,
		...strategies[e.strategy](e),
	})),
];

