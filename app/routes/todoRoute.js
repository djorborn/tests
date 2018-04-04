const todoRoute = require('express').Router()
const Todo = require('../modules/Todo')
const Item = require('../modules/Item')

todoRoute.get('/', (req, res) => {
  res.render('todo')
})

todoRoute.post('/', (req, res) => {
  // Get Data
  Todo.findById(req.query.id, (err, todo) => {
    console.log(todo);
    res.json(todo)
  })
})

todoRoute.get('/new-list', (req, res) => {
  var todo = new Todo({
    author: req.user.id
  })
  todo.save(
    () => {
      res.redirect('/todo?id=' + todo._id)
    }
  )
})

todoRoute.post('/update-title', (req, res) => {

})

todoRoute.post('/add-item', (req, res) => {
  console.log(req.body.id);
  var item = new Item({
    todo: req.body.id,
    item: req.body.item
  })
  item.save(() => {
    res.send(item)
  })
})

module.exports = todoRoute
