const steps = (num) => {
	let i = 1;
	let c = '#';
	let space = '*'; //represent a space;
	while (i <= num) {
		console.log(c.repeat(i) + space.repeat(num - i));
		i++;
	}
};

steps(10);
