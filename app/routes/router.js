const router = require('express').Router()
const passport = require('passport')
const login = require('./login')
const register = require('./register')
const todoRoute = require('./todoRoute')
const User = require('../modules/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

router.get('/login', login)
router.post('/login', login)

router.get('/register', register)
router.post('/register', register)

router.use('/todo', todoRoute)


router.get('/', (req, res) => {
  if (!req.user) {
    res.redirect('/login')
  } else {
    res.render('home', {
      profile: req.user
    })
  }
})

router.post('/get-lists', (req, res) => {
  User.findById(req.user.id, (err, user) => {
    if (err) throw err
    if (!user) { res.redirect('/?error') }
    console.log(user);
    res.json(user)
  })
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})

module.exports = router
