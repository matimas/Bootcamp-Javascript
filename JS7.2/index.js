// const string = "The more you know, the more you know that you don't know";

// const search = string.indexOf('u');

// console.log(search);
const str = "'The more you know, the more you know that you don't know'";
let count = 0;
let newArr = str.split('');

// console.log(newArr);

// while (count < newArr.length) {
// 	count++;
// 	if (newArr[count] === 'u') {
// 		lastU = count;
// 		console.log('im in the if');
// 	}
// 	if (newArr[count] === ' ' || newArr[count] === "'") {
// 		lastU--;
// 	}
// }
let coont = 0;
let lastU = 0;
newArr.forEach((element) => {
	for (let i = 0; i < element.toString().length; i++) {
		count++;
		console.log(element[i]);
		if (element[i] === 'u') {
			lastU = count;
		}
	}
});

console.log(lastU);
