const register = require('express').Router()
const User = require('../modules/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

register.get('/register', (req, res) => {
  res.render('register')
})

console.log(bcrypt.hashSync('bob', saltRounds));

register.post(
  '/register',
  (req, res) => {
    console.log('New User made');
    const user = new User({
      username: 'ee',
      password: bcrypt.hashSync('e', saltRounds),
      name: 'eee',
      email: 'meow@gmail.com'
    })
    user.save(()=> {res.redirect('/login?msg=New User Created')})
  }
)

module.exports = register
