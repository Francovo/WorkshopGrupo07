import React, { useState } from 'react';
import axios from "axios"
import { urlUsuarios } from '../../helpers/urlUsuarios'; 

const Registro = () => {

    const [usuario, setUsuario] = useState({
        Usuario: "",
        Contraseña: ""
    });

    const {Usuario, Contraseña} = usuario;

    const postData = () => {
        axios.post(urlUsuarios,usuario)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    const handleChanged = ({target}) => {
        setUsuario({
          ...usuario,
          [target.name]: target.value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return(
    <div>
    <form id="formulario" onSubmit={handleSubmit}>
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
    </form>
  </div>
  )
};

export default Registro;
