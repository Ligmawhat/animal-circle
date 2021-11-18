const router = require("express").Router();
const { User, Sequelize } = require("../src/db/models");
const Op = Sequelize.Op;

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

router.route("/signup").post(async (req, res) => {
  const { login, password } = req.body;
  const hashPass = await brcypt.hash(password, 10);
  const newUser = await User.create({ login, password: hashPass });
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

module.exports = router;
