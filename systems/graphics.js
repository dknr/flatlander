const canvas = document.getElementById('canvas');
canvas.height = 640;
canvas.width = 640;

const gfx = canvas.getContext('2d');
export const graphics = (s,t) => {
	s.map(e => e.material).filter(c => c).map(mat => {
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

