const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  items: Array,
  date: Date
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
