const whatALanguage = (lang) => {
	const temp = lang.toLowerCase();
	switch (temp) {
		case 'mandarin':
			console.log('MOST number of native speakers!');
			break;
		case 'spanish':
			console.log("2nd place in number of native speakers'");
			break;
		case 'english':
			console.log('3rd place');
			break;
		case 'hindi':
			console.log('Number 4');
			break;
		case 'arabic':
			console.log('5th most spoken language');
		default:
			console.log('Not in the top 5');
			break;
	}
};

whatALanguage('jkkhda');
whatALanguage('ENGLISH');
whatALanguage('hebrow');
whatALanguage('spanish');
