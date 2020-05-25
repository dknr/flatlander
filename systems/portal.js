const getDistance = (a,b) => {
	const v = [a[0]-b[0],a[1]-b[1]];
	return Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2));
}
export const portal = async (s) => {
	const portals = s.filter(e => e.link && e.location);
	if (portals.length === 0)
		return;
	
	const player = s.find(e => e.tag === 'player');
	const dog = s.find(e => e.tag === 'dog');

	for (const portal of portals) {
		const distance = ({
			player: getDistance(
				player.material.position,
				portal.location,
			),
			dog: getDistance(
				dog.material.position,
				portal.location,
			),
		});
		if (distance.player > 5 || distance.dog > 6)
			continue;

		const newWorld = await (await fetch(portal.link)).json();
		return newWorld;
	}
};
