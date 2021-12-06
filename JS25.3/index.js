const wonderWoman = {
	name: 'Diana Prince',
};
const batman = {
	name: 'Bruce Wayne',
};
const superHeroes = [wonderWoman, batman];

function printName(a, b) {
	console.log(`my heroes :`, a, b);
}
function printHeroes(heroes, printFunc) {
	printFunc.apply(this, heroes);
}

printHeroes(superHeroes, printName);
