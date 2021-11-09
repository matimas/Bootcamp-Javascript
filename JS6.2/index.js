const people = ['Greg', 'Mary', 'Devon', 'James'];
//1
people.forEach((element) => {
	console.log(element);
});

//2,3,4,5
people.shift();
people.pop();
people.unshift('Matt');
people.push('mati');

let flag = false;
for (let i = 0; i < people.length; i++) {
	if (people[i] === 'Mary') break;
}

const copyArr = people.slice(2);
console.log(copyArr);

let whereMary = people.indexOf('Mary');
console.log(whereMary);

let whereFoo = people.indexOf('Foo');
console.log(whereFoo);

people.shift();
people.pop();

people.unshift('Greg');
people.push('James');

console.log(people);

people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

const withBob = {
	name: 'Bob',
};

people.push(withBob.name);
console.log(people);
