const router = require("express").Router();
const e = require("connect-flash");
const { Animal, Breed, Type } = require("../src/db/models");
const Animals = require("../src/DTO/AnimalsClass");

router.route("/").get(async (req, res) => {
  const allAnimalsOld = await Animal.findAll({
    include: [Breed, Type],
  });
  // const allAnimal = allAnimalOld.map((el) => {
  //   return {
  //     name: el.name,
  //     sex: el.sex,
  //     desc: el.desc,
  //     url: el.url,
  //     breed: el.Breed.breed_title,
  //     type: el.Type.type_title,
  //     createdAt: el.createdAt,
  //     updatedAt: el.updatedAt,
  //   };
  // });
  const allAnimals = allAnimalsOld.map((el) => new Animals(el));
  console.log(allAnimals);
  res.json(allAnimals);
});

module.exports = router;
