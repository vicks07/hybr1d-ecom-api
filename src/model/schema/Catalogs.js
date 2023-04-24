const { sequelize, Model, DataTypes } = require("../../core/database");
const { uuid } = require("../../helpers/utility");

class Catalogs extends Model {}
Catalogs.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid(),
    },
    name: DataTypes.STRING,
    seller: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "catalogs",
    modelName: "catalogs",
    timestamps: true,
  }
);

module.exports = Catalogs;
