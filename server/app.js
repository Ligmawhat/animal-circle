const express = require('express')
const PORT = 3001
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const brcypt = require('bcryptjs')
const session = require('express-session')
const { User, Sequelize } = require('./src/db/models/')
const LocalStrategy = require('passport-local').Strategy
const Op = Sequelize.Op

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)

app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: false,
    cookie: { _expires: 10 * 60 * 1000 },
  }),
)
app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
    },
    function (username, password, done) {
      User.findOne({ where: { login: username } }).then((theUser) => {
        if (!theUser) {
          return done(null, false, { message: 'User does not exist' })
        }
        if (!brcypt.compareSync(password, theUser.password)) {
          return done(null, false, { message: 'Password is not valid.' })
        }
        return done(null, theUser)
      })
    },
  ),
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})
passport.deserializeUser(function (user, done) {
  User.findByPk(user.id).then(() => done(null, user))
})

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.send('No user')
    else {
      req.logIn(user, (err) => {
        req.session.userId = req.user.id
        if (err) throw err
        res.json({
          id: req.user.id,
          log: req.user.login,
          userType: req.user.userType,
        })
      })
    }
  })(req, res, next)
})

app.post('/api/signup', async (req, res) => {
  const { login, password } = req.body
  const hashPass = await brcypt.hash(password, 10)
  const newUser = await User.create({ login, password: hashPass })
  req.session.login = newUser.login
  req.session.userId = newUser.id
  req.session.userType = newUser.userType
  const { id, login: log, userType } = newUser
  res.json({ id, log, userType })
})


app.get('/api/logout', function (req, res) {
  req.logout()
  res.clearCookie('connect.sid')
  res.send('logout')
})


app.listen(PORT, () => {
  console.log('Server has been started on PORT ' + PORT)
})
