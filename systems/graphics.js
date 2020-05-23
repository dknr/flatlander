const canvas = document.getElementById('canvas');
const gfx = canvas.getContext('2d');
export const graphics = (s,t) => {
	s.flatMap(e => e.filter(c => c.type === 'material')).forEach((mat) => {
		const scale = 10;
		gfx.fillStyle = mat.color;
		gfx.fillRect(
			scale * mat.position[0], 
			scale * mat.position[1], 
			scale * mat.size[0], 
			scale * mat.size[1],
		);
	});
};

