const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', require('path').join(__dirname, 'app/views'))
app.use(express.static(__dirname + '/app/public'))

app.get('/', (req, res) => {
  res.render('vue', {
    stuff: JSON.stringify({
      one: 'One',
      thing: 'That One Thing',
      title: 'Pugjs Vuejs Play',
      items: [
        'One',
        'Two',
        'Three'
      ]
    })
  })
})

app.listen(3000, () => {
  console.log('Server running @ localhost:3000')
})