const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const client = require('redis').createClient()
const RedisStore = require('connect-redis')(session)
const User = require('./app/modules/User')
const router = require('./app/routes/router')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(
  new LocalStrategy(
    function (username, password, done) {
      User.findOne({username: username}, (err, user) => {
        if (err) throw err
        if (!user) {
          return done(null, false, {message: 'Wrong Username'})
        }
        if (password !== user.password) {
          return done(null, false, {message: 'Wrong Password'})
        }
        return done(null, user)
      })
    }
  )
)
passport.serializeUser(function (user, done){
  done(null, user.id)
})
passport.deserializeUser(function (id, done){
  User.findOne({_id: id}, (err, user) => {
    done(null, user)
  })
})

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'app/views'))

app.use(
  express.json(),
  express.urlencoded({extended: false}),
  express.static(path.join(__dirname, 'app/public')),
  session({
    secret: 'Meow',
    store: new RedisStore({client: client}),
    resave: false,
    saveUninitialized: false
  }),
  passport.initialize(),
  passport.session(),
  router
)
  .listen(
    3000,
    () => {
      console.log('Server Running @ http://localhost:3000');
    }
  )
