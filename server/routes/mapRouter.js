const router = require('express').Router()
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const { Good, Category, User, Geotags } = require('../src/db/models')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    console.log('gkgkg', file)
    cb(null, file.fieldname + '-' + Date.now())
  },
})

const upload = multer({ storage: storage })

router.post('/new', upload.single('file'), async (req, res) => {
  console.log(req.body, 'REQ BODY'),
    console.log(req.file, req.files, 'REQ FILE'),
    console.log(req.session.userId, 'USERID')
  // const { cords, title, desc, url} = req.body
  // const newTags = await Geotags.create({
  //   geotags_title: title,
  //   latitude: cords.lat,
  //   longitude: cords.lon,
  //   description: desc,
  //   url : url,
  //   approved: false,
  //   user_id : 1

  //   });
  // console.log(newTags);
  // res.json(newTags);
})

module.exports = router
