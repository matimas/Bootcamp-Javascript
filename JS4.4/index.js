const boomBoom = (n) => {
	let x = n;
	for (let i = x; i > 0; i--) {
		if (i % 7 === 0) {
			if (i.toString().includes('7')) {
				console.log('BOOMBOOM');
			} else {
				console.log('BOOM');
			}
		} else {
			console.log(i);
		}
	}
};

boomBoom(80);
