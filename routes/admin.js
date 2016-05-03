var mq_client = require('../rpc/client');

exports.getCustomerRequests = function(req, res){
    var msg_payload = {reqType:"getCustomerRequests",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getFarmerRequests = function(req, res){
    var msg_payload = {reqType: "getFarmerRequests",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getProductReviews=function(req,res){

    var msg_payload = {productId: req.param("productId"), reqType: "getProductReviews"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getProductRequests = function(req, res){
    var msg_payload = {reqType: "getProductRequests",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.approveFarmer = function(req, res){
    var msg_payload = {farmer_id: req.param("farmer_id"), reqType: "approveFarmer"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.approveCustomer = function(req, res){
    var msg_payload = {customer_id: req.param("customer_id"), reqType: "approveCustomer"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.approveProduct = function(req, res){
    var msg_payload = {product_id: req.param("product_id"), reqType: "approveProduct"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.index = function(req, res){
    res.render('adminLoginPage');
};

exports.getRevenuePerDay=function(req,res){
    var msg_payload = {reqType: "getRevenuePerDay"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getAllFarmers = function(req, res){
    var msg_payload = {reqType: "getAllFarmers",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};


exports.getAllProducts = function(req, res){
    var msg_payload = {reqType: "getAllProducts",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};


exports.getAllCustomers = function(req, res){
    var msg_payload = {reqType: "getAllCustomers",  page: req.param("page")};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getCustomerRideGraphDetails = function(req, res){
    var msg_payload = {ssn: req.param("ssn"), reqType: "getCustomerRideGraphDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getDriverRideGraphDetails = function(req, res){
    var msg_payload = {ssn: req.param("ssn"), reqType: "getDriverRideGraphDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getAllRideGraphDetails = function(req, res){
    var msg_payload = {reqType: "getAllRideGraphDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getAreaRideGraphDetails = function(req, res){
    var msg_payload = {area: req.param("area"), reqType: "getAreaRideGraphDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getCustomerBillDetails= function(req, res){
    var msg_payload = {ssn: req.param("ssn"), reqType: "getCustomerBillDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getBillDetailsById= function(req, res){
    var msg_payload = {billId: req.param("billId"), reqType: "getBillDetailsById"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getAdminProfileDetails= function(req, res){
    var msg_payload = {reqType: "getAdminProfileDetails"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};


exports.getCustomerById= function(req, res){
    var msg_payload = {ssn: req.param("ssn"), reqType: "getCustomerById"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getFarmerById= function(req, res){
    var msg_payload = {ssn: req.param("ssn"), reqType: "getFarmerById"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.getProductById= function(req, res){
    var msg_payload = {productId: req.param("productId"), reqType: "getProductById"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};

exports.updateDeliveryStatus= function(req, res){
    var msg_payload = {orderId: req.param("orderId"), reqType: "updateDeliveryStatus"};
    mq_client.make_request('admin_queue',msg_payload, function(err, response){
        res.send(response);
    });
};