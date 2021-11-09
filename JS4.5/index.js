const isLeapYear = (n) => {
	if (n % 4 === 0) {
		if (n % 100 === 0) {
			if (n % 400 === 0) {
				console.log('It is indeed a leap year');
				return;
			}
			console.log('This is not a leap year.');
			return;
		}
		console.log('It is indeed a leap year');
		return;
	}
};

isLeapYear(2100);
isLeapYear(2500);
isLeapYear(2400);
isLeapYear(2220);
isLeapYear(2012);
