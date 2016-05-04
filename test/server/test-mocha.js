/**
 *	./test/server/test-mocha.js
 *  @file     practise.
 *
 *  @author   TH_Cloud
 *
 */


var assert = require('chai').assert;

// a describe is a test suite.
describe('Array', function () {

	// this is a test case.
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1, 2, 3].indexOf(5));
			// this case won't pass.
			// assert.equal(-1, [1, 2, 3].indexOf(1));
			assert.equal(-1, [1, 2, 3].indexOf(0));
		});
	});
});