function countOccurrences(str, char) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			counter += 1;
		}
	}
	return counter;
}
console.log(countOccurrences('ini mini miny moe', 'n'));
/*

--------1----------
1. First find the line that contains the problem. Write it down.
line 5

-------2-----------
2. Which debug method did you use to find the bug?
Chrome browser dev tools

-------3------------
3. Explain the bug in your own words.
line5 - +=;
*/
