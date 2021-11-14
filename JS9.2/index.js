const popV = ['12132', '127653', '128756734', '12345'];

const populationPercentages = (arr) => {
	let percentages = [];

	let i = 0;
	while (i < arr.length) {
		percentages.push(arr[i].length);
		i++;
	}
	return percentages;
};

console.log(populationPercentages(popV));

