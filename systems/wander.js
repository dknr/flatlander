const unitVector = (v) => {
	const magnitude = Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2));
	return [
		v[0] / magnitude,
		v[1] / magnitude,
	];
}
const magnitudeVector = (v) => Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2));

const strategies = {
	'move-right': () => ({intent: [1,0]}),
	'move-down': () => ({intent: [1,0]}),
	'random-walk': (s,e) => {
		const speed = e.walkSpeed || 1;
		const getRandom = () => {
			const random = Math.random();
			return (2*random - 1);
		}
		return ({intent: [
			speed * getRandom(),
			speed * getRandom(),
		]});
	},
	'follow-player': (s,e) => {
		const source = e.material.position;
		const target = s.find(e => e.tag === 'player').material.position;
		const path = [target[0] - source[0], target[1] - source[1]];
		if (magnitudeVector(path) < 4) return ({});
		
		const intent = unitVector([
			target[0] - source[0],
			target[1] - source[1],
		]);
		return ({intent});
	},

}
export const wander = (s,t) => [
	...s.filter(e => e.strategy === undefined),
	...s.filter(e => e.strategy).map(e => ({
		...e,
		...strategies[e.strategy](s,e),
	})),
];

