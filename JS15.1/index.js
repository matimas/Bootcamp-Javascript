function getSum(arr1, arr2) {
	let sum = 0;
	for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
	}
	for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}
	return sum;
}
getSum([1, 2, 3], [(5, 66, 23)]);

/*

--------1----------
1. First find the line that contains the problem. Write it down.
line 3

-------2-----------
2. Which debug method did you use to find the bug?
Chrome browser dev tools

-------3------------
3. Explain the bug in your own words.
a1-The error appears in line 3. The array is not defined because 
the arguments that the function receives are invalid
a2-sum is define a const. replace to let
*/
