var mq_client = require('../rpc/client');

exports.getProductInfo = function(req,res){

    var msg_payload = { product_id:req.param("id"),reqType:"getProductInfo"};
    mq_client.make_request('products_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getFarmerProducts = function(req,res){
    console.log("api:getFarmerProducts call sucessful "+ req.param("farmerId"));
    var msg_payload = { farmer_id:req.param("farmerId"),reqType:"getProductsByFarmer"};
    mq_client.make_request('products_queue',msg_payload, function(err, response){
        console.log("response in client" +  response);
        res.send(response);
    });
};

exports.searchProducts = function(req,res){
  console.log("api:serachProducts call sucessfull" + req.param("search"));
    var msg_payload = { search:req.param("search"),reqType:"searchProducts"};
    mq_client.make_request('products_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.deleteCustomer=function(req,res){
    var email = req.session.customer;
    var msg_payload = {email: email, reqType: "deleteCustomer"};
    mq_client.make_request('customers_queue',msg_payload, function(err, response){
        req.session.destroy();
        res.send(response);
    });
};

exports.postReview = function(req,res){
  console.log("api:postReview  call sucessfull" + req.param("productRating"));
    var msg_payload = { productRating:req.param("productRating"),comment:req.param("comment"),productId:req.param("productId"),customer_email:req.session.customer,reqType:"postReview"};
    mq_client.make_request('customers_queue',msg_payload, function(err, response){
        res.send(response);
    });
};
