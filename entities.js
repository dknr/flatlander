// TODO: make this JSON
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
	tag: 'orangey',
	strategy: 'move-right',
	material: {
		color: 'orange',
		size: [1,1],
		position: [0,0,1],
	},
}];
