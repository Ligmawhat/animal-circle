const router = require("express").Router();
const { Geotags } = require("../src/db/models");
const passport = require("passport");

router.route("/new").post(async (req, res) => {
  try {
    const { cords, title, desc, url, id } = req.body;
    const newTags = await Geotags.create({
      geotags_title: title,
      latitude: cords.lat,
      longitude: cords.lon,
      description: desc,
      url: url,
      approved: false,
      user_id: id,
    });
    console.log(newTags);
    res.json(newTags);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
