const lessOrGreaterThen10 = (number) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (number > 10) {
				res(`resolved message with number :${number}`);
			} else {
				rej(`rejectrd message with number :${number}`);
			}
		}, 3000);
	});
};

lessOrGreaterThen10(Math.random() * 20)
	.then((res) => {
		console.log(res);
		console.log('greter then 10');
	})
	.catch((err) => {
		console.log(err);
		console.log('less then 10');
	});
