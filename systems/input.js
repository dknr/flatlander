const keymap = {
	"w": () => ({ intent: [0,-1] }),
	"a": () => ({ intent: [-1,0] }),
	"s": () => ({ intent: [0,1] }),
	"d": () => ({ intent: [1,0] }),
}
const applyEvent = (e, ev) => {
	const action = keymap[ev.key];
	if (action === undefined)
		return e;

	const delta = action(e);
	return {
		...e,
		...delta,
	}
}
export const input = () => {
	let lastEvent;
	document.addEventListener("keydown", ev => lastEvent = ev);
	return (s,t) => {
		if (lastEvent === undefined)
			return s;
		const result = [
			...s.filter(e => e.input === undefined),
			...s.filter(e => e.input).map(e => applyEvent(e, lastEvent))
		];

		lastEvent = undefined;
		return result;
	}
}

