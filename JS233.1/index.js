// Question 01
console.log(this); // windows in browser or {} in node

// Question 02
const myObj = {
	name: 'Timmy',
	greet: () => {
		console.log(`Hello ${this.name}`); // Hello undefined, need to teplace to function decleration
	},
};
myObj.greet();

// Question 03
const myFuncDec = function () {
	console.log(this); // windows in browser or {} in node
};
myFuncDec();

// Question 04
const myFuncArrow = () => {
	//windows in browser or {} in node
	console.log(this);
};
myFuncArrow();

// Question 05
document.querySelector('.element').addEventListener(() => {
	//miss operation {"click","keyPress"} //windows in browser or {} in node
	console.log(this);
});

// b. document or the element that call the event listener (pointer on the object that make the event)
document.querySelector('.element').addEventListener(function () {
	console.log(this);
});
