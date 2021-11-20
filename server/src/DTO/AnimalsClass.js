class Animals {
  constructor(Obj) {
    this.id = Obj.id;
    this.type = Obj.Type.type_title;
    this.breed = Obj.Breed.breed_title;
    this.name = Obj.name;
    this.sex = Obj.Sex.sex;
    this.sex_id = Obj.sex_id;
    this.desc = Obj.desc;
    this.url = Obj.url;
    this.createdAt = Obj.createdAt;
    this.updatedAt = Obj.updatedAt;
    this.login = Obj.User.login;
  }
}

module.exports = Animals;
