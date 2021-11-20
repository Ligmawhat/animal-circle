"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Breed, Type, Sex }) {
      this.belongsTo(User, { foreignKey: "user_id" }); //владелец животного
      this.belongsTo(Breed, { foreignKey: "breed_id" }); //порода животного
      this.belongsTo(Type, { foreignKey: "type_id" }); //вид животного
      this.belongsToMany(User, { through: "Like", foreignKey: "animal_id" }); //для понравившихся животных
      this.belongsTo(Sex, { foreignKey: "sex_id" }); //пол животного
    }
  }
  Animal.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.TEXT, allowNull: false },
      url: { type: DataTypes.TEXT, allowNull: false },
      sex_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      type_id: { type: DataTypes.INTEGER, allowNull: false },
      breed_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
