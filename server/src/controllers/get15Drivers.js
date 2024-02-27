const axios = require('axios');

const get15Drivers = async (req, res) => {
    try {
        const { name } = req.query;

        const response = await axios.get(`http://localhost:5000/drivers`);

        const filteredDrivers = response.data.filter(driver =>
            driver.name.forename.toLowerCase().includes(name.toLowerCase()) ||
            driver.name.surname.toLowerCase().includes(name.toLowerCase())
        );

        const first15Drivers = filteredDrivers.slice(0, 15);

        if (first15Drivers.length === 0) {
            return res.status(404).json({ message: 'No se encontraron conductores con ese nombre.' });
        }
        res.status(200).json(first15Drivers)
    } catch (error) {
        console.error('Error al buscar conductores por nombre en la API:', error)
        res.status(500).json({ message: 'Error en el servidor al buscar conductores.' });
    }
};

module.exports = get15Drivers;