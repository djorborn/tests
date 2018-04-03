const express = require('express')
const app = express()

app.use(
  (req, res, next) => {
    req.pizza = "meow"
    //next()
  }
)

app.get('/', (req, res) => {

  res.send(req.pizza)
})

app.listen(3000)
