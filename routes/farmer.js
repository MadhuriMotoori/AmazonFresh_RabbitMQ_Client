var mq_client = require('../rpc/client');

var redis = require("redis"),
    client = redis.createClient();

exports.displayProducts = function(req,res){

    var keyForRedis=req.param("page")+":"+"allProducts";
    client.get(keyForRedis, function(err, reply) {
        // reply is null when the key is missing
        if (reply) {
            console.log(reply);
            json_responses = {
                statusCode: 200,
                result: JSON.parse(reply),
            };
            res.send(json_responses);
        } else {
            var msg_payload = {reqType: "displayAllProducts", "page": req.param("page")};
            mq_client.make_request('products_queue', msg_payload, function (err, response) {
                res.send(response);
            });
        }
    });

};

exports.getFarmerDetails = function(req, res){
    var msg_payload = { farmer_email:req.session.farmer,reqType:"getFarmerDetails"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};
/*testing*/
exports.addVideo = function(req, res){
    var msg_payload = { farmer_email:req.session.farmer,reqType:"addFarmerVideo",video:req.param("media")};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};


exports.getFarmerVideo = function(req, res){
    var msg_payload = { farmer_email:req.session.farmer,reqType:"getFarmerVideo"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.updateFarmerProfile=function(req,res){
    var msg_payload = { farmer_email:req.session.farmer,firstname:req.param("firstname"),lastname:req.param("lastname"),address1:req.param("address1"),address2:req.param("address2"),city:req.param("city"),
        state:req.param("state"),zipcode:req.param("zipcode"),phone_number:req.param("phone_number"),reqType:"updateFarmerProfile"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.farmerAddProduct=function(req,res){
    var msg_payload = { farmer_email:req.session.farmer,name:req.param("name"),price:req.param("price"),description:req.param("description"),image:req.param("image"),reqType:"farmerAddProduct"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.deleteAccountFarmerPage=function(req,res){
    var email = req.session.farmer;
    var msg_payload = {email: email, reqType: "deleteAccountFarmerPage"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        req.session.destroy();
        res.send(response);
    });
};

exports.deleteProductFarmerPage=function(req,res){
    var msg_payload = { productId:req.param("productId"),reqType:"deleteProductFarmerPage"};
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.updateProductFarmerPage=function(req,res){
    var msg_payload = { productId:req.param("productId"),name:req.param("name"),price:req.param("price"),description:req.param("description"),
        image:req.param("image"),reqType:"updateProductFarmerPage"};
    console.log(req.session.farmer);
    mq_client.make_request('farmers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};
