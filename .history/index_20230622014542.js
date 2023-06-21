const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.get('/Home', (req, res) => {
  res.send('Hello World!')
})

app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})