const router = require("express").Router();
const { Animal, Breed, Type, User, Like, Sex } = require("../src/db/models");
const AnimalsClass = require("../src/DTO/AnimalsClass");
const Likes = require("../src/DTO/Likes");

router.route("/").get(async (req, res) => {
  try {
    const allBreedFromBack = await Breed.findAll({ attributes: ["id", "breed_title"] });
    const allSexFromBack = await Sex.findAll({ attributes: ["id", "sex"] });
    const allDog = await Animal.findAll({
      include: [
        { model: User, attributes: ["login"] },
        { model: Breed, attributes: ["breed_title"] },
        { model: Type, attributes: ["type_title"] },
        { model: Sex, attributes: ["sex"] },
      ],
    });
    // console.log(allDog[0], '<=-------ALLDOG')
    let allDogFromBack = allDog.map(dog => new AnimalsClass(dog));
    console.log(allDogFromBack[0],'<--------FROMBACK')
    res.json({ allDogFromBack, allBreedFromBack, allSexFromBack });

  } catch (err) {
    res.sendStatus(501);
  }
});

router
  .route("/new")
  // .get(async (req, res) => {
  //   try {
  //     const allBreedFromBack = await Breed.findAll();
  //     const allTypeFromBack = await Type.findAll();
  //     res.json({ allBreedFromBack, allTypeFromBack });
  //   } catch (err) {
  //     res.sendStatus(501);
  //   }
  // })
  .post(async (req, res) => {
    try {
      const { name, desc, url, onebreed, onesex, id } = req.body;
      console.log(name, desc, url, onebreed, onesex, id);
      await Animal.create({
        name: name,
        sex_id: onesex,
        desc: desc,
        url: url,
        user_id: +id,
        type_id: 1,
        breed_id: onebreed,
      });
      const allMyDogs = await Animal.findAll({
        include: [
          { model: User, attributes: ["login"] },
          { model: Breed, attributes: ["breed_title"] },
          { model: Type, attributes: ["type_title"] },
          { model: Sex, attributes: ["sex"] },
        ],
        where: { user_id: id },
        order: [["updatedAt", "DESC"]],
      });
      const allMyDogsFromBack = allMyDogs.map((el) => new Animals(el));
      res.json(allMyDogsFromBack);
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
  const allDogsForSexBreedNonSort = await Animal.findAll({
    where: { sex: sex, breed: breed },
    include: [Breed, Type, User],
  });
  const allDogsForSexBreed = allDogsForSexBreedNonSort.map((el) => new Animals(el));
  res.json(allDogsForSexBreed);
});

router.route('/likedog').post(async (req, res) => {
  const newLike = await Like.create({
    user_id: req.session.userId,
    animal_id: req.body.id
  })
    res.sendStatus(200);
})

router.route("/myDogs/:id").get(async (req, res) => {
  const allMyDogs = await Animal.findAll({
    include: [
      { model: User, attributes: ["login"] },
      { model: Breed, attributes: ["breed_title"] },
      { model: Type, attributes: ["type_title"] },
      { model: Sex, attributes: ["sex"] },
    ],
    where: { user_id: req.params.id },
    order: [["updatedAt", "DESC"]],
  });
  const allMyDogsFromBack = allMyDogs.map((el) => new Animals(el));
  res.json(allMyDogsFromBack);
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
