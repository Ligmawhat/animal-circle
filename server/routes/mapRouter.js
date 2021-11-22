const router = require("express").Router();
const { Good, Category, User, Geotags } = require("../src/db/models");

router.route("/new").post(async (req, res) => {
  console.log(req.body, 'REQ BODY'),
  console.log(req.session.userId, 'USERID')
  const { cords, title, desc, url} = req.body
  const newTags = await Geotags.create({ 
    geotags_title: title,
    latitude: cords.lat,
    longitude: cords.lon,
    description: desc,
    url : url,
    approved: false,
    user_id : 1
    
    
    });
  console.log(newTags);
  res.json(newTags);
});

module.exports = router;
