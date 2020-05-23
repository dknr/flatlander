import { systems } from './systems.js'

const initialize = () => [
[{
	type: 'tag',
	name: 'ground',
},{
	type: 'material',
	color: 'green',
	size: [100,100],
	position: [0,0,0],
}],[{
	type: 'tag',
	name: 'manna',
},{
	type: 'material',
	color: 'yellow',
	size: [1,1],
	position: [0,0,1],
}],[{
	type: 'tag',
	name: 'player',
},{
	type: 'material',
	color: 'black',
	size: [1,1],
	position: [1,1,2],
},{
	type: 'keymap',
	w: (me, ops) => ops.up(me),
	a: (me, ops) => ops.left(me),
	s: (me, ops) => ops.down(me),
	d: (me, ops) => ops.right(me),
}],
];

let tick = 0;
let state = initialize();
window.setInterval(() => {
	tick++;
	state = systems.reduce((lastState, reducer) =>
		reducer(lastState, tick) || lastState
	, state);
}, 1000);

