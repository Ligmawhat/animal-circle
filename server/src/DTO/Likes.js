class Likes {
  constructor(Obj) {
    this.id = Obj.id;
    //кто лайкнул
    this.whoLiked = Obj.User.login;
    this.whoLiked_id = Obj.User.id;
    //инфа о  том кто лайкнул
    this.first_name = Obj.User.UserInfo.first_name;
    this.last_name = Obj.User.UserInfo.last_name;
    this.email = Obj.User.UserInfo.email;
    this.mobile_phone = Obj.User.UserInfo.mobile_phone;
    this.avatar = Obj.User.UserInfo.avatar;
    //владелец животного которое лайкнули
    this.authorAnimal = Obj.Animal.User.login;
    this.authorAnimal_id = Obj.Animal.User.id;
    this.type = Obj.Animal.Type.type_title;
    this.breed = Obj.Animal.Breed.breed_title;
    this.name = Obj.Animal.name;
    this.sex = Obj.Animal.Sex.sex;
    this.desc = Obj.Animal.desc;
    this.url = Obj.Animal.url;
    this.status = Obj.status;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
  }
}

module.exports = Likes;
