import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../Navbar/NavBar";
import Preguntas from "../Preguntas/Preguntas";


//RELACIONADO AL PRIMER H1

const ContainerH1 = styled.div`
  padding: 0.6rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const H1Practica = styled.h1`
  margin: auto 0;
  font-size: 20px;
`;

//RELACIONADO A LOS BOTONES Y SUS CONTAINERS

const ContainerBtnHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ContainerimgIndividual = styled.div`
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

const ImagenesHome = styled.img`
  display: flex;
  width: 130px;
`;

const BtnImg = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
`;

const Home = () => {
  const [Pagina, setPagina] = useState();

  useEffect(() => {
    
  }, [setPagina]);

  return (
    <div>
      <ContainerH1>
        <H1Practica>
          {" "}
          Practica tus conocimientos en la categoria que prefieras{" "}
        </H1Practica>
      </ContainerH1>

      <ContainerBtnHome>
        <ContainerimgIndividual>
          <Link to="/Preguntas/html">
          <BtnImg>
            <ImagenesHome src="https://res.cloudinary.com/aca-geek/image/upload/v1643386934/Ellipse_9_gjjbzg.png" />
          </BtnImg>
          </Link>
          
          <label>HMTL</label>
        </ContainerimgIndividual>

        <ContainerimgIndividual>
        <Link to="/Preguntas/js">
          <BtnImg onClick={() => setPagina("js")}>
            <ImagenesHome src="https://res.cloudinary.com/aca-geek/image/upload/v1643386934/Ellipse_9_2_epmeat.png" />
          </BtnImg>
        </Link>
        <label>JS</label>

        </ContainerimgIndividual>

        <ContainerimgIndividual>
          <Link to="/Pregunta/css">
          <BtnImg onClick={() => setPagina("css")}>
            <ImagenesHome src="https://res.cloudinary.com/aca-geek/image/upload/v1643386934/Ellipse_9_1_rfdihn.png" />
          </BtnImg>
          </Link>
          <label>CSS</label>

        </ContainerimgIndividual>
        
      </ContainerBtnHome>

      <Navbar />
    </div>

  );
};

export default Home;
