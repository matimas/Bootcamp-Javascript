const submit = document.querySelector('button');
submit.addEventListener('click', (e) => {
	const user_input = document.querySelector('textarea');
	const user_message = document.querySelector('.message');
	user_message.textContent = '';
	if (user_input.value.length < 100) {
		user_message.style.color = 'red';
		user_message.append('The minimum number of characters is 100');
		user_input.focus();
	} else {
		user_message.style.color = 'green';
		user_input.value = '';
		user_message.append('submitted succsefull');
	}
});
