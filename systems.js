const canvas = document.getElementById('canvas');
const gfx = canvas.getContext('2d');

import { graphics } from './systems/graphics.js'
import { input } from './systems/input.js'
import { wander } from './systems/wander.js'
import { physics } from './systems/physics.js'

const logState = (s,t) => console.log({s,t});

export const systems = [
	input(),
	wander,
	physics,
	graphics,
];
