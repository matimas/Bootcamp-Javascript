let flag = false;
function myFunction() {
	if (!flag) {
		const start = document.querySelector('.start-here');
		start.innerText = 'main title';

		const sub_title4 = document.createElement('li');
		sub_title4.innerText = 'sub title 4';
		document.querySelector('.sub').appendChild(sub_title4);

		let ul = document.querySelector('ul');
		ul.removeChild(ul.lastElementChild);
		ul.firstElementChild.textContent = 'Master Of The Dom”';

		let p = (document.querySelector('div p').textContent = 'Welcome Vanila');
		document.body.style.backgroundColor = 'green';
		document.body.style.justifyContent = 'center';
		document.body.style.fontSize = '30px';
		document.querySelector('button').style.visibility = 'hidden';
		flag = true;
	}
}
