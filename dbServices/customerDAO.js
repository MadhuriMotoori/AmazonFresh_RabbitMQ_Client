var mysqlformat = require('mysql');
var mysql = require('../routes/mysql');
var bcrypt   = require('bcrypt-nodejs');


exports.validateCustomer = function(email, password, callback){
    var query = "select * from customers where deactivated='no' and email = ?";
    var params = [email];
    var finalquery = mysqlformat.format(query, params);

    mysql.fetchData(function(err, results) {
        if (err) {
            throw err;
        } else {
            if(results.length == 1){
                if(results[0].status == "yes"){
                    var hash1=results[0].password;
                    console.log(hash1);
                    bcrypt.compare(password,hash1 , function(err, result1) {
                    if(result1==true){
                        json_responses = {
                            statusCode : 200
                        };
                        callback(json_responses);
                    } else {
                        json_responses = {
                            statusCode: 401,
                            error: "password error"
                        };
                        callback(json_responses);
                    }
                });} else {
                    json_responses = {
                        statusCode: 401,
                        error: "Not approved"
                    };
                    callback(json_responses);
                }

            } else {
                json_responses = {
                    statusCode : 401,
                    error: "Email doesnot exist"
                };
                callback(json_responses);
            }

        }
    }, finalquery);
};
