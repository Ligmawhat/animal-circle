"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Breed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: "breed_id" });
    }
  }
  Breed.init(
    {
      breed_title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Breed",
    }
  );
  return Breed;
};
