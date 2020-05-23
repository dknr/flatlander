import { systems } from './systems.js'
import { initialize } from './entities.js'

let tick = 0;
let state = initialize();
window.setInterval(() => {
	tick++;
	state = systems.reduce((lastState, reducer) =>
		reducer(lastState, tick) || lastState
	, state);
}, 1000);

