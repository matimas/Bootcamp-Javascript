const num = [1, 6, 3, 10, 8, 5, 9];
//max
const max = num.reduce((max, currentValue) =>
	max > currentValue ? max : currentValue,
);
console.log('The max number is :', max);

//sum of even numbers
const sumOfeven = num.reduce(
	(sum, currenValue) => (currenValue % 2 === 0 ? currenValue + sum : sum + 0),
	0,
);
console.log('The Sum of Even Number is :', sumOfeven);

// average;
const average =
	num.reduce(
		(accumaulator, currenValue, length) => accumaulator + currenValue,
	) / num.length;

console.log('The average is :', average);
