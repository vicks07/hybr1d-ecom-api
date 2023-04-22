const { sequelize, Model, DataTypes } = require("../../core/database");

class Catalogs extends Model {}
Catalogs.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    seller: DataTypes.UUIDV4,
    status: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "catalogs",
    modelName: "catalogs",
    timestamps: true,
  }
);

module.exports = Catalogs;
