const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars',handlebars)
app.get('/Home', (req, res) => {
  res.send(`<h1>Hello</h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})