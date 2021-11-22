const router = require("express").Router();
const { Good, Category, User, Geotags } = require("../src/db/models");

router.route("/new").post(async (req, res) => {
  const newTags = await Geotags.create({ ...req.body });
  console.log(newTags);
  res.sendStatus(200);
});

module.exports = router;
