class Goods {
  constructor(Obj) {
    this.id = Obj.id;
    this.title = Obj.good_title;
    this.description = Obj.description;
    this.url = Obj.url;
    this.price = Obj.price;
    this.category = Obj.Category.category_title;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
    this.login = Obj.User.login;
  }
}

module.exports = Goods;
