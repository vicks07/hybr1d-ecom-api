const { sequelize, Model, DataTypes } = require("../../core/database");

class UserTypes extends Model {}
UserTypes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    tableName: "usertypes",
    modelName: "usertypes",
    timestamps: true,
    underscored: true,
  }
);

module.exports = UserTypes;
