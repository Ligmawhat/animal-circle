require('dotenv').config()
const express = require('express')
const PORT = 3001
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const brcypt = require('bcryptjs')
const session = require('express-session')
const { User, Sequelize } = require('./src/db/models')
const LocalStrategy = require('passport-local').Strategy
const Op = Sequelize.Op
const morgan = require('morgan')
const multer = require('multer')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const app = express()

const flash = require('connect-flash')
const redis = require('redis')

const RedisStore = require('connect-redis')(session)

const redisClient = redis.createClient()

const moment = require('moment')
passport.serializeUser(function (user, done) {
  done(null, user.id)
})
passport.deserializeUser(function (user, done) {
  User.findByPk(user.id).then(() => done(null, user))
})

//require router
const indexRouter = require('./routes/indexRouter')
const userRouter = require('./routes/userRouter')
const tinderRouter = require('./routes/tinderRouter')
const avitoRouter = require('./routes/avitoRouter')
const mapRouter = require('./routes/mapRouter')
// const googleUserRouter = require('./routes/googleUserRouter')

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)
app.use(express.static('uploads'))
// const storageConfig = multer.diskStorage(
//   {
//   destination: (req, file, cb) => {
//     cb(null, "./public/img");
//   },
//   filename: (req, file, cb) => {
//     const date = moment().format("DDMMYYY-HHmmss_SSS");
//     cb(null, `${date}-${file.originalname}`);
//   },
// });

// const storage = multer.memoryStorage();
// app.use(multer({ storage : storageConfig }).single("image"));

// app.use(
//   session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: false,
//     cookie: { _expires: 10 * 60 * 1000 },
//   })
// );

app.use(
  session({
    name: 'sId',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSIONSECRET,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1e3 * 86400,
      sameSite: false,
    },
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

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'PROFILE')
      return done(null, profile)
    },
  ),
)

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/tinder', tinderRouter)
app.use('/prodavito', avitoRouter)

app.use('/map', mapRouter)

module.exports = { app }
