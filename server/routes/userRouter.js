require("dotenv").config();
const router = require("express").Router();
const { User, Sequelize, UserInfo } = require("../src/db/models");
const Op = Sequelize.Op;
const brcypt = require("bcryptjs");
const passport = require("passport");

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




router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/user/google/failed",
    successRedirect: `${process.env.REACT_URL}`,
  }),
  async function (req, res) {
    if (req.user.displayName && req.user.emails[0].value) {
      try {
        const currentUser = await User.findOne({
          where: { login: req.user.emails[0].value },
        });

        if (currentUser) {
          req.session.login = currentUser.login;
          req.session.userId = currentUser.id;
          return res.redirect("http://localhost:3000");
        } else {
          const newUser = await User.create({
            login: req.user.emails[0].value,
            password: 123,

            userType: "user",
          });
          req.session.login = newUser.login;
          req.session.userId = newUser.id;
          return res.redirect("http://localhost:3000");
        }
      } catch (error) {
        return res.sendStatus(405);
      }
    } else {
      return res.sendStatus(403);
    }
  }
);

router.route("/signup").post(async (req, res) => {
  const { login, password } = req.body;
  const hashPass = await brcypt.hash(password, 10);

  const newUser = await User.create({
    login,
    password: hashPass,
    userType: "user",
  });
  req.session.login = newUser.login;
  req.session.userId = newUser.id;
  req.session.userType = newUser.userType;
  const { id, login: log, userType } = newUser;
  res.json({ id, log, userType });
});


router.post("/getgoogleuser", async (req, res) => {
  const googleUser = {
    id : req.session.userId,
    login : req.session.login,
    userType: req.session.userType
  }
  console.log(googleUser, 'GOOGLE USER')
  console.log(req.session, 'REQ SESSION USERID')
  res.json({googleUser})
})



router.route('/logout').get(function (req, res) {
  req.session.destroy()
  res.clearCookie('sId')
  req.logout()
  res.send('logout')
})



// router.get('/check', async (req, res) => {
//   if (req?.user) {
//     try {
//       const findUser = await User.findOne({
//         where: { email: req?.user.emails[0].value },
//       })
//       if (req?.user.emails[0].value === findUser?.email) {
//         return res.json(findUser)
//       }
//       const newUser = await User.create({
//         email: req.user.emails[0].value,
//         firstname: req.user.name.givenName,
//         lastname: req.user.name.familyName,
//         avatar: req.user.photos[0].value,
//       })
//       return res.json(newUser)
//     } catch (error) {
//       return res.sendStatus(500)
//     }
//   }
//   return res.sendStatus(400)
// })

// этот мидлвер пропускает только залогиненных юзеров (в те ручки в которых он вызывается) и за одно добавляет в username в объект res.locals
function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user.username; // passport добавляет в req объект user и мы можем его использовать
    next();
  } else {
    res.redirect("http://localhost:3000/prodavito");
  }
}

router.route("/profile/:id").get(async (req, res) => {
  try {
    const userProfile = await User.findOne({
      where: { id: req.params.id },
      attributes: ["id", "login"],
    });
    res.json({ userProfile });
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route("/new").post(async (req, res) => {
  try {
    const { email, mobile_phone, avatar, first_name, last_name, id } = req.body;
    regular = /(\+7|8)[\s]*(\d{3})[\s]*(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/gm;
    const mobile_phone_reg = mobile_phone.replace(regular, "$1 ($2) $3-$4-$5");
    const newUserInfo = await UserInfo.create({
      email: email,
      mobile_phone: mobile_phone_reg,
      avatar: avatar,
      first_name: first_name,
      last_name: last_name,
      user_id: +id,
    });
    const userInfo = await UserInfo.findOne({
      where: { user_id: id },
    });
    res.json(userInfo);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.route("/profile/info/:id").get(async (req, res) => {
  try {
    const userInfoFromBack = await UserInfo.findOne({
      where: { user_id: req.params.id },
    });
    res.json({ userInfoFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});

module.exports = router;
