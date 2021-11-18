"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Category }) {
      this.belongsTo(User, { foreignKey: "user_id" }); //владелец товара
      this.belongsTo(Category, { foreignKey: "category_id" }); //категория товара
    }
  }
  Good.init(
    {
      good_title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      url: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      category_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Good",
    }
  );
  return Good;
};
