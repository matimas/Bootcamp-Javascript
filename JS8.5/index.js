const person = {
	name: 'mati',
};

const f = (p) => {
	const nosrep = {
		[p.name]: 'name',
	};
	return nosrep;
};

console.log(person);
console.log(f(person));
