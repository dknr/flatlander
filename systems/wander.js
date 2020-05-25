import {vector} from '../libraries/vector.js'
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
		const speed = e.wander.speed;
		const bias = e.wander.bias || [0,0];
		const getRandom = () => {
			const random = Math.random();
			return (2*random - 1);
		}
		const intent = vector([getRandom(),getRandom()])
			.scale(speed)
			.add(vector(bias))
			.value;
		return ({intent});
	},
	'follow-player': (s,e) => {
		const source = e.material.position;
		const target = s.find(e => e.tag === 'player').material.position;
		const path = vector(target).sub(vector(source));
		if (path.magnitude < 3)
			return ({});

		const intent = path.scale(1 / path.magnitude).value;
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

