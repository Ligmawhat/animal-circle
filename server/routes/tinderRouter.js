const router = require("express").Router();
const { Animal, Breed, Type, User, Like, Sex, UserInfo } = require("../src/db/models");
const Animals = require("../src/DTO/AnimalsClass");
const Likes = require("../src/DTO/Likes");

router.route("/").get(async (req, res) => {
  try {
    const allBreedFromBack = await Breed.findAll({
      attributes: ["id", "breed_title"],
    });
    const allSexFromBack = await Sex.findAll({ attributes: ["id", "sex"] });
    const allDog = await Animal.findAll({
      include: [
        { model: User, attributes: ["login"] },
        { model: Breed, attributes: ["breed_title"] },
        { model: Type, attributes: ["type_title"] },
        { model: Sex, attributes: ["sex"] },
      ],
    });
    let allDogFromBack = allDog.map((dog) => new Animals(dog));
    res.json({ allDogFromBack, allBreedFromBack, allSexFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});

// router
//   .route("/new")
//   // .get(async (req, res) => {
//   //   try {
//   //     const allBreedFromBack = await Breed.findAll();
//   //     const allTypeFromBack = await Type.findAll();
//   //     res.json({ allBreedFromBack, allTypeFromBack });
//   //   } catch (err) {
//   //     res.sendStatus(501);
//   //   }
//   // })
//   .post(async (req, res) => {
//     try {
//       const { name, desc, url, onebreed, onesex, id } = req.body;
//       console.log(name, desc, url, onebreed, onesex, id);
//       await Animal.create({
//         name: name,
//         sex_id: onesex,
//         desc: desc,
//         url: url,
//         user_id: +id,
//         type_id: 1,
//         breed_id: onebreed,
//       });
//       const allMyDogs = await Animal.findAll({
//         include: [
//           { model: User, attributes: ["login"] },
//           { model: Breed, attributes: ["breed_title"] },
//           { model: Type, attributes: ["type_title"] },
//           { model: Sex, attributes: ["sex"] },
//         ],
//         where: { user_id: id },
//         order: [["updatedAt", "DESC"]],
//       });
//       const allMyDogsFromBack = allMyDogs.map((el) => new Animals(el));
//       res.json(allMyDogsFromBack);
//     } catch (err) {
//       res.sendStatus(501);
//     }
//   });

router.post("/new", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let sampleFile = req.files.file;
    sampleFile.name = Date.now() + ".jpg";
    let uploadPath = `${process.env.PWD}/public/dogs/${sampleFile.name}`;
    console.log(uploadPath, "UPLOAD DOGS");
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
    console.log(req.body, "REQ BODY DOGS");
    const { name, desc, onebreed, onesex, id } = req.body;
    const newDog = await Animal.create({
      name: name,
      sex_id: +onesex,
      desc: desc,
      url: sampleFile.name,
      user_id: +id,
      type_id: 1,
      breed_id: +onebreed,
    });
    console.log(newDog, " NEW ITEM ADD");
    res.json(newDog);
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route("/myDogs/:id").get(async (req, res) => {
  try {
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
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route("/like/:id").get(async (req, res) => {
  const allLike = await Like.findAll(requestForLikes);

  const allLikeFromBackNonFiltered = allLike.map((el) => new Likes(el));

  const oneUser = await User.findOne({ where: { id: +req.params.id } });
  console.log(allLikeFromBackNonFiltered[0]);

  const allLikeFromBack = allLikeFromBackNonFiltered.filter((el) => {
    if (oneUser.userType === "user") {
      return el.whoLiked_id === +req.params.id;
    } else {
      return el.authorAnimal_id === +req.params.id;
    }
  });
  console.log(allLikeFromBack);

  res.json({ allLikeFromBack });
});

router.route("/sexBreed").post(async (req, res) => {
  try {
    const { sex, breed } = req.body;
    const allDogsForSexBreedNonSort = await Animal.findAll({
      where: { sex: sex, breed: breed },
      include: [Breed, Type, User],
    });
    const allDogsForSexBreed = allDogsForSexBreedNonSort.map((el) => new Animals(el));
    res.json(allDogsForSexBreed);
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route("/likedog").post(async (req, res) => {
  try {
    console.log(req.body);
    const newLike = await Like.create({
      user_id: req.session.userId,
      animal_id: req.body.id,
      status: false,
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route('/changestatus').post(async (req, res) => {
  console.log(req.body, 'bodyreq');
  try {
    const changeStatus = await Like.update({status: true}, {where: {id: req.body.id}, returning: true})
    console.log(changeStatus, 'statusChange');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
})

const requestForLikes = {
  include: [
    {
      model: Animal,
      include: [
        {
          model: User,
          include: { model: UserInfo },
          attributes: ["login", "id", "userType"],
        },
        { model: Breed, attributes: ["breed_title"] },
        { model: Type, attributes: ["type_title"] },
        { model: Sex, attributes: ["sex"] },
      ],
    },
    { model: User, attributes: ["login", "id", "userType"], include: { model: UserInfo } },
  ],
  attributes: ["id", "animal_id", "user_id", "createdAt", "updatedAt", "status"],
};

module.exports = router;
