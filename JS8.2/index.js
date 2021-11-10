const mycountry = {
	country: 'israel',
	capital: 'jerusalem',
	language: 'hebrow',
	population: 8,
	neighbours: [],
	discribed() {
		return `${this.country} has ${this.population} million people, their mother tongue is ${this.language},they have 3 neighbouring countries and a capital called ${this.capital}`;
	},
};

console.log(mycountry.discribed());
