const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');

inc.addEventListener('click', (e) => {
	const para = document.querySelector('p');
	const copmuted_para = getComputedStyle(para);
	let p_fontsize_px = copmuted_para.fontSize;
	let p_fontsize_num = parseInt(p_fontsize_px);
	if (p_fontsize_num < 100) {
		let inc_fontpx = (p_fontsize_num + 2).toString() + 'px';
		para.style.fontSize = inc_fontpx;
	} else {
		para.style.fontSize = '100px';
	}
});
dec.addEventListener('click', (e) => {
	const para = document.querySelector('p');
	const copmuted_para = getComputedStyle(para);
	let p_fontsize_px = copmuted_para.fontSize;
	let p_fontsize_num = parseInt(p_fontsize_px);
	if (p_fontsize_num > 6) {
		let inc_fontpx = (p_fontsize_num - 2).toString() + 'px';
		para.style.fontSize = inc_fontpx;
	} else {
		para.style.fontSize = '6px';
	}
});
