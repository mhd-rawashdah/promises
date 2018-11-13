/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
//Request - Simplified HTTP client
var request = require('request');
// Promise is a way to excute the node style callback pattern
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  // create a object of Promise  and pass our function to it  
  var promise = new Promise (function(resolve, reject){	
	fs.readFile(filePath, 'utf8', function(error, content){

		if (error) {
			// pass error to the reject call back it will be in the catch
			reject(error);
		} else {
			// to get the first line of data in the filePath
			var firstLine = content.split('\n')[0];
			// pass the value to resolve callback and it will be in then 
			resolve(firstLine);
		}
	});
  });
  // return promise object 
  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var promise = new Promise ( function (resolve, reject) {
  // this function retrieve the status code  take a url and the callback function
  // that take error and response and body as parameter	
	request(url, function(error, response, body){
		if (error) {
			reject(error);
		} else {
		  resolve(response && response.statusCode)
		}
	});
  });

  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
