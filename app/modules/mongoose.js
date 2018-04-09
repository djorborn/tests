const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/awesome')

const db = mongoose.connection

db.on('error', console.error.bind(console, "Mongoose Error"))

db.once('open', () => {
  console.log('Mongoose Connected');
})

module.exports = mongoose
