import axios from "axios";
import React, { useState } from "react";
import { urlUsuarios } from "../../helpers/urlUsuarios";


const Login = () => {

  const [DataUsu, setDataUsu] = useState([]);


  const getData = () => {
    axios.get(urlUsuarios)
    .then(response => {
      
    })
  }

  const handleChanged = ({target}) => {
    setDataUsu({
      ...DataUsu,
      [target.name]: target.value
    })
  }

  return (
    <div>
    {/* <form id="formulario" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <hr />
      <div>
        <label>Ingrese sus datos</label>
        <input
        placeholder='Usuario'
          id="inputUsuario"
          name="Usuario"
          value={Usuario}
          onChange={handleChanged}
        />
      </div>
      <div>
        <input
        placeholder="Contraseña"
          id="inputContraseña"
          name="Contraseña"
          value={Contraseña}
          onChange={handleChanged}
        />
      </div>
      <div>
        <button onClick={() => postData()} id="btnRegistro">
          Enviar
        </button>
      </div>
    </form> */}
  </div>
  );
};

export default Login;
