const emojis = ['😅', '🤣', '🤩', '😱', '😡', '😍', '🤪', '🤮', '💩', '😎'];
const sizes = ['small', 'medium', 'large', 'x-large', 'xx-large'];
const submit = document.querySelector('button');
document.querySelector('.title-icon').textContent =
	emojis[Math.floor(Math.random() * 10)];

submit.addEventListener('click', () => {
	const inputValue = document.querySelector('input').value;
	if (isNaN(inputValue) || inputValue < 1 || inputValue > 500) {
		alert('number between 1 and 500');
	} else {
		const emoji = document.querySelector('.emoji');
		emoji.innerHTML = '';
		for (let i = 0; i < inputValue; i++) {
			let newEmoji = document.createElement('span');
			newEmoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
			newEmoji.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
			emoji.appendChild(newEmoji);
		}
	}
});
