const searchButton = document.querySelector('.btn-search');
const userInput = document.querySelector('.username-input');
userInput.select();
userInput.focus();
const baseURL = 'https://api.github.com/users/';

const getUser = async (userInput) => {
	const user = await axios.get(baseURL + userInput);
	preperCard(user.data);
};

function preperCard(data) {
	const bannerArea = document.querySelector('.card-container');
	const card = document.createElement('div');
	let output = `
				          <a href="https://github.com/${data.login}"><img src="${data.avatar_url}" class="img"></a>
									<p class="user-name">UserName:${data.login} </p>
				          <p class="title">Name:${data.name}<p/>
			            <p class="repo">Public Repoes:${data.public_repos} repo </p>
			              `;
	card.innerHTML = output;
	card.className = 'card';
	bannerArea.append(card);
	userInput.value = '';
}

const search = () => {
	getUser(userInput.value).catch((err) => {
		const popup = document.querySelector('.error-popup');
		console.log(err.response);
		if (err.response.status === 404) {
			popup.classList.toggle('opacity-invisible');
			popup.classList.toggle('z-position');
			setTimeout(() => {
				popup.classList.toggle('opacity-invisible');
			}, 1000);
			setTimeout(() => {
				popup.classList.toggle('z-position');
			}, 2000);
		}
		userInput.value = '';
	});
};
searchButton.addEventListener('click', search);
userInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') search();
});
