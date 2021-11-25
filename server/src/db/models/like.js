"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Animal }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Animal, { foreignKey: "animal_id" });
    }
  }
  Like.init(
    {
      animal_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      status: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
