var mq_client = require('../rpc/client');

exports.displayProducts = function(req,res){
    var msg_payload = { reqType:"displayAllProducts"};
        mq_client.make_request('products_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getFarmerDetails = function(req, res){
    var msg_payload = { farmer_email:req.session.farmer,reqType:"getFarmerDetails"};
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
