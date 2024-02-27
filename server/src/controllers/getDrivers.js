const axios = require('axios')

const getDrivers = async (req, res) => {
  //ruta GET para obtener todos los conductores
  try {
    const response = await axios.get('http://localhost:5000/drivers');
    // console.log(response)
    const drivers = response.data;

    console.log('Datos de los corredores de F1:', drivers);

    res.status(200).json(drivers);
  } catch (error) {
    console.error('Error al obtener los conductores:', error);
    res.status(500).json({ message: 'Error intento del servidor' });
  }
}
module.exports = getDrivers;