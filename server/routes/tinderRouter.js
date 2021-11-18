const router = require("express").Router();
const { Animal, Breed, Type, User, Like } = require("../src/db/models");
const Animals = require("../src/DTO/AnimalsClass");
const Likes = require("../src/DTO/Likes");

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
  const allLike = await Like.findAll(requestForLikes);
  const allLikeFromBack = allLike.map((el) => new Likes(el));
  res.json(allLikeFromBack);
});

module.exports = router;

const requestForLikes = {
  include: [
    {
      model: Animal,
      include: [
        { model: User, attributes: ["login"] },
        { model: Breed, attributes: ["breed_title"] },
        { model: Type, attributes: ["type_title"] },
      ],
    },
    User,
  ],
  attributes: ["id", "animal_id", "user_id", "createdAt", "updatedAt"],
};
