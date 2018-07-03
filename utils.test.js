const assert = require('assert');
const utils = require('./utils');

it('should calculate correctly', () => {
	assert.equal(utils.calculate(10, 5),1500);
});