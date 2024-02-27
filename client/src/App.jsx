import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx"
import Detail from "./components/detail/Detail.jsx"
import Error404 from "./components/error/Error404.jsx";
import Form from "./components/forms/Form.jsx"

function App() {
  const { pathname } = useLocation()
  const [drivers, setDrivers] = useState([]);

  const URL = "http://localhost:5000/drivers/";

  const onSearch = (id) => {
    axios
      .get(`${URL}${id}`)
      .then(({ data }) => {        
        // console.log(data);
      if(!id) return alert('Ingresa un ID')
        if (drivers.find(driver => driver.id === parseInt(id)))
          return alert(`Ya existe el personaje con el id ${id}`);
        if (data.name) {
          setDrivers([data, ...drivers]);
        }
      })
      .catch(() => alert('No hay personajes con ese ID!'));
  };

  const onClose = (id) => {
    setDrivers(drivers.filter(driver => driver.id !== parseInt(id)))
  }

  const random = () => {
    axios
      .get(URL)
      .then(({ data }) => {
        if (data.length === 0) {
          return alert("No hay personajes disponibles");
        }
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomDriver = data[randomIndex];
        if (drivers.find((driver) => driver.id === randomDriver.id)) {
          return alert(`Ya existe el personaje con el id ${randomDriver.id}`);
        }
        setDrivers([randomDriver, ...drivers]);
      }) 
      .catch(() => alert("No se pudo obtener un personaje aleatorio"));
  };


  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} random={random} />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/home"
          element={<Cards drivers={drivers} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
