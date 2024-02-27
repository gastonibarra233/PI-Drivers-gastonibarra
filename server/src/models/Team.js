const { DataTypes, UUIDV4 } = require("sequelize");
// const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define("Team", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
