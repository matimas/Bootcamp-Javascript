const start = document.querySelector('.start-here');
start.innerText = 'main title';

const sub_title4 = document.createElement('li');
sub_title4.innerText = 'sub title 4';
document.querySelector('.sub').appendChild(sub_title4);

let ul = document.querySelector('ul');
ul.removeChild(ul.lastElementChild);
ul.firstElementChild.textContent = 'Master Of The Dom”';

let p = (document.querySelector('div p').textContent = 'Welcome Vanila');
console.log(p);
