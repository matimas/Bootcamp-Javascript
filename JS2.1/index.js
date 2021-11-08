function describeCountry(country, population, capitalCity) {
	return (
		country +
		' has ' +
		population +
		' million people and its capital city is' +
		capitalCity
	);
}

let mati_born = describeCountry('Ethiopia', 60, 'adis abba');
let mati_live = describeCountry('israel', 8, 'jerosalem');
let mati_want = describeCountry('usa', 250, 'Washington');

console.log(mati_born);
console.log(mati_live);
console.log(mati_live);
