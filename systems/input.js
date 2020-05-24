const getDistance = (v) =>
	Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2));
const scaleVector = (v,x) =>
	[x*v[0],x*v[1]];
const makeVector = (a,b) =>
	[b[0]-a[0],b[1]-a[1]];
const getPath = (a,b,s) => {
	const v = makeVector(a,b);
	const d = getDistance(v);
	return scaleVector(v,d < 1 ? 1 : 1/d);
}
export const input = () => {
	let mouse;
	const canvas = document.getElementById("canvas");
	canvas.addEventListener("touchstart", ev => {
		const touch = ev.touches[0];
		mouse = [
			(touch.clientX - canvas.offsetLeft) / 10,
			(touch.clientY - canvas.offsetTop ) / 10,
		];
	});
	canvas.addEventListener("mousemove", ev => {
		mouse = [
			(ev.layerX - canvas.offsetLeft) / 10,
			(ev.layerY - canvas.offsetTop)  / 10,
		];
	});
	return (s,t) => {
		if (mouse === undefined)
			return s;
		return [
			...s.filter(e => e.input === undefined),
			...s.filter(e => e.input).map(e => ({
				...e,
				intent: getPath(
					e.material.position,
					mouse,
				),
			})),
		];
	}
}

