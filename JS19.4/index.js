const container = document.createElement('div');
document.body.appendChild(container);

const title = document.createElement('h1');
const img = document.createElement('img');
const para = document.createElement('p');

container.appendChild(title);
container.appendChild(img);
container.appendChild(para);

container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.flexFlow = 'column';

title.textContent = 'Johnny Bryce';

img.src = 'john_bryce.jpg';
img.setAttribute('style', 'width:500px');
para.textContent = '#groop2#';
document.body.style.color = 'red';
