const vector = ([u,v]) => ({
	value: [u,v],
	magnitude: Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)),
	scale: (x) => vector([x*u,x*v]),
});

