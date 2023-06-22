const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('img')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources\\views'));

app.get("/collection", (req,res) =>{
  console.log(req.query);
  res.render("collection");
});

app.get("/", (req, res) => {
	res.render("home");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})