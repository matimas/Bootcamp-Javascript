const user_age = document.querySelector('input');
const message = document.querySelector('h2');
const no_perm = 'you’re too young';
const ok_perm = 'you can drink';

user_age.addEventListener('input', (e) => {
	message.textContent = '';
	e.target.value >= 18 ? message.append(ok_perm) : message.append(no_perm);
});
