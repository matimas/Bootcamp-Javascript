const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

const f = (array) => {
	const str = array.toString();
	const lowerStr = str.toLowerCase();
	const array2 = array.toString().split('');

	const arrOfObj = [];
	let i = 0;
	let char;

	for (let i = 0; i < array2.length; i++) {
		let char = array2[i].toLowerCase();
		if (char !== ',' && char !== ' ') {
			const count = lowerStr.split(char).length - 1;
			const obj = { [char]: count };
			const obj2 = Object.assign(obj);

			if (!arrOfObj.includes(obj2[char])) {
				arrOfObj.push(obj2);
			}
		}
	}
	return arrOfObj;
};

console.log(f(array));
