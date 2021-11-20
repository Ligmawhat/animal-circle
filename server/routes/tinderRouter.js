const router = require("express").Router();
const { Animal, Breed, Type, User, Like, Sex } = require("../src/db/models");
const Animals = require("../src/DTO/AnimalsClass");
const Likes = require("../src/DTO/Likes");

router.route("/").get(async (req, res) => {
  try {
    const allBreedFromBack = await Breed.findAll();
    const allSexFromBack = await Sex.findAll();

    const allAnimals = await Animal.findAll({
      include: [
        { model: User, attributes: ["login"] },
        { model: Breed, attributes: ["breed_title"] },
        { model: Type, attributes: ["type_title"] },
        { model: Sex, attributes: ["sex"] },
      ],
    });

    const allAnimalsFromBack = allAnimals.map((el) => new Animals(el));
    console.log(allAnimalsFromBack);
    res.json({ allAnimalsFromBack, allBreedFromBack, allSexFromBack });
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
      await Animal.create(newAnimalFromFront);
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

router.route("/sexBreed").post(async (req, res) => {
  const { sex, breed } = req.body;
  const allDogsForSexBreedNonSort = Animal.findAll({
    where: { sex: sex, breed: breed },
    include: [Breed, Type, User],
  });
  const allDogsForSexBreed = allDogsForSexBreedNonSort.map((el) => new Animals(el));
  res.json(allDogsForSexBreed);
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
