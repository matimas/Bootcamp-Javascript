const simplePassVal = (p) => {
	const pass = p.toString().split('');
	let strongOrweak = '';
	pass.length > 7 ? (strongOrweak = 'Strong') : (strongOrweak = 'Weak');

	return strongOrweak;
};

const advancedPassVal = (p) => {
	const lowerPass = p.toLowerCase();
	let strongOrweak = simplePassVal(p);
	let out = '';
	if (strongOrweak === 'Weak') {
		out = strongOrweak;
		return out;
	}
	strongOrweak === 'Strong' && lowerPass !== p
		? (out = 'Veri-Strong')
		: (out = 'strong');

	return out;
};

let a = advancedPassVal('fddssssfdsfdfA');
let b = advancedPassVal('aaAA');
let c = advancedPassVal('dfsdA');
let d = advancedPassVal('dfsdA');
let e = advancedPassVal('dfsdAfdgdffg');

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
