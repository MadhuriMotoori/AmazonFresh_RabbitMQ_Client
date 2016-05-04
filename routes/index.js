
/*
 * GET home page.
 */

exports.index = function(req, res){

  if(req.session.customer){
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render("customerIndexHomePage");
  }else if(req.session.farmer){
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render("farmerIndexHomePage");
  }else if(req.session.admin){
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render("adminIndexHomePage");
  }
  res.render('index', { title: 'Express' });
};


