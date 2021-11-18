// function funcA() {
// 	console.log(a); //undefined because the variable is
// 	// listed in line 4 and the console's command reads in line 2
// 	console.log(foo()); // return 2 from foo(), the output will be 2
// 	var a = 1;
// 	function foo() {
// 		return 2;
// 	}
// }
// funcA();

/*-------------------2----------------------- */
// var fullName = 'John Doe';
// var obj = {
// 	fullName: 'Colin Ihrig',
// 	prop: {
// 		fullName: 'Aurelio De Rosa',
// 		getFullName: function () {
// 			return this.fullName;
// 		},
// 	},
// };
// console.log(obj.prop.getFullName()); //output will be (Aurelio De Rosa),
// // the scoop is belong to prop obj and the the this key(belong to prop)
// var test = obj.prop.getFullName;//we can take the Parenthesis from line test()
//and move it to obj.prop.getFullName() and we achive the fullname
// console.log(test());//output will be undefined! test is pointer to to function but
// //the in the global scoop there is no function with the name test so is just a pointer
// //so canot invoke the function

/*-------------3---------------- */
// function funcB() {
//  let a = b = 0;
//  //let a;
//  //let b=0;
//  //a=b;
//  a++;
//  return a;
// }
// funcB();
// console.log(typeof a); //is undefined
// console.log(typeof b); //output will be 0, is take the b to the global
// //scoop and asign it with var

/*------------------4------------------ */
// function funcC() {
// 	console.log('1');
// }
// funcC();
// function funcC() {
// 	console.log('2');
// }
// funcC();
//the hoisting places the fun in line 49
// at the last, is ignore from the fun in line 46

/*----------------5--------------------- */
// function funcD1() {
// 	d = 1;
// }
// funcD1();
// console.log(d); //d will be in the global as var so is print 1
// function funcD2() {
// 	var e = 1;
// }
// funcD2();
// console.log(e); //output undefined: wrong scoop

/*----------------6---------------------------- */
function funcE() {
	console.log('Value of f in local scope: ', f); //1 will be printed because in the local scope f is already set globally
}
console.log('Value of f in global scope: ', f); //output will be undefined -  wrong order replace the place with 74
var f = 1;
funcE();
