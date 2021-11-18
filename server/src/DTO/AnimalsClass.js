class Animals {
  constructor(Obj) {
    this.id = Obj.id;
    this.name = Obj.name;
    this.sex = Obj.sex;
    this.desc = Obj.desc;
    this.url = Obj.url;
    this.breed = Obj.Breed.breed_title;
    this.type = Obj.Type.type_title;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
    this.login = Obj.User.login;
  }
}

module.exports = Animals;
