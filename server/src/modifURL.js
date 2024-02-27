// const axios = require("axios");

// // URL de la API
// const API_URL = "http://localhost:5000/drivers";

// // Hacer una solicitud GET a la API
// axios
//   .get(`${API_URL}`)
//   .then((response) => {
//     // Acceder a los datos de los conductores
//     const drivers = response.data;

//     // Modificar las propiedades de los conductores según tus necesidades
//     drivers.forEach((driver) => {
//       // Por ejemplo, cambiar el nombre de la propiedad 'name' a 'driverName'
//     //   driver.driverName = driver.name;
//       delete driver.driverRef; // Eliminar la propiedad 'driverRef'
//     });

//     // Aquí puedes hacer lo que necesites con los datos modificados
//     console.log(drivers);
//   })
//   .catch((error) => {
//     console.error("Error al obtener los datos de los conductores:", error);
//   });
