const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const route = require('./routes')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('img')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources\\views'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})