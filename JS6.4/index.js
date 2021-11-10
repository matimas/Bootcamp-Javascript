const popV = ['12132', '127653', '128756734', '12345'];

const populationPercentages = (arr) => {
	const tempArray = [...arr];
	let percentages = [];
	percentages = tempArray.map((el) => el.length);
	console.log(percentages);
	return percentages;
};

populationPercentages(popV);
