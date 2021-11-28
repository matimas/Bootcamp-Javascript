document.addEventListener('paste', (e) => {
	e.stopPropagation();
	e.preventDefault();

	let cdData = e.clipboardData;
	let pasData = clipboardData.getData('Text');
	let ul = document.querySelector('.user_inputs').children;

	for (let i = 0; i < ul.length; i++) {
		pasData[i]
			? (ul[i].children[0].value = pasData[i])
			: (ul[i].children[0].value = '');
	}

	validatePass();
});

document.addEventListener('input', (e) => {
	if (e.key === 'Backspace') {
		return;
	}
	console.log(e);
	switch (e.target.id) {
		case '1':
			document.getElementById('2').focus();
			break;
		case '2':
			document.getElementById('3').focus();
			break;
		case '3':
			document.getElementById('4').focus();
			break;
		case '4':
			document.getElementById('5').focus();
			break;
		case '5':
			document.getElementById('6').focus();
			break;
	}

	validatePass();
});

const validatePass = () => {
	let liList = document.querySelector('.user_inputs').children;
	for (li of liList) {
		if (li.children[0].value.length !== 1) {
			return;
		}
	}
	document.querySelector('.verify').click();
};
