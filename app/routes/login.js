const login = require('express').Router()
const passport = require('passport')

login.get('/login', (req, res) => {

  res.render('login', {
    msg: (req.query.msg ? req.query.msg : '')
  })
})

login.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?msg=Wrong Username Or Password'
  })
)


module.exports = login
