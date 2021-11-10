//fill an arry with
const array1 = new Array(100);
array1.fill({name:"mati"});
console.log(array1);
//creating an arry with Array.from
console.log(Array.from([10, 20, 30], (x) => x + x));
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
