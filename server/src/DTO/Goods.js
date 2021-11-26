class Goods {
  constructor(Obj) {
    this.id = Obj.id;
    this.category = Obj.Category.category_title;
    this.category_id = Obj.Category.id;

    this.title = Obj.good_title;
    this.description = Obj.description;
    this.url = Obj.url;
    this.price = Obj.price;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
    // информация о юзере
    this.id = Obj.User.id;
    this.login = Obj.User.login;
    this.userType = Obj.User.userType;
    //полная инфа о владельце товара
    this.user_first_name = Obj.User.UserInfo.first_name;
    this.user_last_name = Obj.User.UserInfo.last_name;
    this.user_email = Obj.User.UserInfo.email;
    this.user_avatar = Obj.User.UserInfo.avatar;
    this.user_mobile_phone = Obj.User.UserInfo.mobile_phone;
  }
}

module.exports = Goods;
