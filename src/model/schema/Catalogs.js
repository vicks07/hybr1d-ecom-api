const { sequelize, Model, DataTypes } = require("../../core/database");

class Catalogs extends Model {}
Catalogs.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    seller: DataTypes.UUID,
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
