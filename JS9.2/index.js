const listOfNeighbours = [
	['Canada', 'Mexico'],
	['Spain'],
	['Norway', 'Sweden', 'Russia'],
];

const printCountries = (arr) => {
	const countries = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			console.log('Neighbour:' + arr[i][j]);
			countries.push(arr[i][j]);
		}
	}
	return countries;
};
printCountries(listOfNeighbours);
