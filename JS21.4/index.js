let light = document.querySelector('img');
light.addEventListener('click', () => {
	if (light.src === 'http://127.0.0.1:5555/JS21.4/off.jpeg') {
		light.src = 'on.jpeg';
	} else {
		light.src = 'off.jpeg';
	}
});
