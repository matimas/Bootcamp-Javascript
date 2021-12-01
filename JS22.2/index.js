const checkElement = document.querySelector('input');
document.body.addEventListener('click', (e) => {
	checkElement.checked
		? (document.querySelector('img').style.display = 'block')
		: (document.querySelector('img').style.display = 'none');
});
