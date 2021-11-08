function name() {
	const date = new Date().toDateString();
	let cur_day = dayCheak(date.slice(0, 3));
	let cur_month = monthCheak(date.slice(8, 10));
	let date_of_mount = date.slice(8, 10);
	let cur_year = date.slice(11, 15);

	console.log(
		`Today is ${cur_day} the ${date_of_mount} of ${cur_month}, ${cur_year} `,
	);
}
name();
function dayCheak(day) {
	day.toLowerCase();
	switch (day) {
		case 'sun':
			return 'Sunday';
			break;
		case 'mon':
			return 'Monday';
			break;
		case 'tue':
			return 'Tuesday';
			break;
		case 'Wed':
			return 'Wednesday';
			break;
		case 'Thu':
			return 'Thursday';
			break;
		case 'fri':
			return 'Friday';
			break;
		default:
			return 'Saterday';
			break;
	}
}
function monthCheak(month) {
	month.toLowerCase();
	switch (month) {
		case 'sun':
			return 'January';
			break;
		case 'mon':
			return 'February';
			break;
		case 'tue':
			return 'March';
			break;
		case 'Wed':
			return 'April';
			break;
		case 'Thu':
			return 'May';
			break;
		case 'fri':
			return 'June';
			break;
		case 'fri':
			return 'July';
			break;
		case 'fri':
			return 'August';
			break;
		case 'fri':
			return 'September';
			break;
		case 'fri':
			return 'October';
			break;
		case 'fri':
			return 'November';
			break;
		default:
			return 'December';
			break;
	}
}
