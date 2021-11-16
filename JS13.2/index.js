//a.1. Sort the array of strings from descending to ascending order.
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
console.log(foods);

//a.2. Sort the array of strings from ascending to descending order.
foods.sort((a, b) => b.localeCompare(a));
console.log(foods);

console.log("<-----------------SEPERATOR----------------->");
// b.1. Sort the array of strings from descending to ascending order.
const foodsWithUpperCase = [
  "fealafel",
  "Sabich",
  "falafel",
  "hummus",
  "Hummus",
  "Faalafel",
  "pizza with extra pineapple",
];

foodsWithUpperCase.sort((a, b) => a.localeCompare(b));
console.log(foodsWithUpperCase);

//b.2. Sort the array of strings from ascending to descending order.
foodsWithUpperCase.sort((a, b) => b.localeCompare(a));
console.log(foodsWithUpperCase);

console.log("<-----------------SEPERATOR----------------->");
//c.1. Sort the array of strings from the longest word to the
//shortest word only using the sort function

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort((a, b) => b.length - a.length);
console.log(words);
