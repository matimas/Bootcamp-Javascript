const grade = (s) =>
	s < 65
		? 'F'
		: s < 70
		? 'G'
		: s < 80
		? 'C'
		: s < 90
		? 'B'
		: s <= 100
		? 'A'
		: 'NOT_IN_RANGE';

console.log(grade(120));
//without minus case
