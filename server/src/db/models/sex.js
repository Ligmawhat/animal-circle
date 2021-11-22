"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: "sex_id" }); //тип животного
    }
  }
  Sex.init(
    {
      sex: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Sex",
    }
  );
  return Sex;
};
