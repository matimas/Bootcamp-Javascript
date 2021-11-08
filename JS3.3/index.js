///decl///
function percentageOfWorld1(pop) {
	return (pop / 7990) * 100;
}
////expr///
const percentageOfWorld2 = (pop) => (pop / 7990) * 100;

let israel = percentageOfWorld1(8);
let usa = percentageOfWorld1(331);
let indian = percentageOfWorld1(1380);

console.log(israel, usa, indian);

israel = percentageOfWorld2(8);
usa = percentageOfWorld2(331);
indian = percentageOfWorld2(1380);

console.log(israel, usa, indian);
