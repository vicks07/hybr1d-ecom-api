const { sequelize, Model, DataTypes } = require("../../core/database");

class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "users",
    timestamps: true,
  }
);

Users.sync()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Users;
