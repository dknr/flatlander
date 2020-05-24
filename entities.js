export const initialize = () => [
{
	tag: 'ground',
	material: {
		color: 'green',
		size: [100,100],
		position: [0,0,0],
	},
},{
	tag: 'player',
	input: 'player',
	material: {
		color: 'black',
		size: [1,1],
		position: [0,0,2],
	},
},{
	tag: 'water-spawner',
	spawn: {
		archetype: {
			tag: 'water',
			strategy: 'random-walk',
			material: {
				color: 'blue',
				size: [10,12],
				position: [0,40,0],
			},
			fate: {
				ttl: 100,
			},
		},
	},
},{
	tag: 'spark-spawner',
	spawn: {
		initial: 5,
		interval: 10,
		archetype: {
			tag: 'orangey',
			strategy: 'random-walk',
			material: {
				color: 'orange',
				size: [0.5,0.5],
				position: [40,40,1],
			},
			fate: {
				ttl: 30,
			},
		},
	},
},{
	tag: 'dog',
	strategy: 'follow-player',
	material: {
		color: 'brown',
		size: [1,1],
		position: [10,10,1],
	},
}];
