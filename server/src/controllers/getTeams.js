const axios = require("axios");
const { Team } = require("../db"); // Importa el modelo de equipo de la base de datos

// Ruta para obtener todos los equipos
const getTeams = async (req, res) => {
  try {
    let teams = [];

    // Verificar si la base de datos está vacía
    const databaseTeamsCount = await Team.count();
    if (databaseTeamsCount === 0) {
      // Si la base de datos está vacía, obtener equipos de la API y guardarlos en la base de datos
      const response = await axios.get("http://localhost:5000/teams");
      teams = response.data;

      // Guardar los equipos en la base de datos
      await Team.bulkCreate(teams);
    } else {
      // Si la base de datos no está vacía, obtener los equipos de la base de datos
      teams = await Team.findAll();
    }

    res.status(200).json(teams);
  } catch (error) {
    console.error("Error al obtener los equipos:", error);
    res
      .status(500)
      .json({ message: "Error interno del servidor al obtener los equipos." });
  }
};

module.exports = getTeams;
