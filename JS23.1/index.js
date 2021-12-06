const holderPlace = document.querySelector('.time-place');
const myTimer = () => {
	document.querySelector('.time-place').innerHTML =
		new Date().toLocaleTimeString();
};
let myVar = setInterval(myTimer, 1000);
