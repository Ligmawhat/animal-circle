const router = require("express").Router();
const { Good, Category, User } = require("../src/db/models");
const Goods = require("../src/DTO/Goods");

router.route("/").get(async (req, res) => {
  try {
    const allCategoryFromBack = await Category.findAll();
    const allGoods = await Good.findAll({
      include: [Category, User],
    });
    const allAGoodsFromBack = allGoods.map((el) => new Goods(el));
    console.log(allAGoodsFromBack);
    res.json({ allCategoryFromBack, allAGoodsFromBack });
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
    console.log(allGoodsForOneCategoryFromBack);
    res.json({ allGoodsForOneCategoryFromBack });
  } catch (err) {
    res.sendStatus(501);
  }
});

module.exports = router;
