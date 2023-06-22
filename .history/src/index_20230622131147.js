const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources\\views\\layouts'));


app.get('/', (res, req) => {
  res.render('home');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})