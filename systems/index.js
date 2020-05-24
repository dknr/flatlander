const canvas = document.getElementById('canvas');
const gfx = canvas.getContext('2d');

import { graphics } from './graphics.js'
import { input } from './input.js'
import { wander } from './wander.js'
import { physics } from './physics.js'

const logState = (s,t) => console.log({s,t});

export const systems = [
	input(),
	wander,
	physics,
	graphics,
];