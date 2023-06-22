function route(app) {
    app.get("/collection", (req,res) =>{
        console.log(req.query);
        res.render("collection");
      });
      
      app.get("/", (req, res) => {
          res.render("home");
      });
}

module.exports = route;