const canvas = document.getElementById('canvas');
const scale = 10;
canvas.height = 640;
canvas.width = 640;

const gfx = canvas.getContext('2d');

const visitComponents = (s, type, visitor) => {
	s.forEach(e => Object.values(e)
		.filter(c => c && c.type === type)
		.forEach(c => visitor(e,c))
	);
}

export const graphics = (s,t) => {
	s.map(e => e.material).filter(c => c).map(mat => {
		gfx.fillStyle = mat.color;
		gfx.fillRect(
			scale * mat.position[0], 
			scale * mat.position[1], 
			scale * mat.size[0], 
			scale * mat.size[1],
		);
	});
	visitComponents(s, 'circle', (e,c) => {
		console.log('circle', {e,c});
		gfx.fillStyle = c.color;
		gfx.beginPath();
		gfx.arc(
			scale * e.location[0],
			scale * e.location[1],
			scale * c.radius,
			0, 6, false
		);
		gfx.fill();
	});
	visitComponents(s, 'label', (e,c) => {
		gfx.fillStyle = c.color || 'pink';
		gfx.font = c.font || '12px Ovepass';
		gfx.textAlign = c.align || 'center';
		gfx.textBaseline = c.baseline || 'middle';
		gfx.fillText(c.text, e.location[0] * scale, e.location[1] * scale);
	});
};

