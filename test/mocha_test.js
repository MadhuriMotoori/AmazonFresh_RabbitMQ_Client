/**
 * New node file
 */
var request = require('request')
, express = require('express')
,assert = require("assert")
,http = require("http");

describe('http tests', function(){

	it('should return the all the products of farmer if the url is correct', function(done){
		http.get('http://localhost:3000/api/getFarmerProducts', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	it('should return the customer details in orderpage if the url is correct', function(done){
		http.get('http://localhost:3000/customerDetails', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	it('should view the previous orders if the url is correct', function(done){
		http.get('http://localhost:3000/viewOrders', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});

	it('should search products', function(done) {
		request.post(
			    'http://localhost:3000/api/searchProducts',
			    { form: { search: 'p1' } },
			    function (error, response, body) {
			    	assert.equal(200, response.statusCode);
			    	done();
			    }
			);
	  });
	it('should get the product info', function(done) {
		request.post(
			'http://localhost:3000/api/getProductInfo',
			{ form: { search: 'apple' } },
			function (error, response, body) {
				assert.equal(200, response.statusCode);
				done();
			}
		);
	});

});