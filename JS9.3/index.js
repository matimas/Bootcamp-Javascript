const food1 = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food2 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];
const food3 = ['Fries', 'Ice', 'Pizza', 'Olivesss', 'Hamburgers'];

const compareArrays = (arr1, arr2) => {
	const joinArr = arr1.filter((element) => arr2.includes(element));
	return joinArr.length > 0 ? joinArr : false;
};

console.log(compareArrays(food2, food1));
console.log(compareArrays(food3, food1));
