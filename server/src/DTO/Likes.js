class Likes {
  constructor(Obj) {
    this.id = Obj.id;
    //кто лайкнул
    this.animal_id = Obj.animal_id;
    this.user_id = Obj.user_id;
    this.whoLiked = Obj.User.login;
    this.whoLiked_id = Obj.User.id;

    //инфа о  том кто лайкнул
    this.user_first_name = Obj.User.UserInfo.first_name;
    this.user_last_name = Obj.User.UserInfo.last_name;
    this.user_email = Obj.User.UserInfo.email;
    this.user_mobile_phone = Obj.User.UserInfo.mobile_phone;
    this.user_avatar = Obj.User.UserInfo.avatar;
    //инфа о приюте
    this.shelter_title = Obj.Animal.User.UserInfo.first_name;
    this.shelter_adress = Obj.Animal.User.UserInfo.last_name;
    this.shelter_email = Obj.Animal.User.UserInfo.email;
    this.shelter_mobile_phone = Obj.Animal.User.UserInfo.mobile_phone;
    this.shelter_avatar = Obj.Animal.User.UserInfo.avatar;
    //владелец животного которое лайкнули
    this.authorAnimal = Obj.Animal.User.login;
    this.authorAnimal_type = Obj.Animal.User.userType;
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
