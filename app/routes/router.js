const router = require('express').Router()
const passport = require('passport')
const User = require('../modules/User')

router.get('/', (req, res) => {
  if (!req.user) {
    res.redirect('/login')
  } else {
    res.render('home', {
      profile: req.user
    })
  }
})

router.get('/login', (req, res) => {

  res.render('login', {
    msg: (req.query.msg ? req.query.msg : '')
  })
})

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?msg=Wrong Username Or Password'
  })
)

router.get('/register', (req, res) => {
  res.render('register')
})

router.post(
  '/register',
  (req, res) => {
    console.log('New User made');
    const user = new User({
      username: 'de',
      password: 'e',
      name: 'Daniel',
      email: 'djorborn@gmail.com'
    })
    user.save(()=> {res.redirect('/login?msg=New User Created')})
  }
)


module.exports = router
