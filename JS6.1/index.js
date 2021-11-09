const arrOfNum = [1, 7, 3, 0, -5, 7, 3, 9];
//print all
for (let i = 0; i < arrOfNum.length; i++) {
	console.log(arrOfNum[i]);
}
//array length
const arrayLength = (arr) => {
	let length = 0;
	for (let i = 0; i < arr.length; i++) {
		length++;
	}
	console.log(length);
	return length;
};

//array sum
const arraySum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
	return sum;
};
//array mult
const arrayMulti = (arr) => {
	let mult = 0;
	for (let i = 0; i < arr.length; i++) {
		mult *= arr[i];
	}
	console.log(mult);
	return mult;
};

const length = arrayLength(arrOfNum);
const sum = arraySum(arrOfNum);
const mult = arrayMulti(arrOfNum);

console.log(`length = ${length}`);
console.log(`sum = ${sum}`);
console.log(`mult = ${mult}`);
