const router = require("express").Router();
const { Good, Category, User } = require("../src/db/models");
const Goods = require("../src/DTO/Goods");

router.route("/").get(async (req, res) => {
  try {
    const allCategoryFromBack = await Category.findAll();
    const allGoodsNonShuffle = await Good.findAll({
      include: [Category, User],
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

module.exports = router;

const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};
