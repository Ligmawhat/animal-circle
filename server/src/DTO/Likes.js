class Likes {
  constructor(Obj) {
    this.id = Obj.id;
    this.whoLiked = Obj.User.login;
    this.authorAnimal = Obj.Animal.User.login;
    this.type = Obj.Animal.Type.type_title;
    this.breed = Obj.Animal.Breed.breed_title;
    this.name = Obj.Animal.name;
    this.sex = Obj.Animal.sex;
    this.desc = Obj.Animal.desc;
    this.url = Obj.Animal.url;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
  }
}

module.exports = Likes;
