function findSmallest(a, b, c) {
	if (a > b && b > c) {
		console.log(dsfsdf);
		return c;
	} else if (a < c && c > b) {
		return a;
	} else {
		return b;
	}
}
findSmallest(0, 1, 2);
/*

--------1----------
1. First find the line that contains the problem. Write it down.
line 10
line 2
line 5

-------2-----------
2. Which debug method did you use to find the bug?
Chrome browser dev tools

-------3------------
3. Explain the bug in your own words.
a1- line 10 -findSmallest is pointer to nothing (RefError).
a2- line2 - missed operator &&  
a2- line5 - missed operator && we change the direction from -gt to -lt  
*/
