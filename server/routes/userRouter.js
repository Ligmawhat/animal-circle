require('dotenv').config();
const router = require("express").Router();
const { User, Sequelize } = require("../src/db/models");
const Op = Sequelize.Op;
const brcypt = require("bcryptjs");
const passport = require("passport");
// require('../passport'
// )

router.route("/login").post((req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user");
    else {
      req.logIn(user, (err) => {
        req.session.userId = req.user.id;
        if (err) throw err;
        res.json({
          id: req.user.id,
          log: req.user.login,
          userType: req.user.userType,
        });
      });
    }
  })(req, res, next);
});

router.get('/failed', (req, res) => {
  console.log(1111111)
  res.send('failed')
} )


router.get('/success' , (req, res) => {
  console.log(2222222)
  res.send('assaas')
})

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
)

router.get(
  '/google/callback', 
  passport.authenticate('google',
  {
      failureRedirect: '/user/google/failed',
      successRedirect: `${process.env.REACT_URL}`
    }
    )
    // async function (req, res) {
    //   try {
    //     res.redirect('http://localhost:3000/prodavito')
        
    //   } catch (error) {
    //     console.log(err, 'ERROR')
    //   }
    // }
  //   // successRedirect: '/success'
  // }), async function (req, res) {
  //   console.log(req.body)
  // }
);





router.route("/signup").post(async (req, res) => {
  console.log(req.body, "SIGNUP REQ BODY");
  const { login, password } = req.body;
  const hashPass = await brcypt.hash(password, 10);
  const newUser = await User.create({ login, password: hashPass, userType: "user" });
  req.session.login = newUser.login;
  req.session.userId = newUser.id;
  req.session.userType = newUser.userType;
  const { id, login: log, userType } = newUser;
  res.json({ id, log, userType });
});

router.route("/logout").get(function (req, res) {
  req.logout();
  res.clearCookie("connect.sid");
  res.send("logout");
});




// этот мидлвер пропускает только залогиненных юзеров (в те ручки в которых он вызывается) и за одно добавляет в username в объект res.locals
function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user.username; // passport добавляет в req объект user и мы можем его использовать
    next();
  } else {
    res.redirect('/login');
  }
}




router.route("/profile/:id").get(async (req, res) => {
  const userProfile = await User.findOne({
    where: { id: req.params.id },
    attributes: ["id", "login"],
  });
  console.log(userProfile);
  res.json({ userProfile });
});

module.exports = router;
