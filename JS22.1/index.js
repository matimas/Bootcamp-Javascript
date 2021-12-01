const myForm = document.getElementById('form');
myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	document
		.getElementById('user-name')
		.append('Name = ' + document.getElementById('name').value);
	document
		.getElementById('user-age')
		.append('Age = ' + document.getElementById('age').value);
	document
		.getElementById('user-mail')
		.append('Mail = ' + document.getElementById('mail').value);
	document.getElementById('p-m-c').style.display = 'block';
});

document.getElementById('pop-submit').addEventListener('click', (e) => {
	e.preventDefault();
	alert('submited succsesfuly');
	clearUserInput();
	clearPopInput();
	document.getElementById('p-m-c').style.display = 'none';
	return;
});
document.getElementById('pop-canceled').addEventListener('click', (e) => {
	e.preventDefault();
	clearPopInput();
	document.getElementById('p-m-c').style.display = 'none';
	return;
});
function clearUserInput() {
	document.getElementById('name').value = '';
	document.getElementById('age').value = '';
	document.getElementById('mail').value = '';
}
function clearPopInput() {
	document.getElementById('user-name').textContent = '';
	document.getElementById('user-age').textContent = '';
	document.getElementById('user-mail').textContent = '';
}
