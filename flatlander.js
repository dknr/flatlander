import { systems } from './systems/index.js'

(async () => {
	let tick = 0;
	let state = await (await fetch('entities/index.json')).json();
	window.setInterval(async () => {
		tick++;
		for(const system of systems) {
			state = (await system(state, tick)) || state;
		}
	}, 100);
})();

