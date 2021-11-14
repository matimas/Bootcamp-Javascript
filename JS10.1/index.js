const isString = (mystr, callback) => {
	if (typeof mystr === 'string' || mystr instanceof String) {
		callback(mystr);
	} else {
		console.log('Its not a string');
	}
};
const firstWordUpperCase = (mystr, callback) => {
	let strForword = mystr[0].toUpperCase();
	let removedFirst = mystr.slice(1);
	strForword += removedFirst;
	callback(strForword);
};

const printToCons = (str) => {
	console.log('I am a string :' + str);
};

const createDashes = (str) => {
	const withDash = str.replace(/[ ]/g, '-');
	console.log(withDash);
};

const myFunc = (fun1, fun2, string) => {
	fun1(string, fun2);
};

myFunc(firstWordUpperCase, createDashes, 'mati mas');
myFunc(isString, printToCons, 'mati mas');
myFunc(isString, printToCons, 0);
