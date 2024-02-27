import { useState } from "react";
import validation from "./validation";

function Form() {
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (evento) => {
        setErrors(validation({...userData, [evento.target.name]: evento.target.value}))
        setUserData({...userData, [evento.target.name]: evento.target.value})
    }

    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="Ingrese un email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Contraseña:
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    );
}

export default Form;
