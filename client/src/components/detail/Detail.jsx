import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [driver, setDriver] = useState({});

  const URL = "http://localhost:5000/drivers/";
    useEffect(() => {
        axios
          .get(`${URL}${id}`)
          .then(({ data }) => {
            if (data.name) {
              setDriver(data);
              }
          })
          .catch(() => alert("No hay personajes con ese ID!"));
  }, [id]);
    return <div>
        <h2>Name: {driver.name?.forename} {driver.name?.surname}</h2>
        <h4>Date of birth: {driver.dob} </h4>
        <h4>Nationality: {driver.nationality}</h4>
        <h4>Description: {driver.description}</h4>
        <h4>Teams: {driver.teams}</h4>
        <img src={driver.image?.url} alt={driver.name} />
  </div>;
}

export default Detail;
