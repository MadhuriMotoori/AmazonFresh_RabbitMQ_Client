var mq_client = require('../rpc/client');

function checkCustomerEmail(req, res) {
    var email = req.param("email");
    var msg_payload = {email : email, reqType:"checkCustomerEmail"};
    

    if (email != undefined && email != "") {
        mq_client.make_request('signup_queue',msg_payload, function(err, response){
            res.send(response);
        });
    } else {
        json_responses = {
            "statusCode" : 401,
            "error" : "Email not defined"
        };
        res.send(json_responses);
    }
}

function checkCustomerSSN(req, res) {
    console.log("entered" + req);
    var ssn = req.param("ssn");
    var msg_payload = {ssn : ssn, reqType:"checkCustomerSsn"};

    if (ssn != undefined && ssn != "") {
        mq_client.make_request('signup_queue',msg_payload, function(err, response){
            res.send(response);
        });
    } else {
        json_responses = {
            "statusCode" : 401,
            "error" : "ssn not defined"
        };
        res.send(json_responses);
    }
}

function createCustomer(req, res){

    var user = req.param("user");
    var msg_payload = {user : user, reqType: "createCustomer"};
    mq_client.make_request('signup_queue',msg_payload, function(err, response){
        res.send(response);
    });
}

function checkFarmerEmail(req, res) {
    var email = req.param("email");
    if(email == "" && email == undefined){
        json_responses = {
            "statusCode" : 401,
            "error" : "Email not defined"
        };
        res.send(json_responses);
    }
    var msg_payload = {email : email, reqType : "checkFarmerEmail"};
    mq_client.make_request('signup_queue',msg_payload, function(err, response){
        res.send(response);
    });
}

function createFarmer(req, res){
    var farmer = req.param("farmer");
    var ssn = "" + farmer.customer_id_1 + farmer.customer_id_2 + farmer.customer_id_3;
    var vendorname = farmer.vendorname;
    //todo add all values are not null and undefined

    var msg_payload = {farmer : farmer, ssn : ssn, vendorname : vendorname, reqType: "createFarmer"};
    mq_client.make_request('signup_queue',msg_payload, function(err, response){
        res.send(response);
    });
}

exports.checkCustomerEmail = checkCustomerEmail;
exports.checkCustomerSSN = checkCustomerSSN;
exports.createCustomer = createCustomer;
exports.checkFarmerEmail = checkFarmerEmail;
exports.createFarmer= createFarmer;
