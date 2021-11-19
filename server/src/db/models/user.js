"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal, Good, Geotags }) {
      this.hasMany(Animal, { foreignKey: "user_id" }); //владелец животного
      this.hasMany(Good, { foreignKey: "user_id" }); //владелец товара
      this.belongsToMany(Animal, { through: "Like", foreignKey: "user_id" }); //для понравившихся животных
      this.hasMany(Geotags, { foreignKey: "user_id" }); //владелец метки
    }
  }
  User.init(
    {
      login: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      userType: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
