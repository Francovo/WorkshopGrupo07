import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { urlPreguntas } from '../../helpers/urlPreguntas';
import { useParams } from 'react-router-dom';

const Preguntas = () => {

  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState();

  const getData = () => {
    axios.get(urlPreguntas)
    .then(response => {
     return(
       response.data
     )
    })
  }

  const Params = useParams()
  const {Tipo} = Params;

  useEffect(() => {
    getData();
    TraerData();
  }, []);

  const TraerData = () => {
    const NuevaData = (Data.find(infoLogin => infoLogin.Tipo === Tipo));
    if (NuevaData) {
      setData2(NuevaData)
    }
  }


  return (
    <>
    <h1>{Data[0]?.preguntas[0].preguntahtml}</h1>
      {/* {Data&&Data.map((Pregunta) => (
        <div>
            <h1>{Pregunta.preguntahtml}</h1>
        </div>
      ))} */}
    </>
  )
};

export default Preguntas;
