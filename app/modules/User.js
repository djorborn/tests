const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
