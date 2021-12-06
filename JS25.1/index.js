const hero = {
	health: 5,
	power: 68,
	getStrength: function () {
		if (this.health <= 5) {
			return this.power - 10;
		} else return this.power;
	},
};
function whoIsStronger(getStrength) {
	const myStrength = 82;
	if (getStrength() < myStrength) {
		return 'I am stronger';
		console.log('inside');
	} else return 'You are stronger';
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
