const express = require("express");
const PORT = 3001;
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const brcypt = require("bcryptjs");
const session = require("express-session");
const { User, Sequelize } = require("./src/db/models");
const LocalStrategy = require("passport-local").Strategy;
const Op = Sequelize.Op;
const morgan = require('morgan')

const app = express();

//require router
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const tinderRouter = require("./routes/tinderRouter");
const avitoRouter = require("./routes/avitoRouter");


// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const sessionConfig = {
    secret: "secretcode",
    resave: true,
    saveUninitialized: false,
    cookie: { _expires: 10 * 60 * 1000 },
}

const sessionParser = session(sessionConfig)

app.use(sessionParser)

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
      passwordField: "password",
    },
    function (username, password, done) {
      User.findOne({ where: { login: username } }).then((theUser) => {
        if (!theUser) {
          return done(null, false, { message: "User does not exist" });
        }
        if (!brcypt.compareSync(password, theUser.password)) {
          return done(null, false, { message: "Password is not valid." });
        }
        return done(null, theUser);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (user, done) {
  User.findByPk(user.id).then(() => done(null, user));
});

// app.listen(PORT, () => {
//   console.log("Server has been started on PORT " + PORT);
// });

//connect router
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/tinder", tinderRouter);
app.use("/prodavito", avitoRouter);


module.exports = { app, sessionParser };