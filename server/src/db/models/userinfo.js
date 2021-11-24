"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_id" }); //владелец животного
    }
  }
  UserInfo.init(
    {
      email: DataTypes.STRING,
      mobile_phone: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      user_id: { type: DataTypes.INTEGER, unique: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserInfo",
    }
  );
  return UserInfo;
};
