import {vector} from '../libraries/vector.js'
const applyIntent = (intent, material) =>
	 vector(material.position)
		.add(vector(intent))
		.clamp()
		.wrap(vector([64,64]))
		.value;

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
