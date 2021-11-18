const router = require("express").Router();
const { Animal, Breed, Type, User, Like } = require("../src/db/models");
const Animals = require("../src/DTO/AnimalsClass");

router.route("/").get(async (req, res) => {
  try {
    const allBreedFromBack = await Breed.findAll();
    const allTypeFromBack = await Type.findAll();
    const allAnimals = await Animal.findAll({
      include: [Breed, Type, User],
    });
    const allAnimalsFromBack = allAnimals.map((el) => new Animals(el));
    res.json({ allAnimalsFromBack, allBreedFromBack, allTypeFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});
router
  .route("/new")
  .get(async (req, res) => {
    try {
      const allBreedFromBack = await Breed.findAll();
      const allTypeFromBack = await Type.findAll();
      res.json({ allBreedFromBack, allTypeFromBack });
    } catch (err) {
      res.sendStatus(501);
    }
  })
  .post(async (req, res) => {
    try {
      const newAnimalFromFront = req.body;
      const newAnimal = await Animal.create(newAnimalFromFront);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(501);
    }
  });

router.route("/like").get(async (req, res) => {
  const allLike = await Like.findAll();
  console.log(allLike);
});

module.exports = router;
