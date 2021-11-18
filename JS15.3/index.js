function getSumOfEven(arr) {
	return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/*

--------1----------
1. First find the line that contains the problem. Write it down.
line 5

-------2-----------
2. Which debug method did you use to find the bug?
Chrome browser dev tools

-------3------------
3. Explain the bug in your own words.
line2 -arr[10] = out of range the array starting from 0,  
*/
