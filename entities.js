// TODO: make this JSON
export const initialize = () => [
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
	type: 'wander',
	strategy: 'move-right',
}],
[{
	type: 'material',
	color: 'orange',
	size: [1,1],
	position: [1,1,2],
},{
	type: 'wander',
	strategy: 'move-down',
}],
];

