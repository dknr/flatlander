const getDistance = (a,b) => {
	const v = [a[0]-b[0],a[1]-b[1]];
	return Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2));
}
export const portal = async (s) => {
	const portals = s.filter(e => e.link && e.material);
	const portal = portals[0];
	const player = s.find(e => e.tag === 'player');
	const dog = s.find(e => e.tag === 'dog');
	
	const distance = ({
		player: getDistance(
			player.material.position,
			portal.material.position,
		),
		dog: getDistance(
			dog.material.position,
			portal.material.position,
		),
	});
	if (distance.player > 5 || distance.dog > 5)
		return;

	const newWorld = await (await fetch(portal.link)).json();
	return newWorld;
};
