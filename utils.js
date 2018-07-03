module.exports.calculate = (a, b) => {
	let result = 0;
	for (let i = 0; i < 100; i++) {
		result += a + b;
	}
	return result;
};