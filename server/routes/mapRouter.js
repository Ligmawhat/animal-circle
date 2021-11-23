const router = require('express').Router()


const { Good, Category, User, Geotags } = require('../src/db/models')

router.post('/new', async (req, res) => {
  
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }
  let sampleFile = req.files.file
  sampleFile.name = Date.now()+'.jpg'
  let uploadPath = `${process.env.PWD}/public/uploads/${sampleFile.name}`
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err)
  })
  console.log(req.session.userId, 'USERID MAP ROUTER')
  console.log(req.session, 'REQ SESSION MAP ROUTER')

  
  const { cordsZero, cordsOne, title, desc} = req.body
  console.log(cordsZero, cordsOne, title, desc, 'REQ BODY')
  const newTags = await Geotags.create({
    geotags_title: title,
    latitude: cordsZero,
    longitude: cordsOne,
    description: desc,
    url : sampleFile.name,
    approved: false,
    user_id : req.session.userId

    });
  console.log(newTags);
  //res.sendStatus(200)
  res.json(newTags);
})

module.exports = router
