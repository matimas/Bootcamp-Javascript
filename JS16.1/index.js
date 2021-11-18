// function funcA() {
// 	console.log(a);                          //print-undefined The variable has not yet been initialized in Global Scope and the Local Scope
// 	 
// 	console.log(foo());                             // print 2 - function declaration, are always Hoisted to the top of the current scope, so wean we inoked the function is allready decleread. 
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
// console.log(obj.prop.getFullName());    //output will be (Aurelio De Rosa)-in the localscoop(blookscoop) of getFullName wean we invoke the fun: fullName = 'Aurelio De Rosa'; 
//                                                                         
// var test = obj.prop.getFullName;                  
                                                                             
// console.log(test());            // output undefined - test cannot invoke the function ,there is no acceses there is no Hoisted(fun belong to localscoop) is not recognize the plan;                  
//                                                     
//                                                                    

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
// console.log(typeof a);                                                //is undefined- localscoop(functionscoop) 
// console.log(typeof b);                                                //output is 0 - the globalscoop declare a var b=0 in the globalscoop
//                                            

/*------------------4------------------ */
// function funcC() {
// 	console.log('1');
// }
// funcC();
// function funcC() {
// 	console.log('2');
// }
// funcC();
                                           //When declared with a function declaration, 
                                           //are always hoisted to the top of the current scope. in order is tack the last one and print 2 twice
                                          

/*----------------5--------------------- */
// function funcD1() {
// 	d = 1;
// }
// funcD1();
// console.log(d); //print 1 - the globalscoop declare a var d=1 d will be in the globalscoop  
// function funcD2() {
// 	var e = 1;
// }
// funcD2();
// console.log(e); //output undefined:  localscoop(functionscoop)

/*----------------6---------------------------- */
function funcE() {
	console.log('Value of f in local scope: ', f); //1 will be printed because in the globalscope f is already set globally
}
console.log('Value of f in global scope: ', f); //output will be undefined -  wrong order replace the place with 74
var f = 1;
funcE();
