const { sequelize, Model, DataTypes } = require("../../core/database");
const { uuid } = require("../../helpers/utility");

class Tokens extends Model {}
Tokens.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid(),
    },
    token: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "tokens",
    modelName: "tokens",
    timestamps: true,
    underscored: true,
  }
);

module.exports = Tokens;
