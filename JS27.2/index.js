const arrOfStrings = ['shaked', 'daniel', 'ernest'];
const errorArray = ['shaked', 'daniel', 0];

const makeAllCaps = (arrWords) => {
	return new Promise((res, rej) => {
		arrWords.forEach((str) => {
			if (typeof str !== 'string') {
				return rej('the array contain non string item!');
			}
			str.toUpperCase();
		});
		return res({ data: arrWords });
	});
};

const sortWords = (wordsObj) => {
	return new Promise((res, rej) => {
		return res({ data: wordsObj.data.sort() });
	});
};

makeAllCaps(arrOfStrings)
	.then((response) => {
		return sortWords(response);
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((err) => {
		console.log(err);
	});
makeAllCaps(errorArray)
	.then((response) => {
		return sortWords(response);
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((err) => {
		console.log(err);
	});
