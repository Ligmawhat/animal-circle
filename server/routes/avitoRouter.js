const router = require("express").Router();
const { Good, Category, User } = require("../src/db/models");
const Goods = require("../src/DTO/Goods");

router.route("/").get(async (req, res) => {
  try {
    const allCategoryFromBack = await Category.findAll();
    const allGoodsNonShuffle = await Good.findAll({
      include: [
        { model: Category, attributes: ["category_title"] },
        { model: User, attributes: ["login"] },
      ],
    });
    const allGoods = allGoodsNonShuffle.map((el) => new Goods(el));
    let allGoodsFromBack = shuffle(allGoods);
    res.json({ allCategoryFromBack, allGoodsFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const allGoodsForOneCategory = await Good.findAll({
      where: { category_id: id },
      include: [Category, User],
    });
    const allGoodsForOneCategoryFromBack = allGoodsForOneCategory.map((el) => new Goods(el));
    res.json({ allGoodsForOneCategoryFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});

// router.route("/new").post(async (req, res) => {
//   try {
//     const { good_title, description, url, price, category, id } = req.body;
//     const newGood = await Good.create({
//       good_title: good_title,
//       description: description,
//       url: url,
//       price: +price,
//       category_id: +category,
//       user_id: +id,
//     });
//     const allMyGoods = await Good.findAll({
//       include: [
//         { model: Category, attributes: ["category_title"] },
//         { model: User, attributes: ["login"] },
//       ],
//       where: { user_id: id },
//       order: [["updatedAt", "DESC"]],
//     });
//     const allMyGoodsFromBack = allMyGoods.map((el) => new Goods(el));
//     console.log(good_title, description, url, price, category, id);
//     res.json(allMyGoodsFromBack);
//   } catch (err) {
//     res.sendStatus(500);
//   }
// });

router.post("/new", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let sampleFile = req.files.file;
    sampleFile.name = Date.now() + ".jpg";
    let uploadPath = `${process.env.PWD}/public/items/${sampleFile.name}`;
    console.log(uploadPath, "UPLOAD AVITO");
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
console.log(req.body, 'REQ BODY AVITO')
    const { good_title, description, price, category, id } = req.body
    const newItem = await Good.create({
      good_title: good_title,
      description: description,
      url: sampleFile.name,
      price: price,
      category_id: category,
      user_id: req.session.userId,
    });
    console.log(newItem, ' NEW ITEM ADD')
    res.json(newItem);
  } catch (err) {
    res.sendStatus(501);
  }
});

// .delete(async (req, res) => {
//   await Good.destroy({ where: { id: req.body.id } });
// });

router.route("/myGoods/:id").get(async (req, res) => {
  try {
    const allMyGoods = await Good.findAll({
      include: [
        { model: Category, attributes: ["category_title"] },
        { model: User, attributes: ["login"] },
      ],
      where: { user_id: req.params.id },
      order: [["updatedAt", "DESC"]],
    });
    const allMyGoodsFromBack = allMyGoods.map((el) => new Goods(el));
    console.log();
    res.json(allMyGoodsFromBack);
  } catch (err) {
    res.sendStatus(500);
  }
});
module.exports = router;

const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};
