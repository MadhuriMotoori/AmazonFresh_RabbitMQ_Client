var mq_client = require('../rpc/client');
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

//var loginDatabase = "mongodb://localhost:27017/login";
module.exports = function(passport) {
    passport.use('customerlogin', new LocalStrategy(function (username, password, done) {
        process.nextTick(function () {
        console.log(username);
            var msg_payload = {username : username, password: password};
            mq_client.make_request('customerLogin_queue',msg_payload, function(err, results){
                 console.log(results);
                if (results.statusCode === 401) {
                    done(null, results);
                }
                else {
                    console.log(username);
                    done(null, username);
                }
            });

        });
    }));
    passport.use('Farmerlogin', new LocalStrategy(function (username, password, done) {
        process.nextTick(function () {
            var msg_payload = {username : username, password: password};
            mq_client.make_request('farmerLogin_queue',msg_payload, function(err, results){
                console.log(results);
                if (results.statusCode === 401) {
                    done(null, results);
                }
                else {
                    console.log(username);
                    done(null, username);
                }
            });

        });
    }));
};


