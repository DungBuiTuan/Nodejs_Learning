const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars',handlebars())
app.set('view engine', 'handlebars');


app.get('/Home', (req, res) => {
  app.set('view engine', 'handlebars');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})