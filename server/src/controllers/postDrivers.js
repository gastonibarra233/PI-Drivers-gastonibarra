const { Driver, Team } = require("../db"); // Importa los modelos de la base de datos

// Ruta para crear un conductor y relacionarlo con sus equipos
const postDrivers = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
    const {
      name,
      lastName,
      description,
      image,
      nationality,
      birthDate,
      teams,
    } = req.body;

    // Crear el conductor en la base de datos
    const newDriver = await Driver.create({
      name,
      lastName,
      description,
      image,
      nationality,
      birthDate,
    });

    // Relacionar el conductor con sus equipos solicitados
    if (teams && teams.length > 0) {
      for (const teamId of teams) {
        const team = await Team.findByPk(teamId);
        if (team) {
          await newDriver.addTeam(team);
        }
      }
    }

    res.status(201).json(newDriver);
  } catch (error) {
    console.error("Error al crear el conductor:", error);
    res
      .status(500)
      .json({ message: "Error interno del servidor al crear el conductor." });
  }
};

module.exports = postDrivers;
