const todoRoute = require('express').Router()
const Todo = require('../modules/Todo')
const Item = require('../modules/Item')

todoRoute.get('/', (req, res) => {
  res.render('todo')
})

todoRoute.post('/', (req, res) => {
  // Get Data
  Todo.findOne({_id: req.query.id}).exec(
    function (err, todo) {
      res.send(todo)
      console.log(todo);
    }
  )
})

todoRoute.get('/new-list', (req, res) => {
  var todo = new Todo({
    author: req.user.id,
    title: "temp title"
  })
  todo.save(
    () => {
      res.redirect('/todo?id=' + todo._id)
    }
  )
})

todoRoute.post('/update-title', (req, res) => {
  Todo.findByIdAndUpdate(req.body.id, {title: req.body.title}, (err, todo) => {
    console.log(todo);
    res.sendStatus(200)
  })
})

todoRoute.post('/add-item', (req, res) => {
  console.log(req.body.id);
  Todo.findById(req.body.id, (err, todo) => {
    var count = todo.items.length
    todo.items.push({no: count++, item: req.body.item})
    todo.save(() => {
      res.send(todo)
    })
  })
})

module.exports = todoRoute
