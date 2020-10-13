'use strict';

const assert = require("chai").assert;
const GoogleService = require('../../src/api/services/google_api_service');

var assert    = require("chai").assert;
var calculator = require("../app/calculator");

describe("GoogleService Test", function() {
	before(function() {
		// runs before all tests in this block
		var result;
	});
	after(function() {
		// runs after all tests in this block
	});
	beforeEach(function() {
		// runs before each test in this block
	});
	afterEach(function() {
		// runs after each test in this block
		result = null;
	});
	describe("Check Sum Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = calculator.sum(2);
			assert.equal(result, 4);
		});
		it("Check the returned value using: assert.typeOf(value,'value'):  ", function() {
			result   = calculator.sum(2);
			assert.typeOf(result, 'number');
		});
	});
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});
		it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.typeOf(result, "string");
		});
		it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.lengthOf(result, 11);
		});
	});




});
