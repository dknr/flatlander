export const vector = ([u,v]) => ({
	u,
	v,
	value: [u,v],
	magnitude: Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)),
	scale: (x) => vector([x*u,x*v]),
	clamp: () => vector([
		u < 0 ? 0 : u,
		v < 0 ? 0 : v,
	]),
	wrap: ({u:x,v:y}) => vector([
		u % x,
		v % y,
	]),
	add: ({u:x,v:y}) => vector([
		u + x,
		v + y,
	]),
	sub: ({u:x,v:y}) => vector([
		u - x,
		v - y,
	]),
});

