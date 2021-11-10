//fill an arry with
const array1 = new Array(100);
array1.fill({ num: '1' }, 0, 100);
console.log(array1);
console.log(Array.from({ length: array1.num }, (x) => x * 3));
const person = {
	firstName: 'John',
	lastName: 'Doe',
};

//valus of object into an array
const pValues = Object.values(person);
console.log(pValues);

array1.push(pValues);

//im object with array prop
const myObj = {
	my_arr: array1,
};
//im array?
if (array1.length) {
	console.log('im array');
}
//new array with spred ope, not effect
const array3 = [...array1];

console.log(array3);
console.log(array1);

//copy that effect
const array4 = array3;
