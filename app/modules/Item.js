const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  item: String,
  todo: {type: Schema.Types.ObjectId, ref: 'Todo'}
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
