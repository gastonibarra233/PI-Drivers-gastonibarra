const axios = require('axios')

const getDriverById = async (req, res) => {    
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:5000/drivers/${id}`)
        const driver = response.data;
        // console.log(driver)

        const { number, name, image, dob, teams } = driver;
        const driverDetail = { //construyo el objeto de respuesta
            id: driver.id,
            number,
            name: `${name.forename} ${name.surname}`,
            image: image.url,
            dateOfBirth:dob,
            teams //agrego los equipos
        }

        if (!driver) { //verifico si existe el conductor
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }

        res.status(200).json(driverDetail); //envía la respuesta con el detalle del conductor
    } catch (error) {
        console.error('Error al obtener el detalle del conductor:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = getDriverById;