const { DataTypes, UUIDV4 } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Driver", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente
      primaryKey: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false      
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};