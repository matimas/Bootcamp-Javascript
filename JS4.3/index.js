const averageScore = (team) => {
	if (team === 0) {
		return 0;
	}
	const arr = [...team];
	let x = 0;
	for (const item in arr) {
		x += arr[item] / arr.length;
	}
	return x;
};

const GAME = (a, b, c = 0) => {
	const teamA = averageScore(a);
	const teamB = averageScore(b);
	const teamC = averageScore(c);
	if (teamA === teamB && teamB === teamC) {
		console.log('is a DROW');
		return;
	}
	teamA < teamC
		? teamC > teamB
			? console.log(`teamCwinner-${teamC}`)
			: console.log(`teamB-winner-${teamB}`)
		: teamA > teamB
		? console.log(`teamA-winner-${teamA}`)
		: console.log(`teamB-winner-${teamB}`);
};
let johnTeam = [89, 120, 103];
let mikeTeam = [116, 94, 123];

GAME(johnTeam, mikeTeam); //moike win
johnTeam = [120, 125, 139];
GAME(johnTeam, mikeTeam); //john win
//mary join the game
let maryTeam = [97, 134, 105];
//mary win
GAME(johnTeam, mikeTeam, maryTeam);
//
