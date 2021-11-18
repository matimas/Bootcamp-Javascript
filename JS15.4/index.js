function calcAverage(arr) {
	var sum;
	console.log(sum);
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(calcAverage([85, 90, 92]));
/*

--------1----------
1. First find the line that contains the problem. Write it down.
line 5

-------2-----------
2. Which debug method did you use to find the bug?
Chrome browser dev tools

-------3------------
3. Explain the bug in your own words.
line5 - sum is undefined, the function will return NaN
*/
