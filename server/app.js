require('dotenv').config()




const express = require('express')
const session = require('express-session')
const path = require('path');

const cors = require('cors')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const cookieParser = require('cookie-parser')

const brcypt = require('bcryptjs')


const { User, Sequelize } = require('./src/db/models')


const Op = Sequelize.Op
const morgan = require('morgan')
const fileUpload = require('express-fileupload');
const app = express()
const redis = require('redis')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
app.use(fileUpload())


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

app.use(express.static(path.join(__dirname, 'public')))


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
<<<<<<< HEAD
      return done(null, profile);
    }
  )
);

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/tinder", tinderRouter);
app.use("/prodavito", avitoRouter);
app.use("/map", mapRouter);
=======
      console.log(profile, 'PROFILE')
      return done(null, profile)
    },
  ),
)

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/tinder', tinderRouter)
app.use('/prodavito', avitoRouter)
>>>>>>> 9885882d8da4ea8682233f0f9313e298e661ff5e

app.use('/map', mapRouter)

module.exports = { app }
