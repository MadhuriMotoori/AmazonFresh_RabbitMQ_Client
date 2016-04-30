var mq_client = require('../rpc/client');
exports.placeOrder=function(req,res){
    var msg_payload = { customer_email:req.session.customer,
        ar_farmerId:req.param("ar_farmerId"),
        ar_productId:req.param('ar_productId'),
        ar_price:req.param("ar_price"),
        ar_quantity:req.param("ar_quantity"),
        total_price:req.param("total_price"),reqType:"placeOrder"};

    
    mq_client.make_request('orders_queue',msg_payload, function(err, result) {
        console.log("result value" + result);

        res.send(" "+result);
    });
};
exports.customerDetails=function(req,res){
    var msg_payload = { customer_email:req.session.customer,reqType:"customerDetails" };
    mq_client.make_request('orders_queue',msg_payload, function(err, result) {
        console.log("result value" + result);

        res.send(result);
    });
};

exports.getBills=function(req,res){
    var msg_payload = { data:req.param("data"),reqType:"getBills" };
    mq_client.make_request('orders_queue',msg_payload, function(err, result) {
        console.log("result value" + result);

        res.send(result);
    });
};

exports.viewOrders=function(req,res){
    var msg_payload = { customer_email:req.session.customer,reqType:"viewOrders" };
    mq_client.make_request('orders_queue',msg_payload, function(err, result) {
        console.log("result value" + result);

        res.send(result);
    });
};