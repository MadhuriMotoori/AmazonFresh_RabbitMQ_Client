var mq_client = require('../rpc/client');

function customerLogIn(req, res,next){

    var passport=require('passport');
    require('./passport')(passport);
    console.log(req.body.username);
    console.log(req.body);
    passport.authenticate('customerlogin', function(err,user, info) {
        console.log(user);
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.redirect('/');
        }
        if(user.statusCode==401){
            return res.send(user);

        }
        else{
            req.login(user, {session:false}, function(err) {
                if(err) {
                    return next(err);
                }
                console.log(user);
                req.session.customer = user;
                console.log("session initialized");
                //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                return res.send("success");
            });
        }
    })(req, res, next);
}

function farmerLogIn(req, res,next){
    var passport=require('passport');
    require('./passport')(passport);
    console.log(req.body.username);
    console.log(req.body);
    passport.authenticate('Farmerlogin', function(err,user, info) {
        console.log(user);
        if(err) {
            return next(err);
        }

        if(!user) {
            return res.redirect('/');
        }
        if(user.statusCode==401){
            return res.send(user);

        }
        else{
            req.login(user, {session:false}, function(err) {
                if(err) {
                    return next(err);
                }
                console.log(user);
                req.session.farmer = user;
                console.log("session initialized");
                //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                return res.send("success");
            });
        }
    })(req, res, next);
}

function adminLogIn(req, response){
    var email = req.param("email");
    var password = req.param("password");
    var msg_payload = {email : email, password: password, reqType: "adminLogin"};

    mq_client.make_request('login_queue',msg_payload, function(err, results){
        if(results.statusCode==200){
            req.session.admin = req.param("email");
        }
        response.send(results);
    });
}

exports.redirectToCustomerHomepage = function(req,res)
{
    //Checks before redirecting whether the session is valid
    if(req.session.customer)
    {
        //Set these headers to notify the browser not to maintain any cache for the page being loaded
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render("customerIndexHomePage");
    }
    else
    {
        res.redirect('/');
    }
};

exports.redirectToFarmerHomepage = function(req,res)
{
    //Checks before redirecting whether the session is valid
    if(req.session.farmer)
    {
        //Set these headers to notify the browser not to maintain any cache for the page being loaded
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render("farmerIndexHomePage");
    }
    else
    {
        res.redirect('/');
    }
};

exports.redirectToAdminHomepage = function(req,res)
{
    console.log("entered here");
    //Checks before redirecting whether the session is valid
    if(req.session.admin)
    {
        //Set these headers to notify the browser not to maintain any cache for the page being loaded
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render("adminIndexHomePage");
    }
    else
    {
        res.redirect('/');
    }
};

exports.logout = function(req,res)
{
    req.session.destroy();
    res.send({status:200});
    //res.redirect('/');
};
exports.customerLogIn = customerLogIn;
exports.farmerLogIn = farmerLogIn;
exports.adminLogIn = adminLogIn;
