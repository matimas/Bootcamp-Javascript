const doubleValues = (arr) => {
	const double = arr.map((el) => el * 2);
	return double;
};
const onlyEvenValues = (arr) => {
	const Even = [];
	arr.forEach((num) => {
		num % 2 === 0 ? Even.push(num) : console.log(`Not Even : ${num}`);
	});
	return Even;
};

const showFirstAndLast = (arr) => {
	const stringsArr = [];
	if (typeof arr[0] === 'string') {
		stringsArr.push(arr[0]);
	}
	if (typeof arr[arr.length - 1] === 'string') {
		stringsArr.push(arr[arr.length - 1]);
	}
	return stringsArr;
};

const vowelCount = (string) => {
	const vowels = ['A', 'E', 'i', 'O', 'U'];
	const arrstr = string.split('');
	const obj = {};
	arrstr.forEach((element) => {
		if (vowels.includes(element.toUpperCase())) {
			if (obj[element]) {
				obj[element] = obj[element] + 1;
			} else {
				obj[element] = 1;
			}
		}
	});
	return obj;
};

const capitalize = (string) => {
	return string.toUpperCase();
};

const shiftLetters = (string) => {
	const arr1 = string.split('');
	let out = '';
	let num = 0;
	const letters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'g',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	arr1.forEach((letter) => {
		num = letters.indexOf(letter) - 1;
		if (num === -1) {
			out += letters[letters.length - 1];
		} else {
			out += letters[num];
		}
	});
	return out;
};
const swapCase = (string) => {
	const strArr = string.split(' ');
	console.log(strArr);
	const strArr2 = strArr.map((el, index) => {
		return index % 2 === 1 ? capitalize(el) : el;
	});
	console.log(strArr2);
};
swapCase('afdsas ffsdfd sf fd sd f ds fsd f sdsd');
// console.log(capitalize('my name is'));
// console.log(showFirstAndLast(['mati', 4, 1, 5, 6, 3, 7, 'mas']));
