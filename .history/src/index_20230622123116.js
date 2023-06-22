const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public\\img')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources\\view\\layouts'));


app.get("/static", (req, res) => {
  res.render("static");
});

app.get('/', (req, res, next) => {
  res.render('main', {layout: false});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})