const whatAcolor = (color) => {
	f_color = color.toLowerCase();
	let out_color = '';
	switch (color) {
		case 'yellow':
			out_color = 'ligth-color';
			break;
		case 'pink':
			out_color = 'ligth-color';
			break;
		case 'orange':
			out_color = 'ligth-color';
			break;
		case 'blue':
			out_color = 'dark-color';
			break;
		case 'brown':
			out_color = 'dark-color';
			break;
		case 'purple':
			out_color = 'dark-color';
			break;
		default:
			out_color = 'Unknown color';
			break;
	}
	console.log(out_color);
	return out_color;
};
//|| 'pink' || 'orange':'purple' || 'brown':
whatAcolor('blue');
whatAcolor('purple');
whatAcolor('pink');
whatAcolor('green');
whatAcolor('grefvgdfven');
