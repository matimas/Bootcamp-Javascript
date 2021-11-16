const numbers = [1, -5, 666, 2, 400, 11];
//1. Sort the array of numbers from descending to ascendingorder.
console.log("Before the sort",numbers);
numbers.sort((a,b)=>a-b);
console.log("After the sort",numbers);

//2. Sort the array of numbers from ascending to decending order.
console.log("Before the sort",numbers);
numbers.sort((a,b)=>b-a);
console.log("After the sort",numbers);
