const newCountryForSara = (country, lang, pop, isisland) => {
	if (!isisland && isEnglishLeng(lang) && lesThen50M(pop)) {
		console.log(`you shulde live in Finland`);
		return;
	}
	console.log("'Finland does not meet your criteria'");
};

///cheak Language
const isEnglishLeng = (nameLanguage) => {
	return 'English' === nameLanguage;
};
///cheak if lass then 50M
const lesThen50M = (population) => {
	return population > 50000000;
};

// country for sara
newCountryForSara('israel', 'hebrow', 8000000, false);
newCountryForSara('spain', 'spanish', 250000000, false);
newCountryForSara('navada', 'English', 250000000, false);
