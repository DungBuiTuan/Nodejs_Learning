const newRouter = require('./news')

function route(app) {
    app.use('./news', newRouter)

    app.get("/collection", (req,res) =>{
        console.log(req.query);
        res.render("collection");
      });
      
      app.get("/", (req, res) => {
          res.render("home");
      });
}

module.exports = route;