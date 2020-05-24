export const ticker = () => {
	let then = new Date().getTime();
	const tick = document.getElementById('tick');
	return (s,t) => {
		const now = new Date().getTime();
		tick.innerText = `${Math.round(1000/(now-then))}fps - ${t.toString()}`;
		then = now;
	}
}
