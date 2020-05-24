const canvas = document.getElementById('canvas');
const gfx = canvas.getContext('2d');

import { graphics } from './graphics.js'
import { input } from './input.js'
import { wander } from './wander.js'
import { physics } from './physics.js'
import { reaper } from './reaper.js'
import { spawner } from './spawner.js'
import { ticker } from './ticker.js'
import { portal } from './portal.js'

const logState = (s,t) => console.log({s,t});

export const systems = [
	ticker(),
	portal,
	spawner,
	reaper,
	wander,
	input(),
	physics,
	graphics,
];
