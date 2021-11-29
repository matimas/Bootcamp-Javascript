const incButton = document.querySelector('.inc');
const decButton = document.querySelector('.dec');
const FONT_SIZE_INCEMENT = 2;

const getFontSize = (value) => {
	return value.toString() + 'px';
};

const changeTextSize = (delta) => {
	const textElement = document.querySelector('p');
	let fontSizePx = parseInt(getComputedStyle(textElement).fontSize);
	if (fontSizePx > 100) {
		fontSizePx = 100;
	}
	if (fontSizePx < 6) {
		fontSizePx = 6;
	}
	textElement.style.fontSize = getFontSize(fontSizePx + delta);
};

incButton.addEventListener('click', (e) => {
	changeTextSize(FONT_SIZE_INCEMENT);
});

decButton.addEventListener('click', (e) => {
	changeTextSize(-1 * FONT_SIZE_INCEMENT);
});
